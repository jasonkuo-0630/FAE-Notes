/* notes-troubleshooting.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去
   這是 Troubleshooting / FAE 排查分類的第一個檔案，內容多來自實測/驗收經驗，
   跟手冊逐頁對照的 GV-VMS 功能筆記性質不同，所以參考來源多半是「內容來源」而非「參考文獻」。 */
notes.push(
{
    id: "ts-01",
    title: "IP Device 前置準備：雙網卡環境下的網段設定",
    category: "Troubleshooting",
    categoryId: "gvvms",
    subgroupId: "troubleshooting",
    tags: ["網段設定", "雙網卡", "測試環境前置準備"],
    updated: "2026-07-14",
    status: "ok",
    related: [],

    // 內容來源：GV-GVD4910 驗收測試實務經驗整理，非官方手冊內容。
    sections: [
      {
        type: "text",
        content: "拿到新的 IP Device 時，設備出廠 IP 或是上一位使用者更改的 IP 不一定符合測試機當前所在的網段，如果沒有先處理好網路環境，掃描或連線階段就會卡關。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "常見環境背景",
        content: "測試機通常會有兩張網卡：內網卡（接公司外網／內部網路）與獨立網卡（只用來連接 IP Device）。如果 IP Device 的 IP 跟獨立網卡目前的網段對不上，測試前就得先讓兩邊網段一致——方法是修改獨立網卡的網段，或是改 IP Device 本身的 IP (但基本上也是需要先連線至該 IP Device 才能修改)。"
      },
      { type: "spacer" },
      {
        type: "list",
        title: "建議作法",
        items: [
          "把獨立網卡的 IP 網段改成跟 IP Device 一致",
          "改完網段後，把該網卡 <strong>Disable 再 Enable</strong> 一次，確保設定真的套用",
          "把內網卡的外接網路線<strong>拔掉</strong>，避免同時存在兩張可通外網的網卡造成路由判斷混亂"
        ]
      },
      {
        type: "note",
        title: "為什麼要這樣做",
        content: "如果 IP 位址改完沒有 Disable/Enable，系統有時候還是會沿用舊的網路設定快取，導致後面的操作看起來像沒改成功。而內網卡沒拔線的話，容易出現 <strong>IP Device Utility 掃描不到裝置</strong>，或是 <strong>IP Device Web 介面打不開</strong>這類「明明設定是對的，就是連不上」的狀況——本質上是網路路由選錯了介面卡，不是 IP Device 本身有問題。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "雙網卡環境下，先讓獨立網卡跟 IP Device 網段一致 → Disable/Enable 該網卡 → 拔掉內網卡外接網路線，三步驟做完再開始掃描或加入設備，能省掉一堆「明明設定沒錯却連不上」的排查時間。"
      }
    ]
  }
);