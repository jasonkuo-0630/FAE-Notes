/* notes-misc.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "arch-1",
    title: "系統架構總覽：各產品上下游關係",
    category: "系統架構",
    categoryId: "arch",
    subgroupId: "overview",
    tags: ["架構", "總覽", "產品定位"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-01", "asmgr-1"],
    sections: [
      {
        type: "text",
        content: "<strong>IP Camera 是影像來源，GV-VMS 是主要管理軟體，CMS 系統是上層集中監控與事件管理，ASManager 是門禁管理系統，可與 VMS 影像連動。</strong>GeoVision 的影像監控系統可以大致理解成分層架構。"
      },
      {
        type: "text",
        content: "VMS 是整套系統的地基——CMS 系列軟體（Control Center / Center V2 / VSM / Dispatch Server）都需要先有 VMS 才能運作，是建立在 VMS 之上的上層應用。ASManager 則是平行存在的門禁系統，透過事件連動跟 VMS 互通，不依賴 VMS 才能運作，但兩者整合後能互相調用。"
      },
      {
        type: "text",
        title: "產品定位簡表"
      },
      {
        type: "table",
        headers: ["產品 / 系統", "主要用途", "白話理解"],
        rows: [
          ["IP Camera", "提供影像、串流與事件", "影像來源"],
          ["GV-VMS", "影像管理、錄影、回放、事件處理", "監控主控台"],
          ["Control Center", "多站台集中監看", "總部監控中心"],
          ["Center V2", "影像事件接收與處理", "事件中心"],
          ["GV-Vital Sign Monitor", "系統狀態監控", "系統健康監控中心"],
          ["Dispatch Server", "大量事件分流", "事件分配中心"],
          ["Video Wall", "大畫面集中顯示", "監控牆"],
          ["ASManager", "門禁管理", "門禁主控系統"],
          ["DVR", "類比影像錄影", "舊式類比錄影主機"],
          ["NVR", "IP Camera 錄影管理", "網路錄影系統"],
          ["SNVR", "獨立硬體版 NVR", "不需 Windows 的簡易錄影主機"],
          ["VMS", "軟體式影像管理平台", "功能完整的影像管理軟體"]
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "影像來源 → 主控台 → 總部監控 / 事件中心；門禁系統另外平行存在，但能跟影像連動。"
      },
      {
        type: "text",
        title: "實務判斷方式（交叉驗證後補充）",
        content: "面對客戶需求時可以這樣快速對應："
      },
      {
        type: "list",
        title: "",
        items: [
          "「要管理攝影機、錄影、回放與備份」→ 可能是 <strong>GV-VMS</strong>",
          "「要總部集中看多個站點」→ 可能是 <strong>Control Center</strong>",
          "「事件發生時要中心端收到警報並查看事件影像」→ 可能是 <strong>Center V2</strong>",
          "「想知道硬碟滿了、主機離線、錄影有沒有中斷」→ 可能是 <strong>Vital Sign Monitor</strong>",
          "「要管理門禁、讀卡機、人臉、指紋、權限」→ 可能是 <strong>ASManager</strong>"
        ]
      },
      {
        type: "text",
        content: "這些系統不是彼此完全取代，而是依照案場規模與需求分工合作：小型案場可能只需要 GV-VMS；多站點或大型控制中心可能需要 Control Center；需要集中警報處理時可能使用 Center V2；需要維運監控時可能使用 Vital Sign Monitor；需要門禁管理時則會使用 ASManager。"
      }
    ]
  },
{
    id: "ipcam-1",
    title: "IP Camera 是什麼？",
    category: "IP Camera",
    categoryId: "arch",
    subgroupId: "ipcamera",
    tags: ["IP Camera", "影像來源", "Main/Sub Stream"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-01", "vms-10", "vms-04", "vms-07", "protocol-1", "ipcam-2"],
    sections: [
      {
        type: "text",
        content: "IP Camera 是網路攝影機，是影像監控系統中的影像來源，負責拍攝影像、提供即時串流與事件來源。部分型號支援 AI 分析、人臉、車牌、人車偵測等功能。"
      },
      {
        type: "list",
        title: "常見功能",
        items: [
          "<strong>Live View</strong>：即時影像",
          "<strong>Motion Detection</strong>：位移偵測",
          "<strong>PVD</strong>：People / Vehicle Detection，人車偵測",
          "<strong>FD / FR</strong>：Face Detection 人臉偵測 / Face Recognition 人臉辨識",
          "<strong>LPR</strong>：License Plate Recognition，車牌辨識",
          "<strong>WDR</strong>：寬動態　·　<strong>Super Low Lux</strong>：低照度影像能力　·　<strong>IR</strong>：紅外線夜視　·　<strong>Fisheye</strong>：魚眼攝影機"
        ]
      },
      {
        type: "text",
        title: "Main Stream / Sub Stream",
        content: "IP Camera 通常會提供不只一組串流："
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Main Stream</strong>：解析度較高、畫質較好、資料量較大，常用於錄影、大畫面觀看、需要清楚細節的情境",
          "<strong>Sub Stream</strong>：解析度較低、資料量較小，常用於多分割即時監看、小視窗預覽、降低網路與 CPU 負載"
        ]
      },
      {
        type: "text",
        content: "實務理解：畫面切成 4 分割、16 分割時，每個格子很小，不一定需要高解析 Main Stream，用 Sub Stream 就能節省效能；切回單一大畫面時，可能就會切回 Main Stream 看清楚細節。（VMS 加入 Camera 時實際怎麼選 Single/Dual Streams，見「IP Device Setup」分類的對應筆記。）"
      },
      {
        type: "text",
        title: "實務理解（AI判斷）",
        content: "比較新的 Camera 可能自己就能做 AI 判斷，例如人形、車輛、人臉或車牌，這時候 VMS 不一定要自己重新分析影像，而是可以接收 Camera 已經判斷好的事件。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Main Stream 看細節 / 錄影，Sub Stream 省資源 / 多畫面預覽。"
      }
    ]
  },
{
    id: "cms-1",
    title: "Control Center 是什麼？",
    category: "CMS 系統",
    categoryId: "arch",
    subgroupId: "cms",
    tags: ["Control Center", "集中監看", "Video Wall"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-01", "cms-2", "cms-3"],
    sections: [
      {
        type: "text",
        content: "Control Center 是中央監控系統（CMS）的一部分，主要偏向「多站台集中監看」。可以理解成："
      },
      {
        type: "flow",
        steps: ["多台 VMS / 多個地點", "集中到 Control Center", "由中央端統一觀看與管理"]
      },
      {
        type: "list",
        title: "主要用途",
        items: [
          "集中監看多個 VMS、管理多個站台",
          "遠端觀看不同地點的影像",
          "搭配 Video Wall 使用，適合大型監控中心"
        ]
      },
      {
        type: "text",
        title: "實務理解",
        content: "如果 GV-VMS 是單一站點的主控台，那 Control Center 比較像是「總部監控中心」。例如 A、B、C 三個廠區各自有自己的 VMS，再統一集中到 Control Center 觀看。Control Center 偏重在「畫面監看」與「集中管理」。"
      },
      {
        type: "text",
        title: "Video Wall（搭配使用）",
        content: "Video Wall 是影像牆，通常搭配 Control Center 使用，把多個攝影機畫面集中顯示在大螢幕牆上，適合監控中心讓操作人員快速掌握多區域狀況。簡單理解：<code>Control Center 負責控制要看什麼，Video Wall 負責把畫面顯示出來。</code>"
      },
      {
        type: "text",
        title: "交叉驗證補充",
        content: "Control Center 不是單純取代 VMS，而是用來管理或監看多個 VMS / DVR / NVR / 站點，適合控制室、總部、管理中心使用——這跟 GV-VMS 管理單一站點或本地系統是不同層級的角色。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Control Center 是「我要看很多地方的畫面」，重點在集中監看，不是事件處理。"
      }
    ]
  },
{
    id: "cms-2",
    title: "Center V2 是什麼？",
    category: "CMS 系統",
    categoryId: "arch",
    subgroupId: "cms",
    tags: ["Center V2", "事件中心", "CMS"],
    updated: "2026-07-16",
    status: "ok",
    related: ["cms-1", "cms-3", "cms-4"],
    sections: [
      {
        type: "text",
        content: "Center V2 也是 CMS 系統的一部分，但重點和 Control Center 不太一樣——它比較偏向「事件接收與事件處理」，可以理解成事件中心。"
      },
      {
        type: "list",
        title: "主要用途",
        items: [
          "接收 VMS 或 Camera 傳來的事件",
          "處理影像事件、顯示事件畫面",
          "讓操作人員處理告警",
          "可搭配 Dispatch Server 做事件分流"
        ]
      },
      {
        type: "text",
        title: "實務理解",
        content: "Control Center 比較像「我要看很多地方的畫面」；Center V2 比較像「有事件發生時，系統要通知我處理」。"
      },
      {
        type: "flow",
        steps: ["Camera 偵測到入侵", "VMS 接收到事件", "事件送到 Center V2", "Center V2 顯示事件與影像", "操作人員確認與處理"]
      },
      {
        type: "text",
        content: "所以 Center V2 的核心不是單純看畫面，而是<strong>事件導向</strong>。"
      },
      {
        type: "text",
        title: "交叉驗證補充",
        content: "Center V2 在架構中的位置比較像事件接收端：前端設備或系統（IP Camera / GV-VMS / NVR / DVR）發生事件後，把事件傳到 Center V2，讓中心端人員即時得知異常，這個概念跟「保全警報中心」很接近——重點是讓人即時知道「發生了什麼事」，不是長時間看畫面。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Control Center 看畫面，Center V2 處理事件——兩者都是 CMS，但出發點不同。"
      }
    ]
  },
{
    id: "cms-3",
    title: "GV-Vital Sign Monitor（VSM）是什麼？",
    category: "CMS 系統",
    categoryId: "arch",
    subgroupId: "cms",
    tags: ["VSM", "系統健康監控"],
    updated: "2026-07-16",
    status: "ok",
    related: ["cms-2", "cms-4", "cms-1"],
    sections: [
      {
        type: "text",
        content: "GV-Vital Sign Monitor，簡稱 VSM，也是 CMS 系統的一部分，但它主要不是看影像，而是看<strong>系統狀態</strong>，可以理解成「系統健康監控中心」。"
      },
      {
        type: "list",
        title: "主要用途",
        items: [
          "監控 VMS 是否正常、Camera 是否斷線",
          "監控硬碟狀態、錄影狀態",
          "監控系統異常、接收文字型告警或狀態訊息"
        ]
      },
      {
        type: "list",
        title: "常見事件",
        items: [
          "<code>HDD Full</code>：硬碟滿了",
          "<code>Video Lost</code>：影像遺失",
          "<code>Connection Lost</code>：連線中斷",
          "<code>Recording Error</code>：錄影異常",
          "<code>System Error</code>：系統異常"
        ]
      },
      {
        type: "text",
        title: "實務理解",
        content: "Center V2 比較偏影像事件（有人入侵、畫面告警）；VSM 比較偏系統狀態事件（硬碟滿了、設備斷線、系統異常）。"
      },
      {
        type: "text",
        title: "交叉驗證補充",
        content: "VSM 接收的是系統或設備狀態相關的「文字告警訊息」，不是影像事件，重點是讓管理人員知道監控系統本身有沒有正常運作，比較偏維運監控而非事件處理。如果客戶說「我想知道硬碟滿了、主機離線、錄影有沒有中斷」，這就是 VSM 該處理的需求。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Center V2 管「畫面出事」，VSM 管「系統出事」。"
      }
    ]
  },
{
    id: "cms-4",
    title: "Dispatch Server 是什麼？",
    category: "CMS 系統",
    categoryId: "arch",
    subgroupId: "cms",
    tags: ["Dispatch Server", "事件分流"],
    updated: "2026-07-16",
    status: "ok",
    related: ["cms-2", "cms-3"],
    sections: [
      {
        type: "text",
        content: "Dispatch Server 用於事件分流。當事件量很大時，如果全部事件都送到同一台 Center V2，可能會造成負擔，Dispatch Server 可以協助把事件分配到不同的 Center V2 或接收端。"
      },
      {
        type: "list",
        title: "主要用途",
        items: [
          "大量事件分流，降低單一 Center V2 負擔",
          "分配事件給不同處理端",
          "適合大型監控架構"
        ]
      },
      {
        type: "text",
        title: "實務理解",
        content: "可以把 Dispatch Server 想成「事件分配中心」："
      },
      {
        type: "flow",
        steps: ["多個 VMS 送出大量事件", "Dispatch Server", "分配到 Center V2-1 / Center V2-2 / Center V2-3"]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "事件量大到一台 Center V2 撐不住時，才需要 Dispatch Server 上場分流。"
      }
    ]
  },
{
    id: "asmgr-1",
    title: "ASManager 是什麼？（門禁管理）",
    category: "ASManager 門禁",
    categoryId: "arch",
    subgroupId: "asmanager",
    tags: ["ASManager", "門禁", "Access Control"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-01", "arch-1"],
    sections: [
      {
        type: "text",
        content: "ASManager 是 GeoVision 的門禁管理系統，處理的是 Access Control（門禁相關功能）。"
      },
      {
        type: "list",
        title: "主要管理對象",
        items: [
          "<code>Controller</code> 門禁控制器　·　<code>Reader</code> 讀卡機　·　<code>Card</code> 卡片",
          "<code>User</code> 使用者 / 人員資料　·　<code>Door</code> 門　·　<code>Access Rule</code> 通行權限　·　<code>Event</code> 門禁事件"
        ]
      },
      {
        type: "text",
        title: "實務理解",
        content: "門禁系統的基本流程："
      },
      {
        type: "flow",
        steps: ["人員刷卡 / 人臉 / 指紋", "Reader 讀取資料", "Controller 判斷是否開門", "ASManager 紀錄事件與管理權限"]
      },
      {
        type: "text",
        title: "人臉、指紋與卡號",
        content: "傳統門禁通常以卡號作為識別依據，但人臉與指紋本身不是卡片，不一定有實體卡號。因此系統可以將人臉或指紋對應到一組<strong>虛擬卡號</strong>，這樣人臉、指紋也能被門禁系統用類似卡片的方式管理。"
      },
      {
        type: "text",
        title: "與 VMS 的關係",
        content: "ASManager 可以和 VMS 影像連動："
      },
      {
        type: "flow",
        steps: ["有人刷卡進門", "ASManager 產生門禁事件", "VMS 調出對應攝影機畫面", "操作人員可以確認現場影像"]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "ASManager 管門禁、VMS 管影像，兩套系統各自獨立運作，但事件可以互相連動。"
      },
      {
        type: "text",
        title: "交叉驗證補充",
        content: "門禁系統實務上常需要管理的資料包含 Controller、Card Reader、Face Recognition、Fingerprint、Door 門點、User / Cardholder 持卡人資料、Access Level 通行權限、Event Log 通行紀錄。如果客戶需求是「要管理門禁、讀卡機、人臉、指紋、門禁權限」，這就是 ASManager 的範疇。"
      }
    ]
  },
{
    id: "recorder-1",
    title: "DVR、NVR、SNVR、VMS 的差異",
    category: "錄影主機比較",
    categoryId: "arch",
    subgroupId: "recorder",
    tags: ["DVR", "NVR", "SNVR", "VMS", "比較"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-01"],
    sections: [
      {
        type: "list",
        title: "",
        items: [
          "<strong>DVR</strong>：主要用於較早期的類比攝影機，把類比影像訊號轉成數位資料並錄影",
          "<strong>NVR</strong>（Network Video Recorder）：主要用於 IP Camera 的錄影與管理，早期版本比較偏單純的 Live View / Recording / Playback",
          "<strong>SNVR</strong>（Standalone Network Video Recorder）：獨立硬體主機，通常搭載簡易 Linux 系統，不需要另外安裝 Windows。優點是建置簡單、維護成本較低；缺點是效能與彈性通常低於 VMS，擴充能力有限",
          "<strong>VMS</strong>（Video Management Software）：安裝在 Windows 上的影像管理軟體，相較傳統 NVR 功能更完整，包含 Live View、Recording、Playback、Backup、Event、AI 整合、I/O 控制、CMS 整合、多站台管理、權限管理、進階搜尋與事件處理"
        ]
      },
      {
        type: "text",
        content: "簡單比較："
      },
      {
        type: "list",
        title: "",
        items: [
          "DVR：類比攝影機時代的錄影主機",
          "NVR：IP Camera 時代的網路錄影系統",
          "SNVR：獨立硬體版 NVR",
          "VMS：更完整、更彈性的影像管理軟體"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "時間軸：DVR（類比）→ NVR（IP化）→ SNVR（獨立硬體簡化版）/ VMS（功能最完整的軟體平台）。"
      }
    ]
  },
{
    id: "protocol-1",
    title: "ONVIF、RTSP、GV Protocol 的差異",
    category: "通訊協定",
    categoryId: "arch",
    subgroupId: "protocol",
    tags: ["ONVIF", "RTSP", "GV Protocol", "協定"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-06", "ipcam-1"],
    sections: [
      {
        type: "list",
        title: "",
        items: [
          "<strong>RTSP</strong>：主要用來取得影像串流，可以理解成「拉影像的協定」。重點是看得到影像，但不一定能控制完整功能",
          "<strong>ONVIF</strong>：監控產業常見的標準協定，讓不同廠牌的 VMS 和 IP Camera 可以用基本方式互通。常見用途：搜尋 Camera、加入第三方 Camera、取得基本串流、使用部分標準功能。但 ONVIF 不一定支援所有進階功能，例如魚眼校正、特殊 AI 事件、品牌自家功能，可能還是需要自家協定",
          "<strong>GV Protocol</strong>：GeoVision 自家的通訊方式，通常能支援比較完整的 GeoVision Camera 功能"
        ]
      },
      {
        type: "text",
        content: "簡單比較："
      },
      {
        type: "list",
        title: "",
        items: [
          "RTSP：主要拿影像",
          "ONVIF：跨品牌基本整合",
          "GV Protocol：GeoVision 自家完整功能"
        ]
      },
      {
        type: "text",
        content: "實務上在 Add Camera 選擇 Brand 時，「Protocol」選項裡看到的 ONVIF / RTSP over HTTP / TCP / UDP 等，就是這裡說的通用協定加入方式（詳見「IP Device Setup」分類的 Add Camera 筆記）。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "能用自家協定就盡量用自家協定，功能最完整；ONVIF/RTSP 是跨品牌的退路，但功能可能打折。"
      }
    ]
  },
{
    id: "hw-1",
    title: "CPU、塔扇、RAM 與主機板基礎安裝",
    category: "硬體組裝",
    categoryId: "arch",
    subgroupId: "hardware",
    tags: ["CPU", "RAM", "主機板", "塔扇"],
    updated: "2026-07-16",
    status: "ok",
    related: [],
    sections: [
      {
        type: "text",
        content: "測試 PC 架設時，硬體組裝的重點不是單純把零件裝上去，而是理解每個零件的方向、防呆設計、連接位置，以及安裝錯誤可能造成的問題。"
      },
      {
        type: "text",
        title: "CPU 安裝",
        content: "最重要的是<strong>方向與 Socket 相容性</strong>。CPU 通常會有三角形標記，主機板 Socket 上也會有對應標記，安裝時要讓兩者對齊。CPU 正確放入插槽時，應該可以自然平放，不需要用力壓入；如果覺得卡住或需要硬壓，通常代表方向或位置可能不對。CPU 底部接點或主機板針腳都很脆弱，安裝前要先確認方向，避免針腳歪掉。"
      },
      {
        type: "list",
        title: "",
        items: [
          "安裝前先確認 CPU 型號與主機板 Socket 是否相容",
          "不要碰觸 CPU 底部接點或主機板針腳",
          "CPU 放入後，壓下固定扣具時會有一定阻力，這是正常的",
          "壓扣具前要再次確認 CPU 沒有歪斜"
        ]
      },
      {
        type: "text",
        title: "塔扇 / CPU Cooler 安裝",
        content: "塔扇主要負責把 CPU 的熱帶走，安裝方向會影響機殼內部風流。散熱膏的作用是填補 CPU 與散熱器底座之間的微小空隙，讓熱能更有效率地從 CPU 傳到散熱器，不用塗太多，過量可能溢出。鎖螺絲時建議交叉平均鎖，避免單邊壓力過大導致散熱器底座壓力不均。風扇線通常要接到主機板上的 <code>CPU_FAN</code>，沒接好開機時可能跳出 CPU Fan Error，或 BIOS 無法偵測風扇。"
      },
      {
        type: "text",
        title: "記憶體 RAM 安裝",
        content: "RAM 有防呆缺口，方向錯誤無法插入。安裝時需要兩側平均施力，直到卡榫完全扣上，沒插好很容易造成無法開機、黑畫面或反覆重啟。如果只插兩條 RAM，通常要依照主機板說明書建議插在指定插槽（例如常見的 A2 / B2），才能正確啟用雙通道。安裝前要確認 DDR 版本是否相容，<strong>DDR4 / DDR5 不可混用</strong>。"
      },
      {
        type: "text",
        title: "主機板與其他硬體觀念",
        content: "主機板是所有硬體連接的核心，CPU、RAM、顯卡、硬碟、電源線與前面板線材都會接到主機板上。裝主機板前要注意機殼<strong>銅柱</strong>位置——銅柱用來支撐主機板，避免主機板背面直接接觸機殼造成短路。"
      },
      {
        type: "text",
        content: "常見電源線：<code>24-pin 主機板電源</code>、<code>CPU 8-pin 電源</code>、<code>PCIe 顯卡電源</code>、<code>SATA 電源</code>。前面板線材：<code>Power SW</code>、<code>Reset SW</code>、<code>HDD LED</code>、<code>Power LED</code>，這些小線材要依照主機板標示慢慢接，尤其 LED 有正負極方向要注意。如果開機沒反應，可優先檢查 24-pin、CPU 8-pin、Power SW 是否接好。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "硬體組裝不是單純把零件插上去，而是要理解：這個零件的功能是什麼、要接在哪裡、有沒有方向限制、裝錯會造成什麼問題、開機後要如何確認是否正常。"
      }
    ]
  },
{
    id: "sysenv-1",
    title: "Windows 驅動安裝與 Device Manager 檢查",
    category: "系統環境",
    categoryId: "arch",
    subgroupId: "sysenv",
    tags: ["Driver", "Device Manager", "VGA"],
    updated: "2026-07-16",
    status: "ok",
    related: [],
    sections: [
      {
        type: "text",
        content: "驅動安裝不是只把 setup.exe 跑完，而是要確認硬體是否被 Windows 正確辨識，並透過 Device Manager 檢查狀態。"
      },
      {
        type: "text",
        title: "Driver 是什麼",
        content: "Driver 是作業系統與硬體之間的溝通橋樑。Windows 雖然可以自動安裝部分基本驅動，但通常只是讓硬體「基本可用」，要完整發揮硬體功能通常還是需要安裝正確版本的官方驅動。常見驅動包含 Chipset、VGA / 顯示卡、LAN / Wi-Fi / Bluetooth、Audio、Storage、USB、Serial IO。"
      },
      {
        type: "list",
        title: "驅動安裝建議順序",
        items: [
          "Chipset Driver",
          "Intel ME / Serial IO / Storage 類驅動",
          "LAN / Wi-Fi / Bluetooth",
          "VGA / 顯示卡驅動",
          "Audio 音效驅動",
          "其他設備專用驅動"
        ]
      },
      {
        type: "text",
        content: "Chipset 通常先裝的原因：它會影響主機板與 CPU、PCIe、USB、Storage 等設備的溝通。如果 Chipset 沒裝好，Device Manager 裡可能會出現 Unknown Device 或黃色驚嘆號。新灌系統後，如果網路不能用，要事先把 LAN / Wi-Fi 驅動放在 USB 裡備用。"
      },
      {
        type: "text",
        title: "Device Manager 檢查",
        content: "常見異常狀態："
      },
      {
        type: "list",
        title: "",
        items: [
          "<code>Unknown Device</code>：未知裝置，通常代表缺驅動",
          "黃色驚嘆號：裝置有問題，可能是驅動錯誤、未完整安裝或硬體異常",
          "<code>Microsoft Basic Display Adapter</code>：顯示卡尚未安裝正式驅動，只使用 Windows 基本顯示驅動",
          "<code>Code 10 / Code 43</code>：裝置無法啟動或回報異常，可能與驅動或硬體狀態有關"
        ]
      },
      {
        type: "text",
        title: "手動指定驅動路徑",
        content: "有些驅動可以從 Device Manager 手動指定驅動資料夾：開啟 Device Manager → 右鍵選擇 Update Driver → Browse my computer for drivers → 指定包含 .inf 檔案的資料夾。如果指定錯路徑，通常只是 Windows 找不到相容驅動，裝置仍維持 Unknown Device 或黃色驚嘆號；但若強制安裝錯誤驅動，可能導致裝置無法正常啟動，嚴重時造成黑畫面或系統不穩。"
      },
      {
        type: "text",
        title: "VGA / 顯示卡驅動安裝",
        content: "如果尚未完整安裝，可能看到解析度很低、畫面比例異常、無法調整高解析度、Device Manager 顯示 Microsoft Basic Display Adapter。安裝過程中<strong>不要主動重開機</strong>，螢幕短暫閃爍或黑一下通常是正常現象。如果不小心中斷且仍能正常進 Windows，先重新開機一次確認狀態，再進 Device Manager 查看 Display adapters，若名稱不正確就重新執行驅動安裝程式。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "驅動的重點不是「安裝程式有跑完」而已，而是要確認硬體是否被正確辨識——安裝前確認型號版本，安裝後用 Device Manager 檢查是否仍有 Unknown Device、黃色驚嘆號或顯示名稱錯誤。"
      }
    ]
  },
{
    id: "ipcam-2",
    title: "IP Camera：外型分類、型號命名規則與規格判讀",
    category: "IP Camera",
    categoryId: "arch",
    subgroupId: "ipcamera",
    tags: ["型號命名", "外型分類", "ONVIF Profile", "AI Camera"],
    updated: "2026-07-16",
    status: "ok",
    related: ["ipcam-1"],
    sections: [
      {
        type: "text",
        content: "IP Camera 不只是攝影機，也是一台網路設備，會有 IP、Subnet Mask、Gateway、Port、帳密、Web UI、影像串流、Codec、事件、儲存與遠端連線等設定。"
      },
      {
        type: "list",
        title: "常見外型與用途",
        items: [
          "<strong>Box</strong>：盒型，鏡頭彈性高，適合特殊安裝條件",
          "<strong>Dome</strong>：半球型，通用型，適合天花板、走廊、辦公室",
          "<strong>Bullet</strong>：子彈型/槍型，方向感明確，常用於戶外、出入口、周界",
          "<strong>Fisheye</strong>：魚眼，視角非常廣，一台可覆蓋大範圍，但畫面通常需要 Dewarp 攤平",
          "<strong>Speed Dome / PTZ</strong>：可遠端 Pan / Tilt / Zoom，適合大範圍監控與追蹤",
          "<strong>Thermal</strong>：熱成像，偵測熱能而非可見光，適合低光、夜間或特殊安全場景"
        ]
      },
      {
        type: "text",
        title: "型號命名規則",
        content: "常見外型代碼：BX（Box）、ABL/EBL/TBL/BL（Bullet）、FER/EFER（Fisheye）、EBD（Eyeball）、SD/QSD（Speed Dome）、TM（Thermal）。要注意 <code>FD</code> 如果出現在前綴可能是 Dome 系列，出現在尾碼（如 -FD）通常是 Face Detection——要看它出現的位置。"
      },
      {
        type: "text",
        content: "以 <code>FD8700-FR</code> 為例可拆解：FD（外型代碼）/ 8（Mega Pixel 像素等級）/ 7（功能技術等級）/ 0（鏡頭或變焦類型）/ 0（外觀迭代）/ FR（功能尾碼，Face Recognition）。功能層級數字可粗略理解為：2 Low Lux、3 Regular、4 WDR Pro、5 Super Low Lux、6 WDR Pro + Super Low Lux、7 H.265 Codec、8 Deep Learning / AI、9 AI + Cloud。這個編碼有歷史累加概念，不是單純數字越大代表單一功能，仍要回到實際規格確認。"
      },
      {
        type: "text",
        title: "常見功能尾碼",
        content: "<code>FR</code> Face Recognition（辨識這張臉是誰）vs <code>FD</code> Face Detection（偵測有沒有人臉）——容易混淆但意義不同；<code>W</code> Wireless；<code>IR</code> Infrared；<code>DL</code> Deep Learning。"
      },
      {
        type: "text",
        title: "ONVIF Profile",
        content: "Profile S（基本串流與設定）、Profile T（進階串流與事件，例如雙向音訊、Metadata）、Profile G（Edge Storage 邊緣儲存與錄影資料存取）。"
      },
      {
        type: "text",
        title: "連線數限制",
        content: "IP Camera 可同時建立的連線數有限，目前資料提到 GV-IP Camera 連線數約 6~8 個，GV-VMS、NVR、AI Guard 或 Recording Server 通常各會使用 2 個連線——多平台同時連同一台 Camera 會消耗連線資源。"
      },
      {
        type: "text",
        title: "初始化網段設定",
        content: "Camera 預設 IP 通常是 192.168.0.10、Subnet Mask 255.255.255.0。初始化或修改設定時要確認 PC 與 Camera 是否在同一網段——若不在同一個 /24 網段，Utility 可能掃得到 Camera，但寫入設定或帳密初始化可能失敗。建議先讓 PC NIC 設成跟 Camera 同網段（例如 192.168.0.250 /24），完成初始化後再把 Camera 改到目標網段，PC NIC 也跟著改。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "FD 看位置：前綴是 Dome 系列，尾碼是 Face Detection；掃得到不代表能成功設定，初始化時最好讓 PC 與 Camera 同網段。"
      }
    ]
  }
);