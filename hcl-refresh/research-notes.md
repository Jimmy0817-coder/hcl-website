# HCL 舊版內容核對紀錄

更新日期：2026-08-27

## 已檢視來源

| 頁面 | 可用資料 | 新版採用方式 |
| --- | --- | --- |
| 現行 HCL 首頁 | 深海藍、暖白、城市及專業顧問主視覺；三項核心服務（ISO、建築環境、考牌指導） | 保留企業風格與服務脈絡，新增兩個認證內容模組 |
| `new-web-pc/business1.htm` | ISO 45001、ISO 50001、ISO 9001、ISO 14001、HKQAA-QSPSC、GB/T 50430；14 個 ISO 客戶標誌影像檔 | 顯示 ISO 服務範圍及「部分 ISO 客戶」標誌牆 |
| `new-web-pc/business2.htm` | 9 個考牌指導分類及其專業學會名單；20 個 `mentor1`、`mentor2` 標誌影像檔 | 顯示精選專業學會標誌及完整可展開名單 |

## ISO 認證服務（舊版列出）

1. ISO 9001:2015 — Quality Management Systems
2. ISO 14001:2015 — Environmental Management Systems
3. ISO 45001:2018 — Occupational Health & Safety Management Systems
4. ISO 50001:2018 — Energy Management Systems
5. HKQAA-QSPSC 2014
6. GB/T 50430

## 專業學會分類（舊版列出）

| 分類 | 代表學會／資格 |
| --- | --- |
| Planners Mentorship Scheme | World Institute of Sustainable Development Planners、Hong Kong Institute of Planners |
| Environmentalists Mentorship Scheme | MHKEnv、SocEnv UK（CEnv） |
| Engineers Mentorship Scheme | CEng、CSci、ICE、IMechE、CIBSE、IET、CABE、CIHT、CIWEM、CIPHE、IFE、IES、IChemE、IDE、HKIE、SPE Int、APEC Engineers |
| Surveyors Mentorship Scheme | RICS、AIQS、AIBS、SISV、HKIS、ICES |
| Architects Mentorship Scheme | AIA、DIA、RIBA、HKIA |
| Builders Mentorship Scheme | AIB、CIOB、HKICM、1st Class Constructor in PRC |
| Managers Mentorship Scheme | HKIFM、HKIPM、HKIM、HKIHRM、HKIH、HKIBIM、HKICA |
| Accountants Mentorship Scheme | CPAA UK |
| Lawyers Mentorship Scheme | China Lawyers、Hong Kong Lawyers、Macau Lawyers |

## 素材路徑（待複製／上傳）

舊版相對檔案包括：`iso-logos/01.jpg` 至 `iso-logos/14.jpg`，以及 `mentor1/1.jpg` 至 `mentor1/10.jpg`、`mentor2/1.jpg` 至 `mentor2/10.jpg`。所有新版展示應保留「部分客戶／專業學會網絡」語境，避免暗示未經核實的現行合作或官方背書。

## 素材檢視結果

| 素材 | 檢視結果 | 用途 |
| --- | --- | --- |
| `iso-logos/01.jpg` | Ray On（威安建築）客戶標誌，142 × 66 px，清晰可用 | 置於「部分 ISO 客戶」標誌帶內 |
| `mentor1/1.jpg` | 香港環境師學會 HKIOE 標誌，228 × 213 px，清晰可用 | 置於「專業學會網絡」標誌展示區 |
| `mentor2/9.jpg`、`mentor2/10.jpg` | 原始網站回傳 404，未在新版使用 | 不納入清單，避免顯示損壞圖像 |

## 2026-08-27 品牌素材更新

