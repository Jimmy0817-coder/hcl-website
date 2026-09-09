/**
 * HCL Brand Reference Site：以正式 HCL 標誌、可驗證資歷、既有實拍影像及彩色學會標誌建立企業信任感。
 */
import { useEffect, useState } from "react";
import memberNewsData from "@/data/memberNews.json";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Check,
  ChevronDown,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

const isoClientLogos = [
  "/manus-storage/01_c00e827f.jpg",
  "/manus-storage/02_4028bf51.jpg",
  "/manus-storage/03_90ed64cd.jpg",
  "/manus-storage/04_6d51bd4d.jpg",
  "/manus-storage/05_aebfe4c2.jpg",
  "/manus-storage/06_d1c0eb49.jpg",
  "/manus-storage/07_255c365c.jpg",
  "/manus-storage/08_ce8881f6.jpg",
  "/manus-storage/09_d7f2fbec.jpg",
  "/manus-storage/10_110676cb.jpg",
  "/manus-storage/11_300b13f7.jpg",
  "/manus-storage/12_8be80177.jpg",
  "/manus-storage/13_dcfa6ee6.jpg",
  "/manus-storage/14_d8b86e18.jpg",
];

const institutionLogos = [
  "/manus-storage/1_5f804e06.jpg",
  "/manus-storage/2_3180bcdc.jpg",
  "/manus-storage/3_21319bb6.jpg",
  "/manus-storage/4_4c4d57a4.jpg",
  "/manus-storage/5_1170b420.jpg",
  "/manus-storage/6_22f33111.jpg",
  "/manus-storage/7_fdbff861.jpg",
  "/manus-storage/8_9d889227.jpg",
  "/manus-storage/9_b9733db6.jpg",
  "/manus-storage/10_00323e92.jpg",
  "/manus-storage/1_54c7336b.jpg",
  "/manus-storage/3_33a289bc.jpg",
  "/manus-storage/4_9236efbb.jpg",
  "/manus-storage/5_ac7fa7c1.jpg",
  "/manus-storage/6_aa5ba8e2.jpg",
  "/manus-storage/7_db782d70.jpg",
  "/manus-storage/8_f0bb8f5e.jpg",
];

const mentorshipGroups = [
  {
    title: "工程與環境",
    items: [
      "MHKEnv — The Hong Kong Institute of Environmentalists",
      "SocEnv UK — Chartered Environmentalists",
      "CEng — Chartered Engineers",
      "CSci — Chartered Scientists",
      "ICE — Institution of Civil Engineers",
      "IMechE — Institution of Mechanical Engineers",
      "CIBSE — Chartered Institution of Building Services Engineers",
      "IET — Institute of Engineering & Technology",
      "CABE — Chartered Association of Building Engineers",
      "CIHT — Chartered Institution of Highways & Transportation",
      "CIWEM — Chartered Institution of Water and Environmental Management",
      "CIPHE — Chartered Institute of Plumbing & Heating Engineers",
      "IFE — Institute of Fire Engineers",
      "IChemE — Institute of Chemical Engineers",
      "HKIE — Hong Kong Institution of Engineers",
    ],
  },
  {
    title: "測量、建築與規劃",
    items: [
      "World Institute of Sustainable Development Planners",
      "Hong Kong Institute of Planners",
      "RICS — Royal Institution of Chartered Surveyors",
      "AIQS — Australian Institute of Quantity Surveyor",
      "AIBS — Australian Institute of Building Surveyors",
      "SISV — The Singapore Institute of Surveyors and Valuers",
      "HKIS — The Hong Kong Institute of Surveyors",
      "ICES — Chartered Institution of Civil Engineering Surveyors",
      "AIA — Australian Institute of Architects",
      "DIA — Design Institute of Australia",
      "RIBA — Royal Institute of British Architects",
      "HKIA — Hong Kong Institute of Architects",
      "AIB — Australian Institute of Building",
      "CIOB — Chartered Institute of Building",
      "HKICM — Hong Kong Institute of Construction Managers",
    ],
  },
  {
    title: "管理及其他專業",
    items: [
      "HKIFM — The Hong Kong Institute of Facility Management",
      "HKIPM — The Hong Kong Institute of Project Management",
      "HKIM — Hong Kong Institute of Marketing",
      "HKIHRM — The Hong Kong Institute of Human Resource Management",
      "HKIH — The Hong Kong Institute of Housing",
      "HKIBIM — The Hong Kong Institute of Building Information Modelling",
      "HKICA — Hong Kong Institution of Certified Auditors",
      "CPAA — Certified Public Accountants Association, UK",
      "APEC Engineers Certification",
      "SPE Int — The Society of Professional Engineers (International)",
      "1st Class Constructor in PRC",
      "China Lawyers · Hong Kong Lawyers · Macau Lawyers",
    ],
  },
];

