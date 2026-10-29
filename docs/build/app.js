const FAMILY_POLICIES = {"version":"20260921.2","reviewed_on":"2026-09-21","companies":[{"company_id":"quark","company_name":"Quark Expeditions","summary_zh":"现行合同原文above the age of 8 years old，恰满8岁边界待确认。未成年人需家长全程陪同；合同把其他监护人/负责人描述为over 21，恰满21岁不自动视为合格。须同舱或连通套房，签免责及适用的监护文件。尚未核实儿童票价。","source_url":"https://www.quarkexpeditions.com/expedition-contract","automated_price_calculation_enabled":false,"sources":["https://www.quarkexpeditions.com/expedition-contract"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":96,"scope":"all","product":"all","exclusive":true}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"oceanwide","company_name":"Oceanwide Expeditions","summary_zh":"最低3岁；官方不建议8岁以下参加。3–15岁儿童在至少两名全额付费乘客同舱时，一名儿童可减免40%（6折），仅指定航次及舱型。最低年龄、建议年龄与折扣年龄不同，须分别核对。","source_url":"https://oceanwide-expeditions.com/faq/what-is-the-age-restriction-on-the-voyages-of-oceanwide-expeditions","automated_price_calculation_enabled":false,"sources":["https://oceanwide-expeditions.com/faq/what-is-the-age-restriction-on-the-voyages-of-oceanwide-expeditions","https://oceanwide-expeditions.com/faq/do-you-offer-discounts-for-children"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":36,"scope":"all","product":"all"}],"offers":[{"label":"6折（指定航次／舱型）","min_months":36,"max_months_exclusive":192,"pay_fraction":0.6,"scope":"all","product":"all","adults_min":2,"max_children":1,"conditional":true,"note":"至少两名全额付费乘客同舱，一名3–15岁儿童；指定航次及舱型，官方不建议8岁以下参加。"}],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"aurora","company_name":"Aurora Expeditions","summary_zh":"Young Adventurers页面表格列6–12岁儿童、13–15岁青少年：与一名成人同舱减免25%（7.5折），与两名成人同舱减免50%（5折），基准为预订时成人价。两成人最多加两名6–12岁儿童或一名13–15岁青少年；两成人+两青少年、两成人+一儿童+一青少年均不允许。6岁为登船最低年龄。页面总则同时写13岁以上按成人价，和专项青少年表格存在表述冲突，不能自行消解，13–15岁优惠须书面确认。床位依配置表，不可一律称儿童住沙发床；受舱位限制，默认不可叠加其他儿童专项优惠。","source_url":"https://www.aurora-expeditions.com/au/special-offers/young-explorers","automated_price_calculation_enabled":false,"sources":["https://www.aurora-expeditions.com/au/special-offers/young-explorers"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":72,"scope":"all","product":"all"}],"offers":[{"label":"7.5折","min_months":72,"max_months_exclusive":156,"pay_fraction":0.75,"scope":"all","product":"all","adults_exact":1,"max_children":2,"note":"一名成人同舱，按预订时成人价；依床位配置和可售舱位确认。"},{"label":"5折","min_months":72,"max_months_exclusive":156,"pay_fraction":0.5,"scope":"all","product":"all","adults_exact":2,"max_children":2,"note":"两名成人同舱；两名儿童需共用沙发床，不能混搭一名青少年。"},{"label":"7.5折（待确认）","min_months":156,"max_months_exclusive":192,"pay_fraction":0.75,"scope":"all","product":"all","adults_exact":1,"max_children":2,"conflict":true,"note":"13–15岁专项表格与页面成人价总则冲突，须船司确认。"},{"label":"5折（待确认）","min_months":156,"max_months_exclusive":192,"pay_fraction":0.5,"scope":"all","product":"all","adults_exact":2,"max_children":1,"conflict":true,"note":"两成人最多同舱一名13–15岁青少年；页面年龄总则存在冲突。"}],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"hx","company_name":"HX (Hurtigruten Expeditions)","summary_zh":"官方FAQ：航行时2–15岁儿童，与至少两名成人同舱，船费部分减免50%（5折）；与一名成人同舱船费部分减免20%（8折）。适用的非船费部分减免20%，不得把全包总价直接乘船费折扣。南极及加拉帕戈斯最低5岁；12岁以下小艇登陆由船长决定。加帕另有未满6岁免责及未成年出行同意文件要求。优惠适用于新预订，可与当前优惠组合，但会变化，应按航次复核。","source_url":"https://www.travelhx.com/en-us/support/faq/","automated_price_calculation_enabled":false,"sources":["https://www.travelhx.com/en-us/support/faq/"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":60,"scope":"antarctic","product":"all"},{"min_months":60,"scope":"nonpolar","product":"all","conditional":true}],"offers":[{"label":"船费5折","min_months":24,"max_months_exclusive":192,"pay_fraction":0.5,"scope":"all","product":"all","adults_min":2,"conditional":true,"note":"与至少两名成人同舱，仅船费部分；舱位容量、年龄与具体航次须确认。"},{"label":"船费8折","min_months":24,"max_months_exclusive":192,"pay_fraction":0.8,"scope":"all","product":"all","adults_exact":1,"conditional":true,"note":"与一名成人同舱，仅船费部分；适用的非船费部分为减免20%。"}],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"poseidon","company_name":"Poseidon Expeditions","summary_zh":"官方优惠页明确：未满12岁、作为同舱第三名乘客的儿童，特别价格为每晚$275。该条仅用$符号，币种、计费晚数、税费、舱型、具体航次及叠加规则仍待确认，不生成总价。运输条款对12岁以下参加航程逐案审核，主预订人至少21岁。","source_url":"https://poseidonexpeditions.com/info-for-travelers/termsandconditions/","automated_price_calculation_enabled":false,"sources":["https://poseidonexpeditions.com/info-for-travelers/termsandconditions/","https://poseidonexpeditions.com/special/"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":144,"scope":"all","product":"all","case_min_months":0}],"offers":[{"label":"$275／晚","min_months":0,"max_months_exclusive":144,"pay_fraction":null,"scope":"all","product":"all","adults_exact":2,"max_children":1,"note":"未满12岁且为同舱第三人；币种、计费晚数、税费及航次须确认，12岁以下另需个案审核。","fixed_rate":true}],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"lindblad","company_name":"Lindblad Expeditions / National Geographic","summary_zh":"多数航程登船时6个月起；南极及多类北极航程4岁起；部分船舶有1、5、7或18岁特殊下限。须父母或法定监护人陪同。尚未核实票价。","source_url":"https://www.expeditions.com/plan/faqs/health-and-safety","automated_price_calculation_enabled":false,"sources":["https://www.expeditions.com/plan/faqs/health-and-safety"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":48,"scope":"antarctic","product":"all"},{"min_months":48,"scope":"arctic","product":"all","conditional":true},{"min_months":6,"scope":"nonpolar","product":"all","conditional":true}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"antarctica21","company_name":"Antarctica21","summary_zh":"飞航8岁起，至少1.20米、30公斤；12岁以下优惠5%（9.5折），成人陪同并签免责。纯海航12岁起。","source_url":"https://www.antarctica21.com/travel-tips-antarctica","automated_price_calculation_enabled":false,"sources":["https://www.antarctica21.com/travel-tips-antarctica"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":96,"scope":"all","product":"fly"},{"min_months":144,"scope":"all","product":"sea"}],"offers":[{"label":"9.5折","min_months":96,"max_months_exclusive":144,"pay_fraction":0.95,"scope":"all","product":"fly","note":"仅飞航产品；至少1.20米、30公斤，成人陪同并签免责。"}],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"ponant","company_name":"Ponant","summary_zh":"经典航程1岁起，1–6岁每航次最多5名；探险航程6岁起，Le Commandant Charcot为8岁起。须能独立进行冲锋艇登陆并立即理解、遵守指令；登陆还须船长及探险领队根据条件同意。未成年人由家长/陪同成人负责。儿童俱乐部4岁起不是登船年龄。儿童票价仍待核实。","source_url":"https://en.ponant.com/faq","automated_price_calculation_enabled":false,"sources":["https://en.ponant.com/faq"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":72,"scope":"all","product":"expedition"},{"min_months":96,"scope":"all","product":"charcot"},{"min_months":12,"scope":"all","product":"classic"}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"silversea","company_name":"Silversea Cruises","summary_zh":"银海官网FAQ：普通船舶6个月起；Silver Endeavour、Silver Cloud、Silver Origin及Silver Wind不接待5岁以下儿童。相邻段落使用over 6 months／over 5 years，恰满年龄的边界须确认。未满18岁须由21岁及以上成人陪同，同舱或连通套房，含未成年人的套房须有成人；非父母陪同需监护同意书。6–12个月需公证免责书。冲锋艇巡游／浮潜5岁起且成人陪同，皮划艇14岁起、极地跳水12岁起且成人陪同，16岁起可单独参加上述活动。儿童折扣尚未核实。","source_url":"https://www.silversea.com/travel-informations/general-information.html","automated_price_calculation_enabled":false,"sources":["https://www.silversea.com/travel-informations/general-information.html"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":6,"scope":"all","product":"classic","exclusive":true},{"min_months":60,"scope":"all","product":"expedition","exclusive":true}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"seabourn","company_name":"Seabourn","summary_zh":"南极及探险航程要求登船时至少6岁。普通航程通常至少6个月，跨洋及连续超过两天海上航行的偏远航程至少12个月；另一个官方FAQ写不接受6/12个月及以下，恰满月龄存在边界差异，须确认。未满21岁须至少21岁的家长、监护人或陪同人同行，每五名未满21岁乘客至少一名成人陪同。儿童优惠金额尚未查明。","source_url":"https://www.seabourn.com/en/us/faq/health-medical-safety/is-there-a-minimum-age-a-child-must-be-to-take-a-cruise","automated_price_calculation_enabled":false,"sources":["https://www.seabourn.com/en/us/faq/health-medical-safety/is-there-a-minimum-age-a-child-must-be-to-take-a-cruise","https://www.seabourn.com/en/us/faq/cruise-planning-identification-requirements/minors-as-guests"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":72,"scope":"antarctic","product":"all"},{"min_months":72,"scope":"arctic","product":"all"},{"min_months":6,"scope":"nonpolar","product":"all","conditional":true}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"scenic","company_name":"Scenic Luxury Cruises","summary_zh":"待确认：本轮未取得足以判定儿童船票或登船资格的公开官方条款；不代表没有优惠。","source_url":"","automated_price_calculation_enabled":false,"sources":[],"review_status":"unresolved","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"atlas","company_name":"Atlas Ocean Voyages","summary_zh":"现行FAQ：极地8岁起；美食/文化航程12个月起。2岁及以下岸上游免费不等于船票免费。2021博客曾写其他目的地2岁起，保留差异，以当前FAQ为主要依据并按航次确认。","source_url":"https://atlasoceanvoyages.com/faq","automated_price_calculation_enabled":false,"sources":["https://atlasoceanvoyages.com/faq"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":96,"scope":"antarctic","product":"all"},{"min_months":96,"scope":"arctic","product":"all"},{"min_months":12,"scope":"nonpolar","product":"all"}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"swan_hellenic","company_name":"Swan Hellenic","summary_zh":"6–16岁第三/第四床位儿童按成人票价35%（3.5折）；须与两名全额成人同舱。单独入住无优惠。极地通常8岁起；6–7岁须船长许可、家长免责文件，并满足冲锋艇身高与理解能力要求。不可直接套用网站最低成人价；税费、舱位与航次报价须确认。","source_url":"https://www.swanhellenic.com/faq","automated_price_calculation_enabled":false,"sources":["https://www.swanhellenic.com/faq"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":96,"scope":"antarctic","product":"all","case_min_months":72},{"min_months":96,"scope":"arctic","product":"all","case_min_months":72}],"offers":[{"label":"3.5折","min_months":72,"max_months_exclusive":204,"pay_fraction":0.35,"scope":"all","product":"all","adults_exact":2,"max_children":2,"note":"两名全额付费成人同舱；儿童占第三／第四床位，仍须符合登船年龄与许可要求。"}],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"viking","company_name":"Viking Expeditions","summary_zh":"Viking官方探险FAQ明确：所有旅客须在计划登船当日或之前满18岁，不接待未成年人，因此没有可适用的未成年船票优惠。","source_url":"https://www.vikingcruises.com/expeditions/frequently-asked-questions.html","automated_price_calculation_enabled":false,"sources":["https://www.vikingcruises.com/expeditions/frequently-asked-questions.html"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":216,"scope":"all","product":"all"}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21","no_minor_fare":true},{"company_id":"hapag_lloyd","company_name":"Hapag-Lloyd Cruises","summary_zh":"EUROPA/EUROPA 2家庭页说明：欧洲航程over the age of 8 months，其他地区至少2岁，以出发日年龄为准；恰满8个月的边界待确认，不套用探险船。页面明确儿童特别价需进入所选航程价格表查看，未核实统一折扣。4–11岁常规岸上游减免50%，不等于儿童船票五折。","source_url":"https://www.hl-cruises.com/cruises/themed-cruises/family","automated_price_calculation_enabled":false,"sources":["https://www.hl-cruises.com/cruises/themed-cruises/family"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":8,"scope":"nonpolar","product":"all","conditional":true,"exclusive":true}],"offers":[],"inquiry_offer":true,"checked_on":"2026-09-21"},{"company_id":"g_adventures","company_name":"G Adventures","summary_zh":"官方总FAQ：非家庭标准行程儿童通常12岁起，须家长陪同，每位成人最多带两名儿童；该规则不是逐条极地航次的最终确认，须查具体产品。National Geographic家庭产品的7–12岁儿童价不能直接用于极地船票，尚未核实极地儿童折扣。","source_url":"https://www.gadventures.com/faqs/","automated_price_calculation_enabled":false,"sources":["https://www.gadventures.com/faqs/","https://www.gadventures.com/travel-styles/national-geographic-expeditions/family-journeys/"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":144,"scope":"all","product":"all","conditional":true}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"heritage","company_name":"Heritage Expeditions","summary_zh":"Heritage Adventurer运输条款：未满18岁须父母/监护人陪同，全程监管，成人下船时不得把儿童独留船上。此条款未给明确最低年龄或儿童折扣，仍须补核，不能推定全年龄可登船。","source_url":"https://www.heritage-expeditions.com/conditions-of-carriage-ha/","automated_price_calculation_enabled":false,"sources":["https://www.heritage-expeditions.com/conditions-of-carriage-ha/"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"intrepid","company_name":"Intrepid Travel","summary_zh":"南极FAQ写极地最低8岁；北极FAQ使用over the age of eight。两页对恰满8岁的边界表述不同，按具体航次确认，不自动放行。未满18岁须法定监护人陪同；冲锋艇另有身高、体重和活动年龄要求。家庭团17岁及以下减免20%的规则不直接适用于极地船票。","source_url":"https://www.intrepidtravel.com/au/antarctica/faqs","automated_price_calculation_enabled":false,"sources":["https://www.intrepidtravel.com/au/antarctica/faqs","https://www.intrepidtravel.com/au/arctic/faqs","https://www.intrepidtravel.com/au/family/faqs"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":96,"scope":"antarctic","product":"all"},{"min_months":96,"scope":"arctic","product":"all","exclusive":true}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"albatros","company_name":"Albatros Expeditions / Polar Latitudes","summary_zh":"当前官方FAQ使用Polar Latitudes Expeditions名称：通常12岁起，7–11岁须提前个案审批和家长免责文件。尚未核实票价。","source_url":"https://albatros-expeditions.com/faq","automated_price_calculation_enabled":false,"sources":["https://albatros-expeditions.com/faq"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":144,"scope":"all","product":"all","case_min_months":84}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"aqua","company_name":"Aqua Expeditions","summary_zh":"Aqua Mare加拉帕戈斯官方文章说明5岁起，且明确可联系询问儿童特别价；不是没有儿童优惠，而是尚无已核实金额/比例。不能推及旗下其他船。","source_url":"https://www.aquaexpeditions.com/blog/galapagos-islands-family-vacation","automated_price_calculation_enabled":false,"sources":["https://www.aquaexpeditions.com/blog/galapagos-islands-family-vacation"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":60,"scope":"nonpolar","product":"all","conditional":true}],"offers":[],"inquiry_offer":true,"checked_on":"2026-09-21"},{"company_id":"secret_atlas","company_name":"Secret Atlas","summary_zh":"待确认：本轮未取得足以判定儿童船票或登船资格的公开官方条款；不代表没有优惠。","source_url":"","automated_price_calculation_enabled":false,"sources":[],"review_status":"unresolved","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"66expeditions","company_name":"66° Expeditions","summary_zh":"官网承运人标准条款（2026年4月起适用）：不接受6岁以下儿童。所有未成年人须由父母或法定监护人陪同，入住同舱或相邻舱，不得单独入住阳台房或套房；未满15岁另有监护承诺书、授权随行监护人（年满18岁）要求，须按船司核验。儿童折扣仍待核实。","source_url":"https://66expeditions.com/termsAndConditions?type=%E6%89%BF%E8%BF%90%E4%BA%BA%E6%A0%87%E5%87%86%E6%9D%A1%E6%AC%BE&legalContentId=38","automated_price_calculation_enabled":false,"sources":["https://66expeditions.com/termsAndConditions?type=%E6%89%BF%E8%BF%90%E4%BA%BA%E6%A0%87%E5%87%86%E6%9D%A1%E6%AC%BE&legalContentId=38"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":72,"scope":"all","product":"all"}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"antarpply","company_name":"Antarpply Expeditions","summary_zh":"待确认：本轮未取得足以判定儿童船票或登船资格的公开官方条款；不代表没有优惠。","source_url":"","automated_price_calculation_enabled":false,"sources":[],"review_status":"unresolved","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"polar_latitudes","company_name":"Polar Latitudes","summary_zh":"通常12岁起；7–11岁须额外筛查、预订前批准及家长免责文件。合同禁止未满18岁乘客参加陌生人拼舱，要求与guardian over 21同舱；满21岁的边界待确认。FAQ与运输条款两份来源分别支持年龄和同舱要求。儿童票价待核实。","source_url":"https://polar-latitudes.com/resources/faq/","automated_price_calculation_enabled":false,"sources":["https://polar-latitudes.com/resources/faq/","https://polar-latitudes.com/terms-and-conditions/"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":144,"scope":"all","product":"all","case_min_months":84}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"royal_galapagos","company_name":"Royal Galapagos","summary_zh":"待确认：本轮未取得足以判定儿童船票或登船资格的公开官方条款；不代表没有优惠。","source_url":"","automated_price_calculation_enabled":false,"sources":[],"review_status":"unresolved","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"regent","company_name":"Regent Seven Seas Cruises","summary_zh":"登船时6个月起，连续3天或以上海上航行须满1岁；未满18岁须与18岁以上成人同套房。尚未核实儿童票价。","source_url":"https://www.rssc.com/legal/terms-conditions","automated_price_calculation_enabled":false,"sources":["https://www.rssc.com/legal/terms-conditions"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":6,"scope":"all","product":"all","conditional":true}],"offers":[],"inquiry_offer":false,"checked_on":"2026-09-21"},{"company_id":"explora","company_name":"Explora Journeys","summary_zh":"本页列出的指定航程：2–17岁最多减免50%（并非固定5折），6–23个月婴儿免船费；年龄按航行时计算，页脚说明从6个月接待。页面属于额外乘客/青少年优惠；第三/第四人同舱的儿童具体条款、航次适用性及税费仍需逐项确认。不能据此判断所有航次可免费登船。","source_url":"https://explorajourneys.com/us/en/info/special-offers/additional-guests-and-younger-travellers","automated_price_calculation_enabled":false,"sources":["https://explorajourneys.com/us/en/info/special-offers/additional-guests-and-younger-travellers"],"review_status":"partially_verified","reviewed_on":"2026-09-21","automated_boarding_eligibility_enabled":false,"age_reference_date":"按具体来源；未明确的待确认，不能统一假定为登船日","age_rules":[{"min_months":6,"scope":"all","product":"all","conditional":true}],"offers":[{"label":"最多减免50%","min_months":24,"max_months_exclusive":216,"pay_fraction":0.5,"scope":"all","product":"all","conditional":true,"note":"仅官方优惠页所列航程；第三／第四人条件、税费和实际减免须确认，不等于固定五折。"},{"label":"婴儿免船费（有条件）","min_months":6,"max_months_exclusive":24,"pay_fraction":0,"scope":"all","product":"all","conditional":true,"note":"仅指定航程，税费、额外床位及登船条件须确认。"}],"inquiry_offer":false,"checked_on":"2026-09-21"}]};
const {
  useState,
  useEffect,
  useRef
} = React;
function parsedTimestamp(value) {
  const parsed = new Date(value || '');
  return Number.isFinite(parsed.getTime()) ? parsed : null;
}
function beijingDateKey(value) {
  const parsed = parsedTimestamp(value);
  if (!parsed) return '';
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(parsed).reduce((result, part) => {
    result[part.type] = part.value;
    return result;
  }, {});
  return [parts.year, parts.month, parts.day].join('-');
}
function formatBeijingTime(value) {
  const parsed = parsedTimestamp(value);
  if (!parsed) return '未知';
  const parts = new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(parsed).reduce((result, part) => {
    result[part.type] = part.value;
    return result;
  }, {});
  return parts.year + '-' + parts.month + '-' + parts.day + ' ' + parts.hour + ':' + parts.minute + '（北京时间）';
}
function isBeijingToday(value) {
  return beijingDateKey(value) === beijingDateKey(new Date().toISOString());
}
function fmt(n, currency) {
  if (!Number.isFinite(n) || n <= 0) return '价格待确认';
  const code = (currency || 'USD').toUpperCase();
  const prefixes = {
    USD: 'US$',
    AUD: 'AU$',
    CAD: 'CA$',
    NZD: 'NZ$',
    EUR: '€',
    GBP: '£',
    NOK: 'NOK ',
    CHF: 'CHF '
  };
  return (prefixes[code] || code + ' ') + n.toLocaleString();
}
function voyageRegions(v) {
  return Array.isArray(v && v.regions) && v.regions.length ? v.regions : [v && v.r].filter(Boolean);
}
const NON_POLAR_DESTINATIONS = [
  { id: 'galapagos', label: '加拉帕戈斯' },
  { id: 'tahiti', label: '大溪地' },
  { id: 'mediterranean', label: '地中海' }
];
function topLevelRegion(region) {
  return NON_POLAR_DESTINATIONS.some(destination => destination.id === region) ? 'nonpolar' : region;
}
function voyageInRegion(v, region) {
  return voyageRegions(v).some(value => region === 'nonpolar' ? topLevelRegion(value) === 'nonpolar' : value === region);
}
function NonPolarDestinationFilter({ voyages, value, onChange }) {
  const options = NON_POLAR_DESTINATIONS.filter(destination => voyages.some(v => voyageInRegion(v, destination.id)) || value === destination.id);
  return React.createElement('div', {
    className: 'filter-row nonpolar-destinations',
    role: 'group',
    'aria-label': '非极地目的地',
    style: { display: 'flex', flexWrap: 'wrap', gap: 8, margin: '16px 0' }
  }, [{ id: 'all', label: '全部非极地' }, ...options].map(option => React.createElement('button', {
    key: option.id,
    className: value === option.id ? 'on' : '',
    'aria-pressed': value === option.id,
    onClick: () => onChange(option.id)
  }, option.label)));
}
function voyageShip(v) {
  return v && v.ship ? v.ship : '官网未公布';
}
function normalizePortName(value) {
  const port = String(value || '').trim();
  if (!port) return '';
  const prefixProbe = port.slice(0, 24).replace(/е/g, 'e').replace(/Е/g, 'E') + port.slice(24);
  const datedPortPrefix = /^(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\.?\s+\d{1,2}(?:st|nd|rd|th)?\s*,\s*/i;
  const match = prefixProbe.match(datedPortPrefix);
  const cleanedPort = match ? port.slice(match[0].length).trim() : port;
  const aliasKey = cleanedPort
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[øØ]/g, 'o')
    .toLowerCase()
    .replace(/[-(),]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const verifiedPortAliases = {
    ushuaia: 'Ushuaia',
    'ushuaia argentina': 'Ushuaia',
    'buenos aires': 'Buenos Aires',
    'buenos aires argentina': 'Buenos Aires',
    longyearbyen: 'Longyearbyen',
    'longyearbyen svalbard': 'Longyearbyen',
    'punta arenas': 'Punta Arenas',
    'punta arenas chile': 'Punta Arenas',
    reykjavik: 'Reykjavik',
    'reykjavik iceland': 'Reykjavik',
    nuuk: 'Nuuk',
    'nuuk greenland': 'Nuuk',
    tromso: 'Tromsø',
    'tromso norway': 'Tromsø',
    kangerlussuaq: 'Kangerlussuaq',
    'kangerlussuaq greenland': 'Kangerlussuaq',
    toronto: 'Toronto',
    'toronto canada': 'Toronto',
    halifax: 'Halifax',
    'halifax canada': 'Halifax',
    'halifax nova scotia': 'Halifax',
    'halifax nova scotia canada': 'Halifax',
    'king george island south shetland islands': 'King George Island',
    'constable pynt': 'Constable Point',
    'constable point': 'Constable Point',
    stanley: 'Port Stanley',
    'port stanley': 'Port Stanley'
  };
  return verifiedPortAliases[aliasKey] || cleanedPort;
}
function voyageAvailabilityKey(voyage) {
  return String(voyage && voyage.availability || 'unknown');
}
function voyageMatchesDuration(voyage, durationKey) {
  if (durationKey === 'short') return voyage.days <= 13;
  if (durationKey === 'medium') return voyage.days >= 14 && voyage.days <= 30;
  if (durationKey === 'long') return voyage.days >= 31;
  return true;
}
function voyageMatchesCompareDate(voyage, state) {
  const voyageDate = String(voyage && voyage.date || '');
  if (state.boardingStart || state.boardingEnd) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(voyageDate)) return false;
    if (state.boardingStart && voyageDate < state.boardingStart) return false;
    if (state.boardingEnd && voyageDate > state.boardingEnd) return false;
  }
  const voyageMonth = voyageDate.slice(0, 7);
  if (state.dateMode === 'range') {
    let rangeMin = state.rangeStart === 'all' ? null : state.rangeStart;
    let rangeMax = state.rangeEnd === 'all' ? null : state.rangeEnd;
    if (rangeMin && rangeMax && rangeMin > rangeMax) {
      const swap = rangeMin;
      rangeMin = rangeMax;
      rangeMax = swap;
    }
    if (rangeMin && voyageMonth < rangeMin) return false;
    if (rangeMax && voyageMonth > rangeMax) return false;
    return true;
  }
  if (state.dateMode === 'multiYear') {
    return !state.selectedYearMonths.length || state.selectedYearMonths.includes(voyageMonth);
  }
  if (state.selectedYear !== 'all' && voyageMonth.slice(0, 4) !== state.selectedYear) return false;
  return !state.selectedMonths.length || state.selectedMonths.includes(voyageMonth.slice(5, 7));
}
function voyageSearchText(voyage, company) {
  const departurePort = normalizePortName(voyage.port);
  const arrivalPort = normalizePortName(voyage.arrivalPort);
  const sourceParts = [
    voyage.name,
    voyageShip(voyage),
    departurePort,
    arrivalPort,
    voyage.port,
    voyage.arrivalPort,
    company.cn,
    company.en
  ].filter(Boolean);
  const sourceText = sourceParts.join(' ').toLowerCase();
  const aliases = [];
  const regions = voyageRegions(voyage);
  if (regions.includes('antarctic')) aliases.push('南极 南极洲');
  if (regions.includes('arctic')) aliases.push('北极 北极地区');
  if (voyageInRegion(voyage, 'nonpolar')) aliases.push('非极地');
  if (regions.includes('tahiti')) aliases.push('大溪地 法属波利尼西亚 Tahiti');
  if (regions.includes('mediterranean')) aliases.push('地中海 Mediterranean');
  if (regions.includes('galapagos')) aliases.push('加拉帕戈斯 加拉巴哥斯 Galapagos');
  const aliasRules = [
    [/antarctic peninsula|\bpeninsula\b/, '南极半岛 半岛'],
    [/south georgia/, '南乔治亚 南乔治亚岛'],
    [/falklands?|malvinas/, '福克兰 福克兰群岛 马岛 马尔维纳斯 马尔维纳斯群岛'],
    [/south shetland/, '南设得兰 南设得兰群岛'],
    [/svalbard|spitsbergen/, '斯瓦尔巴 斯瓦尔巴群岛 斯匹次卑尔根 斯匹次卑尔根群岛'],
    [/east greenland/, '东格陵兰 东格陵兰岛'],
    [/west greenland/, '西格陵兰 西格陵兰岛'],
    [/greenland/, '格陵兰 格陵兰岛'],
    [/iceland/, '冰岛'],
    [/faroe/, '法罗 法罗群岛'],
    [/jan mayen/, '扬马延'],
    [/franz josef/, '法兰士约瑟夫地群岛'],
    [/north pole/, '北极点'],
    [/ushuaia/, '乌斯怀亚'],
    [/longyearbyen/, '朗伊尔城'],
    [/reykjav[ií]k/, '雷克雅未克'],
    [/punta arenas/, '蓬塔阿雷纳斯'],
    [/buenos aires/, '布宜诺斯艾利斯'],
    [/kangerlussuaq/, '康克鲁斯瓦格'],
    [/\bnuuk\b/, '努克'],
    [/troms[oø]/, '特罗姆瑟'],
    [/ross sea/, '罗斯海 南极罗斯海'],
    [/weddell sea/, '威德尔海 南极威德尔海'],
    [/drake passage/, '德雷克海峡 德雷克 穿越德雷克海峡'],
    [/northwest passage/, '西北航道'],
    [/canadian arctic/, '加拿大北极']
  ];
  aliasRules.forEach(([pattern, value]) => {
    if (pattern.test(sourceText)) aliases.push(value);
  });
  const isThreeIslands = (
    /falklands?|malvinas/.test(sourceText)
    && /south georgia/.test(sourceText)
    && /antarctic peninsula|antarctica|antarctic/.test(sourceText)
  );
  if (isThreeIslands) aliases.push('三岛 南极三岛');
  const isArcticThreeIslands = (
    regions.includes('arctic')
    && /iceland/.test(sourceText)
    && /greenland/.test(sourceText)
    && /svalbard|spitsbergen/.test(sourceText)
  );
  if (isArcticThreeIslands) aliases.push('北极三岛');
  const isAntarcticCircle = (
    regions.includes('antarctic')
    && /antarctic circle|polar circle|crossing the circle|beyond the circle|into the circle/.test(sourceText)
  );
  if (isAntarcticCircle) aliases.push('南极圈 穿越南极圈');
  const isArcticCircle = (
    regions.includes('arctic')
    && /arctic circle|polar circle/.test(sourceText)
  );
  if (isArcticCircle) aliases.push('北极圈 穿越北极圈');
  const isFlyAntarctica = (
    regions.includes('antarctic')
    && /fly.*drake|drake.*fly|air.?cruise|fly south|fly north|fly in|fly out|micro cruise by air/.test(sourceText)
  );
  if (isFlyAntarctica) aliases.push('飞南极 飞越德雷克海峡 南极空海联运');
  return sourceParts.concat(aliases).join(' ').toLowerCase();
}
function applyVoyageFilters(voyages, state, cos, excludedDimension) {
  const excludedDimensions = new Set(
    Array.isArray(excludedDimension)
      ? excludedDimension
      : excludedDimension
        ? [excludedDimension]
        : []
  );
  const query = String(state.routeQuery || '').trim().toLowerCase();
  return voyages.filter(voyage => {
    const company = getCo(voyage.co, cos);
    const departurePort = normalizePortName(voyage.port);
    const arrivalPort = normalizePortName(voyage.arrivalPort);
    const queryText = voyageSearchText(voyage, company);
    const queryMatches = query === '三岛'
      ? queryText.includes('南极三岛')
      : queryText.includes(query);
    if (!excludedDimensions.has('date') && !voyageMatchesCompareDate(voyage, state)) return false;
    if (!excludedDimensions.has('company') && state.companyKeys.length > 0 && !state.companyKeys.includes(voyage.co)) return false;
    if (!excludedDimensions.has('ship') && state.shipKey !== 'all' && voyageShip(voyage) !== state.shipKey) return false;
    if (!excludedDimensions.has('duration') && !voyageMatchesDuration(voyage, state.durationKey)) return false;
    if (!excludedDimensions.has('departure') && state.departureKey !== 'all' && departurePort !== state.departureKey) return false;
    if (!excludedDimensions.has('arrival') && state.arrivalKey !== 'all' && arrivalPort !== state.arrivalKey) return false;
    if (!excludedDimensions.has('availability') && state.availabilityKey !== 'all' && voyageAvailabilityKey(voyage) !== state.availabilityKey) return false;
    if (!excludedDimensions.has('price') && state.priceKey === 'priced' && !pricedCabins(voyage).length) return false;
    if (!excludedDimensions.has('price') && state.priceKey === 'unpriced' && pricedCabins(voyage).length) return false;
    if (!excludedDimensions.has('discount') && state.discountOnly && voyageBookableDiscount(voyage) <= 0) return false;
    if (!excludedDimensions.has('query') && query && !queryMatches) return false;
    return true;
  });
}
function voyageFareNote(voyage) {
  if (voyage.booking_restriction === 'charter_only') return '仅包船 · 需询价';
  if (voyage.booking_restriction === 'groups_only') return '仅团体预订 · 需询价';
  if (voyage.content_verification_status === 'unverified_current_official_listing_absent') return '当前官网未核实 · 请向船司询价';
  if (voyage.co === 'regent') return '官网每人价 · 地区优惠及包含项目可能不同';
  return '';
}
function voyageDurationLabel(voyage) {
  if (!voyage || !voyage.days) return '待确认';
  return voyage.days + '天' + (Number.isInteger(voyage.nights) ? voyage.nights + '晚' : '');
}
function cabinAvailability(cabin) {
  if (!cabin) return '官网未公布库存';
  if (cabin.availability === 'sold_out' || cabin.avail === 0) return '售罄';
  if (cabin.availability === 'waitlist') return '候补';
  if (cabin.availability === 'call_for_availability') return '电话确认';
  if (Number.isInteger(cabin.avail)) return '剩余 ' + cabin.avail + ' 间';
  if (cabin.availability === 'limited') return '余位紧张';
  if (cabin.availability === 'available') return '可预订';
  return '官网未公布库存';
}
function pricedCabins(voyage) {
  return (voyage && voyage.cabins || []).filter(cabin => Number.isFinite(cabin.price) && cabin.price > 0);
}
function isConfirmedBookableCabin(cabin) {
  if (!cabin) return false;
  const status = String(cabin.availability || '').toLowerCase();
  if (cabin.avail === 0 || ['sold_out', 'waitlist', 'call_for_availability'].includes(status)) return false;
  return status === 'available' || status === 'limited' || Number.isFinite(cabin.avail) && cabin.avail > 0;
}
function voyageBookableCabins(voyage) {
  return pricedCabins(voyage).filter(isConfirmedBookableCabin);
}
function cabinCurrency(cabin, voyage) {
  return String(cabin && cabin.currency || voyage && voyage.currency || 'unknown').toUpperCase();
}
function voyageBookablePriceDetails(voyage) {
  const cabins = voyageBookableCabins(voyage);
  if (!cabins.length) return null;
  const currencies = [...new Set(cabins.map(cabin => cabinCurrency(cabin, voyage)))];
  const declaredCurrency = String(voyage && voyage.currency || '').toUpperCase();
  const selectedCurrency = declaredCurrency && currencies.includes(declaredCurrency) ? declaredCurrency : currencies.length === 1 ? currencies[0] : null;
  if (!selectedCurrency) return null;
  const selectedCabin = cabins.filter(cabin => cabinCurrency(cabin, voyage) === selectedCurrency).sort((a, b) => a.price - b.price || String(a.cat || '').localeCompare(String(b.cat || ''), 'zh-CN'))[0];
  return {
    cabin: selectedCabin,
    price: selectedCabin.price,
    currency: selectedCurrency
  };
}
function voyageBookableMinPrice(voyage) {
  const details = voyageBookablePriceDetails(voyage);
  return details ? details.price : null;
}
function voyageBookablePriceCurrency(voyage) {
  const details = voyageBookablePriceDetails(voyage);
  return details ? details.currency : String(voyage && voyage.currency || 'unknown').toUpperCase();
}
function voyageBookableDailyPrice(voyage) {
  const price = voyageBookableMinPrice(voyage);
  return price == null || !Number.isFinite(voyage && voyage.days) || voyage.days <= 0 ? null : Math.round(price / voyage.days);
}
function voyageBookableDiscount(voyage) {
  return voyageBookableCabins(voyage).reduce((highest, cabin) => {
    if (!Number.isFinite(cabin.orig) || cabin.orig <= cabin.price) return highest;
    return Math.max(highest, Math.round((1 - cabin.price / cabin.orig) * 100));
  }, 0);
}
function bookableDiscountOffers(voyages) {
  return (voyages || []).flatMap(voyage => {
    const details = voyageBookablePriceDetails(voyage);
    const cabin = details && details.cabin;
    if (!cabin || !Number.isFinite(cabin.orig) || cabin.orig <= cabin.price) return [];
    const paidRatio = cabin.price / cabin.orig;
    return [{
      voyage: voyage,
      cabin: cabin,
      paidRatio: paidRatio,
      pct: Math.round((1 - paidRatio) * 100)
    }];
  }).sort((a, b) => a.paidRatio - b.paidRatio || compareVoyageIdentity(a.voyage, b.voyage));
}
function voyageMinPrice(voyage) {
  return voyageBookableMinPrice(voyage);
}
function voyagePriceCurrency(voyage, price) {
  const details = voyageBookablePriceDetails(voyage);
  if (details && (price == null || details.price === price)) return details.currency;
  const cabin = (voyage && voyage.cabins || []).find(item => item.price === price);
  return cabinCurrency(cabin, voyage);
}
function compareVoyageIdentity(a, b) {
  return String(a && a.date || '').localeCompare(String(b && b.date || '')) || String(a && a.co || '').localeCompare(String(b && b.co || ''), 'zh-CN') || String(a && a.name || '').localeCompare(String(b && b.name || ''), 'zh-CN') || String(a && a.id || '').localeCompare(String(b && b.id || ''), 'zh-CN');
}
function compareVoyagePrice(a, b, perDay, direction) {
  const aPrice = perDay ? voyageBookableDailyPrice(a) : voyageBookableMinPrice(a);
  const bPrice = perDay ? voyageBookableDailyPrice(b) : voyageBookableMinPrice(b);
  if (aPrice == null && bPrice == null) return compareVoyageIdentity(a, b);
  if (aPrice == null) return 1;
  if (bPrice == null) return -1;
  const aCurrency = voyageBookablePriceCurrency(a);
  const bCurrency = voyageBookablePriceCurrency(b);
  const priceComparison = (aPrice - bPrice) * (direction === 'desc' ? -1 : 1);
  return priceComparison || aCurrency.localeCompare(bCurrency) || compareVoyageIdentity(a, b);
}
function sortVoyages(voyages, sortBy, direction) {
  return [...voyages].sort((a, b) => {
    if (sortBy === 'price' || sortBy === 'pday') {
      return compareVoyagePrice(a, b, sortBy === 'pday', direction);
    }
    if (sortBy === 'disc') {
      const discountComparison = (voyageBookableDiscount(a) - voyageBookableDiscount(b)) * (direction === 'asc' ? 1 : -1);
      return discountComparison || compareVoyageIdentity(a, b);
    }
    const dateComparison = String(a && a.date || '').localeCompare(String(b && b.date || '')) * (direction === 'desc' ? -1 : 1);
    return dateComparison || compareVoyageIdentity(a, b);
  });
}
function getCo(id, cos) {
  return cos.find(c => c.id === id) || {};
}
function companyDisplayName(company) {
  if (String(company && company.id || '').toLowerCase() === 'viking') {
    return '维京探险邮轮';
  }
  return company && (company.cn || company.en || company.id) || '';
}
function normalizeCompanyCatalogue(companies) {
  return (Array.isArray(companies) ? companies : []).map(company => (
    String(company && company.id || '').toLowerCase() === 'viking'
      ? { ...company, cn: '维京探险邮轮', en: company.en || 'Viking Expeditions' }
      : company
  ));
}
function companyShipOptions(companyKeys, cos) {
  const companies = companyKeys.length === 0 ? cos : cos.filter(company => companyKeys.includes(company.id));
  const seen = new Set();
  return companies.flatMap(company => (company.ships || []).map(ship => String(ship || '').trim())).filter(ship => {
    if (!ship || seen.has(ship)) return false;
    seen.add(ship);
    return true;
  });
}
const A21_PRODUCT_TYPE_FILTER_IDS = {
  'Antarctica & South Georgia Air-Cruise': '20',
  'Antarctica Express Air-Cruise': '2',
  'Classic Antarctica Air-Cruise': '1',
  'Falklands (Malvinas) & South Georgia': '31',
  'Falklands (Malvinas), South Georgia & Antarctica': '29',
  'Falklands Expedition': '37',
  'Inaugural Air-Cruise': '28',
  'Patagonia & Chilean Fjords': '36',
  'Polar Circle Air-Cruise': '4'
};
function antarctica21VoyageUrl(v) {
  const productType = A21_PRODUCT_TYPE_FILTER_IDS[String(v && v.name || '').trim()];
  const dateMatch = String(v && v.date || '').match(/^(\d{4})-(\d{2})-/);
  if (!productType || !dateMatch) return v && v.url || '';
  const monthTimestamp = Date.UTC(Number(dateMatch[1]), Number(dateMatch[2]) - 1, 1);
  const params = new URLSearchParams({
    product_type: productType,
    product_date: String(monthTimestamp),
    product_venue: String(v && v.ship || '')
  });
  return 'https://www.antarctica21.com/booking/find-your-expedition?' + params.toString();
}
function voyageUrl(v, co) {
  if (String(v && v.co || co && co.id || '').toLowerCase() === 'quark' && v && v.itinerary_url) {
    try {
      const itinerary = new URL(v.itinerary_url);
      if (itinerary.protocol === 'https:' && ['quarkexpeditions.com', 'www.quarkexpeditions.com'].includes(itinerary.hostname) && itinerary.pathname.startsWith('/expeditions/')) {
        itinerary.hash = 'itineraries';
        return itinerary.href;
      }
    } catch (_) {}
  }
  if (String(v && v.co || co && co.id || '').toLowerCase() === 'antarctica21') {
    return antarctica21VoyageUrl(v);
  }
  if (v && v.url) return v.url;
  if (!co || !co.domain) return '#';
  var dom = co.domain;
  if ((v && v.r) === 'galapagos' && co.id === 'royal_galapagos') {
    return 'https://www.royalgalapagos.com/bookings/royal/All/All/All/2';
  }
  var r = (v && v.r) === 'arctic' ? 'arctic' : 'antarctic';
  var ant = r === 'antarctic' ? 'antarctica' : 'arctic';
  var paths = {
    silversea: '/destinations/' + (r === 'antarctic' ? 'antarctica-cruise' : 'cruises-arctic-greenland') + '.html',
    ponant: '/' + r,
    quarkexpeditions: '/' + (r === 'antarctic' ? 'antarctic' : 'arctic'),
    oceanwide: '/' + r + '/cruises',
    hx: '/' + r,
    atlasoceanvoyages: '/destinations/' + ant,
    seabourn: '/en-us/cruise-destinations/' + ant + '-cruises',
    auroraexpeditions: '/destinations/' + ant,
    '66expeditions': '/expeditions?region=' + ant,
    'polar-latitudes': '/expeditions/' + ant,
    swanhellenic: '/destinations/' + ant,
    antarctica21: '/journeys',
    scenic: '/cruises/' + ant,
    poseidonexpeditions: '/' + ant,
    vikingcruises: '/expeditions/destinations/' + ant,
    'albatros-expeditions': '/' + r + '/cruises',
    'gadventures': '/destinations/' + ant,
    'oceanwide-expeditions': '/' + r + '/cruises',
    travelhx: '/' + r,
    antarpplyexpeditions: '/' + ant,
    aquaexpeditions: '/' + ant,
    secretatlas: '/' + ant,
    'hl-cruises': '/' + ant,
    'heritage-expeditions': '/' + ant,
    intrepidtravel: '/' + ant
  };
  var key = dom.replace(/^www\./, '').split('.')[0];
  return 'https://' + dom + (paths[key] || '/' + ant);
}
const VIKING_VOYAGE_DETAIL_EVENT = 'polar:open-viking-voyage-detail';
function isVikingVoyage(v, co) {
  return String(v && v.co || co && co.id || '').toLowerCase() === 'viking';
}
function voyageActionHref(v, co) {
  if (isVikingVoyage(v, co)) {
    return '#voyage=' + encodeURIComponent(String(v && v.id || 'viking'));
  }
  return voyageUrl(v, co);
}
function voyageActionTarget(v, co) {
  return isVikingVoyage(v, co) ? null : '_blank';
}
function openVoyageAction(v, co) {
  if (isVikingVoyage(v, co)) {
    window.dispatchEvent(new CustomEvent(VIKING_VOYAGE_DETAIL_EVENT, {
      detail: {
        voyage: v,
        company: co
      }
    }));
    return;
  }
  window.open(voyageUrl(v, co), '_blank', 'noopener,noreferrer');
}
function handleVoyageAction(event, v, co) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  openVoyageAction(v, co);
}
function voyageActionLabel(v, standardLabel) {
  return isVikingVoyage(v) ? '查看本站准确航次' : standardLabel;
}
const VIKING_PROMOTION_DETAIL_EVENT = 'polar:open-viking-promotion-detail';
function isVikingPromotion(promotion, company) {
  return String(promotion && promotion.co || company && company.id || '').toLowerCase() === 'viking';
}
function promotionActionLabel(promotion, standardLabel) {
  return isVikingPromotion(promotion) ? '查看本站适用范围' : standardLabel;
}
function openPromotionAction(promotion, company, voyages) {
  if (isVikingPromotion(promotion, company)) {
    window.dispatchEvent(new CustomEvent(VIKING_PROMOTION_DETAIL_EVENT, {
      detail: {
        promotion: promotion,
        company: company,
        voyages: voyages || []
      }
    }));
    return;
  }
  if (promotion && promotion.src) {
    window.open(promotion.src, '_blank', 'noopener,noreferrer');
  }
}
function VoyageDetailModalHost({
  voyages,
  companies
}) {
  const [selection, setSelection] = useState(null);
  useEffect(() => {
    const openDetail = event => {
      const detail = event && event.detail;
      if (!detail || !detail.voyage) return;
      setSelection(detail);
    };
    window.addEventListener(VIKING_VOYAGE_DETAIL_EVENT, openDetail);
    return () => window.removeEventListener(VIKING_VOYAGE_DETAIL_EVENT, openDetail);
  }, []);
  useEffect(() => {
    const openExactHashVoyage = () => {
      const match = /^#voyage=([^&]+)$/.exec(String(window.location.hash || ''));
      if (!match) return;
      let voyageId = '';
      try {
        voyageId = decodeURIComponent(match[1]);
      } catch (error) {
        return;
      }
      const voyage = (voyages || []).find(item => String(item && item.id || '') === voyageId);
      if (!voyage || !isVikingVoyage(voyage)) return;
      const company = (companies || []).find(item => item.id === voyage.co) || {};
      setSelection({
        voyage: voyage,
        company: company
      });
    };
    openExactHashVoyage();
    window.addEventListener('hashchange', openExactHashVoyage);
    return () => window.removeEventListener('hashchange', openExactHashVoyage);
  }, [voyages, companies]);
  useEffect(() => {
    if (!selection) return undefined;
    const closeOnEscape = event => {
      if (event.key === 'Escape') setSelection(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selection]);
  if (!selection) return null;
  const v = selection.voyage;
  const co = selection.company || {};
  const cabins = (v.cabins || []).slice().sort((a, b) => {
    const aPrice = Number.isFinite(a.price) ? a.price : Number.MAX_SAFE_INTEGER;
    const bPrice = Number.isFinite(b.price) ? b.price : Number.MAX_SAFE_INTEGER;
    return aPrice - bPrice || String(a.cat || '').localeCompare(String(b.cat || ''), 'zh-CN');
  });
  const priceDetails = voyageBookablePriceDetails(v);
  const departure = normalizePortName(v.port) || '官网未公布';
  const arrival = normalizePortName(v.arrivalPort) || '官网未公布';
  const officialUrl = voyageUrl(v, co);
  const close = () => {
    setSelection(null);
    if (/^#voyage=/.test(String(window.location.hash || ''))) {
      window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    }
  };
  const ce = React.createElement;
  const fact = (label, value) => ce('div', {
    style: {
      padding: '12px 14px',
      border: '1px solid var(--ice)',
      borderRadius: 12,
      background: 'var(--card)'
    }
  }, ce('span', {
    style: {
      display: 'block',
      color: 'var(--text2)',
      fontSize: 12,
      marginBottom: 5
    }
  }, label), ce('strong', {
    style: {
      color: 'var(--text)',
      fontSize: 15,
      overflowWrap: 'anywhere',
      wordBreak: 'break-word'
    }
  }, value));
  return ce('div', {
    role: 'presentation',
    onMouseDown: event => {
      if (event.target === event.currentTarget) close();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 10000,
      padding: 16,
      background: 'rgba(4, 20, 34, .58)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, ce('section', {
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'viking-voyage-detail-title',
    style: {
      width: 'min(760px, 100%)',
      maxHeight: 'min(860px, calc(100vh - 32px))',
      overflowY: 'auto',
      borderRadius: 22,
      background: 'var(--bg)',
      color: 'var(--text)',
      boxShadow: '0 28px 80px rgba(0, 0, 0, .28)',
      border: '1px solid rgba(255,255,255,.7)'
    }
  }, ce('div', {
    style: {
      padding: '22px 22px 18px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 18,
      borderBottom: '1px solid var(--ice)'
    }
  }, ce('div', null, ce('span', {
    style: {
      display: 'block',
      color: 'var(--accent)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      marginBottom: 7
    }
  }, '本站准确航次 · 维京探险邮轮'), ce('h2', {
    id: 'viking-voyage-detail-title',
    style: {
      margin: 0,
      fontSize: 'clamp(22px, 4vw, 30px)',
      lineHeight: 1.2
    }
  }, v.name || '维京航次'), ce('p', {
    style: {
      margin: '8px 0 0',
      color: 'var(--text2)',
      fontSize: 14
    }
  }, v.date || '日期待确认', ' · ', voyageShip(v), ' · ', voyageDurationLabel(v))), ce('button', {
    type: 'button',
    onClick: close,
    'aria-label': '关闭航次详情',
    style: {
      width: 38,
      height: 38,
      flexShrink: 0,
      borderRadius: 999,
      border: '1px solid var(--ice)',
      background: 'var(--card)',
      color: 'var(--text)',
      cursor: 'pointer',
      fontSize: 22,
      lineHeight: 1
    }
  }, '×')), ce('div', {
    style: {
      padding: 22
    }
  }, ce('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(145px, 1fr))',
      gap: 10,
      marginBottom: 20
    }
  }, fact('出发日期', v.date || '官网未公布'), fact('结束日期', v.endDate || '官网未公布'), fact('船只', voyageShip(v)), fact('行程', departure + ' → ' + arrival), fact('最低可订价', priceDetails ? fmt(priceDetails.price, priceDetails.currency) : '价格待确认'), fact('官方航次标识', v.official_product_id || '官网未公布')), ce('h3', {
    style: {
      margin: '0 0 10px',
      fontSize: 16
    }
  }, '官网舱位与库存'), ce('div', {
    style: {
      display: 'grid',
      gap: 8,
      marginBottom: 20
    }
  }, cabins.map((cabin, index) => ce('div', {
    key: String(cabin.cat || index) + index,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) auto',
      gap: 12,
      alignItems: 'center',
      padding: '11px 13px',
      borderRadius: 11,
      background: 'var(--card)',
      border: '1px solid var(--ice)',
      fontSize: 13
    }
  }, ce('strong', {
    style: {
      minWidth: 0
    }
  }, cabin.cat || '官网舱型'), ce('span', null, Number.isFinite(cabin.price) ? fmt(cabin.price, cabin.currency || v.currency) : '价格待确认'), ce('span', {
    style: {
      color: cabin.availability === 'sold_out' || cabin.avail === 0 ? 'var(--text2)' : 'var(--green)',
      whiteSpace: 'nowrap',
      gridColumn: '1 / -1',
      textAlign: 'right'
    }
  }, cabinAvailability(cabin)))), ce('aside', {
    role: 'note',
    style: {
      padding: '14px 16px',
      borderRadius: 12,
      background: 'rgba(244, 169, 0, .10)',
      color: 'var(--text)',
      fontSize: 13,
      lineHeight: 1.65,
      marginBottom: 16
    }
  }, '维京官网无法从中国网络可靠锁定具体班期，且可能跳转到中国站首页。本站先展示已通过完整性校验的准确航次；打开官网后，请重新选择 ', v.date || '对应日期', '、', voyageShip(v), '。'), ce('a', {
    href: officialUrl,
    target: '_blank',
    rel: 'noopener noreferrer',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: 46,
      padding: '10px 16px',
      borderRadius: 12,
      background: 'var(--accent)',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 700,
      boxSizing: 'border-box'
    }
  }, '维京官网产品页（需重新选择日期）')))));
}
function PromotionDetailModalHost() {
  const [selection, setSelection] = useState(null);
  useEffect(() => {
    const openDetail = event => {
      const detail = event && event.detail;
      if (!detail || !detail.promotion) return;
      setSelection(detail);
    };
    window.addEventListener(VIKING_PROMOTION_DETAIL_EVENT, openDetail);
    return () => window.removeEventListener(VIKING_PROMOTION_DETAIL_EVENT, openDetail);
  }, []);
  useEffect(() => {
    if (!selection) return undefined;
    const closeOnEscape = event => {
      if (event.key === 'Escape') setSelection(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selection]);
  if (!selection) return null;
  const promotion = selection.promotion;
  const company = selection.company || {};
  const allVoyages = selection.voyages || [];
  const applicableIds = new Set(promotion.applicable_voyage_ids || []);
  const applicableVoyages = allVoyages.filter(voyage => (
    applicableIds.size
      ? applicableIds.has(voyage.id)
      : promotion.src && voyage.url === promotion.src
  )).sort(compareVoyageIdentity);
  const declaredCount = Number(promotion.applicable_voyage_count);
  const applicableCount = Number.isFinite(declaredCount) && declaredCount >= 0
    ? declaredCount
    : applicableVoyages.length;
  const close = () => setSelection(null);
  const ce = React.createElement;
  return ce('div', {
    role: 'presentation',
    onMouseDown: event => {
      if (event.target === event.currentTarget) close();
    },
    style: {
      position: 'fixed', inset: 0, zIndex: 10001, padding: 16,
      background: 'rgba(4, 20, 34, .58)', backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center',
      justifyContent: 'center'
    }
  }, ce('section', {
    role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'viking-promotion-detail-title',
    style: {
      width: 'min(760px, 100%)', maxHeight: 'min(860px, calc(100vh - 32px))',
      overflowY: 'auto', borderRadius: 22, background: 'var(--bg)', color: 'var(--text)',
      boxShadow: '0 28px 80px rgba(0, 0, 0, .28)', border: '1px solid rgba(255,255,255,.7)'
    }
  }, ce('div', {
    style: { padding: '22px', display: 'flex', justifyContent: 'space-between', gap: 18, borderBottom: '1px solid var(--ice)' }
  }, ce('div', null, ce('span', {
    style: { display: 'block', color: 'var(--accent)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', marginBottom: 7 }
  }, '本站优惠适用范围 · ', companyDisplayName(company)), ce('h2', {
    id: 'viking-promotion-detail-title', style: { margin: 0, fontSize: 'clamp(22px, 4vw, 30px)', lineHeight: 1.2 }
  }, promotion.t || '维京官网优惠'), ce('p', {
    style: { margin: '8px 0 0', color: 'var(--text2)', fontSize: 14, lineHeight: 1.6 }
  }, promotion.d || promotion.v || '优惠条件以官网条款为准')), ce('button', {
    type: 'button', onClick: close, 'aria-label': '关闭优惠适用范围',
    style: { width: 38, height: 38, flexShrink: 0, borderRadius: 999, border: '1px solid var(--ice)', background: 'var(--card)', color: 'var(--text)', cursor: 'pointer', fontSize: 22 }
  }, '×')), ce('div', { style: { padding: 22 } }, ce('div', {
    style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10, marginBottom: 18 }
  }, ce('div', {
    style: { padding: '12px 14px', border: '1px solid var(--ice)', borderRadius: 12, background: 'var(--card)' }
  }, ce('span', { style: { display: 'block', color: 'var(--text2)', fontSize: 12, marginBottom: 5 } }, '优惠内容'), ce('strong', null, promotion.v || '官网条件优惠')), ce('div', {
    style: { padding: '12px 14px', border: '1px solid var(--ice)', borderRadius: 12, background: 'var(--card)' }
  }, ce('span', { style: { display: 'block', color: 'var(--text2)', fontSize: 12, marginBottom: 5 } }, '适用航次'), ce('strong', null, applicableCount, ' 条')), ce('div', {
    style: { padding: '12px 14px', border: '1px solid var(--ice)', borderRadius: 12, background: 'var(--card)' }
  }, ce('span', { style: { display: 'block', color: 'var(--text2)', fontSize: 12, marginBottom: 5 } }, '截止日期'), ce('strong', null, promotion.exp || '官网未公布'))), applicableVoyages.length ? ce('div', null, ce('h3', {
    style: { margin: '0 0 10px', fontSize: 16 }
  }, '站内已匹配航次'), ce('div', {
    style: { display: 'grid', gap: 8, marginBottom: 18 }
  }, applicableVoyages.map(voyage => ce('button', {
    key: voyage.id, type: 'button', onClick: () => openVoyageAction(voyage, company),
    style: { textAlign: 'left', padding: '11px 13px', borderRadius: 11, background: 'var(--card)', border: '1px solid var(--ice)', color: 'var(--text)', cursor: 'pointer' }
  }, ce('strong', { style: { display: 'block', marginBottom: 4 } }, voyage.name || '维京航次'), ce('span', {
    style: { color: 'var(--text2)', fontSize: 13 }
  }, voyage.date || '日期待确认', ' · ', voyageShip(voyage), ' · ', normalizePortName(voyage.port) || '港口待确认'))))) : ce('p', {
    style: { color: 'var(--text2)', fontSize: 13, lineHeight: 1.65, margin: '0 0 18px' }
  }, '本条优惠未提供可逐条匹配的航次标识；本站只展示官网声明的适用数量，不推测具体班期。'), ce('aside', {
    role: 'note', style: { padding: '14px 16px', borderRadius: 12, background: 'rgba(244, 169, 0, .10)', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }
  }, '维京英国站在中国网络可能跳转到中国站首页，无法可靠保留当前优惠或班期。官网按钮仅供再次核对，不代表会直达本条优惠。'), promotion.src ? ce('a', {
    href: promotion.src, target: '_blank', rel: 'noopener noreferrer',
    style: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 46, padding: '10px 16px', borderRadius: 12, background: 'var(--accent)', color: '#fff', textDecoration: 'none', fontWeight: 700, boxSizing: 'border-box' }
  }, '维京官网促销页（需重新核对）') : null)));
}
function activateOnKeyboard(event, action) {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  action();
}
function Logo({
  co,
  size
}) {
  const s = size || 40;
  const id = co.id || '';
  const logoExtensions = {
    royal_galapagos: '.svg',
    regent: '.svg',
    quark: '.png',
    oceanwide: '.png',
    aurora: '.svg',
    hx: '.png',
    poseidon: '.png',
    lindblad: '.svg',
    antarctica21: '.webp',
    ponant: '.png',
    silversea: '.png',
    seabourn: '.png',
    scenic: '.svg',
    atlas: '.png',
    swan_hellenic: '.png',
    viking: '.svg',
    hapag_lloyd: '.png',
    g_adventures: '.svg',
    heritage: '.svg',
    intrepid: '.png',
    albatros: '.png',
    aqua: '.svg',
    '66expeditions': '.png',
    antarpply: '.png',
    polar_latitudes: '.png'
  };
  const [failed, setFailed] = useState(false);
  const logoExtension = logoExtensions[id];
  const src = logoExtension ? './assets/logos/' + id + logoExtension + '?v=' + new Date().toISOString().slice(0, 10).replace(/-/g, '') : '';
  const fallback = (co.cn || co.id || '?').charAt(0);
  const bg = co.color || 'var(--accent)';
  const logoBg = co.logo_bg || '#fff';
  const isLarge = s > 30;
  const w = isLarge ? co.logo_wide ? s * 3.4 : s * 2.25 : s;
  const radius = isLarge ? 12 : 8;
  if (failed || !src) {
    return React.createElement('div', {
      className: isLarge ? 'ico logo-box' : 'company-logo logo-box',
      style: {
        width: w,
        height: s,
        background: bg,
        borderRadius: radius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 800,
        fontSize: isLarge ? 15 : 11,
        overflow: 'hidden'
      }
    }, fallback);
  }
  return React.createElement('div', {
    className: isLarge ? 'ico logo-box' : 'company-logo logo-box',
    style: {
      width: w,
      height: s,
      background: logoBg,
      borderRadius: radius,
      fontSize: isLarge ? 13 : 11,
      overflow: 'hidden',
      padding: isLarge ? 8 : 4
    }
  }, React.createElement('img', {
    src: src,
    alt: co.cn || co.id,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    },
    onError: function () {
      setFailed(true);
    }
  }));
}
function Icon({
  name,
  size
}) {
  const s = size || 18;
  const a = {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      verticalAlign: 'middle',
      marginRight: 4,
      flexShrink: 0
    }
  };
  const ce = React.createElement;
  const p = function (d) {
    return ce('path', {
      d: d
    });
  };
  if (name === 'compare') return ce('svg', a, p('M5 19V11a1 1 0 0 1 1-1'), p('M12 19V7a1 1 0 0 1 1-1'), p('M19 19V3a1 1 0 0 1 1-1'));
  if (name === 'companies') return ce('svg', a, p('M4 21h16'), p('M6 21V9l6-4.5 6 4.5v12'));
  if (name === 'alerts') return ce('svg', a, p('M4 11 9 6 12 9l5-5'), p('M17 4v4h4'));
  if (name === 'news') return ce('svg', a, p('M6 3h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z'), p('M15 3v5h5'), p('M8 12h8M8 16h6'));
  if (name === 'cabin') return ce('svg', a, p('M3 3h7v7H3z'), p('M14 3h7v7h-7z'), p('M3 14h7v7H3z'), p('M14 14h7v7h-7z'));
  if (name === 'query') return ce('svg', a, p('M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'));
  if (name === 'search') return ce('svg', a, p('M18 18 21 21'), p('M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z'));
  if (name === 'promo') return ce('svg', a, p('M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z'), p('M8 8h8M8 12h6'));
  if (name === 'home') return ce('svg', a, p('M3 10 12 3l9 7'), p('M6 8.5V20a1 1 0 0 0 1 1h3.5v-5.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V21H17a1 1 0 0 0 1-1V8.5'));
  return null;
}
function CabinMeta({
  co,
  voyage,
  cabin,
  pct,
  showShip,
  showDate,
  showPrice,
  showAvail
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "task-meta-grid"
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta-chip"
  }, co.cn || co.en || voyage.co), /*#__PURE__*/React.createElement("span", {
    className: "meta-chip"
  }, cabin.cat), showShip ? /*#__PURE__*/React.createElement("span", {
    className: "meta-chip"
  }, voyageShip(voyage)) : null, showDate && voyage.date ? /*#__PURE__*/React.createElement("span", {
    className: "meta-chip"
  }, voyage.date) : null, showPrice && cabin.orig ? /*#__PURE__*/React.createElement("span", {
    className: "meta-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "old-price"
  }, fmt(cabin.orig, cabin.currency || voyage.currency)), /*#__PURE__*/React.createElement("span", {
    className: "price-arrow"
  }, "\u2192"), /*#__PURE__*/React.createElement("strong", null, fmt(cabin.price, cabin.currency || voyage.currency))) : null, pct ? /*#__PURE__*/React.createElement("span", {
    className: "meta-discount"
  }, "-", pct, "%") : null, showAvail ? /*#__PURE__*/React.createElement("span", {
    className: "meta-avail"
  }, cabinAvailability(cabin)) : null);
}
function dateKey(d) {
  const pad = n => String(n).padStart(2, '0');
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
}
function isVoyageStale(v, now) {
  const scrapedAt = Date.parse(v.scraped_at || '');
  return !Number.isFinite(scrapedAt) || scrapedAt < (now || Date.now()) - 36 * 60 * 60 * 1000;
}
function promoQuality(p) {
  const title = p.t || '';
  const desc = p.d || '';
  const value = p.v || '';
  const exp = (p.exp || '').trim();
  const src = p.src || '';
  const id = p.id || '';
  const text = (title + ' ' + desc + ' ' + value + ' ' + exp + ' ' + src).toLowerCase();
  if (/抓取失败|page\.goto|err_|too_many_redirects|failed|error|cruise not found/.test(text)) return {
    ok: false,
    reason: '抓取失败'
  };
  if (!src) return {
    ok: false,
    reason: '缺少来源'
  };
  if (/manual/i.test(id)) return {
    ok: false,
    reason: '手工占位'
  };
  if (/^\d{4}-\d{2}-\d{2}$/.test(exp) && exp < dateKey(new Date())) return {
    ok: false,
    reason: '已过期'
  };
  if (/complimentary hot\b/i.test(value)) return {
    ok: false,
    reason: '字段截断'
  };
  if (/^(全包价格|升级全包价格)$/i.test(title)) return {
    ok: false,
    reason: '票价类型'
  };
  const polar = /南极|北极|antarctic|antarctica|arctic|svalbard|spitsbergen|greenland|iceland|north pole|northwest passage|south georgia|falkland|ushuaia|longyearbyen|polar|ross sea|weddell|飞南极/i.test(title + ' ' + desc + ' ' + src);
  const nonPolar = /central america|gal[aá]pagos|south pacific|komodo|european river|europe river|southeast asia|western europe|mediterranean|alaska/i.test(title + ' ' + desc + ' ' + src);
  if (nonPolar && !polar) return {
    ok: false,
    reason: '非极地促销'
  };
  const concrete = /\d+\s*%|\$\s*[\d,]+|¥\s*[\d,]+|立减|减\$|off|saving|credit|free|upgrade|升级|特价|早鸟|尾单|solo|single|附加费|推荐|bonus|官网条件优惠|官方优惠(?:码|\s*ID)|官网现价较原价低/i.test(title + ' ' + desc + ' ' + value);
  if (!concrete) return {
    ok: false,
    reason: '缺少明确优惠'
  };
  return {
    ok: true,
    reason: ''
  };
}
const VALID_TABS = ['home', 'alerts', 'drops', 'compare', 'news', 'companies', 'query', 'family'];
const COMPANY_INVENTORY_ALIASES = {
  albatros: 'polar_latitudes'
};
const TAB_LABELS = {
  home: '首页',
  alerts: '促销情报',
  drops: '降价航次',
  compare: '航次查询',
  news: '极地情报站',
  companies: '邮轮公司',
  family: '儿童与青少年政策',
  query: '智能查询'
};
function GlobalNav({
  active,
  onNavigate
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainItems = [['home', '首页'], ['compare', '航次'], ['alerts', '促销'], ['news', '情报'], ['companies', '邮轮公司'], ['family', '儿童政策']];
  const navigate = id => {
    setMenuOpen(false);
    onNavigate(id);
  };
  useEffect(() => {
    setMenuOpen(false);
  }, [active]);
  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "global-nav-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "global-nav-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "global-brand",
    onClick: () => navigate('home'),
    "aria-label": "\u8239\u5BA2\u5355\u8239\u7968\u5DE5\u4F5C\u53F0\u9996\u9875"
  }, /*#__PURE__*/React.createElement("strong", null, "\u8239\u5BA2\u5355\u8239\u7968\u5DE5\u4F5C\u53F0"), /*#__PURE__*/React.createElement("span", {
    className: "global-version-badge"
  }, "V1")), /*#__PURE__*/React.createElement("nav", {
    className: "global-primary",
    "aria-label": "\u5168\u7AD9\u5BFC\u822A"
  }, mainItems.map(item => /*#__PURE__*/React.createElement("button", {
    key: item[0],
    className: active === item[0] ? 'on' : '',
    "aria-current": active === item[0] ? 'page' : undefined,
    onClick: () => navigate(item[0])
  }, item[1]))), /*#__PURE__*/React.createElement("div", {
    className: "global-utilities"
  }, /*#__PURE__*/React.createElement("a", {
    className: "global-tools-button",
    href: "/internal/"
  }, "\u5185\u90E8\u5DE5\u5177"), /*#__PURE__*/React.createElement("button", {
    className: "global-menu-button",
    "aria-expanded": menuOpen,
    "aria-controls": "global-navigation-menu",
    onClick: () => setMenuOpen(!menuOpen)
  }, "\u83DC\u5355")))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "global-navigation-menu",
    id: "global-navigation-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "global-menu-main"
  }, mainItems.map(item => /*#__PURE__*/React.createElement("button", {
    key: item[0],
    className: active === item[0] ? 'on' : '',
    onClick: () => navigate(item[0])
  }, item[1]))), /*#__PURE__*/React.createElement("div", {
    className: "global-menu-tools"
  }, /*#__PURE__*/React.createElement("span", null, "\u5185\u90E8\u5DE5\u5177"), /*#__PURE__*/React.createElement("a", {
    className: "internal-tool-link",
    href: "/internal/"
  }, "\u5168\u90E8\u5185\u90E8\u4EF7\u683C"))));
}
function App() {
  const [data, setData] = useState(null);
  const [cos, setCos] = useState([]);
  const savedTab = (() => {
    try {
      const requestedTab = new URLSearchParams(window.location.search).get('tab');
      if (VALID_TABS.includes(requestedTab)) return requestedTab;
      const storedTab = localStorage.getItem('polarTab_v2');
      return VALID_TABS.includes(storedTab) ? storedTab : 'home';
    } catch (e) {
      return 'home';
    }
  })();
  const [tab, setTab] = useState(savedTab);
  const initialDetailCompanyId = (() => {
    try {
      return new URLSearchParams(window.location.search).get('company') || null;
    } catch (e) {
      return null;
    }
  })();
  const [detailCompanyId, setDetailCompanyId] = useState(initialDetailCompanyId);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const writeRoute = function (nextTab, companyId, mode, detailFromApp, detailDepth) {
    try {
      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set('tab', nextTab);
      if (nextTab !== 'family') nextUrl.searchParams.delete('family_company');
      if (companyId) nextUrl.searchParams.set('company', companyId);else nextUrl.searchParams.delete('company');
      const nextState = {
        tab: nextTab
      };
      if (companyId) nextState.company = companyId;
      if (detailFromApp) nextState.detailFromApp = true;
      if (detailDepth) nextState.detailDepth = detailDepth;
      window.history[mode === 'replace' ? 'replaceState' : 'pushState'](nextState, '', nextUrl);
    } catch (e) {}
  };
  const navigateTo = nextTab => {
    if (!VALID_TABS.includes(nextTab)) return;
    if (nextTab === 'home') setTab('home');
    if (nextTab === 'alerts') setTab('alerts');
    if (nextTab === 'drops') setTab('drops');
    if (nextTab === 'compare') setTab('compare');
    if (nextTab === 'news') setTab('news');
    if (nextTab === 'family') setTab('family');
    if (nextTab === 'companies') setTab('companies');
    if (nextTab === 'query') setTab('query');
    setDetailCompanyId(null);
    setMobileMoreOpen(false);
    try {
      const params = new URLSearchParams(window.location.search);
      const routeChanged = params.get('tab') !== nextTab || Boolean(params.get('company'));
      writeRoute(nextTab, null, routeChanged ? 'push' : 'replace', false, 0);
    } catch (e) {}
  };
  useEffect(() => {
    try {
      localStorage.setItem('polarTab_v2', tab);
    } catch (e) {}
  }, [tab]);
  useEffect(() => {
    try {
      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set('tab', tab);
      if (detailCompanyId) nextUrl.searchParams.set('company', detailCompanyId);else nextUrl.searchParams.delete('company');
      const initialState = {
        tab: tab
      };
      if (detailCompanyId) initialState.company = detailCompanyId;
      window.history.replaceState(initialState, '', nextUrl);
    } catch (e) {}
  }, []);
  useEffect(() => {
    const handlePopState = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const requestedTab = params.get('tab');
        setTab(VALID_TABS.includes(requestedTab) ? requestedTab : 'home');
        setDetailCompanyId(params.get('company') || null);
        setMobileMoreOpen(false);
      } catch (e) {
        setTab('home');
        setDetailCompanyId(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  const openCompanyDetail = function (company) {
    const companyId = company && company.id;
    if (!companyId) return;
    setDetailCompanyId(companyId);
    setMobileMoreOpen(false);
    try {
      const currentCompanyId = new URLSearchParams(window.location.search).get('company');
      const currentDepth = Number(window.history.state && window.history.state.detailDepth || 0);
      const nextDepth = currentCompanyId && currentCompanyId !== companyId ? currentDepth + 1 : Math.max(1, currentDepth);
      writeRoute(tab, companyId, currentCompanyId === companyId ? 'replace' : 'push', true, nextDepth);
    } catch (e) {}
  };
  const closeCompanyDetail = function () {
    try {
      const currentCompanyId = new URLSearchParams(window.location.search).get('company');
      if (currentCompanyId && window.history.state && window.history.state.detailFromApp) {
        const detailDepth = Math.max(1, Number(window.history.state.detailDepth || 1));
        window.history.go(-detailDepth);
        return;
      }
    } catch (e) {}
    setDetailCompanyId(null);
    writeRoute(tab, null, 'replace', false, 0);
  };
  useEffect(() => {
    if (detailCompanyId) window.scrollTo(0, 0);
  }, [detailCompanyId]);
  const [loading, setLoading] = useState(true);
  const [cacheInfo, setCacheInfo] = useState(null); // null=live, {cached_at:'...'}
  useEffect(() => {
    const CACHE_KEY = 'polar_public_data_cache_v2';
    const cacheBust = Date.now();
    try {
      localStorage.removeItem('polar_data_cache_v1');
    } catch (e) {}
    Promise.all([fetch('./data/site_data.json?v=' + cacheBust).then(r => r.json()), fetch('./data/companies.json?v=' + cacheBust).then(r => r.json())]).then(([d, c]) => {
      setData(d);
      setCos(normalizeCompanyCatalogue(c));
      setLoading(false);
      setCacheInfo(null);
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          site_data: d,
          companies: c,
          cached_at: new Date().toISOString()
        }));
      } catch (e) {}
    }).catch(() => {
      try {
        var cached = JSON.parse(localStorage.getItem(CACHE_KEY));
        if (cached && cached.site_data) {
          setData(cached.site_data);
          setCos(normalizeCompanyCatalogue(cached.companies || []));
          setCacheInfo({
            cached_at: cached.cached_at
          });
        }
      } catch (e) {}
      setLoading(false);
    });
  }, []);
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spin"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text2)',
      marginTop: 16
    }
  }, "\u52A0\u8F7D\u6570\u636E\u4E2D...")));
  if (!data) return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("p", null, "\u6570\u636E\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")));
  const V = data.voyages || [];
  const rawPromotions = data.promotions || [];
  const P = rawPromotions.filter(p => promoQuality(p).ok);
  const N = data.news || [];
  const voyageCompanyCount = new Set(V.map(v => v.co)).size;
  const staleVoyageCount = V.filter(v => isVoyageStale(v)).length;
  const collectorRelease = data.collector_release || {};
  const collectorStatus = data.collector_status || {};
  const collectorGeneratedAt = collectorRelease.generated_at || data.updated || '';
  const collectorGeneratedMs = Date.parse(collectorGeneratedAt);
  const collectorExpired = !Number.isFinite(collectorGeneratedMs) || collectorGeneratedMs < Date.now() - 36 * 60 * 60 * 1000;
  const verifiedZeroCount = (collectorRelease.verified_zero_inventory_companies || []).length;
  const nonpolarRelease = data.nonpolar_release || {};
  const nonpolarGeneratedMs = Date.parse(nonpolarRelease.generated_at || '');
  const nonpolarFresh = nonpolarRelease.status === 'passed' && Number.isFinite(nonpolarGeneratedMs) && nonpolarGeneratedMs >= Date.now() - 36 * 60 * 60 * 1000 && isBeijingToday(nonpolarRelease.generated_at);
  const nonpolarExtraCompanies = nonpolarRelease.status === 'passed' ? 2 : 0;
  const collectorCoverage = (collectorRelease.completed_companies || voyageCompanyCount + verifiedZeroCount) + nonpolarExtraCompanies;
  const collectorReusedPages = Number(collectorRelease.reused_pages || 0);
  const collectorFailureCount = Number(collectorRelease.failure_count || 0);
  const collectorGateErrorCount = Number(collectorRelease.gate_error_count || 0);
  const collectorFreshToday = collectorStatus.last_result === 'passed' && !collectorExpired && isBeijingToday(collectorGeneratedAt) && collectorCoverage === cos.length && collectorReusedPages === 0 && collectorFailureCount === 0 && collectorGateErrorCount === 0 && (!data.nonpolar_release || nonpolarFresh);
  const collectorQualityTone = collectorFreshToday ? 'fresh' : 'warning';
  const collectorQualityTitle = collectorFreshToday ? '今日官网数据已完整更新' : '当前展示最近一次已确认数据';
  const collectorQualityMessage = '工作台仅展示通过完整性校验并正式发布的数据；请以页面标注的更新时间为准。';
  var antCos = new Set();
  var arcCos = new Set();
  var galCos = new Set();
  V.forEach(v => {
    if (voyageInRegion(v, 'antarctic')) antCos.add(v.co);
    if (voyageInRegion(v, 'arctic')) arcCos.add(v.co);
    if (voyageInRegion(v, 'nonpolar')) galCos.add(v.co);
  });
  const dropsCount = bookableDiscountOffers(V).length;
  const stats = {
    total: cos.length,
    ant: antCos.size,
    arc: arcCos.size,
    gal: galCos.size,
    promo: P.length,
    drops: dropsCount,
    voyageCompanyCount: voyageCompanyCount,
    staleVoyageCount: staleVoyageCount,
    updated: data.updated || ''
  };
  const detailCo = detailCompanyId ? cos.find(company => company.id === detailCompanyId) || null : null;
  const detailPage = detailCo ? /*#__PURE__*/React.createElement(CompanyPage, {
    co: detailCo,
    V: V,
    P: P,
    cos: cos,
    onSelectCompany: openCompanyDetail,
    onBack: closeCompanyDetail,
    onNavigate: navigateTo
  }) : null;
  const workbench = /*#__PURE__*/React.createElement("div", {
    className: "app workbench-app tab-" + tab,
    hidden: Boolean(detailCo),
    style: detailCo ? {
      display: 'none'
    } : undefined
  }, cacheInfo && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff3cd',
      color: '#856404',
      padding: '10px 20px',
      textAlign: 'center',
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      flexWrap: 'wrap',
      borderBottom: '1px solid #ffc107'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u6570\u636E\u66F4\u65B0\u4E8E ", formatBeijingTime(cacheInfo.cached_at), "\uFF0C\u6B63\u5728\u91CD\u65B0\u8FDE\u63A5..."), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.location.reload(),
    style: {
      padding: '4px 16px',
      borderRadius: 6,
      border: '1px solid #856404',
      background: 'transparent',
      color: '#856404',
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\u5237\u65B0")), /*#__PURE__*/React.createElement(GlobalNav, {
    active: tab,
    onNavigate: navigateTo
  }), /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "topbar-home",
    onClick: () => navigateTo('home'),
    "aria-label": "\u8FD4\u56DE\u9996\u9875"
  }, "\u5355\u8239\u7968\u5DE5\u4F5C\u53F0"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "南极 · 北极 · 非极地航次 · 船司促销 · 官方来源")), /*#__PURE__*/React.createElement("div", {
    className: "badge",
    title: collectorRelease.release_id ? "Release ID " + collectorRelease.release_id : ""
  }, "官网数据 · ", collectorGeneratedAt ? formatBeijingTime(collectorGeneratedAt) : '\u5F85\u540C\u6B65')), /*#__PURE__*/React.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'nav-core ' + (tab === 'home' ? 'on' : ''),
    onClick: () => navigateTo('home')
  }, "\u9996\u9875"), /*#__PURE__*/React.createElement("button", {
    className: 'nav-core ' + (tab === 'alerts' ? 'on' : ''),
    onClick: () => navigateTo('alerts')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "promo",
    size: 15
  }), "\u4FC3\u9500"), /*#__PURE__*/React.createElement("button", {
    className: 'nav-secondary ' + (tab === 'drops' ? 'on' : ''),
    onClick: () => navigateTo('drops')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alerts",
    size: 15
  }), "\u964D\u4EF7"), /*#__PURE__*/React.createElement("button", {
    className: 'nav-core ' + (tab === 'compare' ? 'on' : ''),
    onClick: () => navigateTo('compare')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compare",
    size: 15
  }), "\u6BD4\u4EF7"), /*#__PURE__*/React.createElement("button", {
    className: 'nav-secondary ' + (tab === 'news' ? 'on' : ''),
    onClick: () => navigateTo('news')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "news",
    size: 15
  }), "\u8D44\u8BAF"), /*#__PURE__*/React.createElement("button", {
    className: 'nav-core ' + (tab === 'companies' ? 'on' : ''),
    onClick: () => navigateTo('companies')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "companies",
    size: 15
  }), "\u8239\u53F8"), /*#__PURE__*/React.createElement("button", {
    className: 'nav-secondary ' + (tab === 'query' ? 'on' : ''),
    onClick: () => navigateTo('query')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "query",
    size: 15
  }), "\u67E5\u8BE2"), /*#__PURE__*/React.createElement("button", {
    className: "nav-more " + (mobileMoreOpen ? 'on' : ''),
    onClick: () => setMobileMoreOpen(!mobileMoreOpen),
    "aria-expanded": mobileMoreOpen,
    "aria-controls": "mobile-more-menu"
  }, "\u66F4\u591A")), mobileMoreOpen && /*#__PURE__*/React.createElement("div", {
    className: "mobile-more-menu",
    id: "mobile-more-menu"
  }, [['drops', '\u964D\u4EF7'], ['news', '\u60C5\u62A5'], ['query', '\u667A\u80FD\u67E5\u8BE2']].map(item => /*#__PURE__*/React.createElement("button", {
    key: item[0],
    className: tab === item[0] ? 'on' : '',
    onClick: () => navigateTo(item[0])
  }, item[1])), /*#__PURE__*/React.createElement("a", {
    className: "internal-tool-link",
    href: "/internal/"
  }, "\u5C01\u95ED\u6298\u6263\u7ED3\u7B97")), tab !== 'home' && /*#__PURE__*/React.createElement("div", {
    className: "page-context-bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "page-back-home",
    "aria-label": "\u8FD4\u56DE\u9996\u9875",
    onClick: () => navigateTo('home')
  }, "\u8FD4\u56DE"), /*#__PURE__*/React.createElement("strong", null, TAB_LABELS[tab] || '')), tab === 'home' && /*#__PURE__*/React.createElement(HomeView, {
    V: V,
    P: P,
    N: N,
    cos: cos,
    onDetail: openCompanyDetail,
    setTab: navigateTo,
    updated: stats.updated,
    voyageCompanyCount: voyageCompanyCount,
    staleVoyageCount: staleVoyageCount
  }), tab === 'compare' && /*#__PURE__*/React.createElement(CompareView, {
    V: V,
    cos: cos,
    onDetail: openCompanyDetail
  }), tab === 'family' && React.createElement(FamilyPoliciesView, { cos: cos }), tab === 'companies' && /*#__PURE__*/React.createElement(CompaniesView, {
    cos: cos,
    P: P,
    V: V,
    onDetail: openCompanyDetail
  }), tab === 'alerts' && /*#__PURE__*/React.createElement(PromoView, {
    P: P,
    V: V,
    cos: cos,
    rawCount: rawPromotions.length
  }), tab === 'drops' && /*#__PURE__*/React.createElement(DropsView, {
    V: V,
    cos: cos,
    onDetail: openCompanyDetail
  }), tab === 'news' && /*#__PURE__*/React.createElement(NewsView, {
    N: N,
    cos: cos
  }), tab === 'query' && /*#__PURE__*/React.createElement(QueryView, {
    V: V,
    P: P,
    N: N,
    cos: cos,
    onDetail: openCompanyDetail
  }), /*#__PURE__*/React.createElement("footer", {
    className: "data-quality-footer quality-" + collectorQualityTone,
    role: "status"
  }, /*#__PURE__*/React.createElement("strong", null, collectorQualityTitle), /*#__PURE__*/React.createElement("span", null, collectorQualityMessage, " 官网数据时间：", formatBeijingTime(collectorGeneratedAt), "；", staleVoyageCount, " 条超过 36 小时。报价前请打开来源复核。")));
  return /*#__PURE__*/React.createElement(React.Fragment, null, workbench, detailPage, /*#__PURE__*/React.createElement(VoyageDetailModalHost, {
    voyages: V,
    companies: cos
  }), /*#__PURE__*/React.createElement(PromotionDetailModalHost, null));
}
function MinimalHomeHero({
  V,
  cos,
  topDrops,
  setTab,
  updated
}) {
  const featured = topDrops[0];
  const featuredVoyage = featured && featured.voyage;
  const featuredCabin = featured && featured.cabin;
  const featuredCo = featured && featured.co;
  const homeVoyages = V.filter(v => v.days >= 3 && v.date && v.cabins && v.cabins.length);
  const [region, setRegion] = useState('antarctic');
  const [destination, setDestination] = useState('all');
  const [year, setYear] = useState('all');
  const [month, setMonth] = useState('all');
  const [company, setCompany] = useState('all');
  const [port, setPort] = useState('all');
  const changeRegion = function (nextRegion) {
    if (nextRegion === region) return;
    setRegion(nextRegion);
    setDestination('all');
    setYear('all');
    setMonth('all');
    setCompany('all');
    setPort('all');
  };
  const applyHomeFilters = function (excludedDimension) {
    return homeVoyages.filter(v => {
    if (!voyageInRegion(v, region)) return false;
      if (region === 'nonpolar' && destination !== 'all' && !voyageInRegion(v, destination)) return false;
      if (excludedDimension !== 'year' && year !== 'all' && v.date.slice(0, 4) !== year) return false;
      if (excludedDimension !== 'month' && month !== 'all' && v.date.slice(5, 7) !== month) return false;
      if (excludedDimension !== 'company' && company !== 'all' && v.co !== company) return false;
      if (excludedDimension !== 'port' && port !== 'all' && normalizePortName(v.port) !== port) return false;
    return true;
    });
  };
  const homeFacetValues = function (voyages, valueForVoyage, selectedValue) {
    const selectedValues = selectedValue && selectedValue !== 'all' ? [selectedValue] : [];
    return [...new Set([...voyages.map(valueForVoyage).filter(Boolean), ...selectedValues])].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  };
  const years = homeFacetValues(applyHomeFilters('year'), v => v.date.slice(0, 4), year);
  const months = homeFacetValues(applyHomeFilters('month'), v => v.date.slice(5, 7), month);
  const companyFacetVoyages = applyHomeFilters('company');
  const companyCounts = companyFacetVoyages.reduce((counts, voyage) => {
    counts[voyage.co] = (counts[voyage.co] || 0) + 1;
    return counts;
  }, {});
  const companyIds = homeFacetValues(companyFacetVoyages, v => v.co, company);
  const ports = homeFacetValues(applyHomeFilters('port'), v => normalizePortName(v.port), port);
  const searchCount = applyHomeFilters().length;
  const openSearch = () => {
    try {
      sessionStorage.removeItem('polarCompareState_v1');
      localStorage.setItem('polarHeroSearch', JSON.stringify({
        region: region,
        destination: destination,
        year: year,
        month: month,
        company: company,
        port: port
      }));
    } catch (e) {}
    setTab('compare');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "minimal-home-intro"
  }, /*#__PURE__*/React.createElement("section", {
    className: "polar-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-shade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("h1", null, "\u4E16\u754C\u5C3D\u5934\uFF0C\u4E0B\u4E00\u7A0B"), /*#__PURE__*/React.createElement("span", null, cos.length, " \u5BB6\u5B98\u65B9\u8239\u53F8 \xB7 ", V.length, " \u6761\u5357\u6781\u3001\u5317\u6781\u4E0E\u975E\u6781\u5730\u822A\u6B21"), /*#__PURE__*/React.createElement("div", {
    className: "hero-region-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: region === 'antarctic' ? 'primary' : '',
    onClick: () => changeRegion('antarctic')
  }, "\u63A2\u7D22\u5357\u6781"), /*#__PURE__*/React.createElement("button", {
    className: region === 'arctic' ? 'primary' : '',
    onClick: () => changeRegion('arctic')
  }, "\u63A2\u7D22\u5317\u6781"), /*#__PURE__*/React.createElement("button", {
    className: region === 'nonpolar' ? 'primary' : '',
    onClick: () => changeRegion('nonpolar')
  }, "探索非极地")), region === 'nonpolar' && React.createElement(NonPolarDestinationFilter, {
    voyages: homeVoyages,
    value: destination,
    onChange: value => {
      setDestination(value);
      setYear('all');
      setMonth('all');
      setCompany('all');
      setPort('all');
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-search"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u51FA\u884C\u5E74\u4EFD"), /*#__PURE__*/React.createElement("select", {
    value: year,
    onChange: event => setYear(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5E74\u4EFD"), years.map(item => /*#__PURE__*/React.createElement("option", {
    key: item,
    value: item
  }, item, "\u5E74")))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u51FA\u884C\u6708\u4EFD"), /*#__PURE__*/React.createElement("select", {
    value: month,
    onChange: event => setMonth(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u6708\u4EFD"), months.map(item => /*#__PURE__*/React.createElement("option", {
    key: item,
    value: item
  }, Number(item), "\u6708")))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u8239\u53F8"), /*#__PURE__*/React.createElement("select", {
    value: company,
    onChange: event => setCompany(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u8239\u53F8\uFF08", companyFacetVoyages.length, "\uFF09"), companyIds.map(id => {
    const co = getCo(id, cos);
    return /*#__PURE__*/React.createElement("option", {
      key: id,
      value: id
    }, co.cn || co.en || id, "\uFF08", companyCounts[id] || 0, "\uFF09");
  }))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u51FA\u53D1\u6E2F\u53E3"), /*#__PURE__*/React.createElement("select", {
    value: port,
    onChange: event => setPort(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u51FA\u53D1\u6E2F"), ports.map(item => /*#__PURE__*/React.createElement("option", {
    key: item,
    value: item
  }, item)))), /*#__PURE__*/React.createElement("button", {
    className: "hero-search-submit",
    onClick: openSearch
  }, "\u67E5\u627E ", searchCount, " \u6761\u822A\u6B21"))), featuredVoyage && featuredCabin && /*#__PURE__*/React.createElement("section", {
    className: "featured-voyage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "featured-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/product-design/featured-voyage.jpg",
    alt: "\u6781\u5730\u90AE\u8F6E\u822A\u884C\u4E8E\u51B0\u5DDD\u6D77\u57DF"
  })), /*#__PURE__*/React.createElement("div", {
    className: "featured-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "featured-brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    co: featuredCo,
    size: 52
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, cos.length, " \u5BB6\u8239\u53F8\u5F53\u524D\u6700\u4F4E\u5B9E\u4ED8\u6298\u6263"), /*#__PURE__*/React.createElement("strong", null, featuredCo.cn || featuredCo.en || featuredVoyage.co))), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    className: "featured-voyage-link",
    href: voyageActionHref(featuredVoyage, featuredCo),
    target: voyageActionTarget(featuredVoyage, featuredCo),
    rel: voyageActionTarget(featuredVoyage, featuredCo) ? 'noopener noreferrer' : undefined,
    onClick: isVikingVoyage(featuredVoyage, featuredCo) ? event => handleVoyageAction(event, featuredVoyage, featuredCo) : undefined
  }, featuredVoyage.name)), /*#__PURE__*/React.createElement("p", null, featuredVoyage.date, " \xB7 ", voyageDurationLabel(featuredVoyage), "  \xB7 ", voyageShip(featuredVoyage), " \xB7 ", featuredCabin.cat), /*#__PURE__*/React.createElement("div", {
    className: "featured-price"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u6BCF\u4EBA\u8D77\u4EF7"), /*#__PURE__*/React.createElement("strong", null, fmt(featuredCabin.price, featuredCabin.currency || featuredVoyage.currency)), featuredCabin.orig ? /*#__PURE__*/React.createElement("del", null, fmt(featuredCabin.orig, featuredCabin.currency || featuredVoyage.currency)) : null), /*#__PURE__*/React.createElement("b", null, "-", featured.pct, "%"), /*#__PURE__*/React.createElement("div", {
    className: "featured-stock"
  }, /*#__PURE__*/React.createElement("span", null, "\u5269\u4F59\u8231\u4F4D"), /*#__PURE__*/React.createElement("strong", null, Number.isInteger(featuredCabin.avail) ? featuredCabin.avail + ' 间' : cabinAvailability(featuredCabin)))), /*#__PURE__*/React.createElement("div", {
    className: "featured-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openVoyageAction(featuredVoyage, featuredCo)
  }, voyageActionLabel(featuredVoyage, "\u67E5\u770B\u5B98\u65B9\u822A\u6B21")), /*#__PURE__*/React.createElement("span", null, "\u6298\u6263\u4EE5\u540C\u5E01\u79CD\u5B98\u7F51\u539F\u4EF7\u4E0E\u5F53\u524D\u4EF7\u8BA1\u7B97 \xB7 \u66F4\u65B0\u4E8E ", formatBeijingTime(updated))))));
}
function HomeView({
  V,
  P,
  N,
  cos,
  onDetail,
  setTab,
  updated,
  voyageCompanyCount,
  staleVoyageCount
}) {
  const allDrops = bookableDiscountOffers(V).map(offer => ({
    ...offer,
    co: getCo(offer.voyage.co, cos)
  }));
  const topDrops = allDrops.slice(0, 5);
  const topNews = N.slice(0, 5);
  const lowCabins = V.flatMap(v => {
    const co = getCo(v.co, cos);
    const details = voyageBookablePriceDetails(v);
    const cabin = details && details.cabin;
    return cabin && Number.isInteger(cabin.avail) && cabin.avail <= 5 ? [{
      voyage: v,
      cabin: cabin,
      co: co
    }] : [];
  });
  const recentNews = N.filter(n => n.d === (N[0] && N[0].d)).length;
  const avgDiscount = allDrops.length ? Math.round(allDrops.reduce((sum, d) => sum + d.pct, 0) / allDrops.length) : 0;
  const angleColors = {
    促销快讯: '#bfa06c',
    新船速报: 'var(--accent)',
    行业里程碑: 'var(--green)',
    目的地种草: '#e07b5a',
    行业趋势: 'var(--navy)',
    运营提醒: 'var(--red)',
    品牌荣誉: '#8b6faa',
    综合资讯: 'var(--text2)'
  };
  const cardHover = {
    background: 'var(--card)',
    borderRadius: 16,
    border: '1px solid var(--border)',
    padding: '24px 28px',
    marginBottom: 12,
    cursor: 'pointer',
    transition: 'all .25s',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 160
  };
  // 配对：折扣 + 资讯逐行对齐
  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push({
      drop: topDrops[i],
      news: topNews[i]
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "minimal-home"
  }, /*#__PURE__*/React.createElement(MinimalHomeHero, {
    V: V,
    cos: cos,
    topDrops: topDrops,
    setTab: setTab,
    updated: updated
  }), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dashboard-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u4FC3\u9500\u60C5\u62A5"), /*#__PURE__*/React.createElement("div", {
    className: "v",
    style: {
      color: 'var(--warn)'
    }
  }, P.length), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "\u8239\u53F8\u6D3B\u52A8\u548C\u4F18\u60E0\u653F\u7B56")), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u964D\u4EF7\u822A\u6B21"), /*#__PURE__*/React.createElement("div", {
    className: "v",
    style: {
      color: 'var(--green)'
    }
  }, allDrops.length), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "\u5E73\u5747\u6298\u6263 ", avgDiscount, "%")), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u6700\u4F4E\u4EF7\u8231\u4F4D\u7D27\u5F20"), /*#__PURE__*/React.createElement("div", {
    className: "v",
    style: {
      color: lowCabins.length ? 'var(--red)' : 'var(--green)'
    }
  }, lowCabins.length), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "\u5269\u4F59 5 \u95F4\u53CA\u4EE5\u4E0B")), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u65B0\u5A92\u4F53\u8D44\u8BAF"), /*#__PURE__*/React.createElement("div", {
    className: "v",
    style: {
      color: 'var(--accent)'
    }
  }, N.length), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "\u6700\u65B0\u65E5\u671F ", N[0] ? N[0].d : '\u65E0')), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u8986\u76D6\u822A\u6B21"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, V.length), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, voyageCompanyCount, "/", cos.length, " \u5BB6\u6709\u822A\u6B21 \xB7 ", staleVoyageCount, " \u6761\u8D85\u8FC7 7 \u5929"))), /*#__PURE__*/React.createElement("div", {
    className: "workbench-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-title"
  }, /*#__PURE__*/React.createElement("h2", null, "\u4ECA\u65E5\u5173\u6CE8\u91CD\u70B9"), /*#__PURE__*/React.createElement("span", null, "\u964D\u4EF7 / \u4F4E\u8231\u4F4D / \u8D44\u8BAF")), topDrops.slice(0, 3).map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "task-row",
    key: 'td' + i,
    onClick: () => openVoyageAction(d.voyage, d.co)
  }, /*#__PURE__*/React.createElement("span", {
    className: "task-badge drop"
  }, "\u964D\u4EF7"), /*#__PURE__*/React.createElement("div", {
    className: "task-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-title"
  }, d.voyage.name), /*#__PURE__*/React.createElement("div", {
    className: "task-meta"
  }, /*#__PURE__*/React.createElement(CabinMeta, {
    co: d.co,
    voyage: d.voyage,
    cabin: d.cabin,
    pct: d.pct,
    showPrice: true
  }))))), lowCabins.slice(0, 2).map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "task-row",
    key: 'lc' + i,
    onClick: () => openVoyageAction(d.voyage, d.co)
  }, /*#__PURE__*/React.createElement("span", {
    className: "task-badge low"
  }, "\u4F4E\u8231"), /*#__PURE__*/React.createElement("div", {
    className: "task-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-title"
  }, d.voyage.name), /*#__PURE__*/React.createElement("div", {
    className: "task-meta"
  }, /*#__PURE__*/React.createElement(CabinMeta, {
    co: d.co,
    voyage: d.voyage,
    cabin: d.cabin,
    showAvail: true
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-title"
  }, /*#__PURE__*/React.createElement("h2", null, "\u4ECA\u65E5\u5165\u53E3"), /*#__PURE__*/React.createElement("span", null, "\u6309\u5DE5\u4F5C\u573A\u666F\u67E5\u770B")), /*#__PURE__*/React.createElement("div", {
    className: "health-row"
  }, /*#__PURE__*/React.createElement("span", null, "\u4FC3\u9500\u60C5\u62A5"), /*#__PURE__*/React.createElement("strong", null, P.length, " \u6761")), /*#__PURE__*/React.createElement("div", {
    className: "health-row"
  }, /*#__PURE__*/React.createElement("span", null, "\u964D\u4EF7\u822A\u6B21"), /*#__PURE__*/React.createElement("strong", null, allDrops.length, " \u6761")), /*#__PURE__*/React.createElement("div", {
    className: "health-row"
  }, /*#__PURE__*/React.createElement("span", null, "\u4F4E\u8231\u4F4D\u9884\u8B66"), /*#__PURE__*/React.createElement("span", {
    className: lowCabins.length ? "health-warn" : "health-ok"
  }, lowCabins.length ? lowCabins.length + ' \u6761' : '\u65E0')), /*#__PURE__*/React.createElement("div", {
    className: "quick-links"
  }, /*#__PURE__*/React.createElement("button", {
    className: "quick-link",
    onClick: () => setTab('alerts')
  }, /*#__PURE__*/React.createElement("b", null, "\u770B\u4FC3\u9500"), /*#__PURE__*/React.createElement("span", null, "\u8239\u53F8\u5B98\u65B9\u4F18\u60E0")), /*#__PURE__*/React.createElement("button", {
    className: "quick-link",
    onClick: () => setTab('drops')
  }, /*#__PURE__*/React.createElement("b", null, "\u770B\u964D\u4EF7"), /*#__PURE__*/React.createElement("span", null, "\u8231\u4F4D\u4EF7\u683C\u53D8\u52A8")), /*#__PURE__*/React.createElement("button", {
    className: "quick-link",
    onClick: () => setTab('news')
  }, /*#__PURE__*/React.createElement("b", null, "\u770B\u8D44\u8BAF"), /*#__PURE__*/React.createElement("span", null, "\u90AE\u8F6E\u65B0\u95FB\u9009\u9898"))))), /*#__PURE__*/React.createElement("div", {
    className: "home-content",
    style: {
      textAlign: 'center',
      padding: '4px 0 22px',
      fontSize: 14,
      color: 'var(--text2)',
      letterSpacing: .4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--warn)'
    }
  }, P.length), " \u6761\u4FC3\u9500  \xB7  ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--green)'
    }
  }, allDrops.length), " \u6761\u822A\u6B21\u964D\u4EF7  \xB7  \u6700\u4F4E\u4EF7\u8231\u4F4D\u7D27\u5F20 ", lowCabins.length, " \u6761  \xB7  \u66F4\u65B0\u4E8E ", formatBeijingTime(updated)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      alignItems: 'stretch'
    },
    className: "home-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text2)',
      letterSpacing: 1,
      textTransform: 'uppercase',
      padding: '0 0 8px'
    }
  }, "\u91CD\u70B9\u964D\u4EF7"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text2)',
      letterSpacing: 1,
      textTransform: 'uppercase',
      padding: '0 0 8px'
    }
  }, "\u6700\u65B0\u8D44\u8BAF"), rows.map((row, i) => {
    const d = row.drop;
    const n = row.news;
    return [d ? /*#__PURE__*/React.createElement("div", {
      key: 'd' + i,
      onClick: () => openVoyageAction(d.voyage, d.co),
      style: cardHover
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      co: d.co,
      size: 48
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        fontSize: 16,
        color: 'var(--text)',
        marginBottom: 4
      }
    }, d.co.cn || d.voyage.co), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: 'var(--text)',
        marginBottom: 6,
        lineHeight: 1.5
      }
    }, d.voyage.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text2)',
        lineHeight: 1.6
      }
    }, d.cabin.cat, "  \xB7  ", voyageShip(d.voyage), "  \xB7  ", d.voyage.date, "  \xB7  ", voyageDurationLabel(d.voyage), "   \xB7  \u65E5\u5747 ", fmt(Math.round(d.cabin.price / (d.voyage.days || 1)), d.cabin.currency || d.voyage.currency)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        paddingTop: 16,
        borderTop: '1px solid var(--ice)',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text2)'
      }
    }, "\u539F\u4EF7 ", /*#__PURE__*/React.createElement("span", {
      style: {
        textDecoration: 'line-through'
      }
    }, fmt(d.cabin.orig, d.cabin.currency || d.voyage.currency)), /*#__PURE__*/React.createElement("span", {
      style: {
        margin: '0 8px',
        color: 'var(--glacier)'
      }
    }, "\u2192"), "\u73B0\u4EF7 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 18,
        color: 'var(--text)'
      }
    }, fmt(d.cabin.price, d.cabin.currency || d.voyage.currency))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--green)'
      }
    }, "-", d.pct, "%"))) : /*#__PURE__*/React.createElement("div", {
      key: 'd' + i,
      style: cardHover
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text2)',
        fontSize: 14,
        textAlign: 'center'
      }
    }, "\u6682\u65E0")), n ? /*#__PURE__*/React.createElement("div", {
      key: 'n' + i,
      onClick: () => {
        if (n.url) window.open(n.url, '_blank');
      },
      style: cardHover
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 10
      }
    }, getCo(n.co, cos).id ? /*#__PURE__*/React.createElement(Logo, {
      co: getCo(n.co, cos),
      size: 40
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 8,
        background: 'rgba(107,124,144,.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        color: 'var(--text2)',
        flexShrink: 0
      }
    }, "\u8D44\u8BAF"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 500,
        color: angleColors[n.angle || '综合资讯'] || 'var(--text2)',
        border: '1px solid ' + ((angleColors[n.angle || '综合资讯'] || 'var(--text2)') + '30'),
        padding: '2px 10px',
        borderRadius: 6,
        letterSpacing: .3
      }
    }, n.angle || '综合资讯'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text2)',
        opacity: .6,
        marginLeft: 'auto'
      }
    }, n.d)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.6,
        color: 'var(--text)',
        marginBottom: 8,
        overflowWrap: 'anywhere',
        wordBreak: 'break-word'
      }
    }, n.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text2)',
        lineHeight: 1.7,
        overflowWrap: 'anywhere',
        wordBreak: 'break-word'
      }
    }, n.desc)) : /*#__PURE__*/React.createElement("div", {
      key: 'n' + i,
      style: cardHover
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text2)',
        fontSize: 14,
        textAlign: 'center'
      }
    }, "\u6682\u65E0"))];
  })));
}
function LegacyCompareView({
  V,
  cos,
  onDetail
}) {
  const [cf, setCf] = useState('antarctic');
  const [sortBy, setSortBy] = useState('price');
  const group = V.filter(v => voyageInRegion(v, cf) && v.days >= 3);
  var sorted = [];
  if (sortBy === 'price') {
    sorted = [...group].sort(function (a, b) {
      return compareVoyagePrice(a, b, false);
    });
  } else if (sortBy === 'pday') {
    sorted = [...group].sort(function (a, b) {
      return compareVoyagePrice(a, b, true);
    });
  } else if (sortBy === 'date') {
    sorted = [...group].sort(function (a, b) {
      return (a.date || '').localeCompare(b.date || '');
    });
  } else if (sortBy === 'disc') {
    sorted = [...group].sort(function (a, b) {
      var da = a.cabins[0].orig && a.cabins[0].orig > a.cabins[0].price ? Math.round((1 - a.cabins[0].price / a.cabins[0].orig) * 100) : 0;
      var db = b.cabins[0].orig && b.cabins[0].orig > b.cabins[0].price ? Math.round((1 - b.cabins[0].price / b.cabins[0].orig) * 100) : 0;
      return db - da;
    });
  } else {
    sorted = [...group].sort(function (a, b) {
      return compareVoyagePrice(a, b, false);
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "filter-row",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: cf === 'antarctic' ? 'on' : '',
    onClick: () => setCf('antarctic')
  }, "\u5357\u6781"), /*#__PURE__*/React.createElement("button", {
    className: cf === 'arctic' ? 'on' : '',
    onClick: () => setCf('arctic')
  }, "\u5317\u6781"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: sortBy === 'price' ? 'on' : '',
    onClick: () => setSortBy('price'),
    style: {
      fontSize: 15
    }
  }, "\u4EF7\u683C"), /*#__PURE__*/React.createElement("button", {
    className: sortBy === 'pday' ? 'on' : '',
    onClick: () => setSortBy('pday'),
    style: {
      fontSize: 15
    }
  }, "\u65E5\u5747\u4EF7"), /*#__PURE__*/React.createElement("button", {
    className: sortBy === 'date' ? 'on' : '',
    onClick: () => setSortBy('date'),
    style: {
      fontSize: 15
    }
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("button", {
    className: sortBy === 'disc' ? 'on' : '',
    onClick: () => setSortBy('disc'),
    style: {
      fontSize: 15
    }
  }, "\u6298\u6263")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compare",
    size: 21
  }), " ", cf === 'antarctic' ? '南极' : '北极', "\u822A\u7EBF\u6BD4\u4EF7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text2)',
      fontWeight: 400
    }
  }, sorted.length, "\u4E2A\u822A\u6B21")), /*#__PURE__*/React.createElement("div", {
    className: "compare-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "compare"
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    className: "col-co"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-route"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-date"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-days"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-port"
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '34%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '8%'
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u516C\u53F8"), /*#__PURE__*/React.createElement("th", null, "\u822A\u7EBF\xB7\u8239\u53EA"), /*#__PURE__*/React.createElement("th", null, "\u65E5\u671F"), /*#__PURE__*/React.createElement("th", null, "\u5929\u6570"), /*#__PURE__*/React.createElement("th", null, "\u51FA\u53D1\u6E2F"), /*#__PURE__*/React.createElement("th", null, "\u8231\u4F4D\u4E0E\u4EF7\u683C"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, sorted.map((v, i) => {
    const co = getCo(v.co, cos);
    const cheapest = voyageMinPrice(v);
    return /*#__PURE__*/React.createElement("tr", {
      key: v.id + '_' + i,
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("td", {
      "data-label": "\u516C\u53F8",
      onClick: () => onDetail && onDetail(co)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      co: co,
      size: 44
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 1.3
      }
    }, co.cn || v.co), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text2)',
        lineHeight: 1.3
      }
    }, co.en || ''), /*#__PURE__*/React.createElement("span", {
      className: "pos-tag"
    }, co.pos || '')))), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u822A\u7EBF\xB7\u8239\u53EA",
      onClick: () => onDetail && onDetail(co)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 19,
        fontWeight: 600
      }
    }, v.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        color: 'var(--text2)',
        marginTop: 3
      }
    }, voyageShip(v))), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u65E5\u671F",
      onClick: () => onDetail && onDetail(co),
      style: {
        whiteSpace: 'nowrap',
        fontSize: 17
      }
    }, v.date), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u5929\u6570",
      onClick: () => onDetail && onDetail(co),
      style: {
        fontSize: 18,
        fontWeight: 600
      }
    }, voyageDurationLabel(v)), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u51FA\u53D1\u6E2F",
      className: "col-port",
      title: v.port,
      onClick: () => onDetail && onDetail(co)
    }, v.port || '—'), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u8231\u4F4D\u4E0E\u4EF7\u683C",
      onClick: () => onDetail && onDetail(co),
      style: {
        padding: '10px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6
      }
    }, v.cabins.slice(0, 3).map((cb, j) => {
      const disc = cb.orig && cb.orig > cb.price ? Math.round((1 - cb.price / cb.orig) * 100) : 0;
      const isCheapest = cb.price === cheapest;
      return /*#__PURE__*/React.createElement("span", {
        key: j,
        style: {
          display: 'inline-flex',
          flexDirection: 'column',
          padding: '6px 12px',
          borderRadius: 10,
          background: isCheapest ? 'rgba(26,109,170,.06)' : 'var(--ice)',
          border: isCheapest ? '1px solid rgba(26,109,170,.2)' : '1px solid transparent',
          fontSize: 13,
          lineHeight: 1.4
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: 'var(--text)'
        }
      }, cb.cat), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          color: isCheapest ? 'var(--accent)' : 'var(--text)'
        }
      }, fmt(cb.price, cb.currency || v.currency)), disc > 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: 'var(--green)',
          fontWeight: 600
        }
      }, "\u2193", disc, "%"), cb.orig && cb.orig > cb.price && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: 'var(--text2)',
          textDecoration: 'line-through'
        }
      }, fmt(cb.orig, cb.currency || v.currency)));
    }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: voyageActionHref(v, co),
      target: voyageActionTarget(v, co),
      rel: voyageActionTarget(v, co) ? 'noopener noreferrer' : undefined,
      style: {
        display: 'inline-block',
        padding: '4px 10px',
        borderRadius: 6,
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--accent)',
        background: 'var(--card)',
        border: '1px solid var(--accent)',
        textDecoration: 'none',
        whiteSpace: 'nowrap'
      },
      onClick: isVikingVoyage(v, co) ? function (event) {
        handleVoyageAction(event, v, co);
      } : undefined
    }, voyageActionLabel(v, "\u67E5\u770B\u822A\u6B21"))));
  })))));
}
function CompareView({
  V,
  cos,
  onDetail
}) {
  const heroSearch = (() => {
    try {
      return JSON.parse(localStorage.getItem('polarHeroSearch')) || {};
    } catch (e) {
      return {};
    }
  })();
  const restoredCompareState = (() => {
    try {
      return JSON.parse(sessionStorage.getItem('polarCompareState_v1')) || {};
    } catch (e) {
      return {};
    }
  })();
  const restoredArray = (key, fallback) => Array.isArray(restoredCompareState[key]) ? restoredCompareState[key] : fallback;
  const savedRegion = restoredCompareState.cf || heroSearch.region || 'antarctic';
  const [cf, setCf] = useState(topLevelRegion(savedRegion));
  const [destination, setDestination] = useState((restoredCompareState.cf ? restoredCompareState.destination : heroSearch.destination) || (topLevelRegion(savedRegion) === 'nonpolar' && savedRegion !== 'nonpolar' ? savedRegion : 'all'));
  const [sortBy, setSortBy] = useState(restoredCompareState.sortBy || 'price');
  const [priceDirection, setPriceDirection] = useState(restoredCompareState.priceDirection || 'asc');
  const [dateMode, setDateMode] = useState(restoredCompareState.dateMode || 'single');
  const [selectedYear, setSelectedYear] = useState(restoredCompareState.selectedYear || heroSearch.year || 'all');
  const [selectedMonths, setSelectedMonths] = useState(restoredArray('selectedMonths', heroSearch.month && heroSearch.month !== 'all' ? [heroSearch.month] : []));
  const [selectedYearMonths, setSelectedYearMonths] = useState(restoredArray('selectedYearMonths', []));
  const [rangeStart, setRangeStart] = useState(restoredCompareState.rangeStart || 'all');
  const [boardingStart, setBoardingStart] = useState(restoredCompareState.boardingStart || '');
  const [boardingEnd, setBoardingEnd] = useState(restoredCompareState.boardingEnd || '');
  const [rangeEnd, setRangeEnd] = useState(restoredCompareState.rangeEnd || 'all');
  const [companyKeys, setCompanyKeys] = useState(restoredArray('companyKeys', heroSearch.company && heroSearch.company !== 'all' ? [heroSearch.company] : []));
  const [shipKey, setShipKey] = useState(restoredCompareState.shipKey || 'all');
  const [durationKey, setDurationKey] = useState(restoredCompareState.durationKey || 'all');
  const [departureKey, setDepartureKey] = useState(normalizePortName(restoredCompareState.departureKey || heroSearch.port || 'all'));
  const [arrivalKey, setArrivalKey] = useState(normalizePortName(restoredCompareState.arrivalKey || 'all'));
  const [availabilityKey, setAvailabilityKey] = useState(restoredCompareState.availabilityKey || 'all');
  const [priceKey, setPriceKey] = useState(restoredCompareState.priceKey || 'all');
  const [discountOnly, setDiscountOnly] = useState(Boolean(restoredCompareState.discountOnly));
  const [routeQuery, setRouteQuery] = useState(restoredCompareState.routeQuery || '');
  const [showAdvanced, setShowAdvanced] = useState(Boolean(restoredCompareState.showAdvanced));
  const [companyPickerOpen, setCompanyPickerOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [selectionNotice, setSelectionNotice] = useState('');
  useEffect(() => {
    try {
      sessionStorage.setItem('polarCompareState_v1', JSON.stringify({
        cf: cf,
        destination: destination,
        sortBy: sortBy,
        priceDirection: priceDirection,
        dateMode: dateMode,
        selectedYear: selectedYear,
        selectedMonths: selectedMonths,
        selectedYearMonths: selectedYearMonths,
        rangeStart: rangeStart,
        rangeEnd: rangeEnd,
    boardingStart: boardingStart,
    boardingEnd: boardingEnd,
        companyKeys: companyKeys,
        shipKey: shipKey,
        durationKey: durationKey,
        departureKey: departureKey,
        arrivalKey: arrivalKey,
        availabilityKey: availabilityKey,
        priceKey: priceKey,
        discountOnly: discountOnly,
        routeQuery: routeQuery,
        showAdvanced: showAdvanced
      }));
    } catch (e) {}
  }, [cf, destination, sortBy, priceDirection, dateMode, selectedYear, selectedMonths, selectedYearMonths, rangeStart, rangeEnd, boardingStart, boardingEnd, companyKeys, shipKey, durationKey, departureKey, arrivalKey, availabilityKey, priceKey, discountOnly, routeQuery, showAdvanced]);
  const yearStripRef = useRef(null);
  const monthStripRef = useRef(null);
  const focusedCompareRef = useRef(null);
  const regionVoyages = V.filter(v => voyageInRegion(v, cf) && (cf !== 'nonpolar' || destination === 'all' || voyageInRegion(v, destination)) && v.days >= 3 && v.date && v.cabins && v.cabins.length);
  const filterState = {
    dateMode: dateMode,
    selectedYear: selectedYear,
    selectedMonths: selectedMonths,
    selectedYearMonths: selectedYearMonths,
    rangeStart: rangeStart,
    rangeEnd: rangeEnd,
    boardingStart: boardingStart,
    boardingEnd: boardingEnd,
    companyKeys: companyKeys,
    shipKey: shipKey,
    durationKey: durationKey,
    departureKey: departureKey,
    arrivalKey: arrivalKey,
    availabilityKey: availabilityKey,
    priceKey: priceKey,
    discountOnly: discountOnly,
    routeQuery: routeQuery
  };
  const facetValues = function (voyages, valueForVoyage, selectedValues) {
    return [...new Set([...voyages.map(valueForVoyage).filter(Boolean), ...(selectedValues || []).filter(Boolean)])].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  };
  const dateFacetVoyages = applyVoyageFilters(regionVoyages, filterState, cos, 'date');
  // A child ship selection must not hide the companies needed to replace its parent.
  const companyFacetVoyages = applyVoyageFilters(regionVoyages, filterState, cos, ['company', 'ship']);
  const shipFacetVoyages = applyVoyageFilters(regionVoyages, filterState, cos, 'ship');
  const durationFacetVoyages = applyVoyageFilters(regionVoyages, filterState, cos, 'duration');
  const portFacetVoyages = applyVoyageFilters(regionVoyages, filterState, cos, ['departure', 'arrival']);
  const availabilityFacetVoyages = applyVoyageFilters(regionVoyages, filterState, cos, 'availability');
  const priceFacetVoyages = applyVoyageFilters(regionVoyages, filterState, cos, 'price');
  const discountFacetVoyages = applyVoyageFilters(regionVoyages, filterState, cos, 'discount');
  const companyCounts = companyFacetVoyages.reduce(function (result, voyage) {
    result[voyage.co] = (result[voyage.co] || 0) + 1;
    return result;
  }, {});
  const companyOptions = facetValues(companyFacetVoyages, voyage => voyage.co, companyKeys).map(id => {
    const company = getCo(id, cos);
    return {
      id: id,
      label: company.cn || company.en || id,
      count: companyCounts[id] || 0
    };
  }).sort((a, b) => a.label.localeCompare(b.label, 'zh-CN'));
  const selectedCompanyLabels = companyOptions.filter(option => companyKeys.includes(option.id)).map(option => option.label);
  const companyFilterLabel = companyKeys.length === 0 ? '全部邮轮公司' : companyKeys.length === 1 ? selectedCompanyLabels[0] : '已选 ' + companyKeys.length + ' 家船司';
  const shipOptions = facetValues(shipFacetVoyages, voyage => voyageShip(voyage) === '官网未公布' ? '' : voyageShip(voyage), shipKey === 'all' ? [] : [shipKey]);
  const shipSelectDisabled = shipOptions.length === 0;
  const setCompanyFilters = function (nextCompanyKeys) {
    const nextFilterState = {
      ...filterState,
      companyKeys: nextCompanyKeys
    };
    const nextShipOptions = facetValues(applyVoyageFilters(regionVoyages, nextFilterState, cos, 'ship'), voyage => voyageShip(voyage) === '官网未公布' ? '' : voyageShip(voyage));
    setCompanyKeys(nextCompanyKeys);
    if (shipKey !== 'all' && (nextCompanyKeys.length === 0 || !nextShipOptions.includes(shipKey))) {
      setShipKey('all');
    }
  };
  const toggleCompanyFilter = function (companyId) {
    const nextCompanyKeys = companyKeys.includes(companyId) ? companyKeys.filter(id => id !== companyId) : [...companyKeys, companyId];
    setCompanyFilters(nextCompanyKeys);
  };
  const clearCompanyFilters = function () {
    setCompanyFilters([]);
  };
  const availableDepartureOptions = facetValues(portFacetVoyages, voyage => normalizePortName(voyage.port));
  const availableArrivalOptions = facetValues(portFacetVoyages, voyage => normalizePortName(voyage.arrivalPort));
  const departureOptions = facetValues(portFacetVoyages, voyage => normalizePortName(voyage.port), departureKey === 'all' ? [] : [departureKey]);
  const arrivalOptions = facetValues(portFacetVoyages, voyage => normalizePortName(voyage.arrivalPort), arrivalKey === 'all' ? [] : [arrivalKey]);
  const departureOptionsKey = availableDepartureOptions.join('\u001f');
  const arrivalOptionsKey = availableArrivalOptions.join('\u001f');
  useEffect(() => {
    if (departureKey !== 'all' && !availableDepartureOptions.includes(departureKey)) {
      setDepartureKey('all');
    }
    if (arrivalKey !== 'all' && !availableArrivalOptions.includes(arrivalKey)) {
      setArrivalKey('all');
    }
  }, [departureKey, arrivalKey, departureOptionsKey, arrivalOptionsKey]);
  const monthRangeOptions = facetValues(dateFacetVoyages, voyage => voyage.date.slice(0, 7), [rangeStart, rangeEnd].filter(value => value !== 'all'));
  const durationDefinitions = [['short', '13天以内'], ['medium', '14至30天'], ['long', '31天及以上']];
  const durationOptions = durationDefinitions.filter(option => durationFacetVoyages.some(voyage => voyageMatchesDuration(voyage, option[0])) || durationKey === option[0]);
  const availabilityDefinitions = [['available', '可售'], ['limited', '紧张'], ['waitlist', '候补'], ['sold_out', '售罄'], ['unknown', '官网未公布']];
  const availableAvailabilityKeys = new Set(availabilityFacetVoyages.map(voyageAvailabilityKey));
  const availabilityOptions = availabilityDefinitions.filter(option => availableAvailabilityKeys.has(option[0]) || availabilityKey === option[0]);
  const priceDefinitions = [['priced', '官网有价格'], ['unpriced', '价格待确认']];
  const priceOptions = priceDefinitions.filter(option => priceFacetVoyages.some(voyage => option[0] === 'priced' ? pricedCabins(voyage).length > 0 : pricedCabins(voyage).length === 0) || priceKey === option[0]);
  const discountCandidateCount = discountFacetVoyages.filter(voyage => voyageBookableDiscount(voyage) > 0).length;
  const yearCounts = dateFacetVoyages.reduce(function (result, voyage) {
    const key = voyage.date.slice(0, 4);
    result[key] = (result[key] || 0) + 1;
    return result;
  }, {});
  const regionYearOptions = [...new Set(dateFacetVoyages.map(voyage => voyage.date.slice(0, 4)))].sort();
  const yearOptions = [...new Set([...regionYearOptions, ...(selectedYear === 'all' ? [] : [selectedYear])])].sort();
  const crossYearOptions = [...new Set([...yearOptions, ...selectedYearMonths.map(key => key.slice(0, 4))])].sort();
  const monthCounts = dateFacetVoyages.reduce(function (result, voyage) {
    if (selectedYear !== 'all' && voyage.date.slice(0, 4) !== selectedYear) return result;
    const key = voyage.date.slice(5, 7);
    result[key] = (result[key] || 0) + 1;
    return result;
  }, {});
  const yearMonthCounts = dateFacetVoyages.reduce(function (result, voyage) {
    const key = voyage.date.slice(0, 7);
    result[key] = (result[key] || 0) + 1;
    return result;
  }, {});
  const setYearFilter = function (nextYear) {
    const availableMonths = new Set(dateFacetVoyages.filter(voyage => nextYear === 'all' || voyage.date.slice(0, 4) === nextYear).map(voyage => voyage.date.slice(5, 7)));
    setSelectedYear(nextYear);
    setSelectedMonths(currentMonths => currentMonths.filter(month => availableMonths.has(month)));
  };
  const toggleMonthFilter = function (month) {
    setSelectedMonths(currentMonths => currentMonths.includes(month) ? currentMonths.filter(currentMonth => currentMonth !== month) : [...currentMonths, month].sort());
  };
  const toggleYearMonthFilter = function (yearMonth) {
    setSelectedYearMonths(currentYearMonths => currentYearMonths.includes(yearMonth) ? currentYearMonths.filter(currentYearMonth => currentYearMonth !== yearMonth) : [...currentYearMonths, yearMonth].sort());
  };
  const group = applyVoyageFilters(regionVoyages, filterState, cos);
  const portFilterActive = departureKey !== 'all' || arrivalKey !== 'all';
  const minPrice = voyage => voyageBookableMinPrice(voyage);
  const effectiveSortDirection = sortBy === 'disc' ? 'desc' : sortBy === 'date' ? 'asc' : priceDirection;
  const sorted = sortVoyages(group, sortBy, effectiveSortDirection);
  const selectedVoyages = regionVoyages.filter(v => selectedIds.includes(v.id));
  const visibleVoyages = sorted;
  const visibleCurrencies = [...new Set(visibleVoyages.flatMap(v => voyageBookableCabins(v).map(cabin => cabinCurrency(cabin, v))).filter(currency => currency && currency !== 'UNKNOWN'))].sort();
  const priceSortActive = sortBy === 'price' || sortBy === 'pday';
  const sortDescription = sortBy === 'price' ? '官网可订总价 · ' + (priceDirection === 'asc' ? '低→高' : '高→低') + '（按页面显示金额）' : sortBy === 'pday' ? '官网可订日均价 · ' + (priceDirection === 'asc' ? '低→高' : '高→低') + '（按页面显示金额）' : sortBy === 'disc' ? '可订舱位最高折扣 · 高→低' : '出发日期 · 近→远';
  const formatMonth = function (key) {
    const parts = key.split('-');
    return parts[0] + '年' + Number(parts[1]) + '月';
  };
  const monthLabels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const centerActiveOption = function (container) {
    if (!container || window.innerWidth > 680) return;
    const active = container.querySelector('button.on');
    if (!active) return;
    window.requestAnimationFrame(() => {
      container.scrollTo({
        left: Math.max(0, active.offsetLeft - (container.clientWidth - active.offsetWidth) / 2),
        behavior: 'auto'
      });
    });
  };
  useEffect(() => {
    if (dateMode === 'single') centerActiveOption(yearStripRef.current);
  }, [selectedYear, dateMode, cf]);
  useEffect(() => {
    if (dateMode === 'single' && selectedMonths.length <= 1) centerActiveOption(monthStripRef.current);
  }, [selectedYear, dateMode, cf]);
  const activeFilterCount = [Boolean(boardingStart || boardingEnd), cf === 'nonpolar' && destination !== 'all', selectedYear !== 'all', selectedMonths.length > 0, selectedYearMonths.length > 0, rangeStart !== 'all', rangeEnd !== 'all', companyKeys.length > 0, shipKey !== 'all', durationKey !== 'all', departureKey !== 'all', arrivalKey !== 'all', availabilityKey !== 'all', priceKey !== 'all', discountOnly, Boolean(routeQuery.trim())].filter(Boolean).length;
  const advancedFilterCount = [Boolean(boardingStart || boardingEnd), companyKeys.length > 0, shipKey !== 'all', durationKey !== 'all', departureKey !== 'all', arrivalKey !== 'all', availabilityKey !== 'all', priceKey !== 'all', discountOnly, Boolean(routeQuery.trim())].filter(Boolean).length;
  const activeAdvancedFilters = [
    (boardingStart || boardingEnd) && { key: 'boarding-date', label: '登船日期：' + (boardingStart || '不限') + ' 至 ' + (boardingEnd || '不限'), clear: () => { setBoardingStart(''); setBoardingEnd(''); } },
    ...companyKeys.map(id => ({ key: 'company-' + id, label: '船司：' + (getCo(id, cos).cn || getCo(id, cos).en || id), clear: () => toggleCompanyFilter(id) })),
    shipKey !== 'all' && { key: 'ship', label: '船只：' + shipKey, clear: () => setShipKey('all') },
    durationKey !== 'all' && { key: 'duration', label: '天数：' + (durationDefinitions.find(option => option[0] === durationKey)?.[1] || durationKey), clear: () => setDurationKey('all') },
    departureKey !== 'all' && { key: 'departure', label: '出发港：' + departureKey, clear: () => setDepartureKey('all') },
    arrivalKey !== 'all' && { key: 'arrival', label: '到达港：' + arrivalKey, clear: () => setArrivalKey('all') },
    availabilityKey !== 'all' && { key: 'availability', label: '库存：' + (availabilityDefinitions.find(option => option[0] === availabilityKey)?.[1] || availabilityKey), clear: () => setAvailabilityKey('all') },
    priceKey !== 'all' && { key: 'price', label: '价格：' + (priceDefinitions.find(option => option[0] === priceKey)?.[1] || priceKey), clear: () => setPriceKey('all') },
    discountOnly && { key: 'discount', label: '有官网折扣', clear: () => setDiscountOnly(false) },
    routeQuery.trim() && { key: 'query', label: '关键词：' + routeQuery.trim(), clear: () => setRouteQuery('') }
  ].filter(Boolean);
  const resetFilters = function () {
    setDestination('all');
    setDateMode('single');
    setSelectedYear('all');
    setSelectedMonths([]);
    setSelectedYearMonths([]);
    setRangeStart('all');
    setRangeEnd('all');
    setBoardingStart('');
    setBoardingEnd('');
    setCompanyKeys([]);
    setShipKey('all');
    setDurationKey('all');
    setDepartureKey('all');
    setArrivalKey('all');
    setAvailabilityKey('all');
    setPriceKey('all');
    setDiscountOnly(false);
    setRouteQuery('');
    setShowAdvanced(false);
    setCompanyPickerOpen(false);
    setSelectedIds([]);
    setCompareOpen(false);
    setSelectionNotice('');
  };
  const setRegion = function (region) {
    setCf(region);
    resetFilters();
  };
  const toggleSelected = function (voyageId) {
    if (selectedIds.includes(voyageId)) {
      const next = selectedIds.filter(id => id !== voyageId);
      setSelectedIds(next);
      setCompareOpen(false);
      setSelectionNotice('');
    } else if (selectedIds.length >= 4) {
      setSelectionNotice('最多同时比较 4 个航次，请先取消一个。');
    } else {
      setSelectedIds([...selectedIds, voyageId]);
      setCompareOpen(false);
      setSelectionNotice('');
    }
  };
  const clearSelection = function () {
    setSelectedIds([]);
    setCompareOpen(false);
    setSelectionNotice('');
  };
  const startFocusedCompare = function () {
    if (selectedIds.length < 2) {
      setSelectionNotice('请至少选择 2 个航次后再开始比价。');
      return;
    }
    setCompareOpen(true);
    setSelectionNotice('已生成 ' + selectedIds.length + ' 条航次的聚焦对比。');
    window.setTimeout(() => {
      focusedCompareRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      focusedCompareRef.current?.focus({
        preventScroll: true
      });
    }, 40);
  };
  const compareActionLabel = selectedIds.length < 2 ? '再选 1 条即可比价' : '对比这 ' + selectedIds.length + ' 条航次';
  return /*#__PURE__*/React.createElement("div", {
    className: 'compare-page ' + (selectedIds.length > 0 && !compareOpen ? 'has-mobile-compare-dock' : '')
  }, /*#__PURE__*/React.createElement("section", {
    className: "compare-controls",
    "aria-label": "\u822A\u6B21\u7B5B\u9009"
  }, /*#__PURE__*/React.createElement("div", {
    className: "compare-control-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "第一步 · 航行地区"), /*#__PURE__*/React.createElement("div", {
    className: "region-switch"
  }, /*#__PURE__*/React.createElement("button", {
    className: cf === 'antarctic' ? 'on' : '',
    onClick: () => setRegion('antarctic')
  }, "\u5357\u6781"), /*#__PURE__*/React.createElement("button", {
    className: cf === 'arctic' ? 'on' : '',
    onClick: () => setRegion('arctic')
  }, "\u5317\u6781"), /*#__PURE__*/React.createElement("button", {
    className: cf === 'nonpolar' ? 'on' : '',
    onClick: () => setRegion('nonpolar')
  }, "非极地")), cf === 'nonpolar' && React.createElement(NonPolarDestinationFilter, {
    voyages: V,
    value: destination,
    onChange: value => {
      resetFilters();
      setDestination(value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "sort-controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sort-switch"
  }, /*#__PURE__*/React.createElement("span", null, "\u6392\u5E8F"), /*#__PURE__*/React.createElement("button", {
    className: sortBy === 'price' ? 'on' : '',
    onClick: () => setSortBy('price')
  }, "\u53EF\u8BA2\u603B\u4EF7"), /*#__PURE__*/React.createElement("button", {
    className: sortBy === 'pday' ? 'on' : '',
    onClick: () => setSortBy('pday')
  }, "\u65E5\u5747\u4EF7"), /*#__PURE__*/React.createElement("button", {
    className: sortBy === 'date' ? 'on' : '',
    onClick: () => setSortBy('date')
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("button", {
    className: sortBy === 'disc' ? 'on' : '',
    onClick: () => setSortBy('disc')
  }, "\u6298\u6263")), priceSortActive && /*#__PURE__*/React.createElement("div", {
    className: "sort-direction",
    "aria-label": "\u4EF7\u683C\u6392\u5E8F\u65B9\u5411"
  }, /*#__PURE__*/React.createElement("button", {
    className: "on direction-toggle",
    "aria-label": priceDirection === 'asc' ? '\u4EF7\u683C\u5F53\u524D\u4ECE\u4F4E\u5230\u9AD8\uFF0C\u70B9\u51FB\u5207\u6362\u4E3A\u4ECE\u9AD8\u5230\u4F4E' : '\u4EF7\u683C\u5F53\u524D\u4ECE\u9AD8\u5230\u4F4E\uFF0C\u70B9\u51FB\u5207\u6362\u4E3A\u4ECE\u4F4E\u5230\u9AD8',
    onClick: () => setPriceDirection(priceDirection === 'asc' ? 'desc' : 'asc')
  }, priceDirection === 'asc' ? '\u4F4E \u2192 \u9AD8' : '\u9AD8 \u2192 \u4F4E')))), /*#__PURE__*/React.createElement("div", {
    className: "date-mode-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\u7B2C\u4E8C\u6B65 \xB7 \u51FA\u53D1\u65F6\u95F4"), /*#__PURE__*/React.createElement("div", {
    className: "date-mode-switch"
  }, /*#__PURE__*/React.createElement("button", {
    className: dateMode === 'single' ? 'on' : '',
    onClick: () => {
      setDateMode('single');
      setSelectedYearMonths([]);
      setRangeStart('all');
      setRangeEnd('all');
    }
  }, "\u6309\u5E74 / \u6708\u4EFD\u591A\u9009"), /*#__PURE__*/React.createElement("button", {
    className: dateMode === 'multiYear' ? 'on' : '',
    onClick: () => {
      setDateMode('multiYear');
      setSelectedYear('all');
      setSelectedMonths([]);
      setRangeStart('all');
      setRangeEnd('all');
    }
  }, "\u8DE8\u5E74\u5EA6\u6708\u4EFD\u591A\u9009"), /*#__PURE__*/React.createElement("button", {
    className: dateMode === 'range' ? 'on' : '',
    onClick: () => {
      setDateMode('range');
      setSelectedYear('all');
      setSelectedMonths([]);
      setSelectedYearMonths([]);
    }
  }, "\u6708\u4EFD\u533A\u95F4"))), /*#__PURE__*/React.createElement("strong", null, group.length, " \u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u822A\u6B21")), dateMode === 'single' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "year-strip",
    role: "list",
    "aria-label": "\u51FA\u53D1\u5E74\u4EFD",
    ref: yearStripRef
  }, /*#__PURE__*/React.createElement("button", {
    className: selectedYear === 'all' ? 'on' : '',
    onClick: () => setYearFilter('all')
  }, /*#__PURE__*/React.createElement("b", null, "\u5168\u90E8\u5E74\u4EFD"), /*#__PURE__*/React.createElement("span", null, dateFacetVoyages.length)), yearOptions.map(year => /*#__PURE__*/React.createElement("button", {
    key: year,
    disabled: !yearCounts[year] && selectedYear !== year,
    className: selectedYear === year ? 'on' : '',
    onClick: () => setYearFilter(year)
  }, /*#__PURE__*/React.createElement("b", null, year, "\u5E74"), /*#__PURE__*/React.createElement("span", null, yearCounts[year] || 0, " \u4E2A")))), /*#__PURE__*/React.createElement("div", {
    className: "month-matrix-head"
  }, /*#__PURE__*/React.createElement("strong", null, "\u51FA\u53D1\u6708\u4EFD\uFF08\u53EF\u591A\u9009\uFF09"), /*#__PURE__*/React.createElement("span", null, selectedMonths.length > 0 ? '已选 ' + selectedMonths.map(month => Number(month) + '月').join('、') : selectedYear === 'all' ? '跨年份查看' : selectedYear + '年')), /*#__PURE__*/React.createElement("div", {
    className: "month-matrix",
    role: "group",
    "aria-label": "\u51FA\u53D1\u6708\u4EFD",
    ref: monthStripRef
  }, /*#__PURE__*/React.createElement("button", {
    className: 'month-tile all-months ' + (selectedMonths.length === 0 ? 'on' : ''),
    "aria-pressed": selectedMonths.length === 0,
    onClick: () => setSelectedMonths([])
  }, /*#__PURE__*/React.createElement("b", null, "\u5168\u90E8\u6708\u4EFD"), /*#__PURE__*/React.createElement("span", null, selectedYear === 'all' ? dateFacetVoyages.length : yearCounts[selectedYear] || 0)), monthLabels.map((label, index) => {
    const key = String(index + 1).padStart(2, '0');
    const count = monthCounts[key] || 0;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      disabled: !count && !selectedMonths.includes(key),
      className: 'month-tile ' + (selectedMonths.includes(key) ? 'on' : ''),
      "aria-pressed": selectedMonths.includes(key),
      onClick: () => toggleMonthFilter(key)
    }, /*#__PURE__*/React.createElement("b", null, label), /*#__PURE__*/React.createElement("span", null, count, " \u4E2A"));
  }))) : dateMode === 'multiYear' ? /*#__PURE__*/React.createElement("section", {
    className: "cross-year-picker",
    "aria-label": "\u8DE8\u5E74\u5EA6\u51FA\u53D1\u6708\u4EFD\u591A\u9009"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cross-year-picker-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\u8DE8\u5E74\u5EA6\u51FA\u53D1\u6708\u4EFD\uFF08\u53EF\u591A\u9009\uFF09"), /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite"
  }, selectedYearMonths.length > 0 ? '\u5DF2\u9009 ' + selectedYearMonths.map(formatMonth).join('\u3001') : '\u53EF\u4EFB\u610F\u7EC4\u5408\u4E0D\u540C\u5E74\u4EFD\u7684\u6708\u4EFD')), /*#__PURE__*/React.createElement("button", {
    className: 'month-tile all-months ' + (selectedYearMonths.length === 0 ? 'on' : ''),
    "aria-pressed": selectedYearMonths.length === 0,
    onClick: () => setSelectedYearMonths([])
  }, /*#__PURE__*/React.createElement("b", null, "\u5168\u90E8\u6708\u4EFD"), /*#__PURE__*/React.createElement("span", null, dateFacetVoyages.length, " \u4E2A"))), /*#__PURE__*/React.createElement("div", {
    className: "cross-year-groups"
  }, crossYearOptions.map(year => /*#__PURE__*/React.createElement("section", {
    className: "cross-year-row",
    "data-year": year,
    key: year,
    "aria-label": year + '\u5E74\u51FA\u53D1\u6708\u4EFD'
  }, /*#__PURE__*/React.createElement("div", {
    className: "cross-year-row-head"
  }, /*#__PURE__*/React.createElement("b", null, year, "\u5E74"), /*#__PURE__*/React.createElement("span", null, yearCounts[year] || 0, " \u4E2A\u822A\u6B21")), /*#__PURE__*/React.createElement("div", {
    className: "cross-year-months",
    role: "group",
    "aria-label": year + '\u5E74\u6708\u4EFD'
  }, monthLabels.map((label, index) => {
    const month = String(index + 1).padStart(2, '0');
    const key = year + '-' + month;
    const count = yearMonthCounts[key] || 0;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      disabled: !count && !selectedYearMonths.includes(key),
      className: 'month-tile ' + (selectedYearMonths.includes(key) ? 'on' : ''),
      "data-year-month": key,
      "aria-pressed": selectedYearMonths.includes(key),
      onClick: () => toggleYearMonthFilter(key)
    }, /*#__PURE__*/React.createElement("b", null, label), /*#__PURE__*/React.createElement("span", null, count, " \u4E2A"));
  })))))) : /*#__PURE__*/React.createElement("div", {
    className: "range-grid"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u8D77\u59CB\u6708\u4EFD"), /*#__PURE__*/React.createElement("select", {
    value: rangeStart,
    onChange: event => setRangeStart(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u6700\u65E9\u6708\u4EFD"), monthRangeOptions.map(key => /*#__PURE__*/React.createElement("option", {
    key: key,
    value: key
  }, formatMonth(key))))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u7ED3\u675F\u6708\u4EFD"), /*#__PURE__*/React.createElement("select", {
    value: rangeEnd,
    onChange: event => setRangeEnd(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u6700\u665A\u6708\u4EFD"), monthRangeOptions.map(key => /*#__PURE__*/React.createElement("option", {
    key: key,
    value: key
  }, formatMonth(key))))), /*#__PURE__*/React.createElement("p", null, "\u53EF\u8DE8\u5E74\u4EFD\u9009\u62E9\uFF1B\u5982\u679C\u8D77\u6B62\u987A\u5E8F\u9009\u53CD\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u6309\u8F83\u65E9\u6708\u4EFD\u5230\u8F83\u665A\u6708\u4EFD\u5904\u7406\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "advanced-search-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\u7B2C\u4E09\u6B65 \xB7 \u7CBE\u786E\u7B5B\u9009"), /*#__PURE__*/React.createElement("strong", null, "航线专业搜索")), /*#__PURE__*/React.createElement("div", {
    className: "advanced-search-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "advanced-toggle",
    "aria-expanded": showAdvanced,
    onClick: () => setShowAdvanced(!showAdvanced)
  }, showAdvanced ? '收起高级筛选' : '更多筛选', advancedFilterCount ? ' (' + advancedFilterCount + ')' : ''), /*#__PURE__*/React.createElement("button", {
    className: "reset-search",
    "aria-label": "\u6E05\u7A7A\u5168\u90E8\u6761\u4EF6",
    onClick: resetFilters
  }, "\u6E05\u7A7A\u6761\u4EF6"))), activeAdvancedFilters.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "active-advanced-filters",
    "aria-label": "当前高级筛选条件"
  }, /*#__PURE__*/React.createElement("span", null, group.length === 0 ? '当前条件无匹配，可移除条件重选：' : '已选条件：'), activeAdvancedFilters.map(filter => /*#__PURE__*/React.createElement("button", {
    key: filter.key,
    type: "button",
    "aria-label": '移除' + filter.label,
    onClick: filter.clear
  }, filter.label, ' ×'))), /*#__PURE__*/React.createElement("div", {
    className: 'advanced-search-grid ' + (showAdvanced ? 'open' : '')
  }, React.createElement('label', null, React.createElement('span', null, '登船日期 · 起始（含当天）'), React.createElement('input', {
    type: 'date', value: boardingStart, 'aria-label': '登船起始日期', 'aria-describedby': 'boarding-date-help',
    onChange: event => setBoardingStart(event.target.value)
  })), React.createElement('label', null, React.createElement('span', null, '登船日期 · 截止（含当天）'), React.createElement('input', {
    type: 'date', value: boardingEnd, 'aria-label': '登船截止日期', 'aria-describedby': 'boarding-date-help',
    onChange: event => setBoardingEnd(event.target.value)
  })), React.createElement('div', { id: 'boarding-date-help', style: { gridColumn: '1 / -1', fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 } },
    '留空不限；查当天请将起止设为同一天。与上方月份条件同时生效。按船司公布的行程开始日筛选；含酒店或飞航的产品，请另行确认实际登船日。',
    boardingStart && boardingEnd && boardingStart > boardingEnd ? React.createElement('div', { role: 'alert', style: { color: '#b42318' } }, '起始日期晚于截止日期，请调整日期。') : null
  ), /*#__PURE__*/React.createElement("label", {
    className: "search-wide"
  }, /*#__PURE__*/React.createElement("span", null, "\u822A\u7EBF\u3001\u8239\u540D\u6216\u6E2F\u53E3\u5173\u952E\u8BCD"), /*#__PURE__*/React.createElement("input", {
    value: routeQuery,
    onChange: event => setRouteQuery(event.target.value),
    placeholder: "例如：南极三岛、北极点、加拉帕戈斯、Galapagos"
  })), /*#__PURE__*/React.createElement("div", {
    className: "company-filter-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "company-filter-label",
    id: "company-filter-label"
  }, "\u90AE\u8F6E\u516C\u53F8\uFF08\u53EF\u591A\u9009\uFF09"), /*#__PURE__*/React.createElement("div", {
    className: "company-multiselect"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "company-multiselect-trigger",
    "aria-labelledby": "company-filter-label",
    "aria-expanded": companyPickerOpen,
    "aria-controls": "company-filter-menu",
    onClick: () => setCompanyPickerOpen(!companyPickerOpen)
  }, /*#__PURE__*/React.createElement("span", null, companyFilterLabel), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, companyPickerOpen ? "\u25B2" : "\u25BC")), companyPickerOpen && /*#__PURE__*/React.createElement("div", {
    className: "company-multiselect-menu",
    id: "company-filter-menu",
    role: "group",
    "aria-labelledby": "company-filter-label"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'company-option-all ' + (companyKeys.length === 0 ? 'selected' : ''),
    "aria-pressed": companyKeys.length === 0,
    onClick: clearCompanyFilters
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, companyKeys.length === 0 ? "\u2713" : ""), /*#__PURE__*/React.createElement("strong", {
    className: "company-option-name"
  }, "\u5168\u90E8\u90AE\u8F6E\u516C\u53F8", /*#__PURE__*/React.createElement("span", {
    className: "company-option-count",
    "aria-label": companyFacetVoyages.length + "\u6761\u822A\u6B21"
  }, "\uFF08", companyFacetVoyages.length, "\uFF09"))), /*#__PURE__*/React.createElement("div", {
    className: "company-option-list"
  }, companyOptions.map(option => /*#__PURE__*/React.createElement("label", {
    className: "company-option",
    key: option.id
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    value: option.id,
    checked: companyKeys.includes(option.id),
    onChange: () => toggleCompanyFilter(option.id),
    "aria-label": option.label + "\uFF0C" + option.count + "\u6761\u822A\u6B21"
  }), /*#__PURE__*/React.createElement("span", {
    className: "company-option-name"
  }, option.label, /*#__PURE__*/React.createElement("span", {
    className: "company-option-count",
    "aria-label": option.count + "\u6761\u822A\u6B21"
  }, "\uFF08", option.count, "\uFF09"))))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "company-multiselect-close",
    onClick: () => setCompanyPickerOpen(false)
  }, "\u5B8C\u6210")), companyKeys.length > 0 && /*#__PURE__*/React.createElement("small", {
    className: "company-selection-summary",
    role: "status"
  }, "\u5DF2\u9009\uFF1A", selectedCompanyLabels.join("\u3001")))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u90AE\u8F6E\u8239\u53EA"), /*#__PURE__*/React.createElement("select", {
    value: shipSelectDisabled ? 'all' : shipKey,
    disabled: shipSelectDisabled,
    "aria-describedby": shipSelectDisabled ? "ship-filter-empty" : undefined,
    onChange: event => setShipKey(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, shipSelectDisabled ? "\u6682\u65E0\u53EF\u9009\u8239\u53EA" : "\u5168\u90E8\u8239\u53EA"), shipOptions.map(value => /*#__PURE__*/React.createElement("option", {
    key: value,
    value: value
  }, value))), shipSelectDisabled && /*#__PURE__*/React.createElement("small", {
    className: "filter-empty-note",
    id: "ship-filter-empty",
    role: "status"
  }, companyKeys.length === 0 ? "\u5F53\u524D\u6682\u65E0\u8239\u53EA\u6570\u636E" : "\u6240\u9009\u8239\u53F8\u6682\u65E0\u8239\u53EA\u6570\u636E")), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u884C\u7A0B\u5929\u6570"), /*#__PURE__*/React.createElement("select", {
    value: durationKey,
    onChange: event => setDurationKey(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5929\u6570"), durationOptions.map(option => /*#__PURE__*/React.createElement("option", {
    key: option[0],
    value: option[0]
  }, option[1])))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u51FA\u53D1\u6E2F"), /*#__PURE__*/React.createElement("select", {
    value: departureKey,
    onChange: event => setDepartureKey(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u51FA\u53D1\u6E2F"), departureOptions.map(value => /*#__PURE__*/React.createElement("option", {
    key: value,
    value: value
  }, value)))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u5230\u8FBE\u6E2F"), /*#__PURE__*/React.createElement("select", {
    value: arrivalKey,
    onChange: event => setArrivalKey(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5230\u8FBE\u6E2F"), arrivalOptions.map(value => /*#__PURE__*/React.createElement("option", {
    key: value,
    value: value
  }, value)))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u5E93\u5B58\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
    value: availabilityKey,
    onChange: event => setAvailabilityKey(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5E93\u5B58"), availabilityOptions.map(option => /*#__PURE__*/React.createElement("option", {
    key: option[0],
    value: option[0]
  }, option[1])))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "\u4EF7\u683C\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
    value: priceKey,
    onChange: event => setPriceKey(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u4EF7\u683C\u72B6\u6001"), priceOptions.map(option => /*#__PURE__*/React.createElement("option", {
    key: option[0],
    value: option[0]
  }, option[1])))), /*#__PURE__*/React.createElement("label", {
    className: "check-filter"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: discountOnly,
    disabled: discountCandidateCount === 0 && !discountOnly,
    onChange: event => setDiscountOnly(event.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "\u6709\u5B98\u7F51\u6298\u6263"), /*#__PURE__*/React.createElement("small", null, discountCandidateCount > 0 || discountOnly ? '\u53EA\u770B\u539F\u4EF7\u9AD8\u4E8E\u5F53\u524D\u4EF7\u7684\u8231\u4F4D' : '\u5F53\u524D\u6761\u4EF6\u4E0B\u6682\u65E0\u5B98\u7F51\u6298\u6263')))), /*#__PURE__*/React.createElement("div", {
    className: "search-data-note"
  }, "\u5B98\u7F51\u672A\u516C\u5E03\u7684\u5B57\u6BB5\u4E0D\u4F1A\u88AB\u731C\u6D4B\u8865\u5168\uFF1B\u7B5B\u9009\u7ED3\u679C\u53EA\u4F7F\u7528\u8239\u53F8\u5B98\u65B9\u6570\u636E\u3002"), /*#__PURE__*/React.createElement("button", {
    className: "mobile-result-jump",
    onClick: () => document.querySelector('.compare-title-row')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, "\u67E5\u770B ", group.length, " \u6761\u822A\u6B21")), /*#__PURE__*/React.createElement("div", {
    className: "compare-title-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "compare",
    size: 21
  }), " ", cf === 'antarctic' ? '南极' : cf === 'arctic' ? '北极' : '非极地', "\u822A\u6B21\u6BD4\u4EF7"), /*#__PURE__*/React.createElement("span", null, "\u52FE\u9009 2\u20134 \u4E2A\u822A\u6B21\u505A\u805A\u7126\u5BF9\u6BD4")), /*#__PURE__*/React.createElement("div", {
    className: "sort-status-note",
    role: "note"
  }, /*#__PURE__*/React.createElement("strong", null, "\u5F53\u524D\u6392\u5E8F\uFF1A", sortDescription), /*#__PURE__*/React.createElement("span", null, "\u53EA\u4F7F\u7528\u5B98\u7F51\u786E\u8BA4\u53EF\u8BA2\u8231\u4F4D\uFF1B\u552E\u7F44\u3001\u5019\u8865\u8231\u4F4D\u4E0D\u53C2\u4E0E\u4EF7\u683C\u6216\u6298\u6263\u6392\u5E8F\uFF0C\u6CA1\u6709\u53EF\u8BA2\u4EF7\u7684\u822A\u6B21\u59CB\u7EC8\u7F6E\u540E\u3002")), visibleCurrencies.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "data-quality-banner",
    role: "note"
  }, "\u5F53\u524D\u5305\u542B ", visibleCurrencies.join(' / '), " \u591A\u79CD\u5B98\u7F51\u5E01\u79CD\uFF1B\u7CFB\u7EDF\u4E0D\u4F7F\u7528\u731C\u6D4B\u6C47\u7387\u6362\u7B97\uFF0C\u6392\u5E8F\u4EC5\u6309\u9875\u9762\u663E\u793A\u7684\u539F\u5E01\u79CD\u91D1\u989D\u6570\u5B57\uFF0C\u4E0D\u4EE3\u8868\u6362\u7B97\u540E\u7684\u5B9E\u9645\u4EF7\u683C\u9AD8\u4F4E\u3002"), selectedIds.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "compare-selection",
    "aria-label": "\u5DF2\u9009\u822A\u6B21"
  }, /*#__PURE__*/React.createElement("div", {
    className: "selection-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\u5DF2\u9009 ", selectedIds.length, "/4"), /*#__PURE__*/React.createElement("span", null, "\u5BF9\u6BD4\u5B98\u7F51\u53EF\u8BA2\u603B\u4EF7\u3001\u65E5\u5747\u4EF7\u3001\u5929\u6570\u548C\u51FA\u53D1\u65E5\u671F")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "compare-start-button",
    disabled: selectedIds.length < 2,
    onClick: startFocusedCompare
  }, compareActionLabel), /*#__PURE__*/React.createElement("button", {
    className: "compare-clear-button",
    onClick: clearSelection
  }, "\u6E05\u7A7A"))), /*#__PURE__*/React.createElement("div", {
    className: "selection-grid"
  }, selectedVoyages.map(voyage => {
    const co = getCo(voyage.co, cos);
    const price = minPrice(voyage);
    const currency = voyagePriceCurrency(voyage, price);
    return /*#__PURE__*/React.createElement("article", {
      key: voyage.id,
      className: "selection-card"
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": '移除' + voyage.name,
      onClick: () => toggleSelected(voyage.id)
    }, "\xD7"), /*#__PURE__*/React.createElement("span", null, co.cn || voyage.co), /*#__PURE__*/React.createElement("a", {
      className: "selection-voyage-link",
      href: voyageActionHref(voyage, co),
      target: voyageActionTarget(voyage, co),
      rel: voyageActionTarget(voyage, co) ? 'noopener noreferrer' : undefined,
      onClick: isVikingVoyage(voyage, co) ? event => handleVoyageAction(event, voyage, co) : undefined
    }, voyage.name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, fmt(price, currency)), /*#__PURE__*/React.createElement("em", null, price == null ? '日均价待确认' : fmt(Math.round(price / voyage.days), currency) + '/天')), /*#__PURE__*/React.createElement("small", null, voyage.date, " \xB7 ", voyageDurationLabel(voyage), " \xB7 ", voyageShip(voyage)));
  }))), selectionNotice && /*#__PURE__*/React.createElement("div", {
    className: 'selection-notice ' + (selectionNotice.startsWith('已生成') ? 'success' : ''),
    role: "status",
    "aria-live": "polite"
  }, selectionNotice), compareOpen && selectedVoyages.length >= 2 && /*#__PURE__*/React.createElement("section", {
    className: "focused-compare",
    ref: focusedCompareRef,
    tabIndex: "-1",
    "aria-labelledby": "focused-compare-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "focused-compare-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u805A\u7126\u6BD4\u4EF7"), /*#__PURE__*/React.createElement("h2", {
    id: "focused-compare-title"
  }, selectedVoyages.length, " \u6761\u822A\u6B21\u5BF9\u6BD4"), /*#__PURE__*/React.createElement("p", null, "\u540C\u5217\u67E5\u770B\u603B\u4EF7\u3001\u65E5\u5747\u4EF7\u3001\u65E5\u671F\u3001\u5929\u6570\u3001\u8239\u53EA\u4E0E\u51FA\u53D1\u6E2F\uFF1B\u4E0D\u540C\u5E01\u79CD\u4E0D\u505A\u731C\u6D4B\u6362\u7B97\u3002")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCompareOpen(false)
  }, "\u6536\u8D77\u5BF9\u6BD4")), /*#__PURE__*/React.createElement("div", {
    className: 'focused-compare-grid count-' + selectedVoyages.length
  }, selectedVoyages.map(voyage => {
    const co = getCo(voyage.co, cos);
    const price = minPrice(voyage);
    const currency = voyagePriceCurrency(voyage, price);
    return /*#__PURE__*/React.createElement("article", {
      key: voyage.id,
      className: "focused-voyage-column"
    }, /*#__PURE__*/React.createElement("div", {
      className: "focused-company"
    }, /*#__PURE__*/React.createElement(Logo, {
      co: co,
      size: 34
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, co.cn || voyage.co), /*#__PURE__*/React.createElement("small", null, co.en || ''))), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("a", {
      className: "focused-voyage-link",
      href: voyageActionHref(voyage, co),
      target: voyageActionTarget(voyage, co),
      rel: voyageActionTarget(voyage, co) ? 'noopener noreferrer' : undefined,
      onClick: isVikingVoyage(voyage, co) ? event => handleVoyageAction(event, voyage, co) : undefined
    }, voyage.name)), voyageFareNote(voyage) && React.createElement("p", {className: "voyage-fare-note"}, voyageFareNote(voyage)), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("div", {
      className: "focused-price"
    }, /*#__PURE__*/React.createElement("dt", null, "\u5B98\u7F51\u53EF\u8BA2\u603B\u4EF7\u8D77"), /*#__PURE__*/React.createElement("dd", null, fmt(price, currency))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "\u65E5\u5747\u4EF7"), /*#__PURE__*/React.createElement("dd", null, price == null ? '待确认' : fmt(voyageBookableDailyPrice(voyage), currency) + '/天')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "\u51FA\u53D1\u65E5\u671F"), /*#__PURE__*/React.createElement("dd", null, voyage.date || '官网未公布')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "\u884C\u7A0B\u5929\u6570"), /*#__PURE__*/React.createElement("dd", null, voyageDurationLabel(voyage))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "\u8239\u53EA"), /*#__PURE__*/React.createElement("dd", null, voyageShip(voyage))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "\u51FA\u53D1\u6E2F"), /*#__PURE__*/React.createElement("dd", null, normalizePortName(voyage.port) || '官网未公布'))), /*#__PURE__*/React.createElement("a", {
      href: voyageActionHref(voyage, co),
      target: voyageActionTarget(voyage, co),
      rel: voyageActionTarget(voyage, co) ? 'noopener noreferrer' : undefined,
      onClick: isVikingVoyage(voyage, co) ? event => handleVoyageAction(event, voyage, co) : undefined
    }, voyageActionLabel(voyage, "\u67E5\u770B\u5B98\u65B9\u822A\u6B21")));
  }))), selectedIds.length > 0 && !compareOpen && /*#__PURE__*/React.createElement("aside", {
    className: "compare-mobile-dock",
    "aria-label": "\u5DF2\u9009\u822A\u6B21\u5FEB\u6377\u6BD4\u4EF7"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\u5DF2\u9009 ", selectedIds.length, "/4"), /*#__PURE__*/React.createElement("span", null, selectedIds.length < 2 ? '再选 1 条' : '可以开始比价')), /*#__PURE__*/React.createElement("button", {
    disabled: selectedIds.length < 2,
    onClick: startFocusedCompare
  }, compareActionLabel)), visibleVoyages.length ? /*#__PURE__*/React.createElement("div", {
    className: "compare-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "compare"
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: '4%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '24%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '18%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '9%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '9%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '10%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '26%'
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u9009\u62E9"), /*#__PURE__*/React.createElement("th", null, "\u516C\u53F8"), /*#__PURE__*/React.createElement("th", null, "\u822A\u7EBF\xB7\u8239\u53EA"), /*#__PURE__*/React.createElement("th", null, "\u65E5\u671F"), /*#__PURE__*/React.createElement("th", null, "\u5929\u6570"), /*#__PURE__*/React.createElement("th", null, "\u51FA\u53D1\u6E2F"), /*#__PURE__*/React.createElement("th", null, "\u6700\u4F4E\u53EF\u8BA2\u4EF7"))), /*#__PURE__*/React.createElement("tbody", null, visibleVoyages.map((v, i) => {
    const co = getCo(v.co, cos);
    const cheapest = minPrice(v);
    const cheapestDetails = voyageBookablePriceDetails(v);
    const cheapestCabin = cheapestDetails ? cheapestDetails.cabin : null;
    const cheapestCurrency = voyageBookablePriceCurrency(v);
    const dailyPrice = voyageBookableDailyPrice(v);
    const bestDiscount = voyageBookableDiscount(v);
    const checked = selectedIds.includes(v.id);
    const companyFullName = co.cn || co.en || v.co;
    const companyPrimaryName = companyFullName.includes(' / ') ? companyFullName.split(' / ')[0] : companyFullName;
    const companySecondaryName = co.en && co.en !== companyFullName ? co.en : '';
    return /*#__PURE__*/React.createElement("tr", {
      key: v.id + '_' + i,
      className: checked ? 'selected' : '',
      "data-voyage-id": v.id,
      "data-sort-price": cheapest == null ? '' : cheapest,
      "data-sort-daily": dailyPrice == null ? '' : dailyPrice,
      "data-sort-currency": cheapest == null ? '' : cheapestCurrency,
      "data-sort-discount": bestDiscount,
      "data-has-bookable-price": cheapest == null ? 'false' : 'true'
    }, /*#__PURE__*/React.createElement("td", {
      "data-label": "\u9009\u62E9",
      className: "select-cell",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("label", {
      className: "compare-check"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      onChange: () => toggleSelected(v.id),
      "aria-label": '选择' + v.name
    }), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u516C\u53F8",
      className: "company-column"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "company-cell company-detail-link",
      "data-company-id": co.id,
      title: "\u67E5\u770B\u8239\u53F8 " + companyFullName,
      "aria-label": "\u67E5\u770B\u8239\u53F8 " + companyFullName,
      onClick: event => {
        event.stopPropagation();
        if (onDetail) onDetail(co);
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      co: co,
      size: 40
    }), /*#__PURE__*/React.createElement("span", {
      className: "company-cell-copy"
    }, /*#__PURE__*/React.createElement("strong", null, companyPrimaryName), companySecondaryName && /*#__PURE__*/React.createElement("span", null, companySecondaryName), /*#__PURE__*/React.createElement("em", null, co.pos || '')))), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u822A\u7EBF\xB7\u8239\u53EA"
    }, /*#__PURE__*/React.createElement("a", {
      className: "voyage-name",
      href: voyageActionHref(v, co),
      target: voyageActionTarget(v, co),
      rel: voyageActionTarget(v, co) ? 'noopener noreferrer' : undefined,
      onClick: isVikingVoyage(v, co) ? event => handleVoyageAction(event, v, co) : undefined
    }, v.name), /*#__PURE__*/React.createElement("span", {
      className: "voyage-ship"
    }, voyageShip(v)), voyageFareNote(v) && React.createElement("small", {className: "voyage-fare-note"}, voyageFareNote(v))), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u65E5\u671F",
      className: "nowrap"
    }, v.date), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u5929\u6570",
      className: "nowrap"
    }, /*#__PURE__*/React.createElement("strong", null, voyageDurationLabel(v))), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u51FA\u53D1\u6E2F",
      className: "col-port",
      title: normalizePortName(v.port)
    }, normalizePortName(v.port) || '—'), /*#__PURE__*/React.createElement("td", {
      "data-label": "\u6700\u4F4E\u53EF\u8BA2\u4EF7",
      className: "cabin-cell"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cabin-prices"
    }, cheapestCabin ? (() => {
      const disc = cheapestCabin.orig && cheapestCabin.orig > cheapestCabin.price ? Math.round((1 - cheapestCabin.price / cheapestCabin.orig) * 100) : 0;
      return /*#__PURE__*/React.createElement("span", {
        className: "cabin-price cheapest",
        title: cheapestCabin.cat || '\u6700\u4F4E\u53EF\u8BA2\u4EF7'
      }, /*#__PURE__*/React.createElement("span", null, "\u6700\u4F4E\u53EF\u8BA2\u4EF7"), /*#__PURE__*/React.createElement("b", null, fmt(cheapestCabin.price, cheapestDetails.currency)), /*#__PURE__*/React.createElement("small", null, cabinAvailability(cheapestCabin)), disc > 0 && /*#__PURE__*/React.createElement("em", null, "\u2193", disc, "%"), cheapestCabin.orig && cheapestCabin.orig > cheapestCabin.price && /*#__PURE__*/React.createElement("del", null, fmt(cheapestCabin.orig, cheapestDetails.currency)));
    })() : /*#__PURE__*/React.createElement("span", {
      className: "cabin-price unavailable"
    }, /*#__PURE__*/React.createElement("span", null, "\u53EF\u8BA2\u4EF7\u5F85\u786E\u8BA4"))), /*#__PURE__*/React.createElement("div", {
      className: "voyage-source-row"
    }, /*#__PURE__*/React.createElement("a", {
      className: "source-link voyage-source-action",
      href: voyageActionHref(v, co),
      target: voyageActionTarget(v, co),
      rel: voyageActionTarget(v, co) ? 'noopener noreferrer' : undefined,
      onClick: isVikingVoyage(v, co) ? event => handleVoyageAction(event, v, co) : undefined
    }, voyageActionLabel(v, "\u67E5\u770B\u822A\u6B21"), " ", /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\u2192")))));
  })))) : /*#__PURE__*/React.createElement("div", {
    className: "empty month-empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "\uD83D\uDDD3\uFE0F"), /*#__PURE__*/React.createElement("p", null, portFilterActive ? "\u5F53\u524D\u6E2F\u53E3\u7EC4\u5408\u6682\u65E0\u822A\u6B21\uFF0C\u8BF7\u8C03\u6574\u51FA\u53D1\u6E2F\u6216\u5230\u8FBE\u6E2F\u3002" : "\u5F53\u524D\u6761\u4EF6\u4E0B\u6682\u65E0\u822A\u6B21\uFF0C\u8BF7\u6E05\u7A7A\u90E8\u5206\u6761\u4EF6\u6216\u9009\u62E9\u5176\u4ED6\u6708\u4EFD\u3002")));
}
function CruiseCompanyCard({
  company,
  promotionCount,
  dropCount,
  onSelect
}) {
  const regions = [...new Set((company.r || []).map(topLevelRegion))];
  const regionLabel = regions.length > 1 ? '多地区' : regions[0] === 'antarctic' ? '南极' : regions[0] === 'arctic' ? '北极' : '非极地';
  const regionClass = regions.length > 1 ? 'tag-both' : regions[0] === 'antarctic' ? 'tag-ant' : regions[0] === 'arctic' ? 'tag-arc' : 'tag-gal';
  const ships = company.ships || [];
  const features = company.feat || [];
  const shipCount = Number.isFinite(company.sn) ? company.sn : ships.length;
  const visibleShips = ships.slice(0, 3);
  const remainingShips = Math.max(0, shipCount - visibleShips.length);
  const companyName = company.cn || company.en || company.id;
  const companyCardTitle = companyName.includes(' / ')
    ? companyName.split(' / ')[0]
    : companyName;
  const companyEnglish = company.en || '';
  const englishSubtitle = companyEnglish && companyEnglish !== companyCardTitle ? companyEnglish : '';
  const companyDescription = [englishSubtitle, company.pos || ''].filter(Boolean).join(' · ');
  const openCompany = () => onSelect && onSelect(company);
  return /*#__PURE__*/React.createElement("article", {
    className: "card-row cruise-company-card",
    "data-company-id": company.id,
    onClick: openCompany
  }, /*#__PURE__*/React.createElement("header", {
    className: "company-card-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "company-card-logo-frame",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Logo, {
    co: company,
    size: 48
  })), /*#__PURE__*/React.createElement("div", {
    className: "company-card-identity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "company-card-title-row"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cn company-card-title",
    title: companyName
  }, companyCardTitle), /*#__PURE__*/React.createElement("span", {
    className: 'tag ' + regionClass
  }, regionLabel)), /*#__PURE__*/React.createElement("p", {
    className: "en company-card-subtitle",
    title: companyDescription
  }, companyDescription))), /*#__PURE__*/React.createElement("div", {
    className: "company-card-body"
  }, /*#__PURE__*/React.createElement("section", {
    className: "company-card-ships",
    "aria-label": "\u8239\u53EA\u4FE1\u606F"
  }, /*#__PURE__*/React.createElement("div", {
    className: "company-card-section-heading"
  }, /*#__PURE__*/React.createElement("span", null, "\u8239\u53EA"), /*#__PURE__*/React.createElement("strong", null, shipCount, "\u8258")), /*#__PURE__*/React.createElement("div", {
    className: "company-card-ship-tags"
  }, visibleShips.length ? visibleShips.map(ship => /*#__PURE__*/React.createElement("span", {
    className: "company-card-ship-tag",
    key: ship,
    title: ship
  }, ship)) : /*#__PURE__*/React.createElement("span", {
    className: "company-card-ship-empty"
  }, "\u6682\u65E0\u8239\u53EA\u6570\u636E"), remainingShips > 0 && /*#__PURE__*/React.createElement("span", {
    className: "company-card-ship-more",
    "aria-label": "\u53E6\u6709 " + remainingShips + " \u8258\u8239"
  }, "另有 ", remainingShips, " 艘"))), /*#__PURE__*/React.createElement("section", {
    className: "company-card-features",
    "aria-label": "\u8239\u53F8\u7279\u8272"
  }, features.slice(0, 4).map(feature => /*#__PURE__*/React.createElement("span", {
    className: "company-card-feature-tag",
    key: feature,
    title: feature
  }, feature))), /*#__PURE__*/React.createElement("section", {
    className: "company-card-signals",
    "aria-label": "\u4FC3\u9500\u4E0E\u964D\u4EF7"
  }, promotionCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "badge-sm badge-promo"
  }, promotionCount, "\u6761\u4FC3\u9500"), dropCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "badge-sm badge-drop"
  }, dropCount, "\u822A\u6B21\u964D\u4EF7"))), /*#__PURE__*/React.createElement("footer", {
    className: "company-card-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "company-card-action",
    "aria-label": "\u67E5\u770B\u8239\u53F8 " + companyName,
    onClick: event => {
      event.stopPropagation();
      openCompany();
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u67E5\u770B\u8239\u53F8"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
function CompaniesView({
  cos,
  P,
  V,
  onDetail
}) {
  const coDrops = {};
  V.forEach(v => {
    v.cabins.forEach(c => {
      if (c.orig && c.price < c.orig) coDrops[v.co] = (coDrops[v.co] || 0) + 1;
    });
  });
  const [q, setQ] = useState('');
  const filtered = q ? cos.filter(c => (c.cn || '').includes(q) || (c.en || '').toLowerCase().includes(q.toLowerCase()) || (c.pos || '').includes(q)) : cos;
  return /*#__PURE__*/React.createElement("div", null, React.createElement("a", { className: "family-entry-link", href: "?tab=family" }, "儿童与青少年政策 · 按年龄和同舱人数查询 →"), /*#__PURE__*/React.createElement("div", {
    className: "company-search",
    style: {
      position: 'relative',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    className: "company-search-input",
    placeholder: "搜索邮轮公司、英文名或定位",
    "aria-label": "\u641C\u7D22\u90AE\u8F6E\u516C\u53F8",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: '100%',
      padding: '12px 16px 12px 42px',
      borderRadius: 12,
      border: '1px solid var(--border)',
      background: 'var(--card)',
      color: 'var(--text)',
      fontSize: 16,
      outline: 'none',
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "cards"
  }, filtered.map(c => /*#__PURE__*/React.createElement(CruiseCompanyCard, {
      key: c.id,
      company: c,
      promotionCount: P.filter(p => p.co === c.id).length,
      dropCount: coDrops[c.id] || 0,
      onSelect: onDetail
    }))));
}
/* Public, reviewed policies. These helpers never produce a booking quote. */
function familyScopeMatches(rule, query) {
  return (!rule.scope || rule.scope === 'all' || query.scope === 'all' || rule.scope === query.scope) &&
    (!rule.product || rule.product === 'all' || query.product === 'all' || rule.product === query.product);
}
function familyEvaluate(policy, query) {
  const valid = Array.isArray(query.ages) && query.ages.length > 0 && query.ages.length <= 3 && query.ages.every(age => Number.isInteger(age) && age >= 0 && age < 216) && Number.isInteger(query.adults) && query.adults >= 1 && query.adults <= 3;
  if (!valid) return { ageStatus: 'invalid', offers: [] };
  const rules = (policy.age_rules || []).filter(rule => familyScopeMatches(rule, query));
  const children = query.ages.map(months => {
    const statuses = rules.map(rule => {
      if (months < rule.min_months) return rule.case_min_months != null && months >= rule.case_min_months ? 'review' : 'below';
      if (rule.exclusive && months === rule.min_months || rule.conditional) return 'review';
      return 'within';
    });
    if (!statuses.length) return 'unknown';
    if (statuses.every(s => s === 'below')) return 'below';
    return statuses.every(s => s === 'within') ? 'within' : 'review';
  });
  let ageStatus = children.includes('below') ? 'below' : children.includes('unknown') ? 'unknown' : children.includes('review') ? 'review' : 'within';
  // A selected product is needed when the published minimum varies by product.
  if (query.product === 'all' && new Set(rules.map(r => r.product || 'all')).size > 1 && ageStatus === 'within') ageStatus = 'review';
  const offers = [];
  if (ageStatus !== 'below') (policy.offers || []).forEach(rule => {
    if (!familyScopeMatches(rule, query) || rule.adults_exact != null && query.adults !== rule.adults_exact || rule.adults_min != null && query.adults < rule.adults_min || rule.max_children && query.ages.length > rule.max_children) return;
    // Aurora expressly excludes two adults + a child + a teenager.
    if (policy.company_id === 'aurora' && query.adults === 2 && query.ages.length > 1 && query.ages.some(a => a >= 156)) return;
    query.ages.forEach((months, index) => {
      if (months < rule.min_months || months >= rule.max_months_exclusive) return;
      offers.push({ ...rule, child: index + 1, needsConfirmation: Boolean(rule.conflict || rule.conditional || rule.product !== 'all' && query.product === 'all' || rule.scope !== 'all' && query.scope === 'all' || ageStatus !== 'within') });
    });
  });
  return { ageStatus, offers };
}
function familyDiscountMatches(result, policy, value) {
  if (value === 'all') return true;
  if (value === 'unknown') return !(policy.offers || []).length && !policy.inquiry_offer && !policy.no_minor_fare;
  if (value === 'inquiry') return Boolean(policy.inquiry_offer);
  if (value === 'published') return result.offers.length > 0;
  const limit = { half: .5, thirtyfive: .35, free: 0 }[value];
  return result.offers.some(o => typeof o.pay_fraction === 'number' && o.pay_fraction <= limit);
}
const FAMILY_AGE_LABELS = { within: '达到已知年龄下限', below: '低于所选范围的年龄下限', review: '年龄／产品条件需确认', unknown: '年龄政策待确认', invalid: '请填写有效年龄' };
function familyInitialQuery() {
  const fallback = { ages: [144], adults: 2, company: '', scope: 'all', product: 'all', discount: 'all', ageFilter: 'all' };
  try {
    const saved = JSON.parse(sessionStorage.getItem('ticket-family-query-v1') || 'null');
    if (saved && Array.isArray(saved.ages) && familyEvaluate({}, saved).ageStatus !== 'invalid') Object.assign(fallback, saved);
    const requested = new URLSearchParams(window.location.search).get('family_company');
    if (requested && FAMILY_POLICIES.companies.some(c => c.company_id === requested)) fallback.company = requested;
  } catch (_) {}
  return fallback;
}
function FamilyPoliciesView({ cos }) {
  const [query, setQuery] = useState(familyInitialQuery);
  const h = React.createElement;
  useEffect(() => { try { sessionStorage.setItem('ticket-family-query-v1', JSON.stringify(query)); } catch (_) {} }, [query]);
  const update = (key, value) => setQuery(previous => ({ ...previous, [key]: value, ...(key === 'company' ? { product: 'all' } : {}) }));
  const changeAge = (i, value, unit) => {
    const ages = [...query.ages];
    if (value === '') ages[i] = null;
    else {
      const n = Number(value), old = Number.isInteger(ages[i]) ? ages[i] : 0;
      ages[i] = Number.isInteger(n) && n >= 0 && n <= (unit === 'years' ? 17 : 11) ? (unit === 'years' ? n * 12 + old % 12 : Math.floor(old / 12) * 12 + n) : null;
    }
    update('ages', ages);
  };
  const reset = () => {
    setQuery({ ages: [144], adults: 2, company: '', scope: 'all', product: 'all', discount: 'all', ageFilter: 'all' });
    const u = new URL(window.location.href); u.searchParams.delete('family_company'); window.history.replaceState(window.history.state, '', u);
  };
  const invalid = familyEvaluate({}, query).ageStatus === 'invalid';
  const rows = FAMILY_POLICIES.companies.map(policy => ({ policy, result: familyEvaluate(policy, query) })).filter(({ policy, result }) =>
    (!query.company || policy.company_id === query.company) && (query.ageFilter === 'all' || result.ageStatus === query.ageFilter) && familyDiscountMatches(result, policy, query.discount));
  const select = (key, label, items) => h('label', { className: 'family-field', key }, h('span', null, label), h('select', { 'aria-label': label, value: query[key], onChange: e => update(key, key === 'adults' ? Number(e.target.value) : e.target.value) }, items.map(([value, title]) => h('option', { value, key: value }, title))));
  return h('section', { className: 'family-page' },
    h('header', { className: 'family-heading' }, h('div', null, h('h1', null, '儿童与青少年政策'), h('p', null, '按年龄、船司和同舱人数，查找登船年龄规则与儿童优惠。')), h('span', { className: 'family-date' }, '政策核查：', FAMILY_POLICIES.reviewed_on)),
    h('div', { className: 'family-controls' },
      h('fieldset', { className: 'family-ages' }, h('legend', null, '孩子出发时的年龄'), query.ages.map((months, i) => h('div', { className: 'family-age-row', key: i },
        h('span', null, '孩子 ', i + 1), h('input', { type: 'number', inputMode: 'numeric', min: 0, max: 17, 'aria-label': '孩子' + (i + 1) + '岁数', value: Number.isInteger(months) ? Math.floor(months / 12) : '', onChange: e => changeAge(i, e.target.value, 'years') }), h('span', null, '岁'),
        h('input', { type: 'number', inputMode: 'numeric', min: 0, max: 11, 'aria-label': '孩子' + (i + 1) + '月数', value: Number.isInteger(months) ? months % 12 : '', onChange: e => changeAge(i, e.target.value, 'months') }), h('span', null, '个月'),
        query.ages.length > 1 && h('button', { type: 'button', className: 'family-text-button', 'aria-label': '移除孩子' + (i + 1), onClick: () => update('ages', query.ages.filter((_, j) => i !== j)) }, '移除'))),
        query.ages.length < 3 && h('button', { type: 'button', className: 'family-text-button', onClick: () => update('ages', [...query.ages, 144]) }, '+ 添加孩子')),
      h('div', { className: 'family-select-grid' },
        select('company', '邮轮公司', [['', '全部邮轮公司'], ...cos.map(c => [c.id, c.cn || c.en])]),
        select('adults', '同舱全额付费成人', [[1, '1 名成人'], [2, '2 名成人'], [3, '3 名成人']]),
        select('scope', '航行地区', [['all', '全部地区／尚未确定'], ['antarctic', '南极'], ['arctic', '北极'], ['nonpolar', '非极地']]),
        ['ponant', 'antarctica21', 'silversea'].includes(query.company) && select('product', '产品类型', query.company === 'ponant' ? [['all', '全部类型／尚未确定'], ['expedition', '普通探险航程'], ['charcot', 'Le Commandant Charcot'], ['classic', '经典航程']] : query.company === 'silversea' ? [['all', '全部船舶／尚未确定'], ['expedition', 'Endeavour／Cloud／Origin／Wind'], ['classic', '其他普通船舶']] : [['all', '全部类型／尚未确定'], ['fly', '飞航产品'], ['sea', '纯海航产品']]),
        select('discount', '儿童优惠', [['all', '全部政策'], ['published', '有符合当前组合的公开优惠'], ['half', '有五折或更低的政策线索'], ['thirtyfive', '有3.5折或更低的政策线索'], ['free', '有免船费政策线索'], ['inquiry', '官方儿童价需询价／查航次'], ['unknown', '尚未核实公开儿童优惠']]),
        select('ageFilter', '年龄初筛', [['all', '全部年龄状态'], ['within', '达到已知年龄下限'], ['review', '年龄／产品条件需确认'], ['unknown', '年龄政策待确认'], ['below', '低于已知年龄下限']]))),
    h('div', { className: 'family-query-note' }, '年龄仅作初筛，需结合具体船舶、航次及官方日期口径确认。折扣筛选包含附条件线索；最多减免不等于固定折扣，船费减免不代表税费全免。'),
    h('div', { className: 'family-result-bar' }, h('strong', { 'aria-live': 'polite' }, invalid ? '请填写0—17岁、0—11个月的有效年龄' : rows.length + ' 家船司符合当前筛选'), h('button', { type: 'button', className: 'family-reset', onClick: reset }, '重置筛选')),
    invalid ? h('p', { role: 'alert' }, '请检查孩子年龄后再查看结果。') : h('div', { className: 'family-results' }, rows.map(({ policy, result }) => h('article', { className: 'family-policy-card', key: policy.company_id, 'data-family-company': policy.company_id },
      h('header', null, h('h2', null, policy.company_name), h('span', { className: 'family-age-status family-' + result.ageStatus }, FAMILY_AGE_LABELS[result.ageStatus])),
      h('div', { className: 'family-offer-list' }, result.offers.length ? result.offers.map((o, i) => h('div', { className: 'family-offer', key: i }, h('strong', null, '孩子 ', o.child, ' · ', o.label), h('span', { className: 'family-conditional' }, o.needsConfirmation ? '适用条件待确认' : '政策条件匹配 · 仍需确认航次'), h('p', null, o.note))) : h('p', { className: 'family-no-offer' }, policy.no_minor_fare ? '官方不接待未满18岁的旅客，无适用的未成年船票优惠。' : result.ageStatus === 'below' ? '先核实登船年龄；此组合不展示儿童优惠。' : (policy.offers || []).length ? '当前年龄或同舱组合未匹配到已记录优惠。' : policy.inquiry_offer ? '官方提供儿童特别价，需按具体航次查询或询价。' : '尚未核实适用于该组合的公开儿童优惠，不代表没有优惠。')),
      h('p', { className: 'family-policy-summary' }, policy.summary_zh),
      h('footer', null, h('div', { className: 'family-sources' }, (policy.sources || []).map((url, i) => h('a', { href: url, target: '_blank', rel: 'noopener noreferrer', key: url }, '官方依据', policy.sources.length > 1 ? ' ' + (i + 1) : '', ' ↗'))), h('span', null, '核查 ', policy.checked_on))
    ))), !invalid && !rows.length && h('div', { className: 'family-empty' }, '没有匹配到已记录政策。试试放宽优惠或年龄条件；未查到不代表不能出行。'),
    h('p', { className: 'family-footnote' }, '政策查询不生成儿童最终票价，也不代表航次已确认接收儿童。来源不完整、边界含糊或条款冲突时，请按卡片提示向船司确认。'));
}
function DropsView({
  V,
  cos,
  onDetail
}) {
  const drops = bookableDiscountOffers(V).map(offer => ({
    co: getCo(offer.voyage.co, cos),
    v: offer.voyage,
    c: offer.cabin,
    pct: offer.pct
  }));
  const [region, setRegion] = useState('all');
  const fd = region === 'all' ? drops : drops.filter(d => voyageInRegion(d.v, region));
  const availability = c => cabinAvailability(c);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "filter-row",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: region === 'all' ? 'on' : '',
    onClick: () => setRegion('all')
  }, "\u5168\u90E8 ", drops.length), /*#__PURE__*/React.createElement("button", {
    className: region === 'antarctic' ? 'on' : '',
    onClick: () => setRegion('antarctic')
  }, "\u5357\u6781"), /*#__PURE__*/React.createElement("button", {
    className: region === 'arctic' ? 'on' : '',
    onClick: () => setRegion('arctic')
  }, "\u5317\u6781")), /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-title"
  }, /*#__PURE__*/React.createElement("h2", null, "\u964D\u4EF7\u822A\u6B21"), /*#__PURE__*/React.createElement("span", null, "\u6BCF\u4E2A\u822A\u6B21\u4EC5\u663E\u793A\u6700\u4F4E\u53EF\u8BA2\u4EF7")), fd.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text2)',
      padding: 36,
      textAlign: 'center'
    }
  }, "\u6682\u65E0\u964D\u4EF7\u822A\u6B21"), fd.map(d => /*#__PURE__*/React.createElement("div", {
    className: "drop-card",
    key: d.v.id,
    role: "link",
    tabIndex: 0,
    "aria-label": "\u67E5\u770B\u822A\u6B21 " + (d.v.name || ''),
    onKeyDown: event => activateOnKeyboard(event, () => openVoyageAction(d.v, d.co)),
    onClick: () => openVoyageAction(d.v, d.co)
  }, /*#__PURE__*/React.createElement("div", {
    className: "drop-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drop-logo"
  }, /*#__PURE__*/React.createElement(Logo, {
    co: d.co,
    size: 86
  })), /*#__PURE__*/React.createElement("div", {
    className: "drop-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drop-topline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "drop-company"
  }, d.co.cn || d.co.en || d.v.co), /*#__PURE__*/React.createElement("span", {
    className: "drop-region " + (d.v.r || '')
  }, voyageInRegion(d.v, 'arctic') && !voyageInRegion(d.v, 'antarctic') ? '\u5317\u6781' : voyageInRegion(d.v, 'antarctic') && !voyageInRegion(d.v, 'arctic') ? '\u5357\u6781' : '\u5357\u5317\u6781')), /*#__PURE__*/React.createElement("div", {
    className: "drop-title"
  }, (d.v.name || '').replace(/\s+/g, ' ').trim()), /*#__PURE__*/React.createElement("div", {
    className: "drop-detail-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drop-detail"
  }, /*#__PURE__*/React.createElement("span", null, "\u8239\u53EA"), /*#__PURE__*/React.createElement("strong", null, voyageShip(d.v))), /*#__PURE__*/React.createElement("div", {
    className: "drop-detail"
  }, /*#__PURE__*/React.createElement("span", null, "\u51FA\u53D1"), /*#__PURE__*/React.createElement("strong", null, d.v.date || '\u5F85\u786E\u8BA4')), /*#__PURE__*/React.createElement("div", {
    className: "drop-detail"
  }, /*#__PURE__*/React.createElement("span", null, "\u8231\u4F4D"), /*#__PURE__*/React.createElement("strong", null, d.c.cat)), /*#__PURE__*/React.createElement("div", {
    className: "drop-detail"
  }, /*#__PURE__*/React.createElement("span", null, "\u5E93\u5B58"), /*#__PURE__*/React.createElement("strong", null, availability(d.c)))))), /*#__PURE__*/React.createElement("div", {
    className: "drop-price-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drop-pct"
  }, "-", d.pct, "%"), /*#__PURE__*/React.createElement("div", {
    className: "drop-price old"
  }, "\u539F\u4EF7 ", /*#__PURE__*/React.createElement("span", null, fmt(d.c.orig, d.c.currency || d.v.currency))), /*#__PURE__*/React.createElement("div", {
    className: "drop-price current"
  }, "\u73B0\u4EF7 ", /*#__PURE__*/React.createElement("strong", null, fmt(d.c.price, d.c.currency || d.v.currency))), /*#__PURE__*/React.createElement("div", {
    className: "drop-save"
  }, "\u8282\u7701 ", fmt(d.c.orig - d.c.price, d.c.currency || d.v.currency)))))));
}
function PromoView({
  P,
  V,
  cos,
  rawCount
}) {
  const [region, setRegion] = useState('all');
  const [company, setCompany] = useState('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('discount');
  const promoRegion = p => {
    const txt = (p.t || '') + (p.d || '');
    const ant = /南极|antarctic|antarctica|peninsula|penguin|企鹅|德雷克|drake|乌斯怀亚|ushuaia|南乔治亚|south.georgia|福克兰|falkland|威德尔|weddell|罗斯海|ross.sea|飞南极/i.test(txt);
    const arc = /北极|arctic(?!a)|斯瓦尔巴|svalbard|格陵兰|greenland|冰岛|iceland|朗伊尔|longyearbyen|挪威|norway|法罗|faroe|西北航道|northwest.passage|巴芬|baffin|北极点|north.pole|spitsbergen/i.test(txt.replace(/antarctic/gi, ''));
    if (ant && !arc) return 'antarctic';
    if (arc && !ant) return 'arctic';
    return 'both';
  };
  const promoDiscount = p => {
    if (Number.isFinite(p.discount_percentage)) {
      return Number(p.discount_percentage);
    }
    const match = String(p.v || '').match(/(\d+(?:\.\d+)?)\s*%/);
    return match ? Number(match[1]) : -1;
  };
  const promoDeadline = p => {
    const value = String(p.exp || '').trim();
    return value && !/未公布|见官网|待确认/.test(value) ? value : '';
  };
  const searchText = query.trim().toLowerCase();
  const fp = P.filter(p => {
    const regionMatch = region === 'all' || promoRegion(p) === 'both' || promoRegion(p) === region;
    const companyMatch = company === 'all' || p.co === company;
    const haystack = [p.t, p.d, p.v, p.exp].filter(Boolean).join(' ').toLowerCase();
    return regionMatch && companyMatch && (!searchText || haystack.includes(searchText));
  }).sort((a, b) => {
    if (sort === 'company') return String(a.co).localeCompare(String(b.co), 'zh-CN') || String(a.t).localeCompare(String(b.t), 'zh-CN');
    if (sort === 'title') return String(a.t).localeCompare(String(b.t), 'zh-CN');
    return promoDiscount(b) - promoDiscount(a) || String(a.co).localeCompare(String(b.co), 'zh-CN');
  });
  const promoCompanyIds = new Set(P.map(p => p.co));
  const coveredCompanies = cos.filter(c => promoCompanyIds.has(c.id));
  const noPromoCompanies = cos.filter(c => !promoCompanyIds.has(c.id));
  const officialUrl = c => c && c.domain ? 'https://' + c.domain : '#';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "promo-filter-grid"
  }, /*#__PURE__*/React.createElement("label", {
    className: "promo-filter-search"
  }, /*#__PURE__*/React.createElement("span", null, "主题/优惠关键词"), /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: query,
    placeholder: "如：单人、套房、会员",
    "aria-label": "搜索主题或优惠关键词",
    title: "搜索促销标题、优惠说明和优惠文案",
    onChange: event => setQuery(event.target.value)
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "船司"), /*#__PURE__*/React.createElement("select", {
    value: company,
    "aria-label": "按船司筛选促销",
    onChange: event => setCompany(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "全部船司"), coveredCompanies.slice().sort((a, b) => String(a.cn || a.en || a.id).localeCompare(String(b.cn || b.en || b.id), 'zh-CN')).map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.id
  }, c.cn || c.en || c.id)))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "排序"), /*#__PURE__*/React.createElement("select", {
    value: sort,
    "aria-label": "促销排序",
    onChange: event => setSort(event.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "discount"
  }, "优惠幅度优先"), /*#__PURE__*/React.createElement("option", {
    value: "company"
  }, "按船司分组"), /*#__PURE__*/React.createElement("option", {
    value: "title"
  }, "按主题排序"))), /*#__PURE__*/React.createElement("div", {
    className: "promo-region-filter",
    role: "group",
    "aria-label": "按地区筛选促销"
  }, /*#__PURE__*/React.createElement("span", null, "地区"), /*#__PURE__*/React.createElement("div", {
    className: "filter-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: region === 'all' ? 'on' : '',
    onClick: () => setRegion('all')
  }, "\u5168\u90e8 ", P.length), /*#__PURE__*/React.createElement("button", {
    className: region === 'antarctic' ? 'on' : '',
    onClick: () => setRegion('antarctic')
  }, "\u5357\u6781"), /*#__PURE__*/React.createElement("button", {
    className: region === 'arctic' ? 'on' : '',
    onClick: () => setRegion('arctic')
  }, "\u5317\u6781")))), /*#__PURE__*/React.createElement("div", {
    className: "promo-status-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "promo-status-card"
  }, /*#__PURE__*/React.createElement("span", null, "有效官网促销"), /*#__PURE__*/React.createElement("strong", null, P.length), /*#__PURE__*/React.createElement("em", null, "覆盖 ", coveredCompanies.length, "/", cos.length, " 家邮轮公司 · 均可回到官网复核")), /*#__PURE__*/React.createElement("div", {
    className: "promo-status-card muted"
  }, /*#__PURE__*/React.createElement("span", null, "当前无有效促销"), /*#__PURE__*/React.createElement("strong", null, noPromoCompanies.length), /*#__PURE__*/React.createElement("em", null, "这些邮轮公司仍保留官网入口，方便人工复核"))), /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-title"
  }, /*#__PURE__*/React.createElement("h2", null, "\u6709\u6548\u8239\u53F8\u4FC3\u9500"), /*#__PURE__*/React.createElement("span", null, fp.length, " \u6761", rawCount > P.length ? " \xB7 \u5DF2\u8FC7\u6EE4 " + (rawCount - P.length) + " \u6761\u5F02\u5E38\u6570\u636E" : "")), fp.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text2)',
      padding: 36,
      textAlign: 'center'
    }
  }, "\u6682\u65E0\u4FC3\u9500\u60C5\u62A5"), /*#__PURE__*/React.createElement("div", {
    className: "promo-list"
  }, fp.map((p, i) => {
    const co = getCo(p.co, cos);
    return /*#__PURE__*/React.createElement("div", {
      className: "promo-card",
      key: p.id || p.co + p.t + i,
      role: "link",
      tabIndex: 0,
      "aria-label": "\u67E5\u770B\u4F18\u60E0 " + (p.t || ''),
      onKeyDown: event => activateOnKeyboard(event, () => openPromotionAction(p, co, V)),
      onClick: () => openPromotionAction(p, co, V)
    }, /*#__PURE__*/React.createElement("div", {
      className: "promo-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "promo-company"
    }, /*#__PURE__*/React.createElement("div", {
      className: "promo-logo"
    }, co.id ? /*#__PURE__*/React.createElement(Logo, {
      co: co,
      size: 64
    }) : /*#__PURE__*/React.createElement("span", {
      className: "promo-avatar"
    }, "\u4FC3\u9500")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "promo-company-name"
    }, co.cn || co.en || p.co || '\u8239\u53F8\u4FC3\u9500'), /*#__PURE__*/React.createElement("div", {
      className: "promo-company-sub"
    }, "\u8239\u53F8\u4FC3\u9500\u60C5\u62A5"))), /*#__PURE__*/React.createElement("div", {
      className: "promo-value"
    }, p.v || '\u4F18\u60E0')), /*#__PURE__*/React.createElement("div", {
      className: "promo-title"
    }, p.t), p.d ? /*#__PURE__*/React.createElement("div", {
      className: "promo-desc"
    }, p.d) : null, /*#__PURE__*/React.createElement("div", {
      className: "promo-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "promo-chip"
    }, promoRegion(p) === 'antarctic' ? '\u5357\u6781' : promoRegion(p) === 'arctic' ? '\u5317\u6781' : '\u5357\u5317\u6781'), p.applicable_voyage_count > 0 ? /*#__PURE__*/React.createElement("span", {
      className: "promo-chip"
    }, "\u9002\u7528 ", p.applicable_voyage_count, " \u6761\u822A\u6B21") : null, promoDeadline(p) ? /*#__PURE__*/React.createElement("span", {
      className: "promo-chip deadline"
    }, "\u622A\u6B62 ", promoDeadline(p)) : null, p.src ? /*#__PURE__*/React.createElement("span", {
      className: "promo-source"
    }, promotionActionLabel(p, "\u67E5\u770B\u4F18\u60E0 \u2192")) : null));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "panel promo-coverage-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-title"
  }, /*#__PURE__*/React.createElement("h2", null, "\u8239\u53F8\u8986\u76D6\u72B6\u6001"), /*#__PURE__*/React.createElement("span", null, noPromoCompanies.length, " \u5BB6\u6682\u65E0\u53EF\u6838\u9A8C\u4FC3\u9500")), /*#__PURE__*/React.createElement("div", {
    className: "coverage-list"
  }, noPromoCompanies.map(c => /*#__PURE__*/React.createElement("button", {
    className: "coverage-item",
    key: c.id,
    onClick: () => window.open(officialUrl(c), '_blank')
  }, /*#__PURE__*/React.createElement(Logo, {
    co: c,
    size: 34
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, c.cn || c.en || c.id), /*#__PURE__*/React.createElement("em", null, "\u6682\u65E0\u5B98\u65B9\u53EF\u6838\u9A8C\u4FC3\u9500")), /*#__PURE__*/React.createElement("b", null, "\u5B98\u7F51 \u2192"))))));
}
function AlertsView({
  V,
  P,
  cos,
  onDetail
}) {
  const drops = bookableDiscountOffers(V).map(offer => ({
    co: getCo(offer.voyage.co, cos),
    v: offer.voyage,
    c: offer.cabin,
    pct: offer.pct
  }));
  const [af, setAf] = useState('all');
  const fd = af === 'all' ? drops : drops.filter(d => voyageInRegion(d.v, af));
  const promoRegion = p => {
    const txt = (p.t || '') + (p.d || '');
    const ant = /南极|antarctic|antarctica|peninsula|penguin|企鹅|德雷克|drake|乌斯怀亚|ushuaia|南乔治亚|south.georgia|福克兰|falkland|威德尔|weddell|罗斯海|ross.sea|飞南极/i.test(txt);
    const arc = /北极|arctic(?!a)|斯瓦尔巴|svalbard|格陵兰|greenland|冰岛|iceland|朗伊尔|longyearbyen|挪威|norway|法罗|faroe|西北航道|northwest.passage|巴芬|baffin|北极点|north.pole|spitsbergen/i.test(txt.replace(/antarctic/gi, ''));
    if (ant && !arc) return 'antarctic';
    if (arc && !ant) return 'arctic';
    return 'both';
  };
  const fp = af === 'all' ? P : P.filter(p => {
    const r = promoRegion(p);
    return r === 'both' || r === af;
  });
  const card = {
    background: 'var(--card)',
    borderRadius: 16,
    border: '1px solid var(--border)',
    padding: '20px 24px',
    marginBottom: 12,
    cursor: 'pointer',
    transition: 'all .25s',
    boxShadow: 'var(--shadow-sm)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "filter-row",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: af === 'all' ? 'on' : '',
    onClick: () => setAf('all')
  }, "\u5168\u90E8"), /*#__PURE__*/React.createElement("button", {
    className: af === 'antarctic' ? 'on' : '',
    onClick: () => setAf('antarctic')
  }, "\u5357\u6781"), /*#__PURE__*/React.createElement("button", {
    className: af === 'arctic' ? 'on' : '',
    onClick: () => setAf('arctic')
  }, "\u5317\u6781")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    },
    className: "alerts-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text2)',
      marginBottom: 24,
      letterSpacing: 1,
      textTransform: 'uppercase'
    }
  }, "Price Drops \xB7 ", fd.length), fd.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text2)',
      padding: 40,
      textAlign: 'center'
    }
  }, "\u6682\u65E0\u964D\u4EF7\u822A\u6B21"), fd.map((d, i) => {
    const pd = Math.round(d.c.price / (d.v.days || 1));
    return /*#__PURE__*/React.createElement("div", {
      key: 'd' + i,
      onClick: () => openVoyageAction(d.v, d.co),
      style: card
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      co: d.co,
      size: 36
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        fontSize: 15,
        color: 'var(--text)',
        marginBottom: 3
      }
    }, d.co.en || d.v.co), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text)',
        marginBottom: 4,
        lineHeight: 1.4
      }
    }, d.v.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text2)',
        lineHeight: 1.5
      }
    }, d.c.cat, "  \xB7  ", voyageShip(d.v), "  \xB7  ", d.v.date, "  \xB7  ", voyageDurationLabel(d.v), "   \xB7  \u65E5\u5747 ", fmt(pd, d.c.currency || d.v.currency)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        paddingTop: 14,
        borderTop: '1px solid var(--ice)',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text2)'
      }
    }, "\u539F\u4EF7 ", /*#__PURE__*/React.createElement("span", {
      style: {
        textDecoration: 'line-through'
      }
    }, fmt(d.c.orig, d.c.currency || d.v.currency)), /*#__PURE__*/React.createElement("span", {
      style: {
        margin: '0 8px',
        color: 'var(--glacier)'
      }
    }, "\u2192"), "\u73B0\u4EF7 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 17,
        color: 'var(--text)'
      }
    }, fmt(d.c.price, d.c.currency || d.v.currency))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--green)'
      }
    }, "-", d.pct, "%")));
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text2)',
      marginBottom: 24,
      letterSpacing: 1,
      textTransform: 'uppercase'
    }
  }, "Active Promotions \xB7 ", fp.length), fp.map((p, i) => {
    const co = getCo(p.co, cos);
    const url = p.src || 'https://' + (co.domain || '') + (co.domain ? '/expeditions' : '');
    return /*#__PURE__*/React.createElement("div", {
      key: 'p' + i,
      onClick: () => {
        if (url) window.open(url, '_blank');
      },
      style: card
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      co: co,
      size: 36
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        fontSize: 15,
        color: 'var(--text)',
        marginBottom: 3
      }
    }, co.en || p.co), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text)',
        marginBottom: 4,
        lineHeight: 1.4
      }
    }, p.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text2)',
        lineHeight: 1.5
      }
    }, p.d))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        paddingTop: 14,
        borderTop: '1px solid var(--ice)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--warn)'
      }
    }, p.v), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text2)'
      }
    }, "\u622A\u6B62 ", p.exp)));
  }))));
}
function NewsView({
  N,
  cos
}) {
  const [cat, setCat] = useState('all');
  const [angle, setAngle] = useState('all');
  const cats = {};
  const angles = {};
  N.forEach(n => {
    cats[n.cat] = (cats[n.cat] || 0) + 1;
    angles[n.angle || '综合资讯'] = (angles[n.angle || '综合资讯'] || 0) + 1;
  });
  let filtered = cat === 'all' ? N : N.filter(n => n.cat === cat);
  if (angle !== 'all') filtered = filtered.filter(n => (n.angle || '综合资讯') === angle);
  const angleColors = {
    促销快讯: '#bfa06c',
    新船速报: 'var(--accent)',
    行业里程碑: 'var(--green)',
    目的地种草: '#e07b5a',
    行业趋势: 'var(--navy)',
    运营提醒: 'var(--red)',
    品牌荣誉: '#8b6faa',
    综合资讯: 'var(--text2)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "news",
    size: 21
  }), " \u6781\u5730\u60C5\u62A5\u7AD9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text2)',
      marginBottom: 14
    }
  }, cos.length, "\u5BB6\u6781\u5730\u90AE\u8F6E\u516C\u53F8\u6700\u65B0\u52A8\u6001 \xB7 \u7F16\u8F91\u7EA7\u4E2D\u6587\u6821\u8BD1 \xB7 \u5171", N.length, "\u6761\u60C5\u62A5"), /*#__PURE__*/React.createElement("div", {
    className: "filter-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: cat === 'all' ? 'on' : '',
    onClick: () => setCat('all')
  }, "\u5168\u90E8(", N.length, ")"), Object.keys(cats).sort().map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: cat === c ? 'on' : '',
    onClick: () => setCat(c)
  }, c, "(", cats[c], ")"))), /*#__PURE__*/React.createElement("div", {
    className: "filter-row",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: angle === 'all' ? 'on' : '',
    onClick: () => setAngle('all'),
    style: {
      fontSize: 13
    }
  }, "\u5168\u90E8\u9009\u9898"), Object.keys(angles).sort().map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    className: angle === a ? 'on' : '',
    onClick: () => setAngle(a),
    style: {
      fontSize: 13
    }
  }, a, "(", angles[a], ")"))), filtered.map(n => {
    const co = getCo(n.co, cos);
    const ang = n.angle || '综合资讯';
    return /*#__PURE__*/React.createElement("div", {
      className: "news-card",
      key: n.d + n.co + n.title,
      role: n.url ? "link" : undefined,
      tabIndex: n.url ? 0 : undefined,
      "aria-label": n.url ? "\u9605\u8BFB\u539F\u6587 " + (n.title || '') : undefined,
      style: {
        cursor: n.url ? 'pointer' : 'default'
      },
      onKeyDown: event => activateOnKeyboard(event, () => {
        if (n.url) window.open(n.url, '_blank');
      }),
      onClick: () => {
        if (n.url) window.open(n.url, '_blank');
      }
    }, co.id ? /*#__PURE__*/React.createElement(Logo, {
      co: co,
      size: 52
    }) : /*#__PURE__*/React.createElement("div", {
      className: "ico",
      style: {
        background: 'rgba(107,124,144,.08)',
        color: 'var(--text2)',
        fontSize: 12,
        fontWeight: 500
      }
    }, "\u8D44\u8BAF"), /*#__PURE__*/React.createElement("div", {
      className: "bd"
    }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        padding: '2px 10px',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 600,
        marginRight: 8,
        color: angleColors[ang] || 'var(--text2)',
        background: (angleColors[ang] || 'var(--text2)') + '15',
        verticalAlign: 'middle'
      }
    }, ang), n.title, " ", /*#__PURE__*/React.createElement("span", {
      className: 'imp imp-' + (n.imp === 'high' ? 'high' : 'med')
    }, n.imp === 'high' ? '重磅' : '关注')), /*#__PURE__*/React.createElement("p", null, n.desc), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, co.cn || (n.co === 'industry' ? '行业资讯' : n.co), " \xB7 ", n.d, " \xB7 ", n.src, " \xB7 ", n.cat), n.url && /*#__PURE__*/React.createElement("span", {
      className: "card-action"
    }, "\u9605\u8BFB\u539F\u6587 \u2192")));
  }));
}
function QueryView({
  V,
  P,
  N,
  cos,
  onDetail
}) {
  const CNY_PER_USD = 7.2;
  const [q, setQ] = useState('');
  const [results, setResults] = useState(null);

  // ── 关键词配置表（数据驱动，加新词只改这里）──
  const KW = {
    region: {
      antarctic: ['南极', '企鹅', '南极光', '乌斯怀亚', '德雷克', '罗斯海', '南乔治亚', '福克兰', '马岛', '威德尔'],
      arctic: ['北极', '北极熊', '斯瓦尔巴', '格陵兰', '朗伊尔', '法罗群岛', '法罗', '冰岛', '雷克雅未克', '阿克雷里', '挪威', '西北航道', '巴芬']
    },
    months: {
      春节: '01',
      元旦: '12',
      圣诞: '12',
      跨年: '12',
      暑假: '07_08',
      寒假: '01_02'
    },
    identity: {
      couple: ['夫妻', '情侣', '蜜月', '二人'],
      elderly: ['带爸妈', '带父母', '老人', '长辈'],
      solo: ['单人', '一个人', '独行'],
      family: ['带小孩', '亲子']
    },
    prefs: {
      chinese: ['中文'],
      luxury: ['豪华', '奢华', '最好的', '顶级'],
      budget: ['省钱', '便宜', '性价比', '经济'],
      fly: ['飞南极', '不晕船', '飞越德雷克'],
      adventure: ['探险', '刺激', '户外'],
      photo: ['摄影', '拍照'],
      newship: ['新船', '最新的船'],
      balcony: ['阳台', 'balcony'],
      suite: ['套房', 'suite'],
      maxdiscount: ['折扣最大', '优惠最多', '促销最大'],
      compare: ['对比', '比较', '哪个好'],
      news: ['情报', '新闻', '动态']
    },
    ships: {
      ship_nansen: ['南森', 'nansen'],
      ship_amundsen: ['阿蒙森', 'amundsen'],
      ship_charcot: ['charcot', '指挥官'],
      ship_seaventure: ['海神', 'seaventure'],
      ship_ultramarine: ['ultramarine']
    },
    destinations: {
      faroe: ['法罗群岛', '法罗'],
      iceland: ['冰岛', '雷克雅未克', '阿克雷里'],
      greenland: ['格陵兰'],
      svalbard: ['斯瓦尔巴', '朗伊尔'],
      ross: ['罗斯海'],
      south_georgia: ['南乔治亚', '福克兰', '马岛'],
      weddell: ['威德尔']
    }
  };
  const parseIntent = text => {
    const t = text.toLowerCase();
    const intent = {
      region: null,
      months: [],
      year: null,
      budgetCny: null,
      budgetUsd: null,
      identity: [],
      prefs: [],
      destinations: [],
      ships: [],
      score: 0
    };
    // 区域（antarctic 优先）
    if (KW.region.antarctic.some(k => t.includes(k))) intent.region = 'antarctic';
    if (!intent.region && KW.region.arctic.some(k => t.includes(k))) intent.region = 'arctic';
    // 月份
    const m = t.match(/(\d{1,2})\s*月/);
    if (m) {
      const monMap = {
        1: '01',
        2: '02',
        3: '03',
        4: '04',
        5: '05',
        6: '06',
        7: '07',
        8: '08',
        9: '09',
        10: '10',
        11: '11',
        12: '12'
      };
      intent.months.push(monMap[parseInt(m[1])] || m[1]);
    }
    for (const [fest, mm] of Object.entries(KW.months)) {
      if (t.includes(fest)) {
        if (mm.includes('_')) {
          mm.split('_').forEach(x => intent.months.push(x));
          if (fest === '春节') intent.year = '2027';
        } else {
          intent.months.push(mm);
        }
      }
    }
    // 年份
    const ym = t.match(/20(\d{2})\s*年/);
    if (ym) intent.year = '20' + ym[1];
    // 预算
    const b = t.match(/(\d+)\s*万/);
    if (b) {
      intent.budgetCny = parseInt(b[1]) * 10000;
      intent.budgetUsd = Math.round(intent.budgetCny / CNY_PER_USD);
    }
    const usd = t.match(/\$?\s*(\d[\d,]*)\s*(美元|usd)/i) || t.match(/\$(\d[\d,]*)/);
    if (usd) {
      intent.budgetUsd = parseInt(usd[1].replace(/,/g, '')) || intent.budgetUsd;
      intent.budgetCny = null;
    }
    if (/不限预算|不管价格|都行/.test(t)) {
      intent.budgetCny = null;
      intent.budgetUsd = null;
    }
    // 身份
    for (const [id, kws] of Object.entries(KW.identity)) {
      if (kws.some(k => t.includes(k))) intent.identity.push(id);
    }
    // 偏好
    for (const [pref, kws] of Object.entries(KW.prefs)) {
      if (kws.some(k => t.includes(k))) intent.prefs.push(pref);
    }
    // 船名
    for (const [ship, kws] of Object.entries(KW.ships)) {
      if (kws.some(k => t.toLowerCase().includes(k.toLowerCase()))) intent.ships.push(ship);
    }
    // 目的地
    for (const [dest, kws] of Object.entries(KW.destinations)) {
      if (kws.some(k => t.includes(k))) intent.destinations.push(dest);
    }
    return intent;
  };
  const doQuery = text => {
    const query = text || q;
    if (!query.trim()) return;
    if (text) setQ(text);
    const intent = parseIntent(query);

    // ── 第1步：评分（所有航次）──
    const candidates = intent.budgetUsd ? V.filter(v => voyageBookableCabins(v).some(c => c.currency === 'USD' && c.price <= intent.budgetUsd)) : V;
    let scored = candidates.map(v => {
      let s = 0;
      const co = getCo(v.co, cos);
      if (intent.region && voyageInRegion(v, intent.region)) s += 30;
      if (intent.months.length && intent.months.some(m => v.date.includes('-' + m + '-'))) s += 25;
      if (intent.year && v.date.startsWith(intent.year)) s += 25;
      if (intent.budgetUsd) s += 20;
      // 目的地（搜航次名称）
      intent.destinations.forEach(d => {
        if (v.name.toLowerCase().includes(d)) s += 15;
      });
      // 偏好（每个匹配 +10，可叠加）
      intent.prefs.forEach(p => {
        if (p === 'fly' && (v.name.toLowerCase().includes('fly') || (co.feat || []).some(f => f.includes('飞')))) s += 10;
        if (p === 'chinese' && ((co.feat || []).some(f => f.includes('中文')) || v.co === '66expeditions')) s += 10;
        if (p === 'luxury' && co.pos && (co.pos.includes('奢华') || co.pos.includes('超奢'))) s += 10;
        if (p === 'adventure' && co.pos && co.pos.includes('探险')) s += 10;
        if (p === 'newship' && (co.feat || []).some(f => f.includes('新船'))) s += 5;
        if (p === 'balcony' && v.cabins.some(c => c.cat.includes('阳台') || c.cat.includes('Balcony'))) s += 10;
        if (p === 'suite' && v.cabins.some(c => c.cat.includes('套房') || c.cat.includes('Suite'))) s += 10;
      });
      // 船名
      intent.ships.forEach(ship => {
        if (v.ship && v.ship.toLowerCase().includes(ship.replace('ship_', ''))) s += 20;
      });
      return {
        voyage: v,
        score: s
      };
    });

    // 过滤：有评分的保留，无评分的也保留（全量）
    let filtered = scored.filter(x => x.score > 0);
    if (filtered.length === 0) filtered = scored; // 无匹配时显示全部

    // 偏好排序覆盖
    if (intent.prefs.includes('maxdiscount')) filtered.sort((a, b) => {
      const da = voyageBookableDiscount(a.voyage);
      const db = voyageBookableDiscount(b.voyage);
      return db - da;
    });else if (intent.prefs.includes('budget')) filtered.sort((a, b) => compareVoyagePrice(a.voyage, b.voyage, false));else filtered.sort((a, b) => b.score - a.score); // 默认按相关性降序

    let voyages = filtered.map(x => x.voyage);

    // 身份过滤（叠加，非互斥）
    if (intent.identity.includes('couple')) voyages = voyages.map(v => ({
      ...v,
      cabins: v.cabins.filter(c => !c.cat.includes('Triple') && !c.cat.includes('三人'))
    })).filter(v => v.cabins.length > 0);
    if (intent.identity.includes('elderly')) voyages = voyages.filter(v => v.days <= 15);
    setResults({
      intent,
      voyages: voyages.slice(0, 10)
    });
  };
  useEffect(() => {
    doQuery();
  }, []);
  const chips = ['12月南极 优惠最大', '南极 夫妻 蜜月 豪华', '南极 10万以内 中文', '飞南极 不晕船', '北极 暑假 性价比', '带爸妈 南极 不折腾', '格陵兰 北极', '法罗群岛', '斯瓦尔巴 北极熊'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "query",
    size: 21
  }), " \u667A\u80FD\u67E5\u8BE2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text2)',
      marginBottom: 14
    }
  }, "\u8F93\u5165\u81EA\u7136\u8BED\u8A00\u67E5\u8BE2\uFF0C\u4F8B\u5982\u300C12\u6708\u5357\u6781 \u871C\u6708 10\u4E07\u4EE5\u5185 \u4E2D\u6587\u300D\u3002\u4EBA\u6C11\u5E01\u9884\u7B97\u6309 7.2 \u6362\u7B97\u4E3A\u7F8E\u5143\u53C2\u8003\u4EF7\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "query-bar",
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: e => e.key === 'Enter' && doQuery(),
    placeholder: "\u8F93\u5165\u67E5\u8BE2... \u5982\uFF1A12\u6708\u5357\u6781 \u592B\u59BB \u6027\u4EF7\u6BD4",
    style: {
      flex: 1,
      padding: '12px 16px',
      borderRadius: 12,
      border: '1px solid var(--border)',
      background: 'var(--card)',
      color: 'var(--text)',
      fontSize: 17,
      outline: 'none',
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => doQuery(),
    style: {
      padding: '12px 24px',
      borderRadius: 12,
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      fontWeight: 700,
      fontSize: 17,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\u67E5\u8BE2")), /*#__PURE__*/React.createElement("div", {
    className: "filter-row",
    style: {
      marginBottom: 20
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => doQuery(c)
  }, c))), !results && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 0',
      color: 'var(--text2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginBottom: 12,
      letterSpacing: .5
    }
  }, "\u70B9\u51FB\u4E0A\u65B9\u6807\u7B7E\u5F00\u59CB\u67E5\u8BE2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      opacity: .15
    }
  }, "\u2303")), results && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text2)',
      marginBottom: 12
    }
  }, "\u627E\u5230 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)'
    }
  }, results.voyages.length), " \u4E2A\u5339\u914D\u822A\u6B21 \xB7 ", results.intent.region === 'antarctic' ? '南极' : results.intent.region === 'arctic' ? '北极' : '全区域', results.intent.year ? ' · ' + results.intent.year + '年' : '', results.intent.months.length ? ' · ' + results.intent.months.join('/') + '月' : '', results.intent.budgetCny ? ' · ¥' + results.intent.budgetCny.toLocaleString() + '以内 (约 $' + results.intent.budgetUsd.toLocaleString() + ')' : results.intent.budgetUsd ? ' · $' + results.intent.budgetUsd.toLocaleString() + '以内' : '', results.intent.prefs.length ? ' · ' + results.intent.prefs.join('+') : ''), results.voyages.map(v => {
    const co = getCo(v.co, cos);
    const priceDetails = voyageBookablePriceDetails(v);
    const c = priceDetails ? priceDetails.cabin : {
      cat: '\u53EF\u8BA2\u4EF7\u5F85\u786E\u8BA4',
      price: null,
      orig: null,
      avail: null,
      availability: 'unknown',
      currency: v.currency
    };
    const pd = Number.isFinite(c.price) ? Math.round(c.price / (v.days || 1)) : null;
    const disc = c.orig > c.price ? Math.round((1 - c.price / c.orig) * 100) : 0;
    const coPromos = P.filter(p => p.co === v.co).slice(0, 2);
    const openCompanyDetail = () => onDetail && onDetail(co);
    return /*#__PURE__*/React.createElement("div", {
      className: "query-result",
      key: v.id,
      role: "link",
      tabIndex: 0,
      "aria-label": "\u67E5\u770B\u8239\u53F8 " + (co.cn || co.en || co.id),
      onClick: event => {
        if (event.target && event.target.closest && event.target.closest('a')) return;
        openCompanyDetail();
      },
      onKeyDown: event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openCompanyDetail();
        }
      },
      style: {
        background: 'var(--card)',
        borderRadius: 14,
        border: '1px solid var(--border)',
        padding: 20,
        marginBottom: 10,
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        cursor: 'pointer',
        transition: 'all .15s'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      co: co,
      size: 56
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, co.cn || co.en, " \xB7 ", /*#__PURE__*/React.createElement("a", {
      className: "query-voyage-link",
      href: voyageActionHref(v, co),
      target: voyageActionTarget(v, co),
      rel: voyageActionTarget(v, co) ? 'noopener noreferrer' : undefined,
      onClick: isVikingVoyage(v, co) ? event => handleVoyageAction(event, v, co) : undefined,
      style: {
        color: 'inherit',
        textDecoration: 'none'
      }
    }, v.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text2)',
        marginTop: 2
      }
    }, voyageShip(v), " \xB7 ", v.date, " \xB7 ", voyageDurationLabel(v), " \xB7 ", v.port, " \xB7 \u6BCF\u65E5\u5747\u4EF7 ", fmt(pd, c.currency || v.currency))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--navy)'
      }
    }, fmt(c.price, c.currency || v.currency), disc > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--green)',
        fontWeight: 600,
        marginLeft: 6
      }
    }, "-", disc, "%")), c.orig > c.price && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text2)',
        textDecoration: 'line-through'
      }
    }, fmt(c.orig, c.currency || v.currency)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: voyageActionHref(v, co),
      target: voyageActionTarget(v, co),
      rel: voyageActionTarget(v, co) ? 'noopener noreferrer' : undefined,
      onClick: isVikingVoyage(v, co) ? event => handleVoyageAction(event, v, co) : undefined,
      style: {
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: 6,
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--accent)',
        background: 'var(--card)',
        border: '1px solid var(--accent)',
        textDecoration: 'none'
      }
    }, voyageActionLabel(v, "\u67E5\u770B\u822A\u6B21")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        padding: '2px 8px',
        borderRadius: 8,
        background: c.avail === 0 ? 'rgba(239,83,80,.1)' : c.avail <= 2 ? 'rgba(255,183,77,.1)' : 'rgba(79,195,247,.06)',
        color: c.avail === 0 ? 'var(--red)' : c.avail <= 2 ? 'var(--warn)' : 'var(--text2)'
      }
    }, "\u6700\u4F4E\u53EF\u8BA2\u4EF7 \xB7 ", c.cat, ": ", cabinAvailability(c), Number.isFinite(c.price) ? " " + fmt(c.price, c.currency || v.currency) : "")), coPromos.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, coPromos.map(p => /*#__PURE__*/React.createElement("span", {
      key: p.t,
      style: {
        fontSize: 12,
        padding: '2px 8px',
        borderRadius: 8,
        background: 'rgba(255,183,77,.1)',
        color: 'var(--warn)',
        fontWeight: 600
      }
    }, p.t, ": ", p.v)))));
  }), results.voyages.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 40,
      color: 'var(--text2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("p", null, results.intent && results.intent.year ? '暂无' + results.intent.year + '年航次数据' : '没找到匹配的航次，试试放宽条件'))));
}
function DetailContext({
  onBack,
  companyName
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "detail-breadcrumb"
  }, /*#__PURE__*/React.createElement("button", {
    className: "detail-back",
    "aria-label": "返回船司列表",
    onClick: onBack
  }, "返回"), /*#__PURE__*/React.createElement("span", null, "船司详情 · ", companyName || ''));
}
function CompanyPage({
  co,
  V,
  P,
  cos,
  onSelectCompany,
  onBack,
  onNavigate
}) {
  const cid = (co.id || '').toLowerCase();
  const coVoyages = V.filter(v => (v.co || '').toLowerCase() === cid);
  const coPromos = P.filter(p => (p.co || '').toLowerCase() === cid);
  const inventoryAliasTarget = cos.find(company => company.id === COMPANY_INVENTORY_ALIASES[cid]) || null;
  const companyRegions = [...new Set((co.r || []).map(topLevelRegion))];
  const rl = companyRegions.length > 1 ? '多地区' : companyRegions[0] === 'antarctic' ? '南极' : companyRegions[0] === 'arctic' ? '北极' : '非极地';
  const [region, setRegion] = useState(topLevelRegion((co.r || [])[0] || 'antarctic'));
  const hasBoth = ['antarctic', 'arctic', 'nonpolar'].filter(value => coVoyages.some(v => voyageInRegion(v, value))).length > 1;
  const antCount = coVoyages.filter(v => voyageInRegion(v, 'antarctic')).length;
  const arcCount = coVoyages.filter(v => voyageInRegion(v, 'arctic')).length;
  const galCount = coVoyages.filter(v => voyageInRegion(v, 'nonpolar')).length;
  const filtered = coVoyages.filter(v => voyageInRegion(v, region)).sort((a, b) => compareVoyagePrice(a, b, false));
  const regionLabel = region === 'antarctic' ? '南极' : region === 'arctic' ? '北极' : '非极地';
  return /*#__PURE__*/React.createElement("div", {
    className: "app company-page"
  }, /*#__PURE__*/React.createElement(GlobalNav, {
    active: "companies",
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(DetailContext, {
    onBack: onBack,
    companyName: co.cn || co.en || co.id
  }), React.createElement("a", { className: "family-entry-link", href: "?tab=family&family_company=" + encodeURIComponent(cid) }, "查询这家船司的儿童年龄与优惠政策 →"), /*#__PURE__*/React.createElement("div", {
    className: "topbar company-hero",
    style: {
      minHeight: 88,
      padding: '20px 24px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "company-hero-inner",
    style: {
      display: 'flex',
      alignItems: 'center',
      columnGap: 24,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "company-back",
    "aria-label": "返回船司列表",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 999,
      background: 'rgba(255,255,255,.08)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,.12)',
      transition: 'all .3s cubic-bezier(.4,0,.2,1)',
      flexShrink: 0,
      padding: '0 16px',
      color: '#FFFFFF',
      fontFamily: 'inherit',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer'
    },
    onClick: onBack,
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(255,255,255,.18)';
      e.currentTarget.style.transform = 'translateX(-3px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'rgba(255,255,255,.08)';
      e.currentTarget.style.transform = 'translateX(0)';
    }
  }, "返回"), /*#__PURE__*/React.createElement("div", {
    className: "company-hero-logo",
    style: {
      width: 100,
      height: 100,
      minWidth: 100,
      minHeight: 100,
      background: '#fff',
      borderRadius: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: '0 4px 20px rgba(0,0,0,.08)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    co: co,
    size: 80
  })), /*#__PURE__*/React.createElement("div", {
    className: "company-hero-copy"
  }, /*#__PURE__*/React.createElement("h1", null, co.cn || co.id), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, co.en, " \xB7 ", co.pos)), /*#__PURE__*/React.createElement("div", {
    className: "company-hero-stats",
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 22,
      color: '#fff'
    }
  }, co.sn), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,.45)',
      letterSpacing: 1
    }
  }, "\u8239\u53EA")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 22,
      color: '#fff'
    }
  }, rl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,.45)',
      letterSpacing: 1
    }
  }, "\u533A\u57DF")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 22,
      color: 'var(--warn)'
    }
  }, coPromos.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,.45)',
      letterSpacing: 1
    }
  }, "\u4FC3\u9500"))))), (co.feat || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 16,
      marginTop: 24
    }
  }, (co.feat || []).map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      fontSize: 13,
      padding: '4px 12px',
      borderRadius: 14,
      background: 'rgba(0,113,227,.08)',
      color: 'var(--accent)',
      fontWeight: 500
    }
  }, f))), coPromos.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginBottom: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "\u5F53\u524D\u4FC3\u9500 \xB7 ", coPromos.length, "\u6761"), coPromos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--card)',
      borderRadius: 14,
      border: '1px solid var(--border)',
      padding: '16px 20px',
      marginBottom: 8,
      borderLeft: '4px solid var(--warn)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 6
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text2)',
      marginBottom: 8,
      lineHeight: 1.5
    }
  }, p.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--warn)'
    }
  }, p.v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text2)'
    }
  }, "\u622A\u6B62 ", p.exp), p.src ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => openPromotionAction(p, co, coVoyages),
    style: {
      color: 'var(--accent)',
      fontWeight: 600,
      fontSize: 13,
      marginLeft: 'auto'
    }
  }, promotionActionLabel(p, "\u67E5\u770B\u8BE6\u60C5 \u2192")) : null)))), hasBoth && /*#__PURE__*/React.createElement("div", {
    className: "filter-row company-region-tabs",
    style: {
      marginBottom: 16,
      marginTop: 24
    }
  }, antCount > 0 && /*#__PURE__*/React.createElement("button", {
    className: region === 'antarctic' ? 'on' : '',
    onClick: () => setRegion('antarctic')
  }, "\u5357\u6781 (", antCount, ")"), arcCount > 0 && /*#__PURE__*/React.createElement("button", {
    className: region === 'arctic' ? 'on' : '',
    onClick: () => setRegion('arctic')
  }, "\u5317\u6781 (", arcCount, ")"), galCount > 0 && /*#__PURE__*/React.createElement("button", {
    className: region === 'nonpolar' ? 'on' : '',
    onClick: () => setRegion('nonpolar')
  }, "非极地 (", galCount, ")")), !hasBoth && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginBottom: 12
    }
  }, regionLabel, "\u822A\u7EBF \xB7 ", filtered.length, "\u4E2A\u822A\u6B21"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8,
      fontSize: 14,
      color: 'var(--text2)'
    }
  }, "\u5171 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)'
    }
  }, filtered.length), " \u4E2A\u822A\u6B21 \xB7 \u4EF7\u683C\u7531\u4F4E\u5230\u9AD8"), filtered.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: 'left',
      borderBottom: '2px solid var(--border)',
      color: 'var(--text2)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '10px 8px'
    }
  }, "\u822A\u7EBF"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '10px 6px'
    }
  }, "\u8239"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '10px 6px',
      whiteSpace: 'nowrap'
    }
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '10px 4px'
    }
  }, "\u5929"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '10px 6px'
    }
  }, "\u6E2F\u53E3"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '10px 8px'
    }
  }, "\u8231\u4F4D\u4E0E\u4EF7\u683C"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(v => {
    return /*#__PURE__*/React.createElement("tr", {
      key: v.id,
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 8px',
        fontWeight: 600,
        maxWidth: 220
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "company-voyage-name",
      href: voyageActionHref(v, co),
      target: voyageActionTarget(v, co),
      rel: voyageActionTarget(v, co) ? 'noopener noreferrer' : undefined,
      onClick: isVikingVoyage(v, co) ? event => handleVoyageAction(event, v, co) : undefined,
      style: {
        color: 'inherit',
        textDecoration: 'none'
      }
    }, v.name)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 6px',
        fontSize: 13,
        color: 'var(--text2)',
        whiteSpace: 'nowrap'
      }
    }, voyageShip(v)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 6px',
        fontSize: 13,
        whiteSpace: 'nowrap'
      }
    }, v.date), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 4px',
        fontSize: 13,
        textAlign: 'center'
      }
    }, voyageDurationLabel(v)), /*#__PURE__*/React.createElement("td", {
      className: "company-detail-port",
      style: {
        padding: '10px 6px',
        fontSize: 13,
        color: 'var(--text2)',
        overflowWrap: 'anywhere',
        wordBreak: 'break-word'
      }
    }, normalizePortName(v.port) || '—'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 5
      }
    }, v.cabins.slice(0, 3).map((cb, j) => {
      const disc = cb.orig > cb.price ? Math.round((1 - cb.price / cb.orig) * 100) : 0;
      const isMin = cb.price === voyageMinPrice(v);
      return /*#__PURE__*/React.createElement("span", {
        key: j,
        style: {
          display: 'inline-flex',
          flexDirection: 'column',
          padding: '5px 10px',
          borderRadius: 8,
          background: isMin ? 'rgba(26,109,170,.06)' : 'var(--ice)',
          border: isMin ? '1px solid rgba(26,109,170,.2)' : '1px solid transparent',
          fontSize: 12,
          lineHeight: 1.3
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, cb.cat), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          color: isMin ? 'var(--accent)' : 'var(--text)'
        }
      }, fmt(cb.price, cb.currency || v.currency)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          color: 'var(--text2)'
        }
      }, cabinAvailability(cb)), disc > 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          color: 'var(--green)',
          fontWeight: 600
        }
      }, "-", disc, "%"));
    }))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 4px'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: voyageActionHref(v, co),
      target: voyageActionTarget(v, co),
      rel: voyageActionTarget(v, co) ? 'noopener noreferrer' : undefined,
      onClick: isVikingVoyage(v, co) ? event => handleVoyageAction(event, v, co) : undefined,
      style: {
        display: 'inline-block',
        padding: '5px 14px',
        borderRadius: 8,
        background: 'var(--accent)',
        color: '#fff',
        fontWeight: 600,
        fontSize: 13,
        textDecoration: 'none',
        whiteSpace: 'nowrap'
      }
    }, voyageActionLabel(v, "\u67E5\u770B\u822A\u6B21"))));
  })))), filtered.length === 0 && /*#__PURE__*/React.createElement("section", {
    className: "company-empty-state",
    role: "status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "company-empty-mark",
    "aria-hidden": "true"
  }, "\u2192"), /*#__PURE__*/React.createElement("h2", null, coVoyages.length === 0 ? "\u5F53\u524D\u6CA1\u6709\u72EC\u7ACB\u822A\u6B21\u8BB0\u5F55" : "\u6682\u65E0" + regionLabel + "\u822A\u6B21\u6570\u636E"), /*#__PURE__*/React.createElement("p", null, inventoryAliasTarget ? "\u8BE5\u54C1\u724C\u5DF2\u6838\u9A8C\u4E3A\u96F6\u91CD\u590D\u72EC\u7ACB\u5E93\u5B58\uFF1B\u5176\u516C\u5F00\u6781\u5730\u822A\u6B21\u5DF2\u5E76\u5165 Polar Latitudes \u5C55\u793A\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\u3002" : "\u5F53\u524D\u53D1\u5E03\u6279\u6B21\u6CA1\u6709\u8BE5\u533A\u57DF\u7684\u72EC\u7ACB\u822A\u6B21\uFF1B\u4E0D\u4F1A\u7528\u731C\u6D4B\u6570\u636E\u586B\u5145\u7A7A\u767D\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "company-empty-actions"
  }, inventoryAliasTarget && /*#__PURE__*/React.createElement("button", {
    className: "company-empty-action",
    onClick: () => onSelectCompany && onSelectCompany(inventoryAliasTarget)
  }, "\u67E5\u770B Polar Latitudes \u822A\u6B21"), co.domain && /*#__PURE__*/React.createElement("a", {
    className: "company-empty-official",
    href: 'https://' + co.domain,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\u6253\u5F00\u8239\u53F8\u5B98\u7F51"))), (co.ships || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      paddingTop: 20,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginBottom: 12
    }
  }, "\u8239\u961F \xB7 ", co.sn, "\u8258"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))',
      gap: 8
    }
  }, (co.ships || []).map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      transition: 'all .15s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: 'var(--accent)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 14,
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 14
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 16,
      borderTop: '1px solid var(--border)'
    }
  }, co.domain && /*#__PURE__*/React.createElement("a", {
    href: 'https://' + co.domain,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--accent)',
      textDecoration: 'none',
      fontSize: 15,
      fontWeight: 500
    }
  }, co.domain, " \u2192")));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