| 素材 | 核對結果 | 新版使用原則 |
| --- | --- | --- |
| HCL 公司標誌 | 現行 HCL 網站的透明 PNG，240 × 97 px，包含 HCL 標誌及 `Brightens Your Future` 標語 | 作為頁首與頁尾唯一主品牌識別；移除自訂羅盤圖示 |
| HCL ISO 橫幅 | 舊版網站原始 JPEG，1000 × 324 px，呈現風力發電與可持續發展情景 | 用作 ISO 區的真實來源視覺，避免使用合成人像或過度生成的企業影像 |
| 專業學會標誌 | 舊版網站的原始彩色 JPEG 標誌檔 | 維持原始色彩與比例，不套用灰階、透明度或混色效果 |

## hcl.hk DNS 管理商線索（2026-08-28）

公開 DNS 查詢顯示 `hcl.hk` 的權威名稱伺服器是 `ns1.s803.sureserver.com` 及 `ns2.s803.sureserver.com`。因此目前網站 DNS 很可能由 **SureServer／SureSupport** 的 hosting 控制台管理，而不一定是在 Cloudflare 或 GoDaddy。名稱伺服器只能確認 DNS 託管線索，不能單獨確認網域註冊商；登入入口仍需用戶從舊 hosting 的歡迎電郵、帳單或控制台連結確認。

## 2026-08-29 網域切換最新狀態

公開 DNS 最新結果：`www.hcl.hk` 的 CNAME 已是 `cname.manus.space`，並解析到 Manus 的 Cloudflare 網路；`hcl.hk` 根網域仍由 SureServer 回應 SOA，A 記錄為 `104.18.26.246`，瀏覽根網域時出現 Cloudflare Error 1001／DNS resolution error。這表示 www 子網域已部分切到 Manus，但根網域仍未完成同一套有效設定。舊路徑 `/website/new-web-mobile/career.htm` 仍需由前端路由兼容，否則即使網域成功也可能顯示找不到頁面。

## HCL 公司歷史內容來源

公司歷史及人物資料依據 HCL 舊版 `about1.htm` 原文整理。主要年份包括：2001 年成立 HCL Consulting Ltd.、2005 年拓展澳門、2007 年成立 HCL International Ltd. 及開展專業考牌指導、2016 年成立珠海服務、2021 年合併業務。人物內容包括 Dr. Tommy Ho 的教育與專業服務、Mr. Ho Nam Hoi 於 1996 年創辦 Pak Kumis Indonesian Food Co.，以及 Dr. Ho Fat Cheun 於 1950 年在雅加達創辦中醫針灸診所。來源：`https://www.hcl.hk/website/new-web-mobile/about1.htm`。

## 2026-08-30 Safari 維護頁診斷

即時 DNS 顯示 `www.hcl.hk` 已以 CNAME 指向 `cname.manus.space`，但網站回應會以 301 轉址至 `https://hcl.hk/`。根網域 `hcl.hk` 仍是 A 記錄 `104.18.26.246`，SOA 仍由 `ns1.s803.sureserver.com` 回應，而 `https://hcl.hk/` 返回舊主機的 maintenance page。根因不是 Safari，而是 www 轉至尚未正確指向新版的根網域。

## HCL Members News 成功考牌案例

公開搜尋索引可核對 HCL 舊版 `news.htm` 最新列出三項匿名會員成功消息：MHKICM（2026-06-30）、MCIOB（2026-06-30）及 MRICS（2026-06-19）。較舊的 `news6.htm` 搜尋索引亦列出 MCIOB（2021-07-30）及 MRICS（2021-07-21）。HCL International Ltd. 官方 Facebook 公開資料另稱 HCL Club 會員透過 HCL professional mentorship schemes 已獲逾 500 張 Professional Membership Certificates。舊頁目前已轉為 maintenance page，因此新版只採用搜尋索引可核對的資格及日期，不加入未能核對的會員姓名、相片或評語。

來源：

- `https://www.hcl.hk/website/new-web-mobile/news.htm`
- `https://www.hcl.hk/website/new-web-mobile/news6.htm`
- `https://www.facebook.com/p/HCL-International-Ltd-100070812380110/`

