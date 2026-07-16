/* notes-systemconfig.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-30",
    title: "System Configure 總覽與進入方式",
    category: "System Configure",
    tags: ["System Configure", "總覽", "進入方式"],
    updated: "2026-06-16",
    related: ["vms-01", "vms-11", "vms-31", "vms-33", "vms-34", "vms-48"],
    body: `
      <p>System Configure 主要整理 GV-VMS 右上角 Configure → System Configure 內的系統層級設定，包含 General Setting、Startup、Set Position、Send Alerts Approach Setup、System Idle Protection Setting、Fast Key Lock Setup。</p>
      <p>這些設定大多不是單一 Camera 的設定，而是偏向「這台 GV-VMS 主機／平台本身要怎麼啟動、顯示、監控、通知、保護與限制操作」。</p>
      <div class="flow">
        <div class="step">Toolbar</div>
        <div class="arrow">↓</div>
        <div class="step">Configure</div>
        <div class="arrow">↓</div>
        <div class="step">System Configure</div>
      </div>
      ${img("vms-30", 1, "Configure 選單，System Configure 位置")}
      <p>它和 Camera Settings 不一樣：Camera Settings 比較偏單一 Camera，System Configure 比較偏整台 VMS 主機／系統行為。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>System Configure 不是在調單一 Camera，而是在決定這台 GV-VMS 主機本身如何啟動、顯示、監控、通知與保護。</span></div>
    `
  },
{
    id: "vms-31",
    title: "General Setting（一）：主機資訊、啟動延遲與 Service Mode",
    category: "System Configure",
    tags: ["General Setting", "Location Name", "Service Mode"],
    updated: "2026-06-16",
    related: ["vms-30", "vms-32"],
    body: `
      <p><strong>Location Name</strong> 是設定這台 GV-VMS 平台／Server 的顯示名稱。如果沒有特別修改，通常會顯示 Windows 電腦名稱（例如 <code>DESKTOP-XXXXXXX</code>）。</p>
      ${img("vms-31", 1, "General Setting：Location Name、Monitor Option 設定畫面")}
      <p><strong>Start Delay</strong> 是啟動 Monitoring 後，延遲指定秒數才開始 Recording——不是改 Camera 畫面延遲，而是按下 Start Monitoring 後不會立刻錄影，等設定秒數後才開始，用途是讓系統啟動監控後有一小段緩衝時間。</p>
      <p><strong>Service Mode</strong> 是比較重要的系統層級功能。一般模式下，GV-VMS 比較像普通桌面程式，需要等使用者登入 Windows 桌面後才執行；Service Mode 則是讓 GV-VMS 在 Windows 開機後以背景服務方式運作，即使 Windows 尚未登入桌面，VMS 仍可依照原本設定進行監控／錄影。</p>
      <p>例如無人值守案場：現場斷電 → 備用電源恢復 → VMS 主機重新開機 → Windows 停在登入畫面 → 即使沒有人登入 Windows，GV-VMS 仍可透過 Service Mode 在背景運作。要注意 Service Mode 不代表斷電中還能錄，前提仍然是主機、Camera、Switch／PoE Switch、網路與硬碟都已恢復正常。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>一般模式要登入 Windows，VMS 才像桌面程式一樣跑；Service Mode 是 Windows 開機後即使沒登入桌面，VMS 也能在背景跑監控服務。</span></div>
    `
  },
{
    id: "vms-32",
    title: "General Setting（二）：顯示、對講與 Zoom 自動化、離開行為",
    category: "System Configure",
    tags: ["Smooth Mode", "Talk Back", "Exit Option"],
    updated: "2026-06-16",
    related: ["vms-31", "vms-03"],
    body: `
      <p><strong>Smooth Mode</strong> 是讓 Live View 畫面顯示更平滑，偏向顯示效果，不代表錄影檔本身的 FPS 或畫質一定改變。</p>
      <p><strong>Talk Back Button</strong> 設定對講按鈕的操作方式：<code>Talk Back Toggle</code> 是按一下開啟、再按一下關閉，類似開關式操作；<code>Push to talk</code> 是按住才發話、放開就停止，概念像遊戲語音的按住講話。</p>
      <p><strong>Related Actions：Zoom Camera</strong><br>這一區是設定 Camera 被放大到 Zoom Window／Full Screen 時，VMS 要不要自動啟用某些功能：</p>
      <ul>
        <li><strong>Auto enable wave out</strong>：放大畫面時自動打開「聽聲音」（前提是 Camera 支援音訊、Camera Web UI Audio Input 已啟用、VMS Camera Audio Setting 相關功能有設定好）</li>
        <li><strong>Auto toggle talk back</strong>：放大畫面時自動打開「對講」——實務上要小心，如果案場環境不適合自動開 MIC，可能造成尷尬或誤操作</li>
        <li><strong>Auto switch PTZ Mapping</strong>：主要搭配 GV-Keyboard 實體控制鍵盤使用，啟用後可讓 PTZ 控制自動對應到目前被放大的 PTZ Camera；不開的話，GV-Keyboard 可能只會控制第一台可用的 PTZ Camera</li>
      </ul>
      ${img("vms-32", 1, "General Setting：Exit Option 下拉選單")}
      <p><strong>Exit Option</strong> 是設定離開 GV-VMS 後 Windows 要做什麼：<code>Auto Restart Windows</code>（離開後自動重開機）或 <code>Auto Shut down Windows</code>（離開後自動關機），比較適合監控主機、無人值守案場或固定工作站等特定需求。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Smooth Mode 只影響 UI 外觀；Toggle 是按一下開再按一下關，Push to talk 是按住才講話；Exit Option 是離開 VMS 後要不要順便重啟或關閉 Windows。</span></div>
    `
  },
{
    id: "vms-33",
    title: "Startup：啟動時要自動做什麼",
    category: "System Configure",
    tags: ["Startup", "Auto Monitoring", "GPU Decode"],
    updated: "2026-06-16",
    related: ["vms-30", "vms-36"],
    body: `
      <p>Startup 是設定 GV-VMS 啟動時要自動做哪些事情，包含介面風格、自動監控、Windows 開機後是否自動執行 VMS、是否啟動後縮到系統列、GPU Decode、Network 服務。</p>
      ${img("vms-33", 1, "Startup 設定畫面")}
      <p><strong>Show Style</strong> 只影響 UI 外觀，可選 Black Style（暗色）或 Light Style（亮色）。</p>
      <p><strong>Auto Monitoring</strong> 是設定 VMS 啟動後要自動進入哪一種 Monitoring 狀態：</p>
      ${img("vms-33", 2, "Auto Monitoring 下拉選單")}
      <ul>
        <li><strong>Monitor All</strong>：Camera + I/O 都開</li>
        <li><strong>Schedule Monitor</strong>：依照 Schedule 排程啟動 Monitoring——如果只希望特定 Camera 在指定時間監控，這裡就要選這個；<strong>要注意，Schedule 設了不代表自動生效，Startup 也要選 Schedule Monitor，VMS 才會依排程啟動監控</strong></li>
        <li><strong>I/O Monitoring</strong>：只開 I/O（讀卡機、門磁、警報輸入、Relay、Sensor 等），不等於 Camera 都錄影</li>
        <li><strong>Camera Monitoring</strong>：只開 Camera，不包含 I/O，會影響錄影、事件偵測與相關 Camera 功能</li>
      </ul>
      <p><strong>Auto Run when Windows Starts</strong> 是 Windows 啟動後自動執行 GV-VMS。要分清楚：Windows Login 是登入作業系統，GV-VMS Login 是登入 GV-VMS 軟體本身帳號——只有 Auto Run 的話，登入 Windows 後 VMS 會自動開啟，但 VMS 是否自動登入仍要看有沒有另外設定 VMS Auto Login。</p>
      <p><strong>Startup and Hide into System Tray</strong> 是 VMS 啟動後縮到 Windows 系統列，不直接顯示主畫面——程式有開但 UI 被藏起來。它不是 Service Mode：Hide into Tray 是已登入 Windows、VMS 開了但藏到系統列；Service Mode 是就算還沒登入 Windows，VMS 也能以服務方式在背景運作。</p>
      <p><strong>GPU Decode</strong> 是讓 GPU 協助影像解碼，分擔 CPU 負擔，可降低 CPU 負擔、提升多路 Live View 解碼能力，對高解析度、多畫面監控較有幫助，但效果仍取決於 GPU 型號、Driver、Codec、H.264/H.265 支援、串流數量、解析度與 FPS。</p>
      <p><strong>Network</strong> 這區塊與遠端服務／外部連線有關，例如 WebCam Server、Mobile Service、Remote ViewLog Service、Center V2、VSM、GV-Cloud、Backup Center，決定 VMS 啟動時要不要自動啟用這些服務。</p>
      <div class="memory-hook"><span class="hook-label">實務補充</span><span>Schedule 是依照 VMS 主機的 Windows 系統時間判斷，不是看使用者所在時間。例如測試 PC 是美西時區但人在台灣，排程測試時要用測試 PC 的時間去對，不能直接套用台灣時間。</span></div>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Auto Run 只負責自動開 VMS，不一定自動登入 VMS；Hide into Tray 是 VMS 有開但藏起來，Service Mode 是沒登入 Windows 也能跑。</span></div>
    `
  },
{
    id: "vms-34",
    title: "Set Position：VMS 視窗顯示位置與大小",
    category: "System Configure",
    tags: ["Set Position", "Panel Resolution"],
    updated: "2026-06-16",
    related: ["vms-30"],
    body: `
      <p>Set Position 是設定 GV-VMS 主畫面要顯示在哪個螢幕、從哪個座標開始，以及主面板解析度大小。它不是 Camera 解析度，也不是錄影解析度，單純是管「VMS 視窗在哪裡、開多大」。</p>
      ${img("vms-34", 1, "Set Position 設定畫面")}
      <ul>
        <li><strong>Select Monitor</strong>：如果電腦有多台螢幕，可以指定 VMS 主畫面要顯示在哪一台</li>
        <li><strong>Position</strong>：VMS 主面板左上角的起始座標，例如 <code>0, 0</code> 通常代表從主螢幕左上角開始顯示；多螢幕環境下座標會依 Windows 的螢幕排列而不同</li>
        <li><strong>Panel Resolution</strong>：VMS 主面板顯示大小，例如 <code>1920 x 1080</code> 代表以 Full HD 大小顯示——這是 VMS 介面顯示解析度，不是 Camera 畫質，也不是錄影解析度</li>
      </ul>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Set Position 管的是視窗在哪裡、開多大，跟 Camera 畫質完全無關。</span></div>
    `
  },
{
    id: "vms-35",
    title: "Send Alerts Approach Setup：事件通知與觸發設定",
    category: "System Configure",
    tags: ["Send Alerts", "Notify", "HTTP Alert"],
    updated: "2026-06-16",
    related: ["vms-25", "vms-27"],
    body: `
      <p>Send Alerts Approach Setup 是設定事件發生後 GV-VMS 要做什麼處理。它不是設定事件怎麼被判斷，而是設定「事件已經發生了，接下來 VMS 要怎麼通知人、觸發設備，或把事件送給外部系統」。</p>
      ${img("vms-35", 1, "Send Alerts Approach Setup（Event Action）設定畫面")}
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Event 是發生什麼事，Action 是發生後要怎麼處理。</span></div>
      <p><strong>Event</strong> 是選擇觸發來源，可能包含 Camera Motion、Video Lost／Connection Lost、Disk Full、Disk Lost、Record Error、I/O Input Triggered、I/O Module Lost、Face ID、Intrusion、Counter、Loitering、PVD Motion、Crowd Detection、Cross Line、Leave Area、Enter Area、Abnormal Audio Detection、Abnormal Temperature Detection、Absence Event Detection——不只 Camera 事件，也包含 AI／Video Analysis 事件、I/O 事件、系統異常事件、硬碟／錄影異常事件、遠端連線或其他系統事件。</p>
      ${img("vms-35", 2, "Event 下拉選單，完整觸發來源清單")}
      <p><strong>Action</strong> 是事件發生後的處理方式，常見有 Notify 與 Send HTTP Alert：</p>
      <ul>
        <li><strong>Notify</strong>：使用 VMS 內建通知或設備反應方式，可搭配 Send E-Mail、Mobile、Telegram、LINE、Invoke Alarm、I/O Output Triggered、IP Speaker</li>
        <li><strong>Send HTTP Alert</strong>：透過 HTTP 將事件通知送到外部系統，常見用途是客戶自家平台、第三方監控中心、客製化告警系統、Webhook、外部 API、大型案場中控系統</li>
      </ul>
      ${img("vms-35", 3, "Action 下拉選單：Notify / Send HTTP Alert")}
      <p><strong>Interval</strong> 是通知間隔（通知冷卻時間），例如 <code>5 min 0 sec</code> 代表同類事件通知中間至少間隔 5 分鐘，用途是避免 Motion 或其他事件太頻繁時通知一直洗版。<strong>Camera</strong> 是設定這條 Alert 規則要套用到哪些 Camera，可選 All Cameras 或 Select Camera，例如只想讓門口 Camera 的 Motion 發通知，其他 Camera 不通知。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Notify 是 VMS 內建通知，Send HTTP Alert 是把事件丟給外部系統。</span></div>
    `
  },
{
    id: "vms-36",
    title: "System Idle Protection Setting 與 Fast Key Lock Setup",
    category: "System Configure",
    tags: ["System Idle Protection", "Fast Key Lock"],
    updated: "2026-06-16",
    related: ["vms-33"],
    body: `
      <p><strong>System Idle Protection Setting</strong> 是設定 GV-VMS 閒置一段時間後自動執行保護動作，偏向安全控管、防止高權限帳號閒置、防止忘記啟動監控、自動恢復部分 Startup 網路服務。</p>
      ${img("vms-36", 1, "System Idle Protection Setting 設定畫面")}
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>System Idle Protection 是閒置保護 + 防呆。</span></div>
      <p><strong>System Idle over</strong> 是設定閒置多久後觸發保護動作，例如 <code>30 sec</code> 代表閒置 30 秒後執行下方勾選的動作。</p>
      <p><strong>Auto Logout or Switch to Startup Login User if available</strong>：沒有設定 Startup Login User 時，閒置後自動登出目前帳號；有設定時，閒置後切換回 Startup Login User。用途是避免 Supervisor／PowerUser 等高權限帳號被留在現場無人看管。</p>
      ${img("vms-36", 2, "Auto Logout 勾選後，Supervisor / PowerUser 下拉選單")}
      <p><strong>Supervisor / PowerUser</strong> 是選擇哪些權限等級要套用閒置保護，例如選 Supervisor + PowerUser，兩種較高權限帳號都會套用保護。</p>
      <p><strong>Auto Monitoring（閒置保護內）</strong> 是閒置後自動啟動 Monitoring（Monitor All／Schedule Monitor／I/O Monitoring／Camera Monitoring 四選一），用途是避免操作員忘記按 Start Monitoring，導致系統沒有進入監控／錄影狀態。<strong>Auto Network Service of Startup Setting</strong> 則會連動 Startup 裡的 Network 設定，閒置保護觸發時自動啟用 Startup 裡預先勾好的 Network Service（例如 WebCam Server、Mobile Service、Center V2、VSM、GV-Cloud、Backup Center 等）。</p>
      ${img("vms-36", 3, "Auto Monitoring 下拉選單：Monitor All / Schedule Monitor / I/O Monitoring / Camera Monitoring")}
      <p style="margin-top:16px;padding-top:12px;border-top:1px solid var(--border)"><strong>Fast Key Lock Setup</strong> 是設定 GV-VMS 內建快捷鍵是否啟用。它不是自訂快捷鍵、不是把某個鍵改成另一個鍵，而是針對既有快捷鍵做啟用／停用管理，分類可能包含 General、View Log、PTZ Control、Network。用途是避免操作員誤按快捷鍵，限制部分功能被快捷鍵觸發，防止誤按 Exit、Logout、Snapshot、PTZ Control 等功能。</p>
      ${img("vms-36", 4, "Fast Key Lock Setup 設定畫面：General 頁籤的快捷鍵清單")}
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Fast Key Lock Setup 不是改快捷鍵，是決定這些快捷鍵能不能用。</span></div>
    `
  },
{
    id: "vms-48",
    title: "Schedule Edit 總覽：建立排程與套用到日曆",
    category: "System Configure",
    tags: ["Schedule Edit", "Add", "Plan"],
    updated: "2026-07-01",
    related: ["vms-30", "vms-49"],
    body: `
      <p>Schedule Edit 是 GV-VMS 中用來建立與管理排程的功能。排程可以用來控制指定日期、星期或每月固定日期內，Camera、AVP、I/O Monitoring、Server、PTZ Object Tracking 等功能是否啟用。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Schedule Edit 不是單純設定錄影，而是用來決定「什麼時間要啟用哪些功能」——排程負責「何時啟用」，各功能本身的設定則負責「啟用後要做什麼」。</span></div>
      ${img("vms-48", 1, "Schedule Edit 進入畫面：左側排程列表、右側日曆")}
      <p>進入 Schedule Edit 後，右上方會有 <strong>Add</strong> 按鈕。點擊 Add 後，系統會跳出輸入排程名稱的視窗，輸入名稱後即可建立一個新的排程 Plan。建立完成後，左側列表會顯示剛剛新增的排程名稱。</p>
      ${img("vms-48", 2, "點擊 Add 後，輸入排程名稱（Please enter plan name）")}
      <p>建立排程後，可以在左側列表中<strong>用滑鼠左鍵按住排程名稱，並拖曳到右側日曆</strong>，把這個排程套用到指定日期。</p>
      ${imgPlaceholder("vms-48", 3, "把排程從左側列表拖曳到右側日曆（拖曳中）")}
      ${imgPlaceholder("vms-48", 4, "拖曳完成後，日曆上該日期顯示已套用的排程")}
      <p style="font-size:12px;color:var(--text-tertiary)">實務注意：Plan 只是排程名稱與模板，建立 Plan 不代表功能已經生效。建立 Plan 後，仍需要把排程套用到日期（拖曳到日曆，或用下一篇的 Schedule 功能列表），並且進入 Application 設定要啟用的功能，整個流程才算完整。</p>
    `
  },
{
    id: "vms-49",
    title: "Schedule 功能列表：Edit Special Day / Weekly / Monthly / Setup Wizard",
    category: "System Configure",
    tags: ["Edit Special Day", "Edit Weekly", "Edit Monthly", "Setup Wizard"],
    updated: "2026-07-01",
    related: ["vms-48", "vms-50"],
    body: `
      <p>除了直接拖曳排程到日曆，Schedule 內還提供幾種批次套用日期的方式：Edit Special Day、Edit Weekly、Edit Monthly、Setup Wizard、Export、Import。</p>
      ${imgPlaceholder("vms-49", 1, "Schedule 功能列表選單")}
      <ul>
        <li><strong>Edit Special Day</strong>：指定某一天為特殊日期，並套用指定排程。常用於假日、臨時休假日、特殊營業日或臨時維護日。</li>
        <li><strong>Edit Weekly</strong>：指定每週的哪些星期要套用排程，例如每週一到週五套用平日排程，每週六、日套用假日排程。</li>
        <li><strong>Edit Monthly</strong>：指定每個月的固定日期套用排程，例如每月 1 號固定套用某個排程。</li>
      </ul>
      ${img("vms-49", 2, "Edit Special Day：指定日期（Date）套用排程（Plan）")}
      ${img("vms-49", 3, "Edit Weekly：勾選星期（SUN~SAT）套用指定 Plan")}
      ${img("vms-49", 4, "Edit Monthly：指定每月第幾天（Day）套用指定 Plan")}
      <p><strong>Setup Wizard</strong> 是排程設定精靈，用比較直觀的方式建立排程設定，基本上是把 Special Day、Weekly、Monthly 三種設定方式整合在一起——不過 <strong>一次只能選擇其中一種</strong>（Weekly／Special Day／Monthly 三選一），不是同時設定。</p>
      ${img("vms-49", 5, "Setup Wizard：Select schedule to add，Weekly / Special Day / Monthly 三選一")}
      <p><strong>Export / Import</strong>：Export 可將排程設定匯出，Import 可將既有排程設定匯入，適合用於備份排程，或將相同排程套用到其他 VMS 環境。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Weekly 適合固定每週排程，Special Day 適合特殊日期，Monthly 適合每月固定日期；Setup Wizard 只是把這三種包成精靈介面，一次仍然只能選一種。</span></div>
    `
  },
{
    id: "vms-50",
    title: "Schedule Edit · Application：介面總覽與 Camera 設定",
    category: "System Configure",
    tags: ["Application", "Camera", "Include", "Exclude"],
    updated: "2026-07-01",
    related: ["vms-49", "vms-51", "vms-20"],
    body: `
      <p>雙擊排程名稱後，會進入這個排程的 <strong>Application</strong> 設定介面，用來設定這個排程要套用哪些功能，以及各功能在時間軸上的啟用區間。Application 內主要分為五項設定：Camera、AVP、I/O Monitoring、Server、PTZ Object Tracking。</p>
      <p>畫面左上方由左到右的 Icon 分別是：<strong>Include</strong>、<strong>Exclude</strong>、<strong>Add</strong>、<strong>Erase</strong>、<strong>Advanced Setting</strong>。Include／Exclude／Add／Erase 用來編輯時間軸上的排程區間；<strong>Advanced Setting</strong> 可以控制 Camera／AVP／I/O Monitoring／Server／PTZ Object Tracking 這五項要不要顯示或可設定——如果在 Advanced Setting 裡把某一項取消勾選，該項目就無法在這個排程中進行相關設定。</p>
      <p><strong>Camera</strong> 分類可設定指定 Camera（可以是單一裝置，也可以套用到全部 Camera）在排程時間內要執行哪些功能：</p>
      <ul>
        <li><strong>Round the Clock Recording</strong>：一般連續錄影（RTC）</li>
        <li><strong>Motion Detection Recording</strong>：Motion Detection 觸發錄影</li>
        <li><strong>Alarm Trigger</strong>：事件告警相關設定</li>
        <li><strong>Enable WebCam Server</strong>：允許 WebCam Server 功能依排程啟用</li>
        <li><strong>Enable ERM</strong>：目前尚未教到，先保留、後續再補充</li>
      </ul>
      ${img("vms-50", 1, "Camera 分類的 Application 清單：Round the Clock Recording / Motion Detection Recording / Alarm Trigger / Enable WebCam Server / Enable ERM")}
      <p>設定後，部分功能會需要再進一步進行詳細設定，例如 Round the Clock Recording 需要指定 Mode（例如 General Event）與 Streaming（例如 Main and Sub Stream）。</p>
      ${img("vms-50", 2, "點開 Round the Clock Recording 後的詳細設定：Mode / Streaming")}
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Advanced Setting 決定 Application 裡「顯示哪幾項」，Include/Exclude/Add/Erase 決定時間軸上的排程區間；Camera 分類設定的是「這個時段這台 Camera 要做什麼」。</span></div>
    `
  },
{
    id: "vms-51",
    title: "Schedule Edit · Application：AVP / I/O Monitoring / Server / PTZ Object Tracking",
    category: "System Configure",
    tags: ["AVP", "I/O Monitoring", "Server", "PTZ Object Tracking"],
    updated: "2026-07-01",
    related: ["vms-50"],
    body: `
      <p><strong>AVP</strong> 分類主要與影像處理／影像分析相關功能有關，目前先記錄兩項：<strong>Privacy Mask</strong>、<strong>Advanced Scene Change</strong>。這兩項需要搭配 <strong>Video Process</strong> 中對應的設定，排程才會有實際作用——也就是說，Schedule 負責「何時啟用」，Video Process 負責「功能本身如何設定」，兩邊要一起設才會生效。</p>
      ${img("vms-51", 1, "AVP 分類：Privacy Mask / Advanced Scene Change / IPC VA (Face Detection) / IPC AI")}
      <p><strong>I/O Monitoring</strong> 用來設定是否依照排程啟用 I/O 監控。如果排程中啟用了 I/O Monitoring，VMS 可在指定時段內監控 I/O Device 的狀態與事件；但如果系統尚未加入 I/O Device，或 I/O 功能尚未設定完成，即使排程中有這項，也不一定會有實際效果。</p>
      ${img("vms-51", 2, "I/O Monitoring 分類")}
      <p><strong>Server</strong> 分類目前尚未教到，畫面中可看到的項目包含 Connect to CenterV2、Connect to VSM、Start Mobile Server，先理解為與 VMS 連線到其他伺服器或啟用行動服務相關的排程設定，後續再補充細節。</p>
      ${img("vms-51", 3, "Server 分類：Connect to CenterV2 / Connect to VSM / Start Mobile Server")}
      <p><strong>PTZ Object Tracking</strong> 用來設定是否依照排程啟用 PTZ Camera 的物件追蹤功能，需要搭配支援 PTZ Object Tracking 的 Camera 或相關設定才會生效。</p>
      ${img("vms-51", 4, "PTZ Object Tracking 分類")}
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>AVP 的 Privacy Mask／Advanced Scene Change 要搭配 Video Process 設定才生效；I/O Monitoring 要有實際加入的 I/O Device；PTZ Object Tracking 要 Camera 支援才有用——排程設定容易跟功能本身的設定搞混，Schedule 只負責「何時啟用」，不是取代功能本身的詳細設定。</span></div>
    `
  }
);