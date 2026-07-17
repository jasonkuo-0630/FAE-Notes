/* notes-liveview.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-02",
    title: "Live View：介面區域、Layout 與 Camera 工具列",
    category: "Live View",
    categoryId: "gvvms",
    subgroupId: "liveview",
    tags: ["Live View", "Layout", "Monitor", "Bookmark"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-03"],

    // 參考文獻：GV-VMS Quick Guide V20
    // Chapter 2 Getting Started，2.2 Accessing Camera Live View / 2.3 Start Monitoring，p.8~9
    // Chapter 4 Live View，4.1 Arranging Live View Layouts / 4.2 Functions on the Live View，p.15~17
    sections: [
      {
        type: "text",
        content: "Live View 不只是看即時畫面，也牽涉到 Camera 顯示、監控狀態、事件觸發、錄影設定與 Popup 顯示。<br>畫面大致分三區：左側功能區（Layout / Windows / E-Map / Camera List / I/O Device 等）、中間 Layout 影像顯示區、右側 Event List 瀑布流。"
      },
      { type: "spacer" },
      {
        type: "text",
        title:"Live View 介面",
        content: "左側為功能區（Layout / Windows / E-Map / Camera List / I/O Device 等）、中間為 Layout 影像顯示區、右側為 Event List 瀑布流。"
      },
      { type: "image", num: 1, label: "Live View 介面" },
      {
        type: "note",
        title: "實務補充",
        content: "可以點擊左側功能區與右側瀑布流的箭頭 Icon 隱藏兩側欄位，只保留中間 Layout 來顯示 Camera 的影像畫面。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "將 Camera 加入 Layout",
        content: "從左側 Camera List 拖拉 Camera 到中間分割畫面即可顯示。<br>但 Camera 被拖到 Layout 中<strong>不代表一定正在錄影</strong>，錄影是否啟用仍要看 Monitor 狀態與 Record Setting。"
      },
      { type: "image", num: 2, label: "拖曳 Camera 至 Live View Layout 示意圖" },
      { type: "image", num: 3, label: "Camera 加入至 Live View Layout示意圖" },
      {
        type: "note",
        title: "實務提醒",
        content: "Camera 拖入 Layout 只代表可顯示 Live View，不代表已進入監控 / 錄影流程；Recording、Video Analysis 與 I/O Applications 需啟用 Monitor 後才會運作。"
      },
      { type: "spacer" },
      {
        type: "list",
        title: "Camera Live View Tools 選單",
        items: [
          "<strong>Monitor</strong>：啟用或停止該 Camera 的監控狀態。Camera 加入 Layout 後可觀看 Live View，但 Recording、Video Analysis 與 I/O Applications 等監控相關功能，需要 Start Monitoring 後才會正式啟用",
          "<strong>Add to Bookmark</strong>：在目前錄影時間點建立書籤，方便之後到 Playback 快速查找。<strong>需要在 Monitor / Recording 狀態下才會出現</strong>",
          "<strong>Properties</strong>：調整顯示屬性，包含 Show Caption（是否顯示 Camera 名稱）與 Keep Image Ratio（是否保持影像原始比例，關閉會拉伸變形但填滿格子，開啟維持比例但可能出現黑邊）",
          "<strong>Close</strong>：將 Camera 從目前 Layout Grid 移除，只是關閉該格的 Live View 顯示；不會刪除 Camera，也不等於停止該 Camera 的 Monitoring / Recording"
        ]
      },
      { type: "image", num: 4, label: "Camera Live View Tools 選單" },
      { type: "spacer" },
      {
        type: "text",
        title: "Add to Bookmark 介面",
        content: "只有在該 Channel 正在錄影時，Camera Live View Tools 才會出現 Add to Bookmark。此功能可在目前影像時間點建立書籤，之後可在 ViewLog / Playback 中快速定位該事件時間點。"
      },
      {
        type: "note",
        title: "實務補充",
        content: "實測時發現 Add to Bookmark 會將該片段設置為 Never-Recycle。"
      },
      { type: "image", num: 5, label: "Add to Bookmark 介面" },
      { type: "spacer" },
      {
        type: "text",
        title: "Properties 介面",
        content: "調整影像屬性"
      },
      { type: "image", num: 6, label: "Properties 介面" },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "左邊選功能與裝置，中間看 Camera 畫面，右邊看事件瀑布流；Monitor 不等於單純錄影，但兩者通常綁在一起運作。"
      }
    ]
  },
{
    id: "vms-03",
    title: "Live View：Zoom / Scan / Popup Window 介紹",
    category: "Live View",
    categoryId: "gvvms",
    subgroupId: "liveview",
    tags: ["Zoom Window", "Scan Window", "Popup Window"],
    updated: "2026-07-17",
    status: "ok",
    related: ["vms-02", "vms-32"],

    // 參考文獻：GV-VMS Quick Guide V20，Chapter 4 Live View，4.2 Functions on the Live View，4.2.1 Zoom Window / 4.2.2 Scan Window / 4.2.3 Popup Window，p.17-19；
    // GV-VMS User's Manual V17，Chapter 1 Configuring Main System，1.10.1 Popping up Live View，p.52
    sections: [
      {
        type: "text",
        content: "Live View 左側 Layout 中的 Windows 是特殊顯示容器，不是一般 Camera Channel。<br>Zoom Window 用於放大顯示、Scan Window 用於多台 Camera 輪播、Popup Window 用於事件觸發時顯示指定 Camera 畫面。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Zoom Window",
        content: "Zoom Window 是指定一個 Layout 分割畫面作為放大顯示區。<br>一般情況下，Camera Live View 右上角的 Zoom 會切換到全螢幕；若 Layout 中已放入 Zoom Window，按下 Zoom 後畫面會顯示到 Zoom Window，而不改變原本整體 Layout。"
      },
      { type: "image", num: 1, label: "Zoom Window 示意圖" },
      { type: "spacer" },
      {
        type: "text",
        title: "不指定 Zoom Window 的畫面表現",
        content: "不指定 Zoom Window 時，點擊 Camera Live View 右上角的 Zoom 會直接佔滿全螢幕。"
      },
      { type: "image", num: 2, label: "不指定 Zoom Window 時的畫面呈現" },
      { type: "spacer" },
      {
        type: "text",
        title: "指定 Zoom Window 的畫面表現",
        content: "指定 Zoom Window 時，點擊 Camera Live View 右上角的 Zoom 後畫面會顯示到 Zoom Window，不會改變原本整體 Layout。"
      },
      { type: "image", num: 3, label: "指定 Zoom Window 時的畫面呈現" },
      {
        type:"note",
        title:"Zoom Window 實務補充",
        content:"Zoom Window 的畫面左上角 Camera 名稱會多一個<code>+</code>。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Scan Window",
        content: "Scan Window 是用來輪播多台 Camera 的顯示容器。<br>可將多支 Camera 加入同一個 Scan Window，系統會依清單順序輪流顯示。"
      },
      { type: "image", num: 4, label: "Scan Window 示意圖" },
      {
        type:"note",
        title:"Scan Window 實務補充",
        content:"Scan Window 的畫面左上角 Camera 名稱會多一個<code>@</code>。"
      },
      { type: "spacer" },
      {
        type:"list",
        title: "Scan Window 設定介面",
        items: [
          "<strong>Default Scan Interval</strong>：決定每支 Camera 顯示幾秒，也可套用相同間隔到所有 Camera。",
          "<strong>Show Caption</strong>：決定是否顯示 Camera 資訊以及設定其字體大小。",
          "<strong>Keep Image Ratio</strong>：選擇是否保持影像原始畫面比例。"
        ] 
      },
      { type: "image", num: 5, label: "Scan Window 設定介面" },
      { type: "spacer" },
      {
        type: "text",
        title: "Popup Window",
        content: "Popup Window 是事件觸發用的顯示容器，可指定某個 Layout 分割畫面專門顯示 Popup 事件影像。<br>官方流程是先建立另一個 Live View Layout，可選擇套用到指定 Monitor，再新增 Camera Popup Window 並拖曳到該 Layout 中。事件觸發時，指定 Camera 的 Live View 會顯示在這個 Popup Window 中。"
      },
      { type: "image", num: 6, label: "Popup Window 示意圖" },
      {
        type:"note",
        title:"Popup Window 實務補充",
        content:"Popup Window 的畫面左上角 Camera 名稱會多一個<code>!</code>。"
      },
      { type: "spacer" },
      {
        type:"list",
        title: "Popup Window 設定介面",
        items: [
          "<strong>Dwell Time</strong>：事件觸發後，Popup 畫面停留多久。",
          "<strong>Interrupt Interval</strong>：多個事件連續觸發時，下一個 Popup 畫面切進來前的間隔。",
          "<strong>Select the events you want to pop up</strong>：哪些事件類型、哪些 Camera 觸發後要顯示在這個 Popup Window。",
          "<strong>Input Invoke</strong>：例如門磁、紅外線感測器、按鈕、I/O Box Input 被觸發時，可以指定某支 Camera 畫面顯示在 Popup Window。"
        ] 
      },
      { type: "image", num: 7, label: "Popup Window 設定介面" },
      { type: "spacer" },
      {
        type: "text",
        title: "Popup Window 內設定與 System Configure 的 Camera Popup Setting 差異",
        content: "Popup Window 內的 Camera Popup Setting 與 System Configure 裡的 Camera Popup Setting 名稱相近，設定介面也很像，但兩者是分開設定，彼此不共用。<br>Popup Window 內的 Camera Popup Setting 是針對該 Popup Window 容器設定事件條件，事件觸發後畫面會顯示在指定的 Popup Window 分割畫面中。<br>System Configure 裡的 Camera Popup Setting 則是主系統的 Camera Popup 規則；實測上，若未在 Layout 中指定 Zoom Window，事件觸發時會以單分割方式直接佔滿主顯示器畫面；若有指定 Zoom Window，事件畫面會顯示到 Zoom Window。"
      },
      {
        type:"note",
        title:"實務理解",
        content:"Popup Window / Camera Popup Setting 都需要對應事件成立才會觸發，而事件要成立通常需要相關 Monitoring 開啟。"
      },
      {
        type: "note",
        title: "易混淆觀念釐清",
        content: "兩個地方都叫 Camera Popup Setting，但作用範圍不同：Popup Window 內的是綁定指定 Popup Window；System Configure 內的是主系統 Popup 規則。兩者設定分開，互不干擾。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Zoom Window 是放大顯示區，Scan Window 是輪播顯示區，Popup Window 是事件專用顯示區。Popup Window 決定事件畫面顯示位置；Camera Popup Setting 則設定事件彈窗規則，兩者設定介面相近但彼此獨立。"
      }
    ]
  }
);