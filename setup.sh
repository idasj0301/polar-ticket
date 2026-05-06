#!/bin/bash
# 极地船票系统 - 一键部署脚本
# 在腾讯云 Ubuntu 22.04 上运行

set -e
echo "╔══════════════════════════════════════════╗"
echo "║   ❄️  极地船票系统 · 腾讯云部署           ║"
echo "╚══════════════════════════════════════════╝"

# 1. 更新系统
echo "📦 更新系统..."
apt update -y && apt upgrade -y

# 2. 安装依赖
echo "📦 安装 Python 和依赖..."
apt install -y python3 python3-pip git curl unzip chromium-browser

# 3. 安装 Playwright
echo "📦 安装 Playwright（浏览器自动化）..."
pip3 install playwright --break-system-packages
python3 -m playwright install chromium
python3 -m playwright install-deps

# 4. 克隆项目
echo "📦 克隆项目..."
cd /opt
if [ -d polar-ticket-system ]; then
    cd polar-ticket-system && git pull
else
    git clone https://github.com/idasj0301/polar-ticket.git polar-ticket-system
fi

# 5. 创建抓取脚本
cat > /opt/polar-ticket-system/scripts/scrape_all.py << 'PYEOF'
#!/usr/bin/env python3
"""
全自动抓取24家极地邮轮公司价格
使用 Playwright 浏览器自动化
每30分钟运行一次
"""

import json
import os
import time
from datetime import datetime
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent.parent
SITE_DATA = ROOT / "docs" / "data" / "site_data.json"
LOG_DIR = ROOT / "logs"
os.makedirs(LOG_DIR, exist_ok=True)

# 24家公司抓取配置
SCRAPE_TARGETS = [
    {"id": "66expeditions", "name": "66度探险", "url": "https://www.66expeditions.com/cruises", "type": "direct"},
    {"id": "quark", "name": "夸克", "url": "https://www.quarkexpeditions.com/expeditions", "type": "list"},
    {"id": "aurora", "name": "极光", "url": "https://www.auroraexpeditions.com.au/destinations/antarctica", "type": "list"},
    {"id": "hx", "name": "海达路德", "url": "https://www.travelhx.com/en-us/expeditions/destination/antarctica", "type": "list"},
    {"id": "ponant", "name": "庞洛", "url": "https://www.ponant.com/destinations/antarctica", "type": "list"},
    {"id": "silversea", "name": "银海", "url": "https://www.silversea.com/destinations/antarctica-cruise.html", "type": "list"},
    {"id": "seabourn", "name": "世邦", "url": "https://www.seabourn.com/en-us/cruise-destinations/antarctica-cruises", "type": "list"},
    {"id": "scenic", "name": "圣景", "url": "https://www.scenic.com.au/tours/antarctica-in-depth", "type": "list"},
    {"id": "atlas", "name": "阿特拉斯", "url": "https://atlasoceanvoyages.com/destinations/antarctica", "type": "list"},
    {"id": "viking", "name": "维京", "url": "https://www.vikingcruises.com/expeditions/cruise-destinations/antarctica/index.html", "type": "list"},
    {"id": "oceanwide", "name": "欧海维德", "url": "https://oceanwide-expeditions.com/antarctica", "type": "list"},
    {"id": "poseidon", "name": "波塞冬", "url": "https://poseidonexpeditions.com/antarctica/", "type": "list"},
    {"id": "lindblad", "name": "Lindblad", "url": "https://www.expeditions.com/destinations/antarctica", "type": "list"},
    {"id": "swan_hellenic", "name": "天鹅", "url": "https://www.swanhellenic.com/cruises/antarctica", "type": "list"},
]

def log(msg):
    ts = datetime.now().strftime("%H:%M:%S")
    print(f"[{ts}] {msg}")
    with open(LOG_DIR / f"scrape_{datetime.now().strftime('%Y%m%d')}.log", "a") as f:
        f.write(f"[{ts}] {msg}\n")

def main():
    log("🚀 开始抓取15家公司...")
    results = {"updated": datetime.now().isoformat(), "companies_checked": 0, "prices_found": 0}

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for target in SCRAPE_TARGETS:
            try:
                log(f"  📡 {target['name']}: {target['url'][:60]}...")
                page = browser.new_page()
                page.goto(target['url'], timeout=30000, wait_until="domcontentloaded")
                page.wait_for_timeout(3000)  # 等JS渲染

                # 获取页面标题和可见文本
                title = page.title()
                text = page.inner_text("body")[:5000]

                # 尝试提取价格
                prices = page.evaluate("""
                    () => {
                        const results = [];
                        document.querySelectorAll('[class*="price"], [class*="amount"], [class*="rate"]').forEach(el => {
                            const txt = el.innerText;
                            if (txt.match(/[$€£¥]\\s*\\d/)) results.push(txt.trim());
                        });
                        return results.slice(0, 10);
                    }
                """)

                if prices:
                    log(f"    ✅ 找到 {len(prices)} 个价格: {prices[:3]}")
                    results['prices_found'] += len(prices)
                else:
                    log(f"    ⚠️ 未发现价格数据")

                results['companies_checked'] += 1
                page.close()

            except Exception as e:
                log(f"    ❌ 失败: {str(e)[:80]}")

        browser.close()

    # 保存报告
    report_file = ROOT / "logs" / f"report_{datetime.now().strftime('%Y%m%d_%H%M')}.json"
    with open(report_file, "w") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    log(f"✅ 完成: {results['companies_checked']}家公司, {results['prices_found']}个价格")
    return results

if __name__ == "__main__":
    main()
PYEOF
chmod +x /opt/polar-ticket-system/scripts/scrape_all.py

# 6. 设置定时任务（每30分钟）
cat > /etc/cron.d/polar-scraper << 'CRON'
# 极地船票自动抓取 - 每30分钟
*/30 * * * * root cd /opt/polar-ticket-system && python3 scripts/scrape_all.py >> logs/cron.log 2>&1
# 新闻抓取 - 每2小时
0 */2 * * * root cd /opt/polar-ticket-system && python3 scripts/news_fetcher.py >> logs/cron.log 2>&1
CRON

# 7. 首次运行
cd /opt/polar-ticket-system
python3 scripts/scrape_all.py

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║  ✅ 部署完成！                            ║"
echo "║                                          ║"
echo "║  抓取脚本: 每30分钟自动运行               ║"
echo "║  新闻抓取: 每2小时自动运行                ║"
echo "║  日志目录: /opt/polar-ticket-system/logs/  ║"
echo "╚══════════════════════════════════════════╝"
