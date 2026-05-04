#!/usr/bin/env python3
"""
极地新闻自动抓取
每12小时运行，从 RSS 源抓取极地邮轮相关新闻，更新 site_data.json。
纯 Python 标准库，无需 pip install。
"""

import json
import re
import time
import xml.etree.ElementTree as ET
from datetime import datetime
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError

ROOT = Path(__file__).parent.parent
SITE_DATA = ROOT / "docs" / "data" / "site_data.json"

# RSS 源列表
RSS_FEEDS = [
    "https://cruiseindustrynews.com/feed/",
    "https://www.seatrade-cruise.com/rss.xml",
    "https://www.travelpulse.com/feed",
]

# 极地关键词（英文 + 公司名 + 中文）
POLAR_KEYWORDS = [
    "antarctic", "arctic", "polar", "expedition cruise",
    "svalbard", "greenland", "ushuaia", "drake passage",
    "quark", "aurora expedition", "oceanwide", "hurtigruten",
    "ponant", "silversea", "seabourn", "atlas ocean",
    "swan hellenic", "viking expedition", "hapag-lloyd",
    "lindblad", "national geographic expedition",
    "scenic eclipse", "poseidon expedition", "heritage expedition",
    "antarctica21", "g adventures", "intrepid", "albatros",
    "南极", "北极", "极地邮轮", "探险邮轮", "夸克", "庞洛", "银海",
]

# 已有新闻标题（去重用）
EXISTING_TITLES = set()
EXISTING_CACHE = ROOT / "data" / ".news_cache.json"


def load_existing():
    """加载已有新闻标题做去重"""
    global EXISTING_TITLES
    titles = set()
    # 从当前数据加载
    if SITE_DATA.exists():
        with open(SITE_DATA) as f:
            site = json.load(f)
        for n in site.get("news", []):
            titles.add(n.get("title", "").strip().lower()[:60])
    # 从缓存加载
    if EXISTING_CACHE.exists():
        with open(EXISTING_CACHE) as f:
            cache = json.load(f)
        for t in cache.get("titles", []):
            titles.add(t)
    EXISTING_TITLES = titles
    return len(titles)


def save_cache():
    """保存标题缓存"""
    cache = {"titles": list(EXISTING_TITLES), "updated": datetime.now().isoformat()}
    with open(EXISTING_CACHE, "w") as f:
        json.dump(cache, f)


def fetch_feed(url):
    """获取 RSS feed"""
    try:
        req = Request(url, headers={"User-Agent": "PolarTicketBot/1.0"})
        with urlopen(req, timeout=15) as resp:
            return resp.read().decode("utf-8", errors="replace")
    except Exception as e:
        print(f"  ⚠️ {url[:50]}... 失败: {e}")
        return None


def parse_rss(xml_text):
    """解析 RSS/Atom XML，返回文章列表"""
    articles = []
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError:
        return articles

    # RSS 2.0
    for item in root.iter("item"):
        title = item.findtext("title", "")
        link = item.findtext("link", "")
        desc = item.findtext("description", "") or item.findtext("summary", "")
        pubdate = item.findtext("pubDate", "") or item.findtext("published", "")
        articles.append({"title": title.strip(), "link": link.strip(), "desc": _clean_html(desc)[:200], "date": _parse_date(pubdate)})

    # Atom
    ns = {"atom": "http://www.w3.org/2005/Atom"}
    for entry in root.findall(".//atom:entry", ns) or root.findall(".//{http://www.w3.org/2005/Atom}entry"):
        title = entry.findtext("atom:title", "", ns) or entry.findtext("{http://www.w3.org/2005/Atom}title", "")
        link_el = entry.find("atom:link", ns) or entry.find("{http://www.w3.org/2005/Atom}link")
        link = link_el.get("href", "") if link_el is not None else ""
        desc = entry.findtext("atom:summary", "", ns) or entry.findtext("{http://www.w3.org/2005/Atom}summary", "")
        pubdate = entry.findtext("atom:published", "", ns) or entry.findtext("{http://www.w3.org/2005/Atom}published", "")
        articles.append({"title": title.strip(), "link": link.strip(), "desc": _clean_html(desc)[:200], "date": _parse_date(pubdate)})

    return articles


def _clean_html(text):
    """去除 HTML 标签"""
    return re.sub(r"<[^>]+>", " ", text or "").strip()


def _parse_date(text):
    """解析日期为 YYYY-MM-DD"""
    if not text:
        return datetime.now().strftime("%Y-%m-%d")
    for fmt in ["%a, %d %b %Y", "%Y-%m-%d", "%Y-%m-%dT%H:%M:%S"]:
        try:
            return datetime.strptime(text[:25].strip(), fmt).strftime("%Y-%m-%d")
        except:
            pass
    return datetime.now().strftime("%Y-%m-%d")


