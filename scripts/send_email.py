#!/usr/bin/env python3
"""降价邮件通知 - 由 GitHub Actions 触发"""

import json
import os
import sys
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).parent.parent
DROPS_FILE = ROOT / "data" / "price_drops.json"


def load_drops():
    if not DROPS_FILE.exists():
        print("无降价数据文件")
        return []
    with open(DROPS_FILE) as f:
        data = json.load(f)
    return data.get("drops", [])


def build_email_html(drops):
    """构建 Apple 风格的 HTML 邮件"""
    total_save = sum(d.get("savings", 0) for d in drops)
    items = ""
    for d in drops:
        co = d.get("company_cn", "")
        it = d.get("itinerary", "")
        ship = d.get("ship", "")
        date = d.get("date", "")
        days = d.get("days", 0)
        cabin = d.get("cabin", "")
        old_p = d.get("old_price", 0)
        new_p = d.get("price", 0)
        pct = d.get("drop_pct", 0)
        avail = d.get("avail", 0)
        avail_color = "#ff9500" if avail <= 3 else "#34c759"
        items += f"""
        <tr>
          <td style="padding:16px;border-bottom:1px solid #f0f0f5">
            <div style="font-weight:700;font-size:15px;color:#1d1d1f">{co}</div>
            <div style="font-size:13px;color:#86868b;margin-top:2px">{it}</div>
            <div style="font-size:12px;color:#aeaeb2;margin-top:4px">🚢 {ship} · {date} · {days}天 · {cabin}</div>
          </td>
          <td style="padding:16px;text-align:right;white-space:nowrap;border-bottom:1px solid #f0f0f5">
            <div style="font-size:12px;color:#aeaeb2;text-decoration:line-through">${old_p:,}</div>
            <div style="font-size:20px;font-weight:700;color:#0071e3">${new_p:,}</div>
            <div style="font-size:13px;font-weight:600;color:#34c759">-{pct}% · 省${d.get('savings',0):,}</div>
            <div style="font-size:11px;color:{avail_color};margin-top:2px">{'仅剩'+str(avail)+'间' if avail<=3 else str(avail)+'间可用'}</div>
          </td>
        </tr>"""

    return f"""<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.06)">
  <tr><td style="padding:28px 28px 0">
    <div style="font-size:24px">🐧</div>
    <h1 style="font-size:22px;font-weight:700;color:#1d1d1f;margin:8px 0 4px">极地船票 · 降价提醒</h1>
    <p style="font-size:14px;color:#86868b;margin:0">发现 <b style="color:#ff3b30">{len(drops)}</b> 个航次降价 ≥5% · 累计可节省 <b style="color:#34c759">${total_save:,}</b></p>
    <p style="font-size:12px;color:#aeaeb2;margin:4px 0 0">{datetime.now().strftime('%Y-%m-%d %H:%M')} · 极地船票系统自动监测</p>
  </td></tr>
  <tr><td style="padding:8px 0">
    <table width="100%" cellpadding="0" cellspacing="0">{items}</table>
  </td></tr>
  <tr><td style="padding:20px 28px;background:#fafafa;border-top:1px solid #f0f0f5">
    <p style="font-size:12px;color:#aeaeb2;margin:0">此邮件由极地船票系统自动发送 · 每日监控21家极地邮轮公司价格变动</p>
    <p style="font-size:12px;color:#aeaeb2;margin:4px 0 0">📊 <a href="https://idasj0301.github.io/polar-ticket/" style="color:#0071e3">查看完整数据看板</a></p>
  </td></tr>
</table>
</body></html>"""


def send_email(html_content, drop_count):
    smtp_host = os.environ.get("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_pass = os.environ.get("SMTP_PASS", "")
    to_emails = os.environ.get("TO_EMAILS", "")

    if not smtp_user or not smtp_pass:
        print("❌ 未配置 SMTP 凭据（SMTP_USER / SMTP_PASS）")
        print("   请在 GitHub Settings → Secrets 中设置")
        return False

    if not to_emails:
        print("❌ 未配置收件人邮箱（TO_EMAILS）")
        return False

    recipients = [e.strip() for e in to_emails.split(",") if e.strip()]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"🐧 极地船票降价提醒 · {drop_count}个航次降价 · {datetime.now().strftime('%m/%d')}"
    msg["From"] = smtp_user
    msg["To"] = ", ".join(recipients)
    msg.attach(MIMEText(html_content, "html", "utf-8"))

    try:
        with smtplib.SMTP(smtp_host, smtp_port, timeout=30) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, recipients, msg.as_string())
        print(f"✅ 邮件已发送给 {len(recipients)} 位收件人")
        return True
    except Exception as e:
        print(f"❌ 邮件发送失败: {e}")
        return False


def main():
    drops = load_drops()
    if not drops:
        print("✅ 无降价，不发送邮件")
        return

    html = build_email_html(drops)
    send_email(html, len(drops))


if __name__ == "__main__":
    main()
