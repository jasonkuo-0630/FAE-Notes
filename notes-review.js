/* notes-review.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去
   這是「驗收複習」分類的暫存區，內容以驗收短答與實務理解為主。
   之後有空可再拆分、同步進正式分類（Playback / Record / PTZ / Fisheye / WebCam / Utility 等）。 */

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
      content: "本篇整理驗收常考的 Playback、Record Database、PVD、PTZ、Fisheye、WebCam 與 IP Device Utility FW Update 重點。內容以驗收回答、實務用途、好處與限制為主，適合驗收前快速複習。"
    },
    { type: "spacer" },

    {
      type: "list",
      title: "1. Backup 與 Save as AVI 的差異",
      items: [
        "Backup：將 GV-VMS 的錄影檔完整複製一份下來，概念上接近直接複製原始錄影資料，偏向保存完整錄影檔。",
        "Save as AVI：將錄影檔重新解碼後匯出成 AVI / EXE 等影片格式，過程中可套用時間文字、偵測框、影像效果、剪輯或其他後製設定。",
        "主要差異：Backup 偏『直接複製錄影檔』；Save as AVI 偏『重新解碼並重新輸出影片』。",
        "因為 Save as AVI 需要重新解碼並套用設定，所以匯出同樣時間長度的影片時，通常會比 Backup 花更久。",
        "簡單記：Backup 是複製；Save as AVI 是解碼後重做一支影片。"
      ]
    },
    {
      type: "list",
      title: "Backup 的運用場景 / 好處 / 限制",
      items: [
        "運用場景：需要完整保存原始錄影檔，或希望把某段錄影資料完整複製出來時使用。",
        "內部保存、備份錄影資料、保留原始錄影內容與播放資料時使用。",
        "好處：處理方式較接近直接複製錄影檔，速度通常比重新解碼匯出的 Save as AVI 快。",
        "較能保留原始錄影資料，不會因重新轉檔或後製設定改變影片內容。",
        "限制：比較偏 GV-VMS 錄影資料備份，不像一般 AVI 影片那麼直覺可交付給所有人觀看。",
        "若對方需要一般影片格式、或需要加上時間文字 / 偵測框 / 特效處理，Backup 就不是主要選擇。"
      ]
    },
    {
      type: "list",
      title: "Save as AVI 的運用場景 / 好處 / 限制",
      items: [
        "運用場景：需要將錄影片段轉成一般影片格式，交給客戶、主管、警方或其他非 VMS 使用者觀看時使用。",
        "需要對錄影畫面套用時間文字、Camera 名稱、偵測框、浮水印、影像效果、剪輯或其他後製設定時使用。",
        "好處：輸出結果較容易交付與播放，也能依需求套用後製資訊。",
        "可將 GV-VMS 錄影重新輸出成較通用的影片格式。",
        "限制：因為需要重新解碼並套用設定，所以匯出同樣長度的影片通常比 Backup 更花時間。",
        "如果只是要完整複製原始錄影資料，Save as AVI 反而不是最有效率的方式。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "2. Save as AVI：Standard Merge / Direct Merge",
      items: [
        "Standard Merge：Save as AVI 中較完整的匯出方式，可做較多設定與後製處理，適合正式匯出，但因處理流程較完整，速度通常較慢。",
        "Direct Merge：Save as AVI 中較快速、較單純的匯出方式，限制較多，主要適合單一 Channel 或不需要太多後製設定的快速匯出。",
        "主要差異：Standard Merge 功能較完整、可調整項目較多、處理較慢；Direct Merge 處理較單純、限制較多、速度較快。",
        "簡單記：Standard = 正式完整但慢；Direct = 單純快速但限制多。"
      ]
    },
    {
      type: "list",
      title: "Standard Merge 的運用場景 / 好處 / 限制",
      items: [
        "運用場景：正式交付影片，需要較完整的匯出設定或後製資訊時使用。",
        "需要加上日期時間、Camera 名稱、偵測框、文字資訊、影像效果，或需要較完整處理流程時使用。",
        "好處：匯出彈性高，可做較完整的處理與設定。",
        "適合正式交付、存證、或需要後製資訊的影片匯出。",
        "限制：因為處理較完整，通常比 Direct Merge 更花時間。",
        "如果只是單支 Camera 快速匯出確認畫面，Standard Merge 可能太慢。"
      ]
    },
    {
      type: "list",
      title: "Direct Merge 的運用場景 / 好處 / 限制",
      items: [
        "運用場景：只需要快速匯出某一支 Camera 的片段，不需要複雜後製或完整設定時使用。",
        "內部確認、臨時提供畫面、主管或客戶急著看某段錄影時使用。",
        "好處：處理流程較單純，所以速度較快。",
        "適合快速匯出單純影片片段。",
        "限制：功能限制較多，可調整或後製的項目較少。",
        "不適合需要正式後製、多項匯出設定或完整處理的影片。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "3. Playback → Setup → Display Sub Stream Priority",
      items: [
        "Display Sub Stream Priority 是 Playback / ViewLog 回放時，優先使用 Sub Stream 顯示的功能。",
        "Sub Stream 通常解析度與碼率較低，可降低系統解碼與顯示負擔。",
        "適合多分割回放或低效能主機，讓播放比較順。",
        "注意：這不是提升畫質，而是用較低解析度換取流暢度。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "4. Record Database 的用途",
      items: [
        "Record Database 是 GV-VMS 用來管理錄影與事件的資料庫 / 索引資料。",
        "影片檔是影像內容；Database 則用來記錄該錄影檔錄影時間、Camera 對應、事件資料與時間軸索引。",
        "VMS 需要 Database 才能在找到對應的錄影檔，以及正確列出錄影與事件。",
        "如果 Database 異常，可能會出現錄影檔仍存在，但時間軸、事件查詢或回放索引不正常的情況。",
        "注意：System Log、AI Event 圖片、Object Index 等可能有各自的資料庫或儲存位置，不要全部混成同一個 Record Database。",
        "簡單記：影片檔是內容，Database 是索引與事件資料。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "5. PVD Size Filter 與 1/80",
      items: [
        "PVD = People / Vehicle Detection，人 / 車偵測。",
        "Size Filter 是 PVD 的最小偵測尺寸門檻。",
        "小於 Size Filter 設定值的目標不會被偵測，可減少遠方小物體、雜訊、反光或錯誤輪廓造成誤判。",
        "1/80 代表最小物件大小相對於影像尺寸的比例。",
        "例如官方以 1920 × 1080 影像為例，1/80 對應的 minimum PVD object size 約為 24 × 24 pixels。",
        "簡單記：Size Filter 擋太小的目標；1/80 是畫面尺寸比例。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "6. PTZ Camera Auto Set 支援的紀錄方式",
      items: [
        "Auto Set 主要包含 AutoPan 與 Cruise。",
        "AutoPan：記錄兩個水平位置，讓 PTZ 在兩點之間左右來回掃描；垂直方向移動通常不包含在 AutoPan 內。",
        "Cruise：記錄使用者操作 PTZ 的移動路徑，可包含 Camera position、Zoom 與 movement speed。",
        "簡單記：AutoPan 是兩點水平掃描；Cruise 是記錄人工操作路徑。"
      ]
    },
    {type: "space"},
    { 
      type: "list",
      title: "7. PTZ Setup → Tracking Pause Interval",
      items: [
        "Tracking Pause Interval 是 PTZ 停止 Tracking 後的暫停時間，常見設定範圍為 5～60 秒。",
        "用途是讓 PTZ Tracking 停止後保留一段 pause time，避免追蹤狀態太快切換或與其他 PTZ 操作互相干擾。",
        "簡單記：Tracking Pause Interval = PTZ 停止追蹤後要暫停多久。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "8. PTZ Setup → Multiple Position Tour",
      items: [
        "Multiple Position Tour 是 PTZ 多點巡航功能。",
        "使用者先設定多個 Preset Point，PTZ 會依序移動到各點，並在每個點停留指定秒數。",
        "實際可建立的 Preset Point 數量依 PTZ Camera 能力與系統支援而定。",
        "適合固定巡視門口、櫃台、走廊、停車場入口、倉庫區域等。",
        "簡單記：Multiple Position Tour = PTZ 依序跑多個 Preset Point。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "9. PTZ Setup → Schedule",
      items: [
        "PTZ Setup 裡的 Schedule 要放在 Idle Protection 的脈絡理解。",
        "當 PTZ Camera 閒置超過設定的 Idle Time 後，可以執行指定的 protection mode，例如 Preset、Auto、Multi Position Tour 或 Schedule。",
        "因此這裡的 Schedule 不是巡航路線本身，而是 PTZ 閒置後可啟動的排程 / 自動動作模式之一。",
        "另外，GV-VMS 一般 Schedule 功能可用來控制 Recording、Motion Event Trigger、PTZ Auto 等功能依時間啟用或停止。",
        "簡單記：Tour 是跑哪些點；PTZ Setup 裡的 Schedule 是閒置後要不要回到排程 / 自動動作。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "10. Configure → Object Tracking Config",
      items: [
        "Object Tracking Config 是設定 PTZ Object Tracking 的地方，常見驗收重點是 Dual-Camera Tracking。",
        "Dual-Camera Tracking 架構下，Fixed Camera 負責固定視角與偵測目標，PTZ Camera 負責轉向、Zoom 與追蹤。",
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
    {type: "space"},
    {
      type: "list",
      title: "11. Fisheye Tracking 的條件",
      items: [
        "Fisheye Tracking 這題通常是在問 360 Object Tracking。",
        "360 Object Tracking 需要 Fisheye View 設為 360 Degree / 360 degree mode。",
        "畫面中需要有符合條件的 Motion / moving object，系統才會在追蹤畫面中追蹤移動物件，並在 360-degree view 標示該目標。",
        "目標也需符合 Object Size、Mask、Dwell Time 等設定條件。",
        "它不一定要求一定是人或車，重點是有符合設定條件的移動物件。",
        "簡單記：Fisheye Tracking = 360 Degree View + moving object / Motion。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "12. Fisheye Settings → 360 Degree → 360 Object Tracking → Advanced Settings",
      items: [
        "這是魚眼 360 Object Tracking 的進階條件設定。",
        "Mask Region：用滑鼠框出要忽略 Motion 的區域，例如反光、樹葉、固定會晃動的物體。",
        "Object Size：暫停 Live View 後，用滑鼠框出目標物件的最大 / 最小尺寸，用來限制可被追蹤的目標大小。",
        "Dwell Time of Motion：當目標物件停止移動後，highlighted region 與追蹤畫面會固定停留指定秒數；停留期間新的 Motion 會被忽略，避免畫面一直跳來跳去。",
        "Schedule：設定 Object Tracking 啟用的時間。",
        "簡單記：Advanced Settings = Mask、Object Size、Dwell Time、Schedule。"
      ]
    },
    {type: "space"},
    {
      type: "list",
      title: "13. Fisheye Settings → Single View → Guard Tour Setting",
      items: [
        "Fisheye Guard Tour 是魚眼 Single View 下的 Virtual PTZ Tour / 虛擬巡航功能。",
        "魚眼 Camera 本身不會真的轉動，而是在 360 度魚眼畫面中設定多個虛擬視角。",
        "Single View 會依序切換到這些虛擬視角位置，用來巡視重要區域。",
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
        "登入後主要可用 Live View、Remote Playback、Event List Query、Configure / Download Center 等功能。",
        "Configure 偏遠端資訊、外掛下載與相關工具入口，不等於完整的 GV-VMS System Configure。",
        "好處是遠端端只要瀏覽器即可連線，方便客戶、主管或維護人員查看畫面與錄影。",
        "簡單記：WebCam = 用瀏覽器遠端看 VMS，主要功能是 Live / Playback / Event / Configure。"
      ]
    },
    {
      type: "list",
      title: "WebCam 的運用場景 / 好處 / 限制",
      items: [
        "運用場景：客戶、主管或維護人員不在 VMS 主機旁，但需要遠端看 Live View 或 Playback。",
        "遠端端不方便安裝完整 GV-VMS，只能透過瀏覽器連線查看。",
        "運用場景：FAE 或 Support 需要遠端確認 Camera 即時畫面、事件紀錄或錄影回放。",
        "好處：遠端端不用安裝完整 VMS，透過瀏覽器即可使用部分功能。",
        "可提供 Live View、Remote Playback、Event List Query 等遠端查看能力。",
        "限制：部分功能可能需要 Web Plugin；瀏覽器、權限、防火牆、Port、網路環境都可能影響連線。",
        "WebCam 是遠端 Web 存取功能，不是完整取代本機 GV-VMS 操作介面。"
      ]
    },
    {
      type: "list",
      title: "WebCam → Live View：遠端即時監看",
      items: [
        "用途：透過瀏覽器看 GV-VMS 內 Camera 的即時畫面。",
        "操作概念：進 WebCam 頁面 → 選 Live View → 可先選空白分割格 → 從 Camera List 選 Camera → Camera 會顯示到指定分割格；若未先選格，則依 Layout 順序顯示。",
        "官方規格：WebCam Live View 一次最多顯示 16 channels，總共最多支援 256 channels；再次點選 Camera List 中的 Camera 可關閉該 Channel。",
        "Camera List：選擇要顯示的 Camera。",
        "Control Panel：可做 Camera Adjustment，例如 Brightness、Contrast、Saturation、Hue；若 Camera 支援 PTZ，也能進行遠端 PTZ 控制。",
        "Audio：聽現場聲音；是否可用需看 Camera / VMS / WebCam Server 音訊設定。",
        "Snapshot：截圖。",
        "Quality：調整或切換即時影像品質。",
        "Zoom In：PIP / 放大檢視。",
        "Record：手動將目前 Live View 錄到遠端電腦本機，存成 .avi；此功能可能需要 Web Plugin，且是存到操作端電腦，不是 VMS 主機錄影。",
        "Full Screen：全螢幕顯示。"
      ]
    },
    {
      type: "list",
      title: "WebCam → Remote Playback：遠端回放錄影",
      items: [
        "用途：透過 WebCam 頁面遠端查 GV-VMS 的錄影。",
        "操作概念：WebCam 頁面 → Remote Playback → 選 Camera → 選日期 → 移到 timeline 色塊 → Play 回放；更多 Playback 功能可從 Channel 右下角 Tools 開啟。",
        "啟用條件：VMS 端需啟用 GV-WebCam Server，且 WebCam Server Setup 的 General tab 需啟用 Run ViewLog Server，才能透過 WebCam Server 遠端播放錄影。",
        "部分功能可能需要 Web Plugin。",
        "補充：Run Mobile Service 主要與 GV-Eye、GV-Edge Recording Manager 或 Mobile / App 類連線功能相關；若現場要求手機或特定遠端服務，也要確認是否啟用。"
      ]
    },
    {
      type: "list",
      title: "WebCam → Event List Query：遠端查事件",
      items: [
        "用途：透過 WebCam 頁面查事件，不是單純看時間軸。",
        "可查的事件類型依版本與事件來源而定，例如 Monitor、System、Login、POS、Merge、Backup、Delete、Notification、I/O、Playback、AI Event、AI Counter、CMS 等。",
        "操作概念：WebCam 頁面 → Event List Query → 選查詢類別 → 設 Event Type / Device / Date / Information 等條件 → Query → 看文字結果 → 有影像的事件可點 Video icon 回放 → 可 Export 或 Chart。",
        "跟 Remote Playback 的差異：Remote Playback 是「我已經知道要看哪支 Camera、哪一天、哪段時間」；Event List Query 是「我想先查事件，例如 Motion、I/O、POS、Backup、Login、AI Event，再從事件結果回放」。"
      ]
    },
    {
      type: "list",
      title: "WebCam → Configure：遠端資訊與下載中心",
      items: [
        "Configure 不是完整取代 VMS 的 System Configure，比較像 WebCam 頁面的遠端資訊 / 工具區。",
        "可查看 Camera List、Server Information，並進入 Download Center 下載 Web Plugin 或相關工具。",
        "Camera 頁面可查看 Camera connection status、name、IP、port number。",
        "也可能包含 GV-Cloud 相關入口，實際顯示項目依版本與安裝元件而定。",
        "簡單記：Configure = 看資訊 + 下載外掛 + 相關遠端工具入口，不是完整的 VMS 系統設定。"
      ]
    },
    {
      type: "callout",
      label: "WebCam 四大功能記憶點",
      content: "Live View = 看現在。<br>Remote Playback = 查錄影，VMS 端需啟用 WebCam Server 與 Run ViewLog Server。<br>Event List Query = 查事件，可從結果回放。<br>Configure = 看連線資訊 / 下載工具 / GV-Cloud 相關入口，不是完整 System Configure。"
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
        "若需要遠端 Playback，確認 Run ViewLog Server 是否啟用",
        "若需要手機 / App / 特定遠端服務，依需求確認 Run Mobile Service 是否啟用",
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
        "不能 Playback：檢查 Run ViewLog Server 是否啟用。",
        "手機或 App 類服務異常：檢查 Run Mobile Service 與相關 Port / 網路設定。",
        "遠端不同網段連不到：檢查 IP、Port Forwarding、VPN、防火牆與網路路由。"
      ]
    },

    { type: "spacer" },

    {
      type: "list",
      title: "15. IP Device Utility FW Update 列表列出的條件",
      items: [
        "FW Update 列表會列出 IP Device Utility 掃描 / 偵測到，且可進行 Firmware Update 判斷或操作的 GV 裝置。",
        "若使用 Check the Latest Firmware / Online Update，工具會依設備型號與目前 Firmware 版本判斷是否有新版 Firmware 可用。",
        "設備需是工具支援的 GV 裝置，且連線、帳號密碼、型號辨識與目前 Firmware 版本資訊需正常。",
        "Online Update 時，設備或操作環境需能取得官方 Firmware 更新資訊；若設備不支援 Online Update，或現場網路無法連外，需改用 Manual Update。",
        "更新前需確認型號、目前 Firmware 版本、目標 Firmware 是否相容、帳號密碼與網路狀態。",
        "更新中不可斷電或拔網路線，建議先停止 VMS 監控與遠端連線。",
        "簡單記：FW Update 列表 = 工具偵測到、可辨識版本，且可進行韌體更新判斷 / 操作的 GV 裝置。"
      ]
    },

    { type: "spacer" },

    {
      type: "callout",
      label: "15 題超短背誦版",
      content: "1. Backup 是備份原始錄影；Save as AVI 是匯出 / 轉檔影片。<br>2. Standard Merge 正式匯出，可多通道、完整時間軸、可後製、較慢；Direct Merge 快速匯出，單通道、限制多。<br>3. Display Sub Stream Priority 是 Playback 優先使用低解析 Sub Stream，降低系統負擔。<br>4. Record Database 是時間軸、事件與索引，不是影片本體。<br>5. PVD Size Filter 是人 / 車最小偵測尺寸；1/80 是畫面尺寸比例。<br>6. Auto Set 可設定 AutoPan 與 Cruise；AutoPan 兩點掃描，Cruise 記錄路徑、Zoom、速度。<br>7. Tracking Pause Interval 是 PTZ Tracking 停止後的暫停時間。<br>8. Multiple Position Tour 是 PTZ 多點巡航。<br>9. PTZ Setup 裡的 Schedule 要放在 Idle Protection 理解，是閒置後可啟動的排程 / 自動動作。<br>10. Object Tracking Config 是 Fixed Camera 偵測目標，VMS 控制 PTZ 追蹤。<br>11. Fisheye Tracking 需要 360 Degree View 與符合條件的 moving object。<br>12. 360 Object Tracking Advanced Settings 可設 Mask、Object Size、Dwell Time、Schedule。<br>13. Fisheye Guard Tour 是魚眼 Single View 的虛擬巡航。<br>14. WebCam 是用瀏覽器遠端看 GV-VMS，主要功能是 Live View / Remote Playback / Event List Query / Configure。<br>15. FW Update 列表會列出工具偵測到、可辨識版本並可進行 Firmware Update 判斷 / 操作的 GV 裝置。"
    },
    {
      type: "callout",
      label: "最後記憶口訣",
      content: "Backup 存原始，AVI 給人看。<br>Standard 正式慢，Direct 快但少。<br>Sub Stream 換流暢，Database 管索引。<br>Size Filter 擋小物，1/80 看比例。<br>AutoPan 兩點掃，Cruise 記路徑。<br>Tour 是跑點，Schedule 是時間 / 閒置後動作。<br>Fixed 看目標，PTZ 去追蹤。<br>Fisheye 不轉鏡，虛擬視角巡航。<br>WebCam 四大功能：Live / Playback / Event / Configure。<br>FW Update 列可判斷 / 操作更新的 GV 裝置。"
    },
    {
      type: "note",
      title: "參考文獻與補充來源",
      content: "參考文獻：GV-VMS User Manual V20，Playback / Backup / Save as AVI / PTZ / Fisheye / WebCam 相關章節；GV-IP Device Utility Guide，Firmware Update 相關章節。實務補充：部分說明依驗收 QA、同事說明與實測整理，實際功能名稱與可用項目仍需依 GV-VMS 版本、Camera 型號、授權與現場環境確認。"
    }
  ]
});