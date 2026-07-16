/* notes-liveview.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-02",
    title: "Live View：介面區域、Layout 與 Camera 工具列",
    category: "Live View",
    tags: ["Live View", "Layout", "Monitor", "Bookmark"],
    updated: "2026-06-12",
    related: ["vms-03"],
    body: `
      <p>Live View 不只是看即時畫面，也牽涉到 Camera 顯示、監控狀態、事件觸發、錄影設定與 Popup 顯示。畫面大致分三區：左側功能區（Layout / Windows / E-Map / Camera List / I/O Device 等）、中間 Layout 影像顯示區、右側 Event List 瀑布流。</p>
      <p><strong>將 Camera 加入 Layout</strong><br>從左側 Camera List 拖拉 Camera 到中間分割畫面即可顯示。但 Camera 被拖到 Layout 中<strong>不代表一定正在錄影</strong>，錄影是否啟用仍要看 Monitor 狀態與 Record Setting。</p>
      <p><strong>Camera 畫面工具列（板手 Icon）</strong></p>
      <ul>
        <li><strong>Monitor</strong>：啟用或停止該 Camera 的監控狀態，讓 Camera 正式進入監控流程（Live View、Recording、Motion Detection、Event Detection、I/O 觸發都需要 Monitor 開啟才會正常運作）</li>
        <li><strong>Add to Bookmark</strong>：在目前錄影時間點建立書籤，方便之後到 Playback 快速查找。需要在 Monitor / Recording 狀態下才會出現</li>
        <li><strong>Properties</strong>：調整顯示屬性，包含 Show Caption（是否顯示 Camera 名稱）與 Keep Image Ratio（是否保持原始比例，關閉會拉伸變形但填滿格子，開啟維持比例但可能出現黑邊）</li>
        <li><strong>Close</strong>：只是關閉目前 Layout 中的顯示畫面，不是刪除 Camera，也不一定停止該 Camera 的 Monitoring / Recording</li>
      </ul>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>左邊選功能與裝置，中間看 Camera 畫面，右邊看事件瀑布流；Monitor 不等於單純錄影，但兩者通常綁在一起運作。</span></div>
    `
  },
{
    id: "vms-03",
    title: "Live View：Zoom / Scan / Popup Window 差異",
    category: "Live View",
    tags: ["Zoom Window", "Scan Window", "Popup Window"],
    updated: "2026-06-12",
    related: ["vms-02", "hw-1", "vms-32"],
    body: `
      <p>Live View 左側 Layout 中的 Windows 功能是特殊顯示容器，不是一般 Camera：Zoom Window 放大顯示、Scan Window 輪播顯示、Popup Window 事件觸發顯示。</p>
      <p><strong>Zoom Window</strong><br>專門顯示放大影像，可承接手動 Zoom 或事件 Popup。沒有設定 Zoom Window 時，按下 Zoom 通常直接全螢幕；有設定時，畫面會投影到 Zoom Window。若搭配 Camera Popup Setting，事件發生時可能會把目前 Zoom Window 內的畫面搶走，事件結束後不一定自動回到原本畫面。</p>
      <p><strong>Scan Window</strong><br>輪播 Camera 影像的視窗格，可將多支 Camera 加入同一個視窗依序輪流顯示。<code>Scan Interval</code> 決定每支 Camera 停留幾秒（例如 5 sec），<code>Default Scan Interval</code> 可快速套用到清單中所有 Camera。</p>
      <p><strong>Popup Window</strong><br>事件觸發專用視窗，需先透過右鍵新增/設定才會出現在 Windows 清單中，平常可以是空白狀態，事件發生後才顯示對應 Camera 畫面。<code>Dwell Time</code> 管停留多久，<code>Interrupt Interval</code> 管多個事件連續觸發時下一個 Popup 畫面切入前的間隔，避免事件太密集時畫面一直跳來跳去。</p>
      <p><strong>三者與 Camera Popup Setting 的關係（實測補充）</strong><br>實測發現，如果 Camera Popup Setting 有設定事件觸發，即使 Layout 沒有預先放 Camera 畫面，事件觸發時 GV-VMS 仍可能把該 Camera 畫面顯示出來；若沒設定 Popup Window 或 Zoom Window，事件畫面可能直接佔用目前 Live View 顯示區。可以理解為：<strong>Camera Popup Setting 決定要不要彈，Popup / Zoom Window 或空 Layout 只決定彈到哪裡。</strong></p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Zoom 放大、Scan 輪播、Popup 事件顯示——三者是顯示位置的容器，真正決定要不要觸發顯示的是 Camera Popup Setting。</span></div>
    `
  }
);