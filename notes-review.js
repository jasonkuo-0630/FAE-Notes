/* notes-review.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去
   這是「驗收複習」分類的暫存區，內容以短答記憶為主，考前抱佛腳用。
   之後有空再把內容拆分、同步進正式分類（Playback / Camera Settings / System Configure 等）。 */
notes.push({
  id: "vms-review-playback-ptz-fisheye-webcam",
  title: "驗收複習：Playback / Record / PTZ / Fisheye / WebCam / Utility",
  category: "驗收複習",
  categoryId: "review",
  subgroupId: "review-vms",
  tags: ["GV-VMS", "Playback", "Record", "PTZ", "Fisheye", "WebCam", "IP Device Utility", "驗收"],
  updated: "2026-07-24",
  status: "draft",
  related: [],
  sections: [
    {
      type: "note",
      title: "本篇用途",
      content: "本篇整理驗收常考的 Playback、Record Database、PVD、PTZ、Fisheye、WebCam 與 IP Device Utility FW Update 重點。內容以短答記憶為主，適合驗收前快速複習。"
    },
    { type: "spacer" },
    {
      type: "list",
      title: "1. Backup 與 Save as AVI 的差異",
      items: [
        "Backup：備份原始錄影資料，偏保存證據、保留原始錄影內容，可搭配 Include Player 方便其他電腦播放。",
        "Save as AVI：將錄影片段匯出 / 轉檔成一般影片，偏交付客戶、主管或警方觀看，可套用時間、文字、解析度、Codec、浮水印等設定。",
        "簡單記：Backup 是存原始資料；Save as AVI 是轉成影片給人看。"
      ]
    },
    {
      type: "list",
      title: "2. Save as AVI：Standard Merge / Direct Merge",
      items: [
        "Standard Merge：正式匯出方式，功能較完整，可多通道、可後製、可加入時間 / 文字 / 偵測框等資訊，但速度較慢。",
        "Direct Merge：快速匯出方式，通常保留原始 codec，速度較快，但限制較多，主要適合單一 Channel 快速匯出。",
        "簡單記：Standard Merge = 正式用、功能多、較慢；Direct Merge = 快速用、限制多、較快。"
      ]
    },
    {
      type: "list",
      title: "3. Playback → Setup → Display Sub Stream Priority",
      items: [
        "Playback / ViewLog 回放時，優先使用 Sub Stream 顯示。",
        "Sub Stream 通常解析度與碼率較低，可降低 CPU / GPU 負擔。",
        "適合多分割回放或低效能主機，讓播放比較順。",
        "注意：這不是提升畫質，而是用較低解析度換取流暢度。"
      ]
    },
    {
      type: "list",
      title: "4. Record Database 的用途",
      items: [
        "Record Database 不是影片本體，而是錄影資料的索引與紀錄。",
        "影片檔是影像內容；Database 是時間軸、Camera 對應、事件、Log 與查詢索引。",
        "VMS 需要 Database 才能知道哪個時間有錄影、哪支 Camera 對應哪段影片、事件發生在哪裡，以及 Playback / Event Search / Object Search 要怎麼查。",
        "簡單記：影片檔是內容，Database 是索引。"
      ]
    },
    {
      type: "list",
      title: "5. PVD Size Filter 與 1/80",
      items: [
        "PVD = People / Vehicle Detection，人 / 車偵測。",
        "Size Filter 是 PVD 的最小偵測尺寸門檻。",
        "小於 Size Filter 設定值的目標不會被偵測，可減少遠方小物體、雜訊、反光或錯誤輪廓造成誤判。",
        "1/80 代表最小物件大小相對於影像尺寸的比例。",
        "例如 1920 × 1080 影像中，1920 ÷ 80 ≈ 24，因此 1/80 約可理解為 24 × 24 pixels 的最小尺寸概念。",
        "簡單記：Size Filter 擋太小的目標；1/80 是畫面尺寸比例。"
      ]
    },
    {
      type: "list",
      title: "6. PTZ Camera Auto Set 支援的紀錄方式",
      items: [
        "Auto Set 常見包含 AutoPan 與 Cruise。",
        "AutoPan：記錄兩個水平位置，讓 PTZ 在兩點之間左右來回掃描。",
        "Cruise：記錄使用者操作 PTZ 的移動路徑，可包含 PTZ 位置、Zoom 與移動速度。",
        "簡單記：AutoPan 是兩點水平掃描；Cruise 是記錄人工操作路徑。"
      ]
    },
    {
      type: "list",
      title: "7. PTZ Setup → Tracking Pause Interval",
      items: [
        "Tracking Pause Interval 是 PTZ Tracking 停止或被中斷後的暫停時間。",
        "用途是避免 PTZ Tracking 被中斷後立刻恢復，或與使用者操作、自動動作互相搶控制權。",
        "簡單記：Tracking Pause Interval = PTZ Tracking 暫停多久後再恢復 / 進入後續動作。"
      ]
    },
    {
      type: "list",
      title: "8. PTZ Setup → Multiple Position Tour",
      items: [
        "Multiple Position Tour 是 PTZ 多點巡航功能。",
        "使用者先設定多個 Preset Point，PTZ 會依序移動到各點，並在每個點停留指定秒數。",
        "適合固定巡視門口、櫃台、走廊、停車場入口、倉庫區域等。",
        "簡單記：Multiple Position Tour = PTZ 依序跑多個 Preset Point。"
      ]
    },
    {
      type: "list",
      title: "9. PTZ Setup → Schedule",
      items: [
        "PTZ Schedule 是 PTZ 自動功能的排程設定。",
        "它不是巡航路線本身，而是設定 PTZ 在指定時間或閒置後啟用 Preset、Auto Function、Multiple Position Tour 等自動動作。",
        "若 Schedule 位於 Idle Protection 底下，可理解為 PTZ 閒置一段時間後才執行對應排程或自動動作。",
        "簡單記：Tour 是跑哪些點；Schedule 是什麼時候或什麼條件下執行。"
      ]
    },
    {
      type: "list",
      title: "10. Configure → Object Tracking Config",
      items: [
        "Object Tracking Config 是設定 Object Tracking / Dual Camera Tracking 的地方。",
        "常見架構是固定鏡頭負責偵測目標，PTZ Camera 負責轉向、Zoom 與追蹤。",
        "Fixed Camera：畫面固定，適合設定 Detection Region、Mask、Object Size。",
        "PTZ Camera：接收 VMS 控制，轉向並放大追蹤目標。",
        "流程：Fixed Camera 偵測到移動物件 → VMS 判斷目標位置 → VMS 控制 PTZ 轉向 / Zoom → PTZ 追蹤目標。",
        "簡單記：固定鏡頭發現目標，VMS 叫 PTZ 轉過去追。"
      ]
    },
    {
      type: "note",
      title: "PTZ Auto Tracking 與 Object Tracking Config 差異",
      content: "PTZ Auto Tracking 是 PTZ Camera 自己看自己的畫面並追蹤；Object Tracking Config 則是固定鏡頭偵測目標，再由 VMS 控制 PTZ Camera 轉向與 Zoom。"
    },
    {
      type: "list",
      title: "11. Fisheye Tracking 的條件",
      items: [
        "Fisheye Tracking 通常是在魚眼 360 Degree View 下使用。",
        "畫面中需要有符合條件的 Motion / moving object。",
        "目標也需符合 Object Size、Mask、Dwell Time 等設定條件。",
        "它不一定要求一定是人或車，重點是有符合設定條件的移動物件。",
        "簡單記：Fisheye Tracking = 360 Degree View + moving object / Motion。"
      ]
    },
    {
      type: "list",
      title: "12. Fisheye Settings → 360 Degree → 360 Object Tracking → Advanced Settings",
      items: [
        "這是魚眼 360 Object Tracking 的進階條件設定。",
        "Mask Region：遮蔽不想偵測的區域，例如反光、樹葉、固定會晃動的物體。",
        "Object Size：設定追蹤物件的大小條件，過小或不符合條件的物件可排除。",
        "Dwell Time of Motion：物件停止或追蹤後，畫面停留多久，避免畫面一直跳來跳去。",
        "Schedule：設定 360 Object Tracking 啟用的時間。",
        "簡單記：Advanced Settings = Mask、Object Size、Dwell Time、Schedule。"
      ]
    },
    {
      type: "list",
      title: "13. Fisheye Settings → Single View → Guard Tour Setting",
      items: [
        "Fisheye Guard Tour 是魚眼 Single View 的虛擬巡航功能。",
        "魚眼 Camera 本身不會真的轉動，而是在 360 度魚眼畫面中設定多個虛擬視角。",
        "Single View 會依序切換到這些虛擬視角位置。",
        "PTZ Tour 是實體 PTZ 鏡頭真的轉；Fisheye Guard Tour 是魚眼鏡頭不動，只切換虛擬視角。",
        "簡單記：Fisheye Guard Tour = 魚眼 Single View 的虛擬 PTZ 巡航。"
      ]
    },
    { type: "spacer" },
    {
      type: "list",
      title: "14. WebCam 的用途與好處（總覽）",
      items: [
        "WebCam 是 GV-VMS 的 WebCam Server 功能。",
        "用途是讓遠端使用者透過瀏覽器連到 GV-VMS，不必在遠端電腦安裝完整 GV-VMS。",
        "登入後主要分成四大功能：Live View、Remote Playback、Event List Query、Configure。",
        "好處是遠端端只要瀏覽器即可連線，方便客戶、主管或維護人員查看畫面與錄影。",
        "簡單記：WebCam = 用瀏覽器遠端看 VMS，四大功能是 Live/Playback/Event/Configure。"
      ]
    },
    {
      type: "list",
      title: "WebCam → Live View：遠端即時監看",
      items: [
        "用途：透過瀏覽器看 GV-VMS 內 Camera 的即時畫面。",
        "操作概念：進 WebCam 頁面 → 選 Live View → 左側 Camera List 選 Camera → 顯示到分割畫面。",
        "官方規格：一次最多顯示 16 channels，總共最多支援 256 channels；選空格再選 Camera 會顯示在指定格，沒選格則依 Layout 順序顯示，再次點 Camera 可關閉該 Channel。",
        "<strong>Camera List</strong>：選擇要顯示的 Camera。",
        "<strong>Control Panel</strong>：可做 Camera Adjustment，例如 Brightness、Contrast、Saturation、Hue；若 Camera 支援 PTZ，也能在這裡遠端控制方向。",
        "<strong>Audio</strong>：聽現場聲音。",
        "<strong>Snapshot</strong>：截圖。",
        "<strong>Quality</strong>：切換高畫質 HD。",
        "<strong>Zoom In</strong>：PIP / 放大檢視。",
        "<strong>Record</strong>：把目前 Live View 錄到遠端電腦本機，存成 .avi（注意：存的是遠端電腦本機，不是 VMS 主機錄影）。",
        "<strong>Full Screen</strong>：全螢幕。"
      ]
    },
    {
      type: "list",
      title: "WebCam → Remote Playback：遠端回放錄影",
      items: [
        "用途：透過 WebCam 頁面遠端查 GV-VMS 的錄影。",
        "操作概念：WebCam 頁面 → Remote Playback → 選 Camera → 選日期 → 看 timeline 色塊 → Play 回放；更多 Playback 功能可從 Channel 右下角 Tools 開啟。",
        "<strong>啟用條件（考試重點）</strong>：VMS 端 WebCam Server 要啟用，且 <strong>Run ViewLog Server</strong> 與 <strong>Run Mobile Service</strong> 都必須勾選，否則無法在瀏覽器遠端播放錄影。",
        "部分功能需要 Web Plugin。"
      ]
    },
    {
      type: "list",
      title: "WebCam → Event List Query：遠端查事件",
      items: [
        "用途：透過 WebCam 頁面查事件，不是單純看時間軸。",
        "可查的事件類型：Monitor、System、Login、POS、Merge、Backup、Delete、Notification、I/O、Playback、AI Event、AI Counter、CMS。",
        "操作概念：WebCam 頁面 → Event List Query → 選查詢類別 → 設 Event Type / Device / Date / Information 等條件 → Query → 看文字結果 → 有影像的事件可點 Video icon 回放 → 可 Export 或 Chart。",
        "跟 Remote Playback 的差異：Remote Playback 是「我已經知道要看哪支 Camera、哪一天、哪段時間」；Event List Query 是「我想先查事件（例如 Motion、I/O、POS、Backup、Login、AI Event），再從事件結果回放」。"
      ]
    },
    {
      type: "list",
      title: "WebCam → Configure：遠端資訊與下載中心",
      items: [
        "Configure 不是完整取代 VMS 的 System Configure，比較像 WebCam 頁面的遠端資訊 / 工具區。",
        "可存取 Camera List、Server Information、Download Center，也可連接 GV-Cloud。",
        "Camera 頁面可查看 Camera connection status、name、IP、port number。",
        "簡單記：Configure = 看資訊 + 下載外掛 + GV-Cloud 入口，不是完整的 VMS 系統設定。"
      ]
    },
    {
      type: "callout",
      label: "WebCam 四大功能記憶點",
      content: "Live View = 看現在；Remote Playback = 查錄影（需 Run ViewLog Server + Run Mobile Service）；Event List Query = 查事件，可從結果回放；Configure = 看連線資訊 / 下載工具 / GV-Cloud，不是完整 System Configure。"
    },
    { type: "spacer" },
    {
      type: "text",
      title: "WebCam Server 啟用流程",
      content: "從 VMS 端啟用 WebCam Server 的完整步驟："
    },
    {
      type: "flow",
      steps: [
        "GV-VMS → Home → Toolbar → Network → WebCam Server",
        "開啟 WebCam Server Setup",
        "確認 HTTP Port，預設通常是 80",
        "若需要遠端 Playback，確認 Run ViewLog Server / Run Mobile Service 是否啟用",
        "按 OK / Start 啟用 WebCam Server",
        "遠端瀏覽器輸入 http://VMS主機IP，若 HTTP Port 不是 80，需輸入 http://VMS主機IP:Port",
        "輸入 GV-VMS 帳號密碼登入",
        "依需求進入 Live View / Remote Playback / Event List Query"
      ]
    },
    {
      type: "list",
      title: "WebCam 排錯重點",
      items: [
        "連不上：檢查 WebCam Server 是否啟用、HTTP Port 是否正確、防火牆是否擋住。",
        "登入失敗：檢查 GV-VMS 帳號密碼與權限。",
        "不能 Playback：檢查 Run ViewLog Server / Run Mobile Service 是否啟用。",
        "遠端不同網段連不到：檢查 IP、Port Forwarding、VPN、防火牆與網路路由。"
      ]
    },
    { type: "spacer" },
    {
      type: "list",
      title: "15. IP Device Utility FW Update 列表列出的條件",
      items: [
        "FW Update 列表會列出 IP Device Utility 偵測到，且有新版 Firmware 可用的 GV 裝置。",
        "設備需是工具支援的 GV 裝置，且能辨識設備型號與目前 Firmware 版本。",
        "Online Update 時，設備需具備可連 Internet 的條件。",
        "若設備不支援 Online Update，可能需要改用 Manual Update。",
        "更新前需確認型號、目前 Firmware 版本、目標 Firmware 是否相容、帳號密碼與網路狀態。",
        "更新中不可斷電或拔網路線，建議先停止 VMS 監控與遠端連線。",
        "簡單記：FW Update 列表 = 偵測到、支援更新、且有新版 Firmware 可用的 GV 裝置。"
      ]
    },
    { type: "spacer" },
    {
      type: "callout",
      label: "15 題超短背誦版",
      content: "1. Backup 是備份原始錄影；Save as AVI 是匯出 / 轉檔影片。<br>2. Standard Merge 正式匯出，可多通道、可後製、較慢；Direct Merge 快速匯出，單通道、限制多。<br>3. Display Sub Stream Priority 是 Playback 優先使用低解析 Sub Stream，降低系統負擔。<br>4. Record Database 是時間軸、事件、Log 與索引，不是影片本體。<br>5. PVD Size Filter 是人 / 車最小偵測尺寸；1/80 是畫面尺寸比例。<br>6. Auto Set 可設定 AutoPan 與 Cruise；AutoPan 兩點掃描，Cruise 記錄路徑、Zoom、速度。<br>7. Tracking Pause Interval 是 PTZ Tracking 中斷後的暫停時間。<br>8. Multiple Position Tour 是 PTZ 多點巡航。<br>9. PTZ Schedule 是 PTZ 自動功能的排程或閒置後動作。<br>10. Object Tracking Config 是固定鏡頭偵測目標，VMS 控制 PTZ 追蹤。<br>11. Fisheye Tracking 需要 360 Degree View 與符合條件的 moving object。<br>12. 360 Object Tracking Advanced Settings 可設 Mask、Object Size、Dwell Time、Schedule。<br>13. Fisheye Guard Tour 是魚眼 Single View 的虛擬巡航。<br>14. WebCam 是用瀏覽器遠端看 GV-VMS，四大功能是 Live View / Remote Playback / Event List Query / Configure。<br>15. FW Update 列表會列出偵測到且有新版 Firmware 可用的 GV 裝置。"
    },
    {
      type: "callout",
      label: "最後記憶口訣",
      content: "Backup 存原始，AVI 給人看。<br>Standard 正式慢，Direct 快但少。<br>Sub Stream 換流暢，Database 管索引。<br>Size Filter 擋小物，1/80 看比例。<br>AutoPan 兩點掃，Cruise 記路徑。<br>Tour 是跑點，Schedule 是時間。<br>Fixed 看目標，PTZ 去追蹤。<br>Fisheye 不轉鏡，虛擬視角巡航。<br>WebCam 四大功能：Live/Playback/Event/Configure。<br>FW Update 列有新版的 GV 裝置。"
    }
  ]
});