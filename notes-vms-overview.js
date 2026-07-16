/* notes-vms-overview.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-01",
    title: "GV-VMS 是什麼？",
    category: "VMS 總覽",
    categoryId: "gvvms",
    subgroupId: "overview",
    tags: ["VMS", "核心軟體"],
    updated: "2026-07-16",
    status: "ok",
    related: ["ipcam-1", "vms-05", "arch-1", "cms-1", "asmgr-1", "recorder-1", "vms-30"],

    // 參考文獻：GV-VMS Feature Guide V20，Chapter 3 Video Analysis，3.1 Local Face Recognition，p.14
    sections: [
      {
        type: "text",
        content: "GV-VMS 是 GeoVision 的 Video Management Software，是整個影像監控系統的核心軟體，可以理解成「監控系統的主控台」。"
      },
      { type: "spacer" },
      {
        type: "list",
        title: "主要負責",
        items: [
          "新增與管理 IP Camera",
          "Live View 即時監看",
          "Recording 錄影 / Playback 回放 / Backup 備份",
          "Event 事件處理、Motion Detection 位移偵測",
          "PVD / AI 事件整合、I/O 連動",
          "與 CMS 系統整合"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "實務理解",
        content: "IP Camera 負責提供影像來源，GV-VMS 負責集中管理 Camera，並處理即時監看、錄影、回放、備份、事件接收與告警連動等功能。"
      },
      {
        type: "text",
        content: "若 Camera 本身具備 AI 分析能力，多數 AI Event 會由 Camera 端先完成事件判斷，再將事件結果送回 VMS。VMS 主要負責接收事件、顯示 Event List、觸發錄影 / Popup / Alarm，並提供後續查詢與管理。"
      },
      {
        type: "flow",
        steps: [
          "Camera 提供影像 / 事件來源",
          "AI-capable Camera 可在 Camera 端判斷人形、車輛、人臉或區域事件",
          "VMS 接收事件結果",
          "VMS 負責錄影、彈窗、告警、事件紀錄與回放查詢"
        ]
      },
      {
        type: "note",
        title: "實務補充",
        content: "Face Detection 較特別：Camera 端可先做人臉偵測，GV-VMS V20 則可建立本機 Face Database，將 Camera 傳回的人臉資料進一步比對成 Face Recognition 結果。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Camera 偏向影像與事件來源，VMS 偏向集中管理與事件應用。AI Event 多由 Camera 端判斷，但 VMS 仍可負責事件設定、接收、查詢與部分軟體端分析。"
      }
    ]
  }
);