def is_polar(article):
    """判断文章是否与极地邮轮相关"""
    text = (article["title"] + " " + article["desc"]).lower()
    return any(kw in text for kw in POLAR_KEYWORDS)


def is_duplicate(title):
    """判断标题是否已存在"""
    return title.strip().lower()[:60] in EXISTING_TITLES


def guess_company(title, desc):
    """根据关键词猜测涉及的公司"""
    text = (title + " " + desc).lower()
    company_map = {
        "quark": "quark", "aurora": "aurora", "oceanwide": "oceanwide",
        "hurtigruten": "hx", "hx": "hx", "ponant": "ponant",
        "silversea": "silversea", "seabourn": "seabourn",
        "scenic": "scenic", "atlas ocean": "atlas", "atlas": "atlas",
        "swan hellenic": "swan_hellenic", "viking": "viking",
        "hapag-lloyd": "hapag_lloyd", "lindblad": "lindblad",
        "national geographic": "lindblad", "poseidon": "poseidon",
        "heritage": "heritage", "antarctica21": "antarctica21",
        "g adventures": "g_adventures", "intrepid": "intrepid",
        "albatros": "albatros", "aqua": "aqua",
        "66°": "66expeditions", "66度": "66expeditions",
        "antarpply": "antarpply", "polar latitudes": "polar_latitudes",
    }
    for key, cid in company_map.items():
        if key in text:
            return cid
    return "unknown"


def guess_category(title, desc):
    """猜测新闻类别"""
    t = (title + desc).lower()
    if any(w in t for w in ["virus", "outbreak", "death", "emergency", "病毒", "死亡", "紧急"]):
        return "紧急"
    if any(w in t for w in ["new ship", "launch", "maiden", "delivery", "新船", "首航", "交付"]):
        return "新船/新设施"
    if any(w in t for w in ["discount", "sale", "offer", "save", "promo", "折扣", "促销"]):
        return "促销"
    if any(w in t for w in ["record", "records", "first", "largest", "纪录", "首次"]):
        return "纪录"
    if any(w in t for w in ["itinerary", "voyage", "route", "航线", "航次"]):
        return "航线"
    if any(w in t for w in ["award", "best", "奖项", "获奖"]):
        return "奖项"
    return "行业动态"


def main():
    print(f"\n{'='*50}")
    print(f"  📰 极地新闻自动抓取")
    print(f"  {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'='*50}")

    existing_count = load_existing()
    print(f"  已有 {existing_count} 条新闻缓存")

    new_articles = []
    total_fetched = 0

    for feed_url in RSS_FEEDS:
        print(f"\n  📡 {feed_url[:60]}...")
        xml_text = fetch_feed(feed_url)
        if not xml_text:
            continue

        articles = parse_rss(xml_text)
        total_fetched += len(articles)
        print(f"    获取 {len(articles)} 篇文章")

        for a in articles:
            if not a["title"] or is_duplicate(a["title"]):
                continue
            if not is_polar(a):
                continue

            co = guess_company(a["title"], a["desc"])
            cat = guess_category(a["title"], a["desc"])
            new_articles.append({
                "d": a["date"],
                "co": co,
                "title": a["title"][:120],
                "cat": cat,
                "imp": "high" if cat in ("紧急", "纪录", "新船/新设施") else "med",
                "desc": a["desc"][:150],
                "src": feed_url.split("/")[2].replace("www.", ""),
                "url": a["link"],
            })
            EXISTING_TITLES.add(a["title"].strip().lower()[:60])
            print(f"    ✅ {co}: {a['title'][:60]}...")

    print(f"\n  📊 统计: 抓取 {total_fetched} 篇, 新增 {len(new_articles)} 篇")

    if new_articles:
        # 更新 site_data.json
        with open(SITE_DATA) as f:
            site = json.load(f)

        existing_news = site.get("news", [])
        # 新文章插到最前面
        site["news"] = new_articles + existing_news
        # 最多保留 100 条
        site["news"] = site["news"][:100]
        site["updated"] = datetime.now().strftime("%Y-%m-%dT%H:%M:%S")

        with open(SITE_DATA, "w") as f:
            json.dump(site, f, ensure_ascii=False, indent=2)

        print(f"  ✅ 已更新 site_data.json, 共 {len(site['news'])} 条新闻")

    save_cache()
    print(f"\n{'='*50}\n")


if __name__ == "__main__":
    main()
