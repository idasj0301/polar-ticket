#!/usr/bin/env python3
"""
极地船票自动抓取框架
支持两种模式：
1. 浏览器自动化模式（Chrome扩展）- 通过Claude in Chrome工具抓取动态页面
2. API/静态页面模式 - 直接解析HTML或调用API
"""

import json
import os
import time
from datetime import datetime
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "data"

# ============================================
# 公司抓取配置 - 每家公司个性化抓取策略
# ============================================
SCRAPER_CONFIGS = {
    "quark": {
        "name": "Quark Expeditions",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://www.quarkexpeditions.com/expeditions?region=antarctic",
            "arctic_voyages": "https://www.quarkexpeditions.com/expeditions?region=arctic",
            "deals": "https://www.quarkexpeditions.com/special-offers"
        },
        "selectors": {
            "voyage_card": ".expedition-card",
            "voyage_title": ".expedition-title",
            "price": ".expedition-price .amount",
            "dates": ".expedition-dates",
            "availability": ".availability-badge",
            "cabin_info": ".cabin-options"
        },
        "notes": "页面使用JavaScript渲染，需浏览器自动化"
    },
    "oceanwide": {
        "name": "Oceanwide Expeditions",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://oceanwide-expeditions.com/antarctica/cruises",
            "arctic_voyages": "https://oceanwide-expeditions.com/arctic/cruises",
            "deals": "https://oceanwide-expeditions.com/special-offers"
        },
        "selectors": {
            "voyage_card": ".cruise-item",
            "voyage_title": "h3.cruise-title",
            "price": ".cruise-price",
            "dates": ".cruise-dates",
            "ship": ".cruise-ship"
        },
        "notes": "有中文版网站可用"
    },
    "aurora": {
        "name": "Aurora Expeditions",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://www.auroraexpeditions.com.au/destinations/antarctica",
            "arctic_voyages": "https://www.auroraexpeditions.com.au/destinations/arctic",
            "deals": "https://www.auroraexpeditions.com.au/special-offers"
        },
        "selectors": {
            "voyage_card": ".trip-card",
            "voyage_title": ".trip-title",
            "price": ".trip-price",
            "dates": ".trip-dates"
        },
        "notes": "澳大利亚公司，需注意时区"
    },
    "hx": {
        "name": "HX Hurtigruten Expeditions",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://www.travelhx.com/en-us/expeditions/destination/antarctica",
            "arctic_voyages": "https://www.travelhx.com/en-us/expeditions/destination/arctic",
            "deals": "https://www.travelhx.com/en-us/offers"
        },
        "selectors": {
            "voyage_card": ".cruise-search-result",
            "voyage_title": ".cruise-title",
            "price": ".from-price",
            "dates": ".cruise-date-range",
            "cabin": ".cabin-category"
        },
        "notes": "部分航次有中文服务标记"
    },
    "poseidon": {
        "name": "Poseidon Expeditions",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://poseidonexpeditions.com/antarctica/",
            "arctic_voyages": "https://poseidonexpeditions.com/arctic/",
            "deals": "https://poseidonexpeditions.com/special/"
        },
        "selectors": {
            "voyage_card": ".expedition-listing",
            "voyage_title": ".expedition-name",
            "price": ".expedition-price",
            "dates": ".expedition-date"
        },
        "notes": "全员套房，价格结构标准化"
    },
    "ponant": {
        "name": "Ponant",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://www.ponant.com/destinations/antarctica",
            "arctic_voyages": "https://www.ponant.com/destinations/arctic",
            "deals": "https://www.ponant.com/special-offers"
        },
        "selectors": {
            "voyage_card": ".cruise-result-item",
            "voyage_title": ".cruise-name",
            "price": ".cruise-price",
            "dates": ".cruise-date"
        },
        "notes": "Le Commandant Charcot北极点航次需单独关注"
    },
    "silversea": {
        "name": "Silversea",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://www.silversea.com/destinations/antarctica.html",
            "arctic_voyages": "https://www.silversea.com/destinations/arctic-greenland.html",
            "deals": "https://www.silversea.com/special-offers.html"
        },
        "selectors": {
            "voyage_card": ".voyage-result",
            "voyage_title": ".voyage-name",
            "price": ".voyage-price .amount",
            "dates": ".voyage-date"
        },
        "notes": "南极飞桥航次需单独追踪"
    },
    "seabourn": {
        "name": "Seabourn",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://www.seabourn.com/en-us/cruise-destinations/antarctica-cruises",
            "arctic_voyages": "https://www.seabourn.com/en-us/cruise-destinations/arctic-cruises",
            "deals": "https://www.seabourn.com/en-us/cruise-deals"
        },
        "selectors": {
            "voyage_card": ".cruise-card",
            "voyage_title": ".cruise-name",
            "price": ".cruise-from-price",
            "dates": ".cruise-date"
        },
        "notes": "潜水艇体验为独特卖点"
    },
    "lindblad": {
        "name": "Lindblad Expeditions",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://www.expeditions.com/destinations/antarctica",
            "arctic_voyages": "https://www.expeditions.com/destinations/arctic",
            "deals": "https://www.expeditions.com/special-offers"
        },
        "selectors": {
            "voyage_card": ".expedition-grid-item",
            "voyage_title": ".expedition-title",
            "price": ".expedition-price",
            "dates": ".expedition-dates"
        },
        "notes": "国家地理联名品牌溢价"
    },
    "scenic": {
        "name": "Scenic",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://www.scenic.com.au/cruises/antarctica",
            "arctic_voyages": "https://www.scenic.com.au/cruises/arctic",
            "deals": "https://www.scenic.com.au/special-offers"
        },
        "selectors": {
            "voyage_card": ".cruise-listing",
            "voyage_title": ".cruise-title",
            "price": ".cruise-price",
            "dates": ".cruise-date"
        },
        "notes": "超奢华定位，含直升机"
    },
    "atlas": {
        "name": "Atlas Ocean Voyages",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://atlasoceanvoyages.com/destinations/antarctica",
            "arctic_voyages": "https://atlasoceanvoyages.com/destinations/arctic",
            "deals": "https://atlasoceanvoyages.com/special-offers"
        },
        "selectors": {
            "voyage_card": ".voyage-card",
            "voyage_title": ".voyage-name",
            "price": ".voyage-from",
            "dates": ".voyage-dates"
        },
        "notes": "轻奢定位，频繁促销"
    },
    "antarctica21": {
        "name": "Antarctica21",
        "strategy": "browser_automation",
        "urls": {
            "antarctic_voyages": "https://www.antarctica21.com/journeys",
            "deals": "https://www.antarctica21.com/special-offers"
        },
        "selectors": {
            "voyage_card": ".journey-card",
            "voyage_title": ".journey-title",
            "price": ".journey-price",
            "dates": ".journey-dates"
        },
        "notes": "飞南极模式，小容量需密切关注舱位"
    }
    # 其他公司可继续扩展...
}