## HCL Members News 具名案例核對

平行核對舊版 `news.htm` 至 `news6.htm`、公開搜尋索引及同網域 PDF 後，找到三個可由 HCL 舊站索引明確核對的具名紀錄：

| 姓名 | 資格 | 日期 | HCL 舊站來源 |
| --- | --- | --- | --- |
| Ms. F. Chan | PEng (UK), MSPE | 2011-12-23 | `new-web-pc/news/Congratulations-SPE-23-12-2011.pdf` |
| Ng Pui Keung | Member of Institute of Public Accountants (IPA) | 2017-09-29 | `new-web-mobile/news-c3.htm` |
| Dr. Tommy Ho | Fellow Member of the Institution of Engineering and Technology (FIET) | 2018-07-11 | `new-web-mobile/news3.htm` |

舊頁現時已顯示 maintenance，直接 PDF 亦無法載入；以上姓名、資格及日期均由 HCL 官方網域的公開搜尋索引核對。Dr. Tommy Ho 屬 HCL 創辦人／會員專業成就，不能描述為學員；新版會將其標示為「HCL Member Record」，而 Ms. F. Chan 與 Ng Pui Keung 列為具名成功資格案例。

## 完整 Members News 及透明品牌素材

英文及中文舊版 News 主頁與分頁經去重後，共整理 **162 項**可核對成功資格紀錄，涵蓋 2010 至 2026 年。其中 6 項保留舊站公開姓名，涉及何忠明博士／Dr. Tommy Ho、Ng Pui Keung、何達／Mr. He Da 及 Ms. F. Chan；其餘維持 HCL member 匿名形式。網站採用年度篩選及「顯示全部」控制，避免一次展示過長清單。HCL 標誌另製作真正透明 PNG，並在頁首、首屏及頁尾統一使用。

## 右圖完整頁尾標誌修正

頁尾現以單一透明 PNG 完整顯示 IMG_3425 的圓形圖案、HCL 字樣及白色 `Brightens Your Future`，不再將標語拆成獨立文字。公司英文名及中文名排列於完整標誌下方，符合用戶右圖的垂直構圖。桌面預覽確認標誌清晰、完整、沒有棋盤背景；頁首及首屏標誌保持原版本不變。

## 2026-09-03 Made with Manus 核對及發布狀態

已重新核對本地預覽站與公開 `https://hcl.hk/`：頁面可見及擷取文字中均未出現由 HCL 專案產生的「Made with Manus」標記；專案原始碼亦沒有可控制的同名內容，因此該標記如在管理介面出現，屬平台層注入。其後一次自動發布因 Cloud Run `ServicesPerProject` 配額已達上限而失敗，系統暫時移除可用網域；這是託管平台配額問題，並非 HCL 前端建置錯誤。

## 2026-09-03 公開 career.htm fallback 驗證

在加入 `client/public/website/new-web-mobile/career.htm` fallback 並發布後，公開 `https://www.hcl.hk/website/new-web-mobile/career.htm?lang=en#contact` 已成功導向新版英文首頁，保留 `lang=en` 及 `#contact`；不再返回 404。DNS 切換如需由用戶操作，應只按 Manus 顯示值修改網站 A/CNAME 記錄，保留現有 MX、SPF、DKIM 及 DMARC 記錄，並於修改後分別測試網站 HTTPS 與公司電郵收發。

## 2026-09-03 公開網域手機入口核對

公開 `https://www.hcl.hk/` 首頁及 `https://www.hcl.hk/website/new-web-mobile/career.htm?lang=en#contact` 均已由瀏覽器成功載入；以 iPhone Safari User-Agent 進行 HTTPS 回應測試，根首頁及舊 career.htm 均返回 HTTP 200，舊入口保留 `lang=en` 查詢參數。頁面擷取內容未出現 `Made with Manus`。