const standards = [
  { code: "ISO 26000:2010", name: "社會責任指引", nameEn: "Social Responsibility Guidance", text: "以負責任的治理、勞工實務、環境及社區參與建立可持續信任。" },
  { code: "ISO 45001:2018", name: "職業健康與安全管理系統", nameEn: "Occupational Health and Safety Management System", text: "以預防為本，建立安全、健康及持續改善的工作環境。" },
  { code: "ISO 50001:2018", name: "能源管理系統", nameEn: "Energy Management System (EnMS)", text: "追蹤能源表現，讓能源效益與減碳目標同步推進。" },
  { code: "ISO 9001:2015", name: "品質管理系統", nameEn: "Quality Management System (QMS)", text: "以可量度的流程、風險思維及持續改善建立品質管理基準。" },
  { code: "ISO 14001:2015", name: "環境管理系統", nameEn: "Environment Management System (EMS)", text: "將環境責任融入日常營運及持續改善，回應環境管理要求。" },
  { code: "HKQAA-QSPSC 2014", name: "混凝土生產及供應品質計劃", nameEn: "Quality Scheme for Production and Supply of Concrete", text: "支援混凝土生產及供應鏈的品質制度與符合性管理。", pdfUrl: "/qspsc2014.pdf" },
  { code: "GB/T 50430", name: "工程建設企業質量管理規範", nameEn: "Code for Quality Management of Engineering Construction Enterprises", text: "按中國工程建設企業質量管理規範建立可追溯的管理流程。" },
];

const productSchemes = [
  { name: "被動防火產品符合性認證計劃", nameEn: "Product Conformity Certification Scheme for Passive Fire Protection Products (Fire Door & Non-Loadbearing Fire Partition)" },
  { name: "瓷磚黏合劑產品符合性認證計劃", nameEn: "Product Conformity Certification Scheme — Tile Adhesive (PCCS-TA)" },
  { name: "修補砂漿產品符合性認證計劃", nameEn: "Product Conformity Certification Scheme — Repair Mortar (PCCS-RM)" },
  { name: "水泥產品符合性認證計劃", nameEn: "Product Conformity Certification Scheme for Cement Products (PCCS-CP)" },
];

type MemberNewsRecord = {
  date: string;
  year: string;
  memberName: string | null;
  memberNameZh: string | null;
  qualification: string;
  sourceUrl: string;
  originalTitle: string;
};

const memberNews = memberNewsData as MemberNewsRecord[];
const memberNewsYears = Array.from(new Set(memberNews.map((record) => record.year))).sort((a, b) => Number(b) - Number(a));
const namedMemberNews = memberNews.filter((record) => record.memberName);

const historyMilestones = [
  {
    year: "2001",
    title: "HCL Consulting Ltd. 成立",
    zh: "提供建築顧問、項目管理，以及 ISO 9001 與 QSPSC 認證顧問服務。",
    en: "HCL Consulting Ltd. was established to provide building consultancy, project management, ISO 9001 and QSPSC certification consultancy services.",
  },
  {
    year: "2005",
    title: "業務拓展至澳門",
    zh: "成立 Ho Chung Ming Consultants (Macau) Ltd.，服務涵蓋項目管理、結構設計、ISO 9001、ISO 14001 認證及樓宇檢驗。",
    en: "HCL expanded to Macau through Ho Chung Ming Consultants (Macau) Ltd., covering project management, structural design, ISO 9001, ISO 14001 and building inspection.",
  },
  {
    year: "2007",
    title: "成立 HCL International Ltd.",
    zh: "開展專業考牌及指導顧問服務，服務工程師、測量師、建造專業人士及環境專業人士。",
    en: "HCL International Ltd. was developed to provide mentorship-scheme consultancy for engineers, surveyors, builders and environmentalists.",
  },
  {
    year: "2016",
    title: "珠海服務成立",
    zh: "成立 Ho Chung Ming Consultants Zhuhai Ltd.，支援中國內地的專業服務。",
    en: "Ho Chung Ming Consultants Zhuhai Ltd. was developed to support professional services in Mainland China.",
  },
  {
    year: "2021",
    title: "整合跨專業顧問服務",
    zh: "自 2021 年 4 月 1 日起，HCL International Ltd. 整合 HCL Consulting Ltd. 及珠海顧問業務，提供 ISO、建築及環境顧問與專業考牌指導。",
    en: "From 1 April 2021, HCL International Ltd. integrated HCL Consulting Ltd. and the Zhuhai consultancy business to provide multi-professional ISO, built-environment and mentorship services.",
  },
];

const familyLegacy = [
  {
    name: "Mr. Ho Nam Hoi",
    year: "1996",
    image: "/manus-storage/mr-ho-nam-hoi_5f5a4deb.png",
    zh: "何南海先生於香港元朗創辦 Pak Kumis Indonesian Food Co.，以家庭式印尼食品服務在港印尼及本地社群。",
    en: "Mr. Ho Nam Hoi founded Pak Kumis Indonesian Food Co. in Yuen Long, Hong Kong, serving Indonesian and local communities with family-style Indonesian food.",
  },
  {
    name: "Dr. Ho Fat Cheun",
    year: "1950",
    image: "/manus-storage/dr-ho-fat-cheun_c119f07a.png",
    zh: "何發全醫生於印尼雅加達創辦 Dr. Ho Fat Cheun Chinese Acupuncture Clinic，長期以中醫針灸專業服務當地社群，直至 1987 年。",
    en: "Dr. Ho Fat Cheun founded the Dr. Ho Fat Cheun Chinese Acupuncture Clinic in Jakarta, Indonesia, serving the local community until 1987.",
  },
];

const contactPersons = [
  { name: "Mr Jimmy Ho", role: "Consultant", direct: "+852 2148 2186", directHref: "+85221482186", whatsapp: "+852 5220 1407", whatsappHref: "85252201407", email: "jimmy@hcl.hk" },
  { name: "Ms Kelly Wong", role: "Manager", direct: "+852 2475 1280", directHref: "+85224751280", whatsapp: "+852 6874 1154", whatsappHref: "85268741154", email: "kelly@hcl.hk" },
  { name: "Ms Patti Leung", role: "Assistant Manager", direct: "+852 2476 1117", directHref: "+85224761117", whatsapp: "+852 5937 6382", whatsappHref: "85259376382", email: "patti@hcl.hk" },
  { name: "Mr Jan Mok", role: "Senior Consultant", whatsapp: "+852 6540 1786", whatsappHref: "85265401786", email: "janmok@hcl.hk" },
  { name: "Ms Sue Lau", role: "Senior Consultant", whatsapp: "+852 4660 7198", whatsappHref: "85246607198", email: "sue@hcl.hk" },
  { name: "Ms Elaine Tse", role: "Account Officer", whatsapp: "+852 6540 1786", whatsappHref: "85265401786", email: "elaine@hcl.hk" },
  { name: "Ms Vicky Sun", role: "Assistant Consultant", whatsapp: "+852 6938 7517", whatsappHref: "85269387517", email: "vicky@hcl.hk" },
];

type Language = "zh" | "en";

export const languageCopy = {
  zh: {
    nav: [["服務範疇", "#services"], ["ISO 客戶", "#iso-clients"], ["專業學會", "#institutions"], ["會員消息", "#members-news"], ["公司歷史", "#history"]] as const,
    headerContact: "聯絡顧問",
    menuOpen: "開啟導覽選單",
    menuClose: "關閉導覽選單",
    heroEyebrow: "HCL International Ltd. · 認證通國際有限公司",
    heroTitle: <>香港最權威考牌專家｜<br /><em>25 年卓越傳承，<br className="desktop-break" />成就您的專業資格</em></>,
    heroIntro: "全港匯聚最多 CIOB 會員。業界首創 QSPSC 及 HCL MENTORSHIP SCHEME，為您的工程師及專業管理階梯鋪平最穩妥的道路。",
    viewClients: "查看 ISO 客戶",
    exploreNetwork: "探索專業網絡",
    servicesIndex: "專業服務範疇",
    servicesTitle: <>讓專業要求，成為企業<br className="desktop-break" />的可持續優勢。</>,
    isoIndex: "ISO 認證服務",
    isoTitle: <>由系統建立到認證準備，<br />讓標準真正融入營運。</>,
    isoIntro: "我們以清晰步驟協助團隊應對品質、環境、職安及能源管理要求，將合規轉化為長遠的營運信心。",
    talkToConsultants: "與顧問團隊對話",
    productKicker: "產品符合性認證",
    productTitle: "產品符合性認證計劃",
    selectedClients: "部分 ISO 客戶名單",
    clientLedger: "由 ISO 管理系統顧問服務建立的部分客戶紀錄。",
    clientAlt: "HCL ISO 客戶標誌",
    clientNote: "相關服務包括 ISO 9001、ISO 14001、ISO 45001、ISO 50001、HKQAA-QSPSC 2014 及 GB/T 50430。",
    institutionsIndex: "專業學會網絡",
    institutionsTitle: "將資格評估，連結至更清晰的專業路徑。",
    institutionsIntro: "HCL Mentorship Scheme® 為有志加入國際專業學會的人士提供度身訂造的考牌指導、免費資格評估及保密處理的諮詢安排。",
    assessQualification: "查詢資格評估",
    newsIndex: "HCL Members News",
    newsKicker: "成功考牌及專業資格消息",
    newsTitle: <>每一項專業成果，<br />都值得被記錄。</>,
    completeArchive: "完整成功資格紀錄",
    viewByYear: "按年份查看",
    allYears: "全部年份",
    namedRecord: "具名紀錄",
    archiveNote: "資料根據 HCL 舊版 Members News 公開索引整理；具名紀錄保留舊站所載姓名，未有公開姓名的紀錄維持匿名。",
    collapse: "收起完整紀錄",
    showAll: "顯示全部紀錄",
    aboutEyebrow: "跨地域專業視角",
    aboutTitle: <>以品質、環境與人才<br />為共同語言，服務不同城市與團隊。</>,
    historyIndex: "HCL International 公司歷史",
    historyKicker: "公司沿革",
    historyTitle: <>由建築顧問出發，<br />連結跨地域專業服務。</>,
    historyIntro: "HCL 的發展由 2001 年開始，逐步延伸至澳門、珠海、ISO 認證、建築環境顧問及專業考牌指導。",
    founderProfile: "創辦人資料",
    founder: "創辦人",
    familyLegacy: "家族企業傳承",
    familyTitle: "三代服務社群的創業精神",
    contactIndex: "聯絡顧問",
    contactTitle: "與熟悉專業路徑的顧問對話。",
    contactIntro: "無論是 ISO 管理系統、建築環境顧問，還是專業學會考牌指導，我們都會先了解你的背景，再整理一條清晰可行的下一步。",
    emailUs: "電郵我們",
    office: "香港辦公室",
    allRights: "版權所有。",
    languageLabel: "切換至 English",
  },
  en: {
    nav: [["Services", "#services"], ["ISO Clients", "#iso-clients"], ["Institutions", "#institutions"], ["Members News", "#members-news"], ["Company History", "#history"]] as const,
    headerContact: "Contact a consultant",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    heroEyebrow: "HCL International Ltd. · Certified International Consultants",
    heroTitle: <>Hong Kong’s<br /><em>leading<br className="mobile-break" /> professional<br className="desktop-break" /> qualification<br className="mobile-break" /> consultancy</em></>,
    heroIntro: "Bringing together CIOB membership expertise, the industry’s pioneering QSPSC and the HCL MENTORSHIP SCHEME to give engineers and professional managers a clear, reliable pathway forward.",
    viewClients: "View ISO clients",
    exploreNetwork: "Explore the network",
    servicesIndex: "Core expertise",
    servicesTitle: <>Turn professional requirements<br className="desktop-break" />into lasting business advantage.</>,
    isoIndex: "ISO management systems",
    isoTitle: <>From system design to certification readiness,<br />we make standards work in practice.</>,
    isoIntro: "We guide teams through quality, environmental, occupational health and energy-management requirements, turning compliance into long-term operating confidence.",
    talkToConsultants: "Talk to our consultants",
    productKicker: "Product conformity certification",
    productTitle: "Product conformity certification schemes",
    selectedClients: "Selected ISO clients",
    clientLedger: "Selected client records built through ISO management-system consultancy.",
    clientAlt: "HCL ISO client logo",
    clientNote: "Services include ISO 9001, ISO 14001, ISO 45001, ISO 50001, HKQAA-QSPSC 2014 and GB/T 50430.",
    institutionsIndex: "Professional institution network",
    institutionsTitle: "Connect qualification assessment to a clearer professional pathway.",
    institutionsIntro: "HCL Mentorship Scheme® provides tailored qualification guidance, complimentary assessment and confidential consultation for professionals pursuing international institution membership.",
    assessQualification: "Request a qualification assessment",
    newsIndex: "HCL Members News",
    newsKicker: "Qualification and professional achievement news",
    newsTitle: <>Every professional milestone<br />deserves to be recorded.</>,
    completeArchive: "Complete qualification archive",
    viewByYear: "View by year",
    allYears: "All years",
    namedRecord: "Named record",
    archiveNote: "Compiled from the public HCL Members News index; published names are retained and records without a public name remain anonymous.",
    collapse: "Collapse archive",
    showAll: "Show all records",
    aboutEyebrow: "A regional perspective",
    aboutTitle: <>Quality, environment and people<br />as a shared language for every team.</>,
    historyIndex: "HCL International history",
    historyKicker: "Company history",
    historyTitle: <>From building consultancy<br />to connected professional services.</>,
    historyIntro: "HCL began in 2001 and expanded across Macau, Zhuhai, ISO certification, built-environment consultancy and professional qualification guidance.",
    founderProfile: "Founder profile",
    founder: "Founder",
    familyLegacy: "Family enterprise legacy",
    familyTitle: "Three generations of service and enterprise",
    contactIndex: "Contact a consultant",
    contactTitle: "Speak with a consultant who understands the professional pathway.",
    contactIntro: "Whether you need ISO management systems, built-environment consultancy or professional institution guidance, we begin with your background and map a clear, practical next step.",
    emailUs: "Email us",
    office: "Hong Kong office",
    allRights: "All rights reserved.",
    languageLabel: "切換至中文",
  },
} as const;

const hasChinese = (value: string) => /[\u3400-\u9fff]/.test(value);
const roleZh: Record<string, string> = { Consultant: "顧問", Manager: "經理", "Assistant Manager": "助理經理", "Senior Consultant": "高級顧問", "Account Officer": "客戶主任", "Assistant Consultant": "助理顧問" };
export const localizedNewsTitle = (news: MemberNewsRecord, language: Language) => {
  if (language === "zh") return hasChinese(news.originalTitle) ? news.originalTitle : `恭賀 HCL 會員獲取 ${news.qualification} 專業資格。`;
  return hasChinese(news.originalTitle) ? `Congratulations to an HCL member on achieving the ${news.qualification} qualification.` : news.originalTitle;
};

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => typeof window !== "undefined" && new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "zh");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [memberNewsYear, setMemberNewsYear] = useState("all");
  const [showAllMemberNews, setShowAllMemberNews] = useState(false);

  const copy = languageCopy[language];
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLanguage = () => { setLanguage((current) => current === "zh" ? "en" : "zh"); closeMenu(); };
  useEffect(() => { document.documentElement.lang = language === "zh" ? "zh-Hant" : "en"; }, [language]);
  const filteredMemberNews = memberNewsYear === "all" ? memberNews : memberNews.filter((record) => record.year === memberNewsYear);
  const visibleMemberNews = showAllMemberNews ? filteredMemberNews : filteredMemberNews.slice(0, 12);

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#183042] selection:bg-[#c2a35d] selection:text-white">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label={language === "zh" ? "HCL International 首頁" : "HCL International home"} onClick={closeMenu}>
          <img className="brand-wordmark" src="/manus-storage/hcl-company-logo-transparent-final_a2417581.png" alt={language === "zh" ? "HCL International 認證通國際有限公司標誌" : "HCL International Ltd. — Brightens Your Future"} />
        </a>

        <nav className="desktop-nav" aria-label={language === "zh" ? "主要導覽" : "Primary navigation"}>
          {copy.nav.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <a className="header-contact" href="#contact">
          {copy.headerContact} <ArrowUpRight size={15} strokeWidth={2.2} />
        </a>

        <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={copy.languageLabel}>
          {language === "zh" ? "EN" : "中"}
        </button>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? copy.menuClose : copy.menuOpen}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {isMenuOpen && (
          <nav className="mobile-nav" aria-label={language === "zh" ? "流動裝置導覽" : "Mobile navigation"}>
            {copy.nav.map(([label, href], index) => (
              <a key={href} href={href} onClick={closeMenu}>
                <span>0{index + 1}</span>{label}<ArrowDownRight size={18} />
              </a>
            ))}
            <a href="#contact" onClick={closeMenu}>
              <span>06</span>{copy.headerContact}<ArrowDownRight size={18} />
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-brand-proof"><img src="/manus-storage/hcl-company-logo-transparent-final_a2417581.png" alt={language === "zh" ? "HCL International 認證通國際有限公司標誌" : "HCL International Ltd. — Brightens Your Future"} /><span>{language === "zh" ? "專業顧問服務 · 始於 2001" : "PROFESSIONAL CONSULTANCY · SINCE 2001"}</span></div>
            <p className="eyebrow"><span /> {copy.heroEyebrow}</p>
            <h1 id="hero-title">{copy.heroTitle}</h1>
            <p className="hero-intro">{copy.heroIntro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#iso-clients">{copy.viewClients} <ArrowDownRight size={18} /></a>
              <a className="text-link" href="#institutions">{copy.exploreNetwork} <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-facts" aria-label={language === "zh" ? "HCL 服務概況" : "HCL service overview"}>
              <div><strong>2001</strong><span>{language === "zh" ? "顧問服務始於" : "Consultancy since"}</span></div>
              <div><strong>3</strong><span>{language === "zh" ? <>區域辦事處<br />香港 · 澳門 · 珠海</> : <>Regional offices<br />Hong Kong · Macau · Zhu Hai</>}</span></div>
              <div><strong>6</strong><span>{language === "zh" ? <>ISO 系統及<br />服務參考</> : <>ISO systems &amp;<br />service references</>}</span></div>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src="/manus-storage/hcl-mentorship-original_1cf0fc0d.jpg" alt={language === "zh" ? "HCL 專業團隊進行顧問及考牌指導會議" : "HCL team in a consultancy and qualification guidance meeting"} />
            <div className="image-caption"><span>{language === "zh" ? "HCL 實務" : "HCL in practice"}</span><p>{language === "zh" ? "以專業判斷和長期合作，將複雜要求落實於日常工作。" : "Professional judgement and long-term collaboration turn complex requirements into everyday practice."}</p></div>
          </div>
        </section>

        <section id="services" className="services-band section-shell" aria-labelledby="services-title">
          <div className="evidence-spine" aria-hidden="true"><i /></div>
            <div className="section-index"><span>01</span><p>{copy.servicesIndex}</p></div>
          <div className="services-heading">
            <p className="kicker">{copy.servicesIndex}</p>
            <h2 id="services-title">{copy.servicesTitle}</h2>
          </div>
          <div className="service-list">
            <article className="service-item">
              <span className="service-number">01</span>
              <div><p>{language === "zh" ? "ISO 管理系統" : "ISO MANAGEMENT SYSTEMS"}</p><h3>{language === "zh" ? "ISO 管理系統" : "ISO management systems"}</h3></div>
              <ArrowUpRight size={20} />
            </article>
            <article className="service-item">
              <span className="service-number">02</span>
              <div><p>{language === "zh" ? "建築及環境" : "BUILT ENVIRONMENT"}</p><h3>{language === "zh" ? "建築及環境顧問" : "Built-environment consultancy"}</h3></div>
              <ArrowUpRight size={20} />
            </article>
            <article className="service-item">
              <span className="service-number">03</span>
              <div><p>{language === "zh" ? "考牌指導計劃" : "MENTORSHIP SCHEME"}</p><h3>{language === "zh" ? "考牌指導計劃" : "Qualification mentorship"}</h3></div>
              <ArrowUpRight size={20} />
            </article>
          </div>
        </section>

        <section id="iso-clients" className="iso-section archive-section archive-section-dark" aria-labelledby="iso-title">
          <div className="evidence-spine evidence-spine-dark" aria-hidden="true"><i /></div>
          <div className="section-shell iso-intro-grid">
            <div className="section-index section-index-light"><span>02</span><p>{copy.isoIndex}</p></div>
            <div className="iso-title-block">
              <p className="kicker kicker-light">{language === "zh" ? "ISO 認證服務" : "ISO certification services"}</p>
              <h2 id="iso-title">{copy.isoTitle}</h2>
            </div>
            <div className="iso-side-copy">
              <p>{copy.isoIntro}</p>
              <a href="#contact" className="text-link text-link-light">{copy.talkToConsultants} <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <div className="section-shell standards-grid">
            {standards.map((standard) => (
              <article key={standard.code} className="standard-card">
                <span>{standard.code}</span>
                <h3>{language === "zh" ? standard.name : standard.nameEn}</h3>
                <p>{language === "zh" ? standard.text : standard.name}</p>
                {standard.pdfUrl && (
                  <div className="standard-pdf-actions">
                    <a className="standard-pdf-link" href={standard.pdfUrl} download="qspc-development-hong-kong-mainland.pdf">
                      {language === "zh" ? "下載 PDF" : "Download PDF"} <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                )}
                <Check size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="product-schemes section-shell" aria-labelledby="product-schemes-title">
            <div className="product-schemes-heading">
              <p className="kicker kicker-light">{copy.productKicker}</p>
              <h3 id="product-schemes-title">{copy.productTitle}</h3>
              <p>{language === "zh" ? "產品符合性認證計劃" : "Product Conformity Certification Scheme"}</p>
            </div>
            <div className="product-schemes-list">
              {productSchemes.map((scheme, index) => (
                <article key={scheme.name} className="product-scheme-row">
                  <span>0{index + 1}</span>
                  <div><strong>{language === "zh" ? scheme.name : scheme.nameEn}</strong></div>
                </article>
              ))}
            </div>
          </div>
          <div className="iso-image-block">
            <img src="/manus-storage/hcl-iso-original_9f1d90f5.jpg" alt={language === "zh" ? "HCL ISO 管理系統、可持續發展及能源管理意象" : "HCL ISO management systems, sustainability and energy management"} />
          </div>
        </section>

        <section className="clients-section section-shell archive-section archive-section-light" aria-labelledby="clients-title">
          <div className="evidence-spine" aria-hidden="true"><i /></div>
          <div className="clients-topline">
            <div>
              <p className="kicker">{copy.selectedClients}</p>
              <h2 id="clients-title">{language === "zh" ? "部分 ISO 客戶名單" : "Selected ISO clients"}</h2>
            </div>
          </div>
          <div className="proof-ledger"><span>{language === "zh" ? "HCL ISO 服務紀錄" : "HCL ISO SERVICE RECORD"}</span><p>{copy.clientLedger}</p><span>{language === "zh" ? "2001 — 至今" : "2001 — PRESENT"}</span></div>
          <div className="client-logo-wall" aria-label={copy.clientAlt}>
            {isoClientLogos.map((src, index) => (
              <div className="client-logo-tile" key={src}>
                  <img src={src} alt={`${copy.clientAlt} ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="clients-note"><Award size={18} /><p>{copy.clientNote}</p></div>
        </section>

        <section id="institutions" className="institutions-section archive-section archive-section-light" aria-labelledby="institutions-title">
          <div className="evidence-spine" aria-hidden="true"><i /></div>
          <div className="section-shell institutions-intro">
            <div className="programme-note" aria-label={language === "zh" ? "HCL Mentorship Scheme 自 2007 年開始" : "HCL Mentorship Scheme since 2007"}>
              <span>HCL MENTORSHIP SCHEME®</span>
              <strong>2007</strong>
              <p>{language === "zh" ? "在香港開展專業資格評估與考牌指導，協助不同學科的專業人士規劃下一步。" : "Providing qualification assessment and mentorship in Hong Kong since 2007, helping professionals across disciplines plan their next step."}</p>
              <div className="programme-note-rule" />
              <small>{language === "zh" ? "保密 · 個人化 · 實務" : "CONFIDENTIAL · INDIVIDUAL · PRACTICAL"}</small>
            </div>
            <div className="institutions-copy">
              <div className="section-index"><span>03</span><p>{copy.institutionsIndex}</p></div>
              <p className="kicker">HCL Mentorship Scheme®</p>
              <h2 id="institutions-title">{copy.institutionsTitle}</h2>
              <p>{copy.institutionsIntro}</p>
              <a className="button button-outline" href="#contact">{copy.assessQualification} <ArrowDownRight size={18} /></a>
            </div>
          </div>

          <div className="institution-logo-band" aria-label={language === "zh" ? "HCL 專業學會網絡標誌" : "HCL professional institution network logos"}>
            <div className="proof-ledger proof-ledger-green"><span>{language === "zh" ? "專業學會資格網絡" : "PROFESSIONAL INSTITUTION NETWORK"}</span><p>{language === "zh" ? "HCL Mentorship Scheme® 所涵蓋的部分專業學會與資格網絡。" : "A selection of professional institutions and qualification pathways covered by HCL Mentorship Scheme®."}</p><span>{language === "zh" ? "2007 — 至今" : "2007 — PRESENT"}</span></div>
            <div className="institution-marquee">
              {institutionLogos.map((src, index) => (
                <div className="institution-logo" key={src}>
                  <img src={src} alt={`${language === "zh" ? "HCL 專業學會網絡標誌" : "HCL professional institution network logo"} ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="section-shell full-list-section">
            <div className="full-list-heading"><p className="kicker">{language === "zh" ? "會員資格路徑" : "Membership pathways"}</p><h3>{language === "zh" ? "完整專業學會範疇" : "Complete institution pathways"}</h3></div>
            <div className="mentorship-groups">
              {mentorshipGroups.map((group, groupIndex) => (
                <details className="mentorship-group" key={group.title} open={groupIndex === 0}>
                  <summary><span>0{groupIndex + 1}</span><strong>{group.title}</strong><ChevronDown size={20} /></summary>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="members-news" className="members-news-section" aria-labelledby="members-news-title">
          <div className="section-shell members-news-heading">
              <div className="section-index"><span>04</span><p>{copy.newsIndex}</p></div>
            <div><p className="kicker">{copy.newsKicker}</p><h2 id="members-news-title">{copy.newsTitle}</h2></div>
          </div>
          <div className="section-shell members-news-grid">
            {namedMemberNews.map((news) => (
              <article className="member-news-card" key={`${news.date}-${news.qualification}-${news.memberName}`}>
                <div className="member-news-meta"><time>{news.date.replaceAll("-", ".")}</time><span>{language === "zh" ? "具名紀錄" : "NAMED RECORD"}</span></div>
                <strong>{news.qualification}</strong>
                <p className="member-news-name">{language === "zh" && news.memberNameZh ? news.memberNameZh : news.memberName}</p>
                <h3>{localizedNewsTitle(news, language)}</h3>
                <p>{language === "zh" ? "HCL Members News 專業成就紀錄。" : "Professional achievement recorded in the HCL Members News archive."}</p>
                <Award size={19} aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="section-shell members-news-archive">
            <div className="members-news-archive-heading">
              <div><p className="kicker">{language === "zh" ? "完整成功紀錄" : "Complete success archive"}</p><h3>{copy.completeArchive}</h3></div>
              <label>{copy.viewByYear}
                <select value={memberNewsYear} onChange={(event) => { setMemberNewsYear(event.target.value); setShowAllMemberNews(false); }}>
                  <option value="all">{copy.allYears}</option>
                  {memberNewsYears.map((year) => <option value={year} key={year}>{year}</option>)}
                </select>
              </label>
            </div>
            <div className="members-news-record-list" role="list">
              {visibleMemberNews.map((news) => (
                <article className="members-news-record" role="listitem" key={`${news.date}-${news.qualification}-${news.memberName ?? "anonymous"}`}>
                  <time>{news.date.replaceAll("-", ".")}</time>
                  <strong>{news.qualification}</strong>
                  <div><b>{news.memberName ? (language === "zh" && news.memberNameZh ? news.memberNameZh : news.memberName) : language === "zh" ? "HCL 會員" : "HCL member"}</b><p>{localizedNewsTitle(news, language)}</p></div>
                </article>
              ))}
            </div>
            {filteredMemberNews.length > 12 && <button className="members-news-more" type="button" onClick={() => setShowAllMemberNews((current) => !current)}>{showAllMemberNews ? copy.collapse : copy.showAll}</button>}
          </div>
          <p className="section-shell members-news-note">{copy.archiveNote}</p>
        </section>

        <section id="about" className="about-band" aria-labelledby="about-title">
          <div className="section-shell about-grid">
            <p className="eyebrow eyebrow-on-blue"><span /> {copy.aboutEyebrow}</p>
            <h2 id="about-title">{copy.aboutTitle}</h2>
            <div className="office-list">
              <span>{language === "zh" ? "香港" : "Hong Kong"}</span><span>{language === "zh" ? "澳門" : "Macau"}</span><span>{language === "zh" ? "珠海" : "Zhu Hai"}</span>
            </div>
          </div>
        </section>

        <section id="history" className="history-section" aria-labelledby="history-title">
          <div className="section-shell history-heading">
              <div className="section-index"><span>05</span><p>{copy.historyIndex}</p></div>
            <div><p className="kicker">{copy.historyKicker}</p><h2 id="history-title">{copy.historyTitle}</h2></div>
            <p>{copy.historyIntro}</p>
          </div>
          <div className="section-shell history-timeline">
            {historyMilestones.map((item) => (
              <article className="history-entry" key={item.year}>
                <time>{item.year}</time>
                <div><h3>{language === "zh" ? item.title : item.title.replace(/HCL Consulting Ltd\\. 成立/, "HCL Consulting Ltd. established").replace(/業務拓展至澳門/, "Expanded to Macau").replace(/成立 HCL International Ltd\\./, "HCL International Ltd. established").replace(/珠海服務成立/, "Zhuhai service established").replace(/整合跨專業顧問服務/, "Integrated professional consultancy")}</h3><p>{language === "zh" ? item.zh : item.en}</p></div>
              </article>
            ))}
          </div>

          <div className="section-shell founder-profile">
            <div className="founder-identity"><span>{language === "zh" ? "創辦人資料" : "FOUNDER PROFILE"}</span><img className="founder-portrait" src="/manus-storage/dr-tommy-ho_ea532519.png" alt={language === "zh" ? "何忠明博士相片" : "Portrait of Dr. Tommy Ho"} />{language === "zh" ? <><p>何忠明博士</p><strong>何忠明博士</strong><small>HCL Consulting Ltd. 創辦人</small></> : <><p>Dr. Tommy Ho</p><strong>Dr. Tommy Ho</strong><small>Founder of HCL Consulting Ltd.</small></>}</div>
            <div className="founder-copy">
              <p className="kicker">{copy.founder}</p>
              <h3>{language === "zh" ? <span>何忠明博士</span> : <span>Dr. Tommy Ho</span>}</h3>
              <div className="founder-bilingual">
                {language === "zh" ? <div><h4>教育與持續學習</h4><p>何忠明博士於 1995 年畢業於香港城市大學 Building Studies，其後於香港大學專業進修學院修讀建築工程深造證書。2022 年取得巴黎 European International University 的 Executive Doctor of Business Administration，以及瑞士 St. Clement University 的 Doctor of Letters，並完成劍橋大學 Business Sustainability Management 課程。</p><h4>專業服務</h4><p>2002 年起參與 Chartered Institute of Building 及 Australian Institute of Building 香港分會的理事及評核工作；自 2003 年起擔任香港理工大學工程導師。他於 2010 年創立 Hong Kong Institute of Environmentalists 並出任總會長，2011 至 2019 年出任 Society of Environmental Engineers (UK) 香港分會首任會長，2014 年起出任 Australian Institute of Building 澳門分會首任會長，並於 2018 年獲委任為 Hong Kong Institute of Education for Sustainable Development 的 Professor of Practice。</p></div> : <div><h4>Education & lifelong learning</h4><p>Dr. Tommy Ho graduated in Building Studies from the City University of Hong Kong in 1995 and later studied for a Postgraduate Certificate in Building Engineering at HKU SPACE. In 2022, he achieved an Executive Doctor of Business Administration from the European International University in Paris and a Doctor of Letters from St. Clement University in Switzerland. He also completed the Business Sustainability Management programme at the University of Cambridge.</p><h4>Professional service</h4><p>Since 2002, he has contributed to the Chartered Institute of Building and the Australian Institute of Building in Hong Kong, and has served as an engineering mentor at The Hong Kong Polytechnic University since 2003. He founded the Hong Kong Institute of Environmentalists in 2010, served as the first president of the Society of Environmental Engineers (UK) Hong Kong Chapter from 2011 to 2019, became the first president of the Australian Institute of Building Macau Branch in 2014, and was appointed Professor of Practice at the Hong Kong Institute of Education for Sustainable Development in 2018.</p></div>}
              </div>
            </div>
          </div>

          <div className="section-shell legacy-grid">
            <div className="legacy-heading"><p className="kicker">{copy.familyLegacy}</p><h3>{copy.familyTitle}</h3></div>
            {familyLegacy.map((person) => (
              <article className="legacy-card" key={person.name}><img className="legacy-portrait" src={person.image} alt={language === "zh" ? person.name.replace("Mr. Ho Nam Hoi", "何南海先生").replace("Dr. Ho Fat Cheun", "何發全醫生") : person.name} loading="lazy" /><span>{person.year}</span><h4>{language === "zh" ? person.name.replace("Mr. Ho Nam Hoi", "何南海先生").replace("Dr. Ho Fat Cheun", "何發全醫生") : person.name}</h4><p>{language === "zh" ? person.zh : person.en}</p></article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
          <div className="evidence-spine" aria-hidden="true"><i /></div>
          <div className="contact-intro">
            <p className="kicker">{language === "zh" ? "開始對話" : "Start a conversation"}</p>
            <h2 id="contact-title">{language === "zh" ? <>把下一個專業目標，<br />化成可行的計劃。</> : <>Turn your next professional goal<br />into a practical plan.</>}</h2>
            <p>{copy.contactIntro} <a href="mailto:info@hcl.hk">info@hcl.hk</a>.</p>
          </div>
          <div className="contact-directory" aria-label={language === "zh" ? "HCL 聯絡人名單" : "HCL contact directory"}>
            {contactPersons.map((person, index) => (
              <article className="contact-person" key={person.name}>
                <header><span>0{index + 1}</span><div><h3>{person.name}</h3><p className="contact-role">{language === "zh" ? roleZh[person.role] : person.role}</p></div></header>
                {(person.direct || person.whatsapp || person.email) && <div className="contact-person-links">
                  {person.direct && <a href={`tel:${person.directHref}`}><Phone size={16} /><span><small>{language === "zh" ? "直線" : "DIRECT LINE"}</small>{person.direct}</span></a>}
                  {person.whatsapp && <a href={`https://wa.me/${person.whatsappHref}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /><span><small>WHATSAPP</small>{person.whatsapp}</span></a>}
                  {person.email && <a href={`mailto:${person.email}`}><Mail size={16} /><span><small>{language === "zh" ? "電郵" : "EMAIL"}</small>{person.email}</span></a>}
                </div>}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="section-shell footer-grid">
          <div>
            <div className="footer-brand"><div className="footer-logo-stack"><img src="/manus-storage/hcl-footer-solid-navy-flat_8197aa11.png" alt={language === "zh" ? "HCL — Brightens Your Future 標誌" : "HCL — Brightens Your Future"} /></div><span>HCL International Ltd.<small>{language === "zh" ? "認證通國際有限公司" : "Certified International Consultants"}</small></span></div>
            <p>{language === "zh" ? "以認證、建築環境顧問及專業培訓，協助企業把標準化成可持續的營運信心。" : "Through certification, built-environment consultancy and professional training, we help organisations turn standards into sustainable operating confidence."}</p>
          </div>
          <div className="footer-location"><span>{copy.office}</span><p>Flat A3, 9/F, Forda Industrial Building<br />Tai Lee Street, Yuen Long, N.T., Hong Kong</p></div>
          <div className="footer-meta"><span>{language === "zh" ? "香港 · 澳門 · 珠海" : "HONG KONG · MACAU · ZHU HAI"}</span><p>© 2026 HCL International.<br />{copy.allRights}</p></div>
        </div>
      </footer>
    </div>
  );
}