class ScraperFramework:
    """数据抓取框架"""

    def __init__(self):
        self.configs = SCRAPER_CONFIGS
        self.results_log = []

    def get_company_config(self, company_id):
        return self.configs.get(company_id)

    def get_all_configured_companies(self):
        return list(self.configs.keys())

    def get_unconfigured_companies(self):
        """获取尚未配置抓取策略的公司"""
        all_companies = self._load_all_company_ids()
        configured = set(self.configs.keys())
        return [c for c in all_companies if c not in configured]

    def _load_all_company_ids(self):
        path = DATA_DIR / "companies.json"
        if path.exists():
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                return [c["id"] for c in data.get("companies", [])]
        return []

    def generate_scrape_instructions(self, company_id, region="antarctic"):
        """
        为浏览器自动化工具生成抓取指令
        输出可被Claude in Chrome工具执行的指令
        """
        config = self.get_company_config(company_id)
        if not config:
            return {"error": f"公司 {company_id} 暂未配置抓取策略"}

        url_key = f"{region}_voyages"
        urls = config.get("urls", {})

        instruction = {
            "company_id": company_id,
            "company_name": config["name"],
            "region": region,
            "target_url": urls.get(url_key, urls.get("antarctic_voyages", "N/A")),
            "deals_url": urls.get("deals", "N/A"),
            "strategy": config["strategy"],
            "steps": [
                f"1. 访问 {urls.get(url_key)}",
                "2. 等待页面完全加载（JavaScript渲染完成）",
                f"3. 提取航次列表，选择器参考: {config.get('selectors', {})}",
                "4. 对每个航次提取: 航线名称、出发日期、各舱位价格、剩余舱位数",
                f"5. 访问促销页面: {urls.get('deals')}",
                "6. 提取促销信息: 标题、描述、折扣、截止日期",
                "7. 将数据按标准格式保存"
            ],
            "data_format": {
                "voyage_id": "唯一标识（航线+日期）",
                "company_id": company_id,
                "region": region,
                "itinerary_name": "航线名称",
                "ship_name": "船名",
                "departure_date": "出发日期 (YYYY-MM-DD)",
                "duration_days": "天数",
                "departure_port": "出发港",
                "cabin_categories": [
                    {
                        "category": "舱位类别",
                        "price": "价格（美元）",
                        "currency": "USD",
                        "available": "剩余数量（如能获取）",
                        "original_price": "原价（如有促销）"
                    }
                ],
                "promotions": [
                    {
                        "title": "促销标题",
                        "description": "描述",
                        "discount": "折扣",
                        "code": "促销代码",
                        "expires_at": "截止日期"
                    }
                ]
            }
        }

        return instruction

    def log_scrape_result(self, company_id, status, data_count=0, error=None):
        """记录抓取结果"""
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "company_id": company_id,
            "status": status,  # success, partial, failed
            "data_count": data_count,
            "error": error
        }
        self.results_log.append(log_entry)

        # 持久化日志
        log_path = DATA_DIR / "scrape_log.json"
        existing_logs = []
        if log_path.exists():
            with open(log_path, 'r', encoding='utf-8') as f:
                existing_logs = json.load(f)

        existing_logs.append(log_entry)
        # 只保留最近100条
        existing_logs = existing_logs[-100:]

        with open(log_path, 'w', encoding='utf-8') as f:
            json.dump(existing_logs, f, ensure_ascii=False, indent=2)

    def get_scrape_status_report(self):
        """获取抓取状态报告"""
        report = {
            "total_configured": len(self.configs),
            "total_companies": len(self._load_all_company_ids()),
            "unconfigured": self.get_unconfigured_companies(),
            "recent_logs": self.results_log[-20:],
            "generated_at": datetime.now().isoformat()
        }

        # 读取持久化日志
        log_path = DATA_DIR / "scrape_log.json"
        if log_path.exists():
            with open(log_path, 'r', encoding='utf-8') as f:
                report["recent_logs"] = json.load(f)[-20:]

        return report


# CLI入口
if __name__ == "__main__":
    framework = ScraperFramework()

    print("=" * 60)
    print("极地船票数据抓取框架")
    print("=" * 60)
    print(f"\n已配置抓取策略: {len(framework.configs)} 家公司")
    print(f"未配置: {len(framework.get_unconfigured_companies())} 家公司")

    print("\n--- 已配置公司列表 ---")
    for cid, cfg in framework.configs.items():
        print(f"  [{cid}] {cfg['name']} - 策略: {cfg['strategy']}")

    print("\n--- 示例: 生成Quark抓取指令 ---")
    instructions = framework.generate_scrape_instructions("quark", "antarctic")
    print(json.dumps(instructions, ensure_ascii=False, indent=2))
