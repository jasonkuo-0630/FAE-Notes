/* notes-systemlog.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去
   System Log 分類獨立於 Playback 之外，因為 System Log 與 Advanced System Log
   入口、用途、查詢能力差異很大，分開寫比較不會讓讀者搞混兩者。 */
notes.push(
{
    id: "vms-systemlog-01",
    title: "Advanced System Log 與 Event 查詢",
    category: "System Log",
    categoryId: "gvvms",
    subgroupId: "systemlog",
    tags: ["Advanced System Log", "Event List Query"],
    updated: "2026-07-23",
    status: "ok",
    related: ["vms-playback-02", "vms-playback-05"],

    // 內容來源：內部驗收整理 + 同事確認的入口路徑。
    sections: [
      {
        type: "text",
        title: "進入路徑",
        content: "ViewLog → Toolbar → Tools → Advanced System Log。<br>要注意這跟基本版 System Log 是不同入口（System Log 的入口是 Home → Toolbar → Tools → System Log），兩者用途與查詢能力也不一樣，容易搞混。"
      },
      { type: "spacer" },
      {
        type: "text",
        content: "Advanced System Log 偏向查系統層級與操作層級紀錄，例如 Login／Logout、Start Monitor／Stop Monitor、新增／移除 Camera、修改 Camera Setting、修改 Motion Detection 設定、Save as AVI／Merge、系統異常、Camera 連線／斷線。主要介面是 Advanced Log Browser，可依時間區間、裝置、事件類型、POS、I/O、Playback、Backup 等條件查詢，也支援 Filter、Backup、Print，並可匯出成 .csv / .html / .pdf。"
      },
      {
        type: "text",
        content: "實測發現：Motion／PVD 這類高頻影像事件，不一定會逐筆寫入 Advanced System Log。原因是這類事件數量可能非常大，若全部寫進 System Log，資料量會爆炸。"
      },
      {
        type: "text",
        content: "若要查 Motion／PVD／AI Event，應優先查看：Playback Timeline、Event List、Display Timeline、WebCam Event List Query。"
      },
      {
        type: "note",
        title: "補充",
        content: "WebCam 的 Event List Query 介面與 Advanced System Log 類似，但可查 AI Event，因此可以查到 PVD。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Advanced System Log = 查系統操作，入口在 ViewLog，適合進階查詢與事後分析；Event List Query = 查影像事件／AI Event；Playback Timeline = 看錄影與事件標記。基本版 System Log 是另一個獨立入口，查詢能力較簡單，見另一篇筆記。"
      }
    ]
  }
);