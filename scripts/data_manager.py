#!/usr/bin/env python3
"""
极地船票数据管理系统 - 核心数据管理模块
功能：数据加载、价格追踪、促销管理、数据导出
"""

import json
import os
from datetime import datetime, timedelta
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "data"

class PolarTicketManager:
    """极地船票数据管理器"""

    def __init__(self):
        self.companies = self._load_json("companies.json")
        self.voyages = self._load_json("voyages.json")
        self.promotions = self._load_json("promotions.json")
        self.price_history = self._load_json("price_history.json")
        self.cabin_inventory = self._load_json("cabin_inventory.json")

    def _load_json(self, filename):
        path = DATA_DIR / filename
        if path.exists():
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
        return {} if "inventory" in filename else {"data": [], "meta": {}}

    def _save_json(self, filename, data):
        path = DATA_DIR / filename
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

    # ========== 公司管理 ==========
    def get_company(self, company_id):
        for c in self.companies.get("companies", []):
            if c["id"] == company_id:
                return c
        return None

    def get_companies_by_region(self, region):
        """按区域筛选公司: antarctic, arctic, both"""
        companies = self.companies.get("companies", [])
        if region == "antarctic":
            return [c for c in companies if "antarctic" in c.get("regions", [])]
        elif region == "arctic":
            return [c for c in companies if "arctic" in c.get("regions", [])]
        return companies

    def get_all_company_ids(self):
        return [c["id"] for c in self.companies.get("companies", [])]

    # ========== 航次/船票管理 ==========
    def add_voyage(self, voyage_data):
        """添加新航次"""
        voyage_data["id"] = f"voy_{len(self.voyages.get('data', [])) + 1}"
        voyage_data["created_at"] = datetime.now().isoformat()
        voyage_data["updated_at"] = datetime.now().isoformat()
        self.voyages.setdefault("data", []).append(voyage_data)
        self._save_json("voyages.json", self.voyages)
        return voyage_data["id"]

    def update_voyage(self, voyage_id, updates):
        """更新航次信息"""
        for i, v in enumerate(self.voyages.get("data", [])):
            if v.get("id") == voyage_id:
                old_price = v.get("price")
                self.voyages["data"][i].update(updates)
                self.voyages["data"][i]["updated_at"] = datetime.now().isoformat()

                # 如果价格变动，记录历史
                if "price" in updates and old_price != updates["price"]:
                    self._record_price_change(voyage_id, old_price, updates["price"])

                self._save_json("voyages.json", self.voyages)
                return True
        return False

    def get_voyages_by_company(self, company_id):
        """获取某公司的所有航次"""
        return [v for v in self.voyages.get("data", []) if v.get("company_id") == company_id]

    def get_voyages_by_region(self, region):
        """获取某区域的航次"""
        return [v for v in self.voyages.get("data", []) if v.get("region") == region]

    def search_voyages(self, **filters):
        """搜索航次"""
        results = self.voyages.get("data", [])
        for key, value in filters.items():
            if value:
                results = [v for v in results if v.get(key) == value or
                          (isinstance(v.get(key), str) and value.lower() in v.get(key).lower())]
        return results

    # ========== 价格追踪 ==========
    def _record_price_change(self, voyage_id, old_price, new_price):
        """记录价格变动"""
        record = {
            "voyage_id": voyage_id,
            "old_price": old_price,
            "new_price": new_price,
            "change_percent": round((new_price - old_price) / old_price * 100, 2) if old_price else 0,
            "timestamp": datetime.now().isoformat()
        }
        self.price_history.setdefault("data", []).append(record)
        self._save_json("price_history.json", self.price_history)

    def get_price_drops(self, threshold_percent=5):
        """获取降价超过阈值的航次"""
        drops = []
        for record in self.price_history.get("data", []):
            if record.get("change_percent", 0) <= -threshold_percent:
                drops.append(record)
        return drops

    def get_price_trend(self, voyage_id, days=30):
        """获取某航次近N天价格趋势"""
        cutoff = (datetime.now() - timedelta(days=days)).isoformat()
        return [r for r in self.price_history.get("data", [])
                if r["voyage_id"] == voyage_id and r["timestamp"] >= cutoff]

    # ========== 促销管理 ==========
    def add_promotion(self, promo_data):
        """添加促销信息"""
        promo_data["id"] = f"promo_{len(self.promotions.get('data', [])) + 1}"
        promo_data["discovered_at"] = datetime.now().isoformat()
        self.promotions.setdefault("data", []).append(promo_data)
        self._save_json("promotions.json", self.promotions)
        return promo_data["id"]

    def get_active_promotions(self, company_id=None):
        """获取当前活跃促销"""
        now = datetime.now().isoformat()
        active = []
        for p in self.promotions.get("data", []):
            if p.get("expires_at", "9999") >= now:
                if company_id is None or p.get("company_id") == company_id:
                    active.append(p)
        return active

    def get_new_promotions(self, since_hours=24):
        """获取最近新增的促销"""
        cutoff = (datetime.now() - timedelta(hours=since_hours)).isoformat()
        return [p for p in self.promotions.get("data", [])
                if p.get("discovered_at", "") >= cutoff]

    # ========== 舱位库存 ==========
    def update_cabin_inventory(self, voyage_id, cabin_data):
        """更新舱位库存"""
        key = f"{voyage_id}_{cabin_data['category']}"
        cabin_data["voyage_id"] = voyage_id
        cabin_data["updated_at"] = datetime.now().isoformat()
        self.cabin_inventory[key] = cabin_data
        self._save_json("cabin_inventory.json", self.cabin_inventory)

    def get_low_inventory_voyages(self, threshold=5):
        """获取舱位紧张（低于阈值）的航次"""
        low = []
        for key, cabin in self.cabin_inventory.items():
            if cabin.get("available", 0) <= threshold:
                low.append(cabin)
        return low

    # ========== 数据导出 ==========
    def export_to_markdown(self):
        """导出为Markdown报告"""
        lines = []
        lines.append("# 极地船票日报")
        lines.append(f"## 更新时间：{datetime.now().strftime('%Y-%m-%d %H:%M')}")
        lines.append("")

        # 促销信息
        lines.append("## 🔥 最新促销")
        active_promos = self.get_active_promotions()
        if active_promos:
            for p in active_promos[:10]:
                company = self.get_company(p.get("company_id", ""))
                company_name = company["name_cn"] if company else p.get("company_id")
                lines.append(f"- **{company_name}**: {p.get('title')} - {p.get('description')} (截止{p.get('expires_at', '待定')})")
        else:
            lines.append("暂无最新促销信息")
        lines.append("")

        # 价格变动
        lines.append("## 📉 价格变动")
        drops = self.get_price_drops()
        if drops:
            for d in drops[:10]:
                lines.append(f"- 航次{d['voyage_id']}: {d['old_price']} → {d['new_price']} ({d['change_percent']}%)")
        else:
            lines.append("今日无显著价格变动")
        lines.append("")

        # 舱位紧张
        lines.append("## ⚠️ 舱位紧张提醒")
        low_inv = self.get_low_inventory_voyages()
        if low_inv:
            for c in low_inv[:10]:
                lines.append(f"- 航次{c['voyage_id']} - {c.get('category', '未知')}: 仅剩{c.get('available', 0)}间")
        else:
            lines.append("当前所有航次舱位充足")

        return "\n".join(lines)

    def export_stats(self):
        """导出统计信息"""
        companies = self.companies.get("companies", [])
        voyages = self.voyages.get("data", [])
        promotions = self.promotions.get("data", [])

        return {
            "total_companies": len(companies),
            "total_voyages": len(voyages),
            "active_promotions": len(self.get_active_promotions()),
            "price_drops_today": len(self.get_price_drops()),
            "low_inventory_count": len(self.get_low_inventory_voyages()),
            "antarctic_companies": len(self.get_companies_by_region("antarctic")),
            "arctic_companies": len(self.get_companies_by_region("arctic")),
            "last_updated": datetime.now().isoformat()
        }


# CLI入口
if __name__ == "__main__":
    manager = PolarTicketManager()
    stats = manager.export_stats()
    print(json.dumps(stats, ensure_ascii=False, indent=2))

    # 生成日报
    report = manager.export_to_markdown()
    report_path = DATA_DIR.parent / "reports" / f"daily_{datetime.now().strftime('%Y%m%d')}.md"
    os.makedirs(report_path.parent, exist_ok=True)
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(report)
    print(f"\n日报已生成: {report_path}")
