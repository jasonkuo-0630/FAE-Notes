/* notes-playback.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-playback-01",
    title: "Playback 總覽、入口與 Playback Layout",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["Playback", "總覽", "Layout"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-liveview-01", "vms-playback-02"],
    sections: [
      {
        type: "text",
        content: "Playback 是用來查詢、回放、搜尋、標記與匯出 GV-VMS 已錄下來的影像資料。它不是單純播放影片，而是透過 Camera、Date、Timeline、Event Mark、Bookmark、Database、Backup／Export 這些角度，快速找到需要的錄影片段。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Playback = 查錄影、看事件、找片段、做備份與匯出。"
      },
      {
        type: "text",
        title: "入口",
        content: "GV-VMS 主畫面上方工具列中，Live View 旁邊的膠捲圖示可進入 Playback。"
      },
      {
        type: "text",
        content: "進入 Playback 後，畫面會顯示：左側 Camera／Device List、中間 Playback Layout、下方 Timeline、右上方工具列功能（日期選擇／Search／Backup／Save as AVI 等）。"
      },
      { type: "image", num: 1, label: "剛進入 Playback 的畫面：左側 Camera 清單、下方 Timeline" },
      {
        type: "text",
        content: "如果 Camera 尚未加入 Layout，Playback 畫面可能不會顯示該 Camera 的錄影時間軸。"
      },
      {
        type: "text",
        title: "Playback Layout",
        content: "是回放錄影的畫面排列區，可將左側 Camera 拖曳到 Layout 中查看錄影。"
      },
      {
        type: "list",
        title: "",
        items: [
          "可以放單一 Camera，也可以放多支 Camera",
          "多 Camera 可用來比對同一時間不同視角的錄影",
          "Save as AVI 時，可依目前 Playback Layout 輸出多畫面影片"
        ]
      },
      { type: "image", num: 2, label: "Playback Layout 顯示 Camera 畫面，下方 Timeline 出現紅色錄影區段" },
      {
        type: "callout",
        label: "記憶點",
        content: "Playback Layout 看到什麼，通常就是你正在回放／比對的錄影畫面。"
      }
    ]
  },
{
    id: "vms-playback-02",
    title: "日期選擇與 Timeline 時間軸",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["Camera Date Viewer", "Timeline"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-playback-01", "vms-playback-05", "vms-systemlog-01"],
    sections: [
      {
        type: "text",
        content: "Playback Timeline 左上角可選擇日期。<strong>藍底日期</strong>代表該日有可查詢的錄影資料。"
      },
      {
        type: "note",
        content: "要注意：藍底日期是依 VMS／Camera Database 判斷該 Camera 在該日期是否有錄影資料，不是單純掃硬碟所有影片檔。"
      },
      { type: "image", num: 1, label: "Camera Date Viewer：藍底日期代表當天有可查詢的錄影資料" },
      {
        type: "text",
        title: "Timeline",
        content: "用來顯示指定 Camera 在該日期的錄影資料與事件標記，常見功能：查看哪些時間有錄影、查看 Motion／PVD／Event 標記、拖曳時間點快速回放、配合 Display Timeline 顯示不同事件顏色。"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Focused Camera</strong>：顯示目前選到的 Camera 的時間軸",
          "<strong>All Cameras on Layout</strong>：顯示目前 Playback Layout 中所有 Camera 的錄影時間軸，用途是可快速比對多支 Camera 在同一時間是否有錄影或事件"
        ]
      }
    ]
  },
{
    id: "vms-playback-03",
    title: "播放控制：Real Time / Frame by Frame",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["Real Time", "Frame by Frame"],
    updated: "2026-07-16",
    status: "ok",
    related: [],
    sections: [
      {
        type: "text",
        content: "Playback 下方有基本播放控制，例如倒退一幀、倒放、正常播放、前進一幀、靜音、播放倍率 +／-。"
      },
      {
        type: "text",
        title: "Real Time",
        content: "是依真實時間播放，適合需要聽音訊或以實際時間感觀看事件。如果電腦效能不足，系統可能會跳幀以維持時間同步。"
      },
      {
        type: "text",
        title: "Frame by Frame",
        content: "是逐幀播放，會優先完整顯示每一張影格，不一定維持真實時間速度，通常不適合搭配音訊播放。"
      },
      { type: "image", num: 1, label: "Frame by Frame 播放模式" },
      {
        type: "callout",
        label: "記憶點",
        content: "Real Time = 照真實時間播放；Frame by Frame = 一格一格看細節。"
      }
    ]
  },
{
    id: "vms-playback-04",
    title: "A/B 區間播放",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["A/B", "區間播放"],
    updated: "2026-07-16",
    status: "ok",
    related: [],
    sections: [
      {
        type: "text",
        content: "Playback 可設定 A／B 點重複播放指定區間，用途是反覆查看某段事件，例如人員進出、車輛經過、異常動作等。"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>A</strong>：設定起點",
          "<strong>B</strong>：設定終點",
          "<strong>ABx</strong>：取消 A／B 點"
        ]
      },
      { type: "image", num: 1, label: "設定 A、B 點後，Timeline 上出現標記，並以指定倍率重複播放區間" },
      { type: "image", num: 2, label: "A To B Mode（Cancelled）：取消 A/B 區間播放的提示" }
    ]
  },
{
    id: "vms-playback-05",
    title: "Display Timeline 與 Display All Database",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["Display Timeline", "Display All Database"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-playback-02", "vms-systemlog-01"],
    sections: [
      {
        type: "text",
        title: "Display Timeline",
        content: "可設定不同事件在 Timeline 上的顯示顏色，例如 Motion、PVD、AI Event 等其他事件類型。"
      },
      {
        type: "note",
        content: "要注意：Display Timeline 只是調整事件標記顯示方式，不會改變錄影本身。"
      },
      { type: "image", num: 1, label: "Display Timeline：Event Type 清單，可勾選要顯示的事件類型與顏色" },
      { type: "image", num: 2, label: "只勾選 PVD Motion 後，Timeline 只顯示 PVD 事件的顏色標記" },
      {
        type: "callout",
        label: "記憶點",
        content: "Display Timeline = 調整 Timeline 上事件顏色／標記顯示。"
      },
      {
        type: "text",
        title: "Display All Database",
        content: "可查看目前 Layout 中 Camera 的錄影資料庫區段，用途是查看哪些 Camera 有錄影資料、查看不同 Camera 的錄影時間分布、確認是否有錄影缺口、協助判斷某段時間有沒有資料可查。"
      },
      { type: "image", num: 3, label: "Display All Database：所有 Camera 的錄影資料庫時間軸並排顯示" },
      {
        type: "callout",
        label: "記憶點",
        content: "Display All Database = 查看目前 Camera／Layout 可查詢到的錄影資料區段。"
      }
    ]
  },
{
    id: "vms-playback-06",
    title: "Bookmark 書籤",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["Bookmark", "Never Recycle"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-recordsetting-01", "vms-playback-08"],
    sections: [
      {
        type: "text",
        content: "Playback 中可對特定 Camera、特定時間點建立 Bookmark，用途是標記重要片段、快速回到特定事件時間、後續查找、備份或回放較方便。"
      },
      { type: "image", num: 1, label: "在 Camera 畫面上右鍵，選單中有 Add to Bookmark" },
      { type: "image", num: 2, label: "Bookmark Description：輸入描述文字以識別這個書籤" },
      {
        type: "note",
        title: "實測補充",
        content: "建立 Bookmark 後，該片段可能會被標記為 Never Recycle，用來避免重要片段被一般回收機制刪除。但實際行為仍需依版本與設定確認。"
      },
      { type: "image", num: 3, label: "建立 Bookmark 後，Timeline 上對應片段出現綠色（Never Recycle）標記" },
      {
        type: "callout",
        label: "記憶點",
        content: "Bookmark = 標記重要時間點；Never Recycle = 避免重要錄影被自動回收。"
      }
    ]
  },
{
    id: "vms-playback-07",
    title: "Object Search / Smart Motion Search",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["Object Search", "Smart Motion Search", "Alarm Search"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-events-02", "vms-playback-08", "vms-playback-09"],
    sections: [
      {
        type: "text",
        content: "Object Search 是用來快速搜尋指定區域內的事件或畫面變化。它不是匯出功能，而是協助定位事件時間點，流程可以理解為：先用 Object Search／Smart Motion Search 找到可疑片段 → 回到 Playback 對應時間點確認畫面 → 再使用 Backup 或 Save as AVI 匯出需要的片段。"
      },
      { type: "image", num: 1, label: "Smart Motion Search 介面：先設定 Start Time / End Time" },
      {
        type: "text",
        content: "<strong>Alarm Search</strong> 可針對指定區域搜尋是否有事件發生。<strong>Smart Motion Search</strong> 可針對指定區域搜尋 Motion 變化，通常需要事先啟用相關功能，讓 VMS 在錄影時建立索引／Metadata，之後才能快速搜尋。"
      },
      { type: "image", num: 2, label: "在畫面上框選要搜尋的區域（紅色框）" },
      { type: "image", num: 3, label: "Alarm Search 的 Setting：可調整 Sensitivity 靈敏度並框選偵測區域" },
      { type: "image", num: 4, label: "Alarm / Smart Motion Search 切換選單" },
      {
        type: "text",
        title: "Just Key Frame",
        content: "只看 Key Frame，加快搜尋速度，但因為不是每一張影格都檢查，細節可能較少。"
      },
      { type: "image", num: 5, label: "搜尋結果以縮圖時間軸呈現，可快速瀏覽命中片段" },
      {
        type: "callout",
        label: "記憶點",
        content: "Object Search = 找事件時間點；Backup／Save as AVI = 匯出資料。"
      }
    ]
  },
{
    id: "vms-playback-08",
    title: "Backup：原始錄影備份",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["Backup", "Backup Schedule", "Never Recycle"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-playback-06", "vms-playback-09", "vms-playback-07"],
    sections: [
      {
        type: "text",
        content: "Backup 是將 GV-VMS 原始錄影資料備份出去。它不是轉成一般影片檔，而是保留較完整的原始錄影資料與播放資訊，適合證據保存、原始錄影保留、後續用 EZViewLog／Player 回放，或需要保留較完整資料結構的情境。"
      },
      { type: "image", num: 1, label: "Backup 設定畫面：Media、Add time frame、Media Information、Include Player" },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Using Hard Disk</strong>：手動選擇備份硬碟、資料夾與 Backup Folder Name",
          "<strong>Using Backup Schedule</strong>：使用預先設定好的備份排程與備份路徑，適合固定時間自動備份"
        ]
      },
      { type: "image", num: 2, label: "Using Hard Disk：選擇備份路徑（Browse for Folder）" },
      { type: "image", num: 3, label: "Using Backup Schedule：設定 Backup Path 與每週排程時段" },
      {
        type: "text",
        title: "Add Time Frame",
        content: "指定要備份的日期、起訖時間、Camera、資料類型。Camera 名稱後方的數字代表該時間段內的檔案數量，通常可理解為 Video file 數量 + Audio file 數量，例如 <code>1 + 0 = 1 個影像檔、0 個音訊檔</code>。"
      },
      { type: "image", num: 4, label: "Select Backup Time：設定 Time Period 與 Select Camera(s)，搜尋中" },
      { type: "image", num: 5, label: "搜尋完成後，各 Camera 顯示可備份的檔案數量（Video + Audio）" },
      {
        type: "text",
        title: "Include Player",
        content: "備份時可附帶播放器（見上方總覽圖右下角 Include Player／Viewlog）。Backup 完成後，可在備份資料夾中找到 EZViewLog，開啟後會出現類似 Playback 的 UI，可查看備份影像、Timeline 與 Bookmark。"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Bookmarked files</strong>：備份所選 Add Time Frame／Camera 範圍內，具有 Bookmark 標記的錄影檔案（Bookmark 必須落在本次備份時間範圍內，才會被包含）",
          "<strong>Never-recycle events only</strong>：只備份被標記為 Never Recycle 的事件",
          "<strong>Unmark these events to be recycled after the backup is complete</strong>：備份完成後解除 Never Recycle 標記，讓原始資料之後可以重新進入一般 Recycle 流程",
          "<strong>Include daylight saving rollback events</strong>：包含 DST 回撥期間的錄影事件，適合有日光節約時間的地區"
        ]
      },
      { type: "image", num: 6, label: "Advanced Setting 內的 Backup 選項：Database Files / Never-recycle events only 等" },
      { type: "image", num: 7, label: "勾選 Never-recycle events only 後的畫面" }
    ]
  },
{
    id: "vms-playback-09",
    title: "Save as AVI：輸出一般影片",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["Save as AVI", "Privacy Mask", "Merge"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-playback-08", "vms-playback-07"],
    sections: [
      {
        type: "text",
        content: "Save as AVI 是將 Playback 中指定時間段的錄影輸出成一般影片檔。與 Backup 不同：Backup 是原始資料備份，Save as AVI 是一般影片輸出，適合提供外部人員觀看、事件影片匯出、報告佐證、快速分享指定片段。"
      },
      { type: "image", num: 1, label: "Save Avi File 總覽：Start / End Time、時間軸與縮圖預覽" },
      {
        type: "text",
        content: "Save as AVI 可以依目前 Playback Layout 匯出多 Camera 畫面，不一定只能輸出單一 Camera——如果 Playback Layout 目前顯示多畫面，匯出時可將整個 Layout 合成一個影片。"
      },
      {
        type: "text",
        title: "Start / End Time",
        content: "設定要輸出的起訖時間（見上圖左上角），<strong>Start</strong> 開始輸出影片。"
      },
      {
        type: "list",
        title: "Privacy Mask",
        items: [
          "<strong>Mosaic Mask</strong>：匯出時新增馬賽克遮罩，用途是遮人臉、遮車牌、遮螢幕、遮敏感區域",
          "<strong>Unrecoverable</strong>：匯出時新增不可還原遮罩，適合正式提供外部單位，避免隱私資訊被還原"
        ]
      },
      { type: "image", num: 2, label: "Export with new Privacy Mask region(s)：Un-recoverable" },
      { type: "image", num: 3, label: "Export with new Privacy Mask region(s)：Mosaic Mask" },
      {
        type: "text",
        title: "Video Effect + Camera Setting",
        content: "可設定輸出畫面的顯示效果，例如 Auto Layout、De-interlace、Overlay camera name and time、Overlay POS、Apply object detection rectangles。"
      },
      { type: "image", num: 4, label: "Camera Setting：Auto Layout 未勾選時，維持原始 Layout 輸出" },
      { type: "image", num: 5, label: "Camera Setting：勾選 Auto Layout 後，自動改為等比例排列（例如 2x2）" },
      {
        type: "text",
        title: "Setting",
        content: "可設定輸出相關選項，例如 Set Location、Standard Merge、Direct Merge、Audio Export、GPS Export、Date／Time Overlay、Export Resolution、Compact Mode、AES Encryption、Save as EXE、Copyright Text、Codec Selection。"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Standard Merge</strong>：標準合併模式，功能完整、相容性較高，但速度可能較慢",
          "<strong>Direct Merge</strong>：高速合併模式，速度較快，但限制較多，只能在單一 Camera／單一畫面時使用；若需要遮罩、疊字、特效或重新編碼，只能使用 Standard Merge"
        ]
      },
      { type: "image", num: 6, label: "Setting 總覽：Standard / Direct Merge、Audio Export、Date/Time、Export Resolution、Compact Mode、AES Encryption、Save as Exe、Codec Selection" },
      {
        type: "text",
        content: "<strong>Compact Mode</strong> 讓輸出影片更緊湊，若時間段中有未錄影空白區，可能會跳過或壓縮空白時間。<strong>Save as EXE</strong> 將輸出結果打包成可執行檔，方便沒有播放器的電腦觀看，但 EXE 可能被防毒或公司資安政策阻擋。<strong>AES Encryption</strong> 加密輸出檔案，需要 Secret Key 才能開啟。"
      },
      {
        type: "note",
        content: "Setting 裡的 Date／Time 與 Audio Export 各自還有子選單："
      },
      { type: "image", num: 7, label: "Setting → Date/Time：是否顯示日期／時間、疊字位置與字型顏色" },
      { type: "image", num: 8, label: "Setting → Audio setting：選擇要匯出的音訊 Channel、Denoise 降噪選項" },
      {
        type: "note",
        title: "實測補充",
        content: "目前實測 Save as AVI 的 Set Location 可指定輸出資料夾，但無法正常修改輸出檔名。已回報 James，並由同事確認其他 VMS 環境亦可重現，後續待確認是否為版本異常。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Backup = 原始資料備份；Save as AVI = 一般影片輸出。Direct Merge 快但限制多，需要遮罩／特效時只能用 Standard Merge。"
      }
    ]
  },
{
    id: "vms-playback-10",
    title: "Digital Watermark 補充：WMProof 驗證",
    category: "Playback",
    categoryId: "gvvms",
    subgroupId: "playback",
    tags: ["Digital Watermark", "WMProof"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-recordsetting-01"],
    sections: [
      {
        type: "text",
        content: "Use Digital Watermark Protection 是在錄影時加入數位浮水印，用來驗證影片完整性。檢查工具是 <code>WMProof.exe</code>，通常可在 VMS 安裝資料夾中找到。"
      },
      {
        type: "note",
        content: "要注意：Digital Watermark 必須在錄影前啟用。如果錄影當下未啟用，事後再開也不會補到舊影片。"
      },
      {
        type: "text",
        content: "WMProof 顯示 Fail 可能原因："
      },
      {
        type: "list",
        title: "",
        items: [
          "錄影時未啟用浮水印",
          "檔案被修改",
          "檔案損壞",
          "檢查的不是原始檔",
          "Save as AVI／轉檔／剪輯後造成浮水印失效",
          "功能異常"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "若要確認客戶何時開始啟用浮水印，可使用 WMProof 檢查不同時間段的原始錄影檔，找出從哪個檔案開始 Pass。"
      }
    ]
  }
);