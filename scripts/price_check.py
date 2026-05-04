#!/usr/bin/env python3
"""GitHub Actions 价格检查脚本 - 对比快照，检测降价"""

import json, os, sys
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).parent.parent
SITE_DATA = ROOT / "docs" / "data" / "site_data.json"
CO_DATA = ROOT / "docs" / "data" / "companies.json"
SNAPSHOT_FILE = ROOT / "data" / "price_snapshot.json"

DROP_THRESHOLD = 5  # 降价超过5%才报警


def load_voyages():
    with open(SITE_DATA) as f:
        return json.load(f).get("voyages", [])


def load_snapshot():
    if SNAPSHOT_FILE.exists():
        with open(SNAPSHOT_FILE) as f:
            return json.load(f)
    return {}


def save_snapshot(snap):
    with open(SNAPSHOT_FILE, "w") as f:
        json.dump(snap, f, ensure_ascii=False, indent=2)


def load_companies():
    with open(CO_DATA) as f:
        data = json.load(f)
    return {c["id"]: c for c in data}


def main():
    companies = load_companies()
    voyages = load_voyages()
    snapshot = load_snapshot()
    now = datetime.now().isoformat()
    drops = []
    new_snap = {}

    for v in voyages:
        cid = v.get("company_id", "")
        co = companies.get(cid, {})
        for cabin in v.get("cabin_categories", []):
            cat = cabin.get("category", "")
            price = cabin.get("price", 0)
            orig = cabin.get("original_price", 0)
            avail = cabin.get("available", 0)
            key = f"{v['id']}_{cat}"

            new_snap[key] = {
                "price": price, "orig": orig, "avail": avail,
                "updated": now,
                "company_cn": co.get("name_cn", cid),
                "company_name": co.get("name", cid),
                "itinerary": v.get("itinerary_name", ""),
                "ship": v.get("ship_name", ""),
                "date": v.get("departure_date", ""),
                "days": v.get("duration_days", 0),
                "region": v.get("region", ""),
                "cabin": cat,
            }

            old = snapshot.get(key, {})
            old_price = old.get("price", 0)

            if old_price > 0 and price < old_price:
                pct = round((1 - price / old_price) * 100, 1)
                if pct >= DROP_THRESHOLD:
                    drops.append({
                        **new_snap[key],
                        "old_price": old_price,
                        "drop_pct": pct,
                        "savings": old_price - price,
                    })

    save_snapshot(new_snap)

    # 同步更新网页数据
    _update_site_data(voyages, companies, now)

    # 保存结果供邮件脚本使用
    drops_file = ROOT / "data" / "price_drops.json"
    with open(drops_file, "w") as f:
        json.dump({"drops": drops, "count": len(drops), "checked_at": now}, f, ensure_ascii=False, indent=2)

    # 设置 GitHub Actions 环境变量
    if drops:
        env_file = os.environ.get("GITHUB_ENV", "")
        if env_file:
            with open(env_file, "a") as f:
                f.write(f"HAS_DROPS=true\n")
                f.write(f"DROP_COUNT={len(drops)}\n")

    # 打印报告
    print(f"\n{'='*50}")
    print(f"  极地船票 · 价格检查")
    print(f"  {now[:19]}")
    print(f"{'='*50}")
    print(f"  监控航次: {len(voyages)}")
    print(f"  价格点: {len(new_snap)}")
    print(f"  降价 ≥{DROP_THRESHOLD}%: {len(drops)}")
    if drops:
        total_save = sum(d["savings"] for d in drops)
        print(f"  可节省: ${total_save:,}")
        for d in drops:
            print(f"  📉 {d['company_cn']} | {d['cabin']} | ${d['old_price']:,}→${d['price']:,} (-{d['drop_pct']}%)")
    print(f"{'='*50}\n")


def _update_site_data(voyages, companies, now):
    """同步更新 site_data.json 中的当前价格和时间戳"""
    if not SITE_DATA.exists():
        return

    with open(SITE_DATA) as f:
        site = json.load(f)

    # 用当前数据更新航次价格
    current_voyages = {v["id"]: v for v in voyages}
    for sv in site.get("voyages", []):
        cv = current_voyages.get(sv.get("id"))
        if cv:
            sv["cabins"] = cv.get("cabin_categories", sv.get("cabins", []))

    # 更新公司促销/降价计数
    for c in site.get("companies", []):
        co = companies.get(c.get("id"), {})
        if co:
            c["promos"] = co.get("promos", 0)
            c["drops"] = co.get("drops", 0)

    site["updated"] = now[:19]

    with open(SITE_DATA, "w") as f:
        json.dump(site, f, ensure_ascii=False, indent=2)

    print(f"  ✅ 网页数据已同步")


if __name__ == "__main__":
    main()
