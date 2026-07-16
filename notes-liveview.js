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
    title: "Live View：Zoom / Scan / Popup Window 差異",
    category: "Live View",
    categoryId: "gvvms",
    subgroupId: "liveview",
    tags: ["Zoom Window", "Scan Window", "Popup Window"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-02", "hw-1", "vms-32"],
    sections: [
      {
        type: "text",
        content: "Live View 左側 Layout 中的 Windows 功能是特殊顯示容器，不是一般 Camera：Zoom Window 放大顯示、Scan Window 輪播顯示、Popup Window 事件觸發顯示。"
      },
      {
        type: "text",
        title: "Zoom Window",
        content: "專門顯示放大影像，可承接手動 Zoom 或事件 Popup。沒有設定 Zoom Window 時，按下 Zoom 通常直接全螢幕；有設定時，畫面會投影到 Zoom Window。若搭配 Camera Popup Setting，事件發生時可能會把目前 Zoom Window 內的畫面搶走，事件結束後不一定自動回到原本畫面。"
      },
      {
        type: "text",
        title: "Scan Window",
        content: "輪播 Camera 影像的視窗格，可將多支 Camera 加入同一個視窗依序輪流顯示。<code>Scan Interval</code> 決定每支 Camera 停留幾秒（例如 5 sec），<code>Default Scan Interval</code> 可快速套用到清單中所有 Camera。"
      },
      {
        type: "text",
        title: "Popup Window",
        content: "事件觸發專用視窗，需先透過右鍵新增/設定才會出現在 Windows 清單中，平常可以是空白狀態，事件發生後才顯示對應 Camera 畫面。<code>Dwell Time</code> 管停留多久，<code>Interrupt Interval</code> 管多個事件連續觸發時下一個 Popup 畫面切入前的間隔，避免事件太密集時畫面一直跳來跳去。"
      },
      {
        type: "text",
        title: "三者與 Camera Popup Setting 的關係（實測補充）",
        content: "實測發現，如果 Camera Popup Setting 有設定事件觸發，即使 Layout 沒有預先放 Camera 畫面，事件觸發時 GV-VMS 仍可能把該 Camera 畫面顯示出來；若沒設定 Popup Window 或 Zoom Window，事件畫面可能直接佔用目前 Live View 顯示區。可以理解為：<strong>Camera Popup Setting 決定要不要彈，Popup / Zoom Window 或空 Layout 只決定彈到哪裡。</strong>"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Zoom 放大、Scan 輪播、Popup 事件顯示——三者是顯示位置的容器，真正決定要不要觸發顯示的是 Camera Popup Setting。"
      }
    ]
  }
);