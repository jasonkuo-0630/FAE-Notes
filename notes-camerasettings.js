/* notes-camerasettings.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-11",
    title: "Camera Settings 入口與整體頁籤總覽",
    category: "Camera Settings",
    categoryId: "gvvms",
    subgroupId: "camerasettings",
    tags: ["Camera Settings", "入口"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-05", "vms-12", "vms-19", "vms-30"],
    sections: [
      {
        type: "text",
        content: "Camera Settings 是針對單一 Camera 做細部設定的地方。在 IP Device Setup 的 Camera 清單中，透過 Camera 左側的<strong>設定圖示</strong>進入。"
      },
      { type: "image", num: 1, label: "IP Device Setup 列表，紅框標示設定圖示位置" },
      {
        type: "list",
        title: "進入後左側選單共有 8 個頁籤",
        items: [
          "<strong>General Setting</strong>：Camera 名稱、連線資訊、時間同步",
          "<strong>Video Setting</strong>：畫面亮度對比、方向、鏡頭類型",
          "<strong>Video Stream</strong>：Main/Sub Stream、Codec、解析度、Bitrate",
          "<strong>Audio Setting</strong>：音量增益、播放、錄音模式",
          "<strong>Abnormality</strong>：Camera 異常時的反應方式（I/O、Alarm、Notification）",
          "<strong>Record</strong>：錄影編碼格式、幀率策略",
          "<strong>Advanced</strong>：Live View 顯示效能、解碼負擔",
          "<strong>POE Switch</strong>：透過 POE Switch 遠端重啟 Camera"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "8 個頁籤大致可分四類性質：基本資訊與畫面（General/Video）、串流與訊號（Stream/Audio）、異常與錄影策略（Abnormality/Record）、效能與設備控制（Advanced/POE）。"
      }
    ]
  },
{
    id: "vms-12",
    title: "Camera · General Setting：基本資訊與連線設定",
    category: "Camera Settings",
    categoryId: "gvvms",
    subgroupId: "camerasettings",
    tags: ["General Setting", "時間同步", "DST"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-11", "vms-13"],
    sections: [
      {
        type: "text",
        content: "General Setting 是 Camera 的基本設定頁面。欄位包含 Camera Name、IP Address、Port、User Name、Password、Set codec and resolution automatically、Sync Device Time With PC、Automatically Adjust DST。"
      },
      { type: "image", num: 1, label: "General Setting 頁籤畫面" },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Camera Name</strong>：建議依位置命名（例如 1F_Entrance），在 Live View / Playback / Event Log 中比較好辨識；點擊三角形 Icon 可由系統自動掃描 Camera 在 Web 上的名稱",
          "<strong>IP / Port / User Name / Password</strong>：這是 Camera 本身帳密，<strong>不是 VMS 登入帳密</strong>。若 Camera 已連線中，部分欄位可能不能直接修改，要改 IP / Port / 帳密時，可能需要先停止 Monitor 並取消該 Camera 在 IP Device Setup 中的勾選",
          "<strong>Sync Device Time With PC</strong>：同步方向是 Camera（裝置端）主動對齊這台 PC／VMS 主機目前的時間，不是 PC 去配合 Camera；預設為 NO。同步時機不是「設定當下同步一次就結束」，而是在<strong>連線至 Camera 時</strong>、以及依照<strong>時間設定內的時間點</strong>都會再次同步。時間不準會影響錄影時間、Playback 查詢、Event Log 的準確性。",
          "<strong>Automatically Adjust DST</strong>：日光節約時間調整，預設 Disable，台灣通常不需要，但海外案場要注意——往前調整的時段（如北美夏令時間）會導致 Playback 出現兩個重複時間"
        ]
      },
      {
        type: "note",
        title: "實務補充",
        content: "Sync Device Time With PC 的同步方向與頻率，是同事驗收時來回確認過的結果；確切同步頻率可能因版本而異，實際部署時建議再次確認。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "General 管基本資料；IP/帳密是 Camera 本身的，不是 VMS 登入帳密；時間同步會牽動錄影、事件、Playback 查詢的準確性。"
      }
    ]
  },
{
    id: "vms-13",
    title: "Camera · Video Setting：影像屬性與鏡頭設定",
    category: "Camera Settings",
    categoryId: "gvvms",
    subgroupId: "camerasettings",
    tags: ["Video Setting", "Image Orientation", "Camera Lens"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-12", "vms-14"],
    sections: [
      {
        type: "text",
        content: "Video Setting 主要用來調整 Camera 畫面顯示效果與鏡頭相關設定，項目包含 Video Attribute、Image Orientation、Camera Lens。"
      },
      { type: "image", num: 1, label: "Video Setting：Video Attribute 與 Image Orientation" },
      {
        type: "list",
        title: "Video Attribute（影像屬性）",
        items: [
          "<strong>Brightness</strong> 亮度：調整後影響整體畫面明暗",
          "<strong>Contrast</strong> 對比：對比越高，亮暗差異越明顯；對比太低，畫面可能會灰灰的",
          "<strong>Saturation</strong> 飽和度：調整後影響顏色鮮豔程度",
          "<strong>Sharpness</strong> 銳利度：調太高可能讓邊緣變得很硬，甚至出現雜訊感",
          "<strong>Gamma</strong>：中間調亮度曲線，不是單純把整張畫面變亮或變暗，而是影響暗部、中間調與亮部之間的明暗分布"
        ]
      },
      {
        type: "text",
        content: "簡單記：Brightness 是整體亮度，Gamma 比較像調整灰階/中間調曲線。"
      },
      {
        type: "text",
        title: "Image Orientation（影像方向）",
        content: "常見包含 Rotate、Flip、Mirror。如果直接點選會連線至 Camera Web UI 端的設定，由 Camera 端先處理好畫面再送給 VMS；勾選 <code>Image Orientation By Software</code> 則改成由 VMS 端用軟體方式處理旋轉或翻轉。"
      },
      {
        type: "text",
        content: "實務上能在 Camera 端處理就盡量在 Camera 端處理，因為 VMS 端軟體處理會增加 VMS 負擔。"
      },
      { type: "image", num: 2, label: "Video Setting：Camera Lens 下拉選單" },
      {
        type: "text",
        title: "Camera Lens",
        content: "告訴 VMS 這支 Camera 使用什麼鏡頭類型。一般 Camera 預設為 <code>General</code>，通常不會有額外的預覽畫面或細部校正參數。如果選擇其他類型，例如 Wide Angle、Fisheye、IMV1 Panorama，畫面旁邊可能會多出一個三角形按鈕，提供更細部的參數調整與修正後畫面。如果是 GeoVision 自家特殊鏡頭產品（例如 Fisheye Camera），VMS 可能會自動辨識並預設為 Fisheye，且無法手動更改。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "能在 Camera 端處理畫面方向就盡量在 Camera 端做，別丟給 VMS 軟體處理；General 是一般鏡頭，特殊 Lens 才會有額外校正設定。"
      }
    ]
  },
{
    id: "vms-14",
    title: "Camera · Video Stream：Main / Sub Stream 串流設定",
    category: "Camera Settings",
    categoryId: "gvvms",
    subgroupId: "camerasettings",
    tags: ["Video Stream", "Codec", "GOP", "Bitrate"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-13", "vms-15", "vms-10"],
    sections: [
      {
        type: "text",
        content: "Video Stream 是設定 Camera 影像串流的地方，常見會分成 Main Stream（高解析度，適合錄影、大畫面觀看）與 Sub Stream（低解析度，適合多分割 Live View、降低 VMS 解碼負擔）。"
      },
      { type: "image", num: 1, label: "Video Stream 設定畫面：Codec / FPS / GOP / Bitrate / Resolution" },
      {
        type: "text",
        title: "Codec",
        content: "影像編碼與解碼方式，Camera 端先壓縮編碼後送出，VMS 端再解碼顯示或錄影。"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>MJPEG</strong>：每一張影格都是完整的靜態圖片（也就是每張都是 Key Frame），細節最清楚，但因為張張都是完整圖片，檔案與頻寬佔用量最大。",
          "<strong>H.264 / H.265</strong>：不是每張都存完整畫面，而是依 GOP 設定決定——例如 GOP 設 30，代表每 30 張影格中只有 1 張是完整的 Key Frame，其餘影格只記錄與前一張的差異，能大幅縮小頻寬與檔案佔比。"
        ]
      },
      {
        type: "text",
        content: "<strong>H.264 與 H.265 的差異在壓縮比</strong>：H.264 壓縮率較低，系統解碼所需效能也比較低；H.265 壓縮率較高（相近畫質下更省頻寬與儲存空間），但系統解碼所需效能也比較高，需要 Camera、VMS 與硬體解碼環境都支援。<strong>兩種格式目前都相當普及</strong>，不是「H.264 比較普及、H.265 比較少見」這種絕對關係，實際選用仍要看設備與案場需求。"
      },
      {
        type: "text",
        title: "FPS",
        content: "每秒影格數，越高畫面越順，但也越吃頻寬、儲存、VMS 解碼資源、CPU/GPU 負載。"
      },
      {
        type: "text",
        title: "GOP",
        content: "一組影格群組，代表每幾張影格中會有一張 Key Frame（概念見上方 Codec 說明）。GOP 越短，Key Frame 越頻繁，回放定位可能較方便，但資料量可能增加；GOP 越長，壓縮效率可能較好，但跳轉、回放或掉包恢復可能較不利。"
      },
      {
        type: "text",
        title: "Bitrate",
        content: "影像資料量，常見模式："
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>CBR（Constant Bitrate，固定位元率）</strong>：在設定的時間內強制維持固定的資料傳輸率，頻寬與儲存空間極易預測。缺點是遇到極度複雜或高速運動的畫面時，會因為位元率被限制住而出現馬賽克或模糊（殘影）。",
          "<strong>VBR（Variable Bitrate，可變位元率）</strong>：位元率隨畫面複雜度與動態即時調整——畫面靜止時位元率極低，畫面複雜或有大量動態（例如暴雨、樹葉晃動）時位元率會飆高。畫質最穩定，但也因此極難預估儲存空間與頻寬需求。",
          "<strong>Smart Stream（智慧串流／智慧壓縮）</strong>：結合自動場景分析的進階編碼機制。它不只是單純看畫面複雜度，而是透過演算法區分「背景環境」與「關鍵目標」兩種優先權：<ul style=\"margin-top:6px\"><li>環境變動（低優先權）：風吹樹搖、光線微調、無意義的背景雜訊，系統判定不重要，維持極低位元率，甚至拉長 I-Frame（關鍵影格）間隔或調高壓縮比。</li><li>物件變動（高優先權）：畫面出現人、車或特定移動物體（感興趣區域／ROI）時，系統會把頻寬與高解析度資源集中分配給該區域，確保人臉、車牌清晰。</li></ul>"
        ]
      },
      {
        type: "note",
        content: "實際的分區判斷邏輯與參數，各家廠商（GeoVision Smart Stream／Hikvision Smart Codec／Dahua Smart H.265+ 等）實作細節略有差異，但核心概念一致。"
      },
      {
        type: "text",
        title: "實務補充：GV-VMS 上實際能設定到什麼程度",
        content: "以我們公司的 Smart Stream 來說，理論上可以分別設定「靜態畫面（Static Scene）」與「動態畫面（Dynamic Scene）」各自要用多少傳輸率傳輸，再加上一個 Bitrate Reduction Level 控制整體壓低幅度。但實際在 <strong>GV-VMS V20 的 Camera Settings 裡，Smart Stream 只是一個開關（Enable / Disable）</strong>，沒有列出這些細部選項——要調整 Static Scene／Dynamic Scene／Bitrate Reduction Level，必須直接連進 <strong>Camera 自己的 Web UI</strong> 設定，不是在 VMS 裡調。下面這個畫面配置是同事在舊版（VMS v17／v18）上展示的，新版 VMS 介面已經沒有這幾個欄位："
      },
      { type: "image", num: 2, label: "Camera Web UI／舊版 VMS 的 Smart Stream 設定畫面（Static Scene / Dynamic Scene / Bitrate Reduction Level）" },
      {
        type: "table",
        headers: ["項目", "欄位"],
        rows: [
          ["Static Scene（靜態畫面）", "Quality"],
          ["Static Scene（靜態畫面）", "Max Bitrate"],
          ["Dynamic Scene（動態畫面）", "Quality"],
          ["Dynamic Scene（動態畫面）", "Max Bitrate"],
          ["Bitrate Reduction Level", "預設 0，可調範圍 5～250，數字越大代表壓低的位元率越多"]
        ]
      },
      {
        type: "text",
        title: "Resolution",
        content: "正常鏡頭只提供 16:9 選項，但 Fisheye 可能提供 5:4、4:3 等選項。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "MJPEG 張張都是完整圖片（Key Frame），最清楚也最吃頻寬；H.264／H.265 靠 GOP 控制多久才存一張完整畫面，兩者差在壓縮比（H.265 壓更小但解碼更吃效能），目前都很普及；CBR 頻寬穩但複雜畫面可能糊，VBR 畫質穩但頻寬難預估；Smart Stream 的細部設定（Static／Dynamic Scene）要去 Camera Web UI 調，VMS V20 只有開關。"
      }
    ]
  },
{
    id: "vms-15",
    title: "Camera · Audio Setting：音訊相關設定",
    category: "Camera Settings",
    categoryId: "gvvms",
    subgroupId: "camerasettings",
    tags: ["Audio Setting", "Wave Out", "Rec Audio"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-14", "vms-16"],
    sections: [
      {
        type: "text",
        content: "Audio Setting 是 Camera 音訊相關設定，常見項目包含 Audio Gain、Wave Out、Denoise、Rec Audio、By Sensitivity、Round-the-Clock Audio、Audio Format。"
      },
      { type: "image", num: 1, label: "Audio Setting 設定畫面" },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Audio Gain</strong>：調整 IP Camera 回傳到 VMS 的聲音音量增益。在舊版 VMS 中可以調整，新版 VMS 或某些設備狀態下可能呈現灰階代表無法調整",
          "<strong>Wave Out</strong>：不是 VMS 對 Camera 端喊話，而是決定是否讓該 IP Camera 在 VMS 裡具備播放聲音的功能。開啟後分割畫面上會出現 Wave Out 按鈕，按下可聽到 Camera 回傳到 VMS 的聲音，聲音大小與 Audio Gain 有關",
          "<strong>Denoise</strong>：降噪功能，可降低部分背景雜音，但不代表能完全消除所有噪音"
        ]
      },
      {
        type: "list",
        title: "Rec Audio（錄音功能，不是錄影）",
        items: [
          "<strong>By Sensitivity</strong>：依聲音靈敏度觸發錄音，Bar 越高靈敏度越高，觸發錄音所需的音量越小",
          "<strong>Round-the-Clock Audio</strong>：持續錄音，不依聲音大小觸發，而是持續記錄音訊"
        ]
      },
      {
        type: "text",
        title: "Audio Format",
        content: "常見有 16 kHz, 16 bit / 32 kHz, 16 bit。32 kHz 通常可以保留更多音訊細節，但資料量也可能較高。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Wave Out 是讓 VMS 播放 Camera 回傳聲音，不是喊話功能；Rec Audio 是錄音不是錄影，By Sensitivity 是依聲音靈敏度觸發。"
      }
    ]
  },
{
    id: "vms-16",
    title: "Camera · Abnormality：異常事件設定",
    category: "Camera Settings",
    categoryId: "gvvms",
    subgroupId: "camerasettings",
    tags: ["Abnormality", "I/O", "Invoke Alarm", "Notification"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-15", "vms-17"],
    sections: [
      {
        type: "text",
        content: "Abnormality 不是調整影像品質，而是設定 Camera 出問題時，系統要怎麼偵測、通知或觸發後續動作。常見項目包含 Network Time Out、Video Lost / Connection Lost（I/O / Invoke Alarm / Notification）、MessageBox Setting。"
      },
      { type: "image", num: 1, label: "Abnormality 設定畫面" },
      {
        type: "text",
        title: "Network Time Out",
        content: "是網路逾時判定時間，例如設定 45 秒，代表 GV-VMS 連續 45 秒無法與 Camera 通訊就會判定為斷線。時間設定越短，系統越快發現異常，但較容易因短暫網路波動誤判；設定越長，對波動容忍度較高，但異常發現時間較慢。"
      },
      {
        type: "note",
        title: "實務補充",
        content: "這項設定的意義是給網路環境不穩定的案場一個緩衝——有些地區的網路品質不好，Camera 三不五時會短暫斷線又自動恢復。如果沒有 Time Out 緩衝，VMS 可能每次短暫斷線就寫一筆 Log，導致 Event Log／System Log 被大量無意義的斷線紀錄灌爆。設定 Network Time Out，就是要求連續斷線超過指定秒數才真的算 Time Out、才寫紀錄，避免因為網路品質問題而狂寫 Log。"
      },
      {
        type: "list",
        title: "三種異常反應方式的差異",
        items: [
          "<strong>I/O</strong>：偏向外部設備動作，把 Camera 異常轉成實體動作（警示燈、蜂鳴器、Relay）",
          "<strong>Invoke Alarm</strong>：偏向系統內部警報流程，例如跳出警示、觸發警報聲",
          "<strong>Notification</strong>：偏向通知使用者知道發生異常，不直接控制外部設備"
        ]
      },
      {
        type: "text",
        title: "MessageBox Setting",
        content: "目前畫面中可看到 Network Congestion（網路壅塞）項目，當 GV-VMS 偵測到網路傳輸可能壅塞或異常時，可透過 Message Box 跳出提示。可能原因包含 Camera 數量太多、Bitrate 設定過高、網路頻寬不足、Switch 負載過重、封包延遲或遺失。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "I/O 讓外部設備動作，Invoke Alarm 觸發系統警報，Notification 通知有人要知道這件事——三者可以同時搭配使用。"
      }
    ]
  },
{
    id: "vms-17",
    title: "Camera · Record：錄影格式與幀率策略",
    category: "Camera Settings",
    categoryId: "gvvms",
    subgroupId: "camerasettings",
    tags: ["Record", "Recording codec", "Frame rate", "Privacy Mask"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-16", "vms-18", "vms-20", "vms-22"],
    sections: [
      {
        type: "text",
        content: "Record 設定主要包含 Recording codec format、Recording frame rate control，會影響錄影檔案格式、Playback 畫面呈現、錄影流暢度與儲存空間使用量。"
      },
      { type: "image", num: 1, label: "Record 設定畫面" },
      {
        type: "text",
        title: "Recording codec format：Standard vs GeoVision codec",
        content: "這個設定不只是相容性差異，它會影響 GV-VMS 軟體端處理過的畫面（例如 Privacy Mask 隱私遮罩），在 Playback 時是否被保留下來。"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Standard codec</strong>：Playback 時偏向還原原始影片。如果隱私遮罩是 VMS 軟體端處理（不是 Camera 本身輸出遮罩後畫面），選 Standard codec 時 Playback 可能會看到原始未遮罩畫面",
          "<strong>GeoVision codec</strong>：Playback 時會保留 GV-VMS 軟體端處理後的效果，例如 Privacy Mask 會被保留下來"
        ]
      },
      {
        type: "text",
        content: "實務上如果案場有隱私遮罩需求，或法規要求回放時也不能看到特定區域，就要特別注意這個設定——選錯可能導致遮罩在 Playback 時失效。"
      },
      {
        type: "text",
        title: "Recording frame rate control：Urgent Event vs General Event",
        content: "分成 Urgent Event（重要事件）跟 General Event（一般事件），各自可選 <code>Maximum record frame rate</code> 或 <code>Record key frame only</code>。"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Urgent Event</strong> 通常建議保留較完整的錄影資訊，設為 Maximum record frame rate：畫面流暢、細節完整，但檔案較大",
          "<strong>General Event</strong> 可設為 Record key frame only：節省儲存空間，但畫面細節較少，不適合需要細節還原的事件"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Standard 看原始，GeoVision 留處理；Maximum frame rate 錄得完整但佔空間，Key frame only 省空間但細節少。有隱私遮罩需求時要特別注意 codec 選項。"
      }
    ]
  },
{
    id: "vms-18",
    title: "Camera · Advanced：進階效能設定",
    category: "Camera Settings",
    categoryId: "gvvms",
    subgroupId: "camerasettings",
    tags: ["Advanced", "Caching", "On Demand Display"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-17", "vms-19"],
    sections: [
      {
        type: "text",
        content: "Advanced 設定主要影響 Live View 顯示效能、解碼負擔、多畫面觀看流暢度，包含 Caching、On Demand Display、Frame rate control for live view decoding、Set sub stream frame rate to all cameras。"
      },
      { type: "image", num: 1, label: "Advanced 設定畫面" },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Caching</strong>：Live View 解碼緩衝機制，概念類似 YouTube 進度條下方的灰色預載區——先保留一小段影像資料延後解碼，用一點延遲換取畫面顯示穩定。主要影響 Live View 顯示，不直接改變錄影檔本身",
          "<strong>On Demand Display</strong>：依照目前畫面顯示大小自動決定使用 Main Stream 或 Sub Stream。若顯示區域大於 Sub Stream 解析度的指定倍率（畫面中可見 1.2x），就切換成 Main Stream；反之用 Sub Stream 省效能",
          "<strong>Frame rate control for live view decoding</strong>：分 Main Stream / Sub Stream 各自設定 Maximum live-view frame rate（順但吃效能）或 Live-view key frame only（省效能但不夠順）",
          "<strong>Set sub stream frame rate to all cameras</strong>：快速統一所有 Camera 的 Sub Stream FPS，適合大量 Camera 案場一次性設定"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Caching 用延遲換穩定，On Demand Display 依畫面大小自動切串流；多 Camera 案場善用 Set sub stream frame rate to all cameras 一次設定省時間。"
      }
    ]
  },
{
    id: "vms-19",
    title: "Camera · POE Switch：遠端重啟",
    category: "Camera Settings",
    categoryId: "gvvms",
    subgroupId: "camerasettings",
    tags: ["POE Switch", "Reboot"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-18", "vms-11"],
    sections: [
      {
        type: "text",
        content: "POE Switch 頁籤主要是用來透過 POE Switch 管理 IP Camera，目前畫面中看到的功能是 <strong>Reboot IP Camera via POE Switch</strong>，可透過 GV-POE Switch 遠端重啟指定 IP Camera。"
      },
      { type: "image", num: 1, label: "POE Switch 設定畫面：Reboot IP Camera via POE Switch" },
      {
        type: "text",
        content: "這裡要注意：這個功能<strong>不是重啟整台 POE Switch</strong>，而是透過 POE Switch 對指定 Camera 執行重啟。畫面中可以設定 Network Adapter、Port、POE Switch ID、POE Switch Password。設定完成後，可以透過 <code>Scan Device</code> 搜尋可管理的設備，找到設備後就可以對指定 Camera 執行 <code>Reboot</code>。"
      },
      {
        type: "text",
        title: "2026/06/12 更新確認",
        content: "POE Switch 遠端 Reboot 的底層機制已確認為——當 Camera 處於異常狀態時，可以透過遠端連線至該 Camera 的 POE Switch（通常只有 APOE 型號支援），並對其 Port 斷電後上電重啟。不用到現場拔線或重新上電，就能遠端重啟單一 Camera。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "POE Reboot 本質是對指定 Port 斷電後上電，不是重啟整台 Switch；不用到現場就能遠端重啟單一異常 Camera。"
      }
    ]
  }
)