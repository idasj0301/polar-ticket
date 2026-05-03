# ❄️ 极地船票管理系统

> 为高端南北极旅行社打造的单船票业务自动化系统  
> 监控21家极地邮轮公司 · 每日价格追踪 · 促销信息收集 · 舱位库存管理

---

## 📋 系统概述

本系统帮助业务团队高效管理南北极单船票业务，核心功能包括：

| 功能 | 说明 |
|------|------|
| 🏢 **公司信息库** | 21家极地邮轮公司的完整信息（网站、船只、联系方式等） |
| 📊 **数据看板** | Web可视化界面，一目了然查看所有公司状态 |
| 📈 **价格追踪** | 监控各公司航次价格变化，自动标记降价 |
| 🔥 **促销收集** | 抓取各公司促销信息（早鸟、尾单、特惠等） |
| ⚠️ **舱位预警** | 舱位紧张自动提醒，优先处理即将售罄航次 |
| 📱 **企业微信通知** | 价格变动、新促销、舱位紧张自动推送到企业微信群 |

---

## 🗂️ 项目结构

```
polar-ticket-system/
├── data/                         # 数据文件
│   ├── companies.json            # 21家公司完整信息
│   ├── voyages.json              # 航次/船票数据
│   ├── promotions.json           # 促销信息
│   ├── price_history.json        # 价格变动历史
│   ├── cabin_inventory.json      # 舱位库存
│   └── scrape_log.json          # 抓取日志
├── scripts/                      # Python脚本
│   ├── data_manager.py           # 核心数据管理
│   ├── scraper_framework.py      # 数据抓取框架
│   ├── wecom_notifier.py         # 企业微信通知
│   └── daily_runner.py           # 每日自动运行
├── web/                          # Web前端
│   └── index.html                # 数据看板（React SPA）
├── reports/                      # 每日报告输出
└── README.md                     # 本文档
```

---

## 🚀 快速开始

### 1. 打开数据看板

直接在浏览器中打开 `web/index.html` 即可使用。

### 2. 运行数据管理脚本

```bash
# 查看系统统计
cd polar-ticket-system
python3 scripts/data_manager.py

# 查看抓取框架状态
python3 scripts/scraper_framework.py
```

### 3. 配置企业微信通知（AI Bot「艾达」）

系统已集成你的企业微信智能机器人「艾达」。

**第一步：捕获 chatid**

让同事在企业微信里给智能机器人发一条消息，同时运行：
```bash
cd polar-ticket-system
python3 scripts/wecom_bot.py --listen
```

当有人发消息时，chatid 会自动保存。按 Ctrl+C 停止监听。

**第二步：验证 chatid**
```bash
python3 scripts/wecom_bot.py --list-chats
```

**第三步：设置环境变量**
```bash
export WECOM_CHATID='你捕获到的chatid'
```

**第四步：测试发送**
```bash
python3 scripts/wecom_bot.py --send --chatid "$WECOM_CHATID" --message "极地船票系统已上线 🎉"
```

**Bot 凭证**（已内置在脚本中）：
- Bot ID: `aibgfEkFAK2hMk8Eov9IERtBcmDtgIfYCYt`
- Secret: `mfDYrExXMDG77N4CZ54668SWAD2qykTU3ewyDwawi2m`

### 4. 设置每日自动运行

**macOS/Linux (crontab)：**
```bash
# 每天早上9点自动运行
crontab -e
# 添加（替换为你的 chatid）：
0 9 * * * cd /path/to/polar-ticket-system && python3 scripts/daily_runner.py --chatid "你的chatid"
```

**Windows (任务计划程序)：**
1. 打开"任务计划程序"
2. 创建基本任务 → 每日触发
3. 程序：`python3`
4. 参数：`scripts/daily_runner.py`
5. 起始于：`polar-ticket-system` 目录

---

## 📊 监控的21家极地邮轮公司

### 南极 + 北极双线运营（19家）

| # | 公司 | 中文名 | 代表船只 | 定位 |
|---|------|--------|---------|------|
| 1 | Quark Expeditions | 夸克探险 | Ultramarine, Ocean Explorer | 专业探险 |
| 2 | Oceanwide Expeditions | 欧海维德 | Hondius, Ortelius, Plancius | 专业探险 |
| 3 | Aurora Expeditions | 极光探险 | Greg Mortimer, Sylvia Earle | 环保探险 |
| 4 | HX Hurtigruten | 海达路德 | Fridtjof Nansen, Roald Amundsen | 探险舒适 |
| 5 | Poseidon Expeditions | 波塞冬 | Sea Spirit | 精品探险 |
| 6 | Lindblad/National Geographic | 林德布拉德 | NG Endurance, Resolution | 科教探险 |
| 7 | Ponant | 庞洛邮轮 | Le Commandant Charcot | 法式奢华 |
| 8 | Silversea | 银海邮轮 | Silver Endeavour | 超奢华 |
| 9 | Seabourn | 世鹏邮轮 | Seabourn Venture, Pursuit | 超奢华 |
| 10 | Scenic | 圣景邮轮 | Scenic Eclipse I/II | 超奢华 |
| 11 | Atlas Ocean Voyages | 阿特拉斯 | World Navigator/Voyager | 轻奢 |
| 12 | Swan Hellenic | 天鹅希腊 | SH Minerva, Vega, Diana | 文化探险 |
| 13 | Viking Expeditions | 维京探险 | Viking Octantis, Polaris | 北欧奢华 |
| 14 | Hapag-Lloyd | 赫伯罗特 | HANSEATIC系列 | 德式探险 |
| 15 | G Adventures | G探险 | MS Expedition | 亲民探险 |
| 16 | Albatros Expeditions | 信天翁 | Ocean Albatros, Victory | 北欧探险 |
| 17 | Heritage Expeditions | 遗产探险 | Heritage Adventurer | 罗斯海专家 |
| 18 | Intrepid Travel | 无畏旅行 | Ocean Endeavour | 亲民探险 |
| 19 | Lindblad Expeditions | 林德布拉德 | NG系列 | 科教 |

### 仅南极或仅北极（2家）

| # | 公司 | 区域 |
|---|------|------|
| 20 | Antarctica21 | 仅南极（飞南极专家） |
| 21 | Aqua Expeditions / Secret Atlas | 仅北极 |

---

## 🔧 数据抓取方式

### 方式一：浏览器自动化（推荐）

使用 Claude in Chrome 工具自动化访问各公司网站，适合JavaScript渲染的页面。

```bash
# 生成某家公司的抓取指令
python3 -c "
from scraper_framework import ScraperFramework
import json
f = ScraperFramework()
print(json.dumps(f.generate_scrape_instructions('quark', 'antarctic'), ensure_ascii=False, indent=2))
"
```

### 方式二：手动数据录入

对于无法自动抓取的公司，可以通过数据管理模块手动录入：

```python
from data_manager import PolarTicketManager
m = PolarTicketManager()

# 添加航次
m.add_voyage({
    "company_id": "quark",
    "region": "antarctic",
    "itinerary_name": "Antarctic Explorer",
    "ship_name": "Ultramarine",
    "departure_date": "2026-11-21",
    "duration_days": 11,
    "departure_port": "Ushuaia",
    "cabin_categories": [
        {"category": "Explorer Suite", "price": 14595, "currency": "USD", "available": 5}
    ]
})

# 添加促销
m.add_promotion({
    "company_id": "quark",
    "title": "Early Bird 20% Off",
    "description": "2026-27 season early booking discount",
    "discount": "20%",
    "expires_at": "2026-07-31"
})
```

---

## 📱 企业微信通知示例

系统会自动推送以下类型的通知：

**每日汇总：**
```
📊 极地船票系统日报
2026-05-03 09:00
监控公司: 21家 | 追踪航次: 156个 | 活跃促销: 8条
今日降价: 3个航次 | 舱位紧张: 5个航次
```

**降价提醒：**
```
📉 Quark Expeditions - Antarctic Explorer
原价: $13,539 → 现价: $11,539 | 降幅: 14.8%
```

**促销提醒：**
```
🔥 Aurora Expeditions - Beyond Borders 特惠
2026年出发航次享高达25%折扣 | 截止: 2026-06-30
```

---

## 💡 使用建议

### 日常工作流

1. **早上9:00** - 系统自动抓取数据，发送每日汇总到企业微信群
2. **查看数据看板** - 打开 `web/index.html` 查看各公司促销和舱位情况
3. **重点关注** - 关注降价航次和舱位紧张的公司
4. **客户匹配** - 根据客户需求，在系统中搜索匹配的航次
5. **联系预订** - 直接访问公司官网或联系销售预订

### 效率提升

- 之前：每天手动打开20+网站逐一查看（约2-3小时）
- 现在：系统自动汇总，5分钟即可掌握全局

### 数据维护

- 每周检查一次抓取日志，确认所有公司数据正常更新
- 每月更新一次公司信息（新增船只、价格调整等）
- 促销信息实时更新，过期自动归档

---

## 🛠️ 技术栈

- **前端**: React 18 + Babel (纯HTML单文件，无需构建)
- **后端**: Python 3.8+
- **数据存储**: JSON文件（轻量级，方便部署）
- **通知**: 企业微信群机器人 Webhook API
- **自动化**: cron / 计划任务 + Claude in Chrome浏览器自动化

---

## 📝 后续扩展方向

1. **API对接** - 接入各公司合作伙伴API，实现实时价格获取
2. **数据库升级** - 当航次数量增多时可升级到 SQLite/PostgreSQL
3. **客户匹配** - 根据客户需求自动推荐最佳航次
4. **价格预测** - 基于历史数据分析最佳预订时机
5. **竞品分析** - 对比各公司同类型航次性价比

---
