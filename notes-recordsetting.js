/* notes-recordsetting.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-20",
    title: "Record Setting 入口與整體錄影設定",
    category: "Record Setting",
    categoryId: "gvvms",
    subgroupId: "recordsetting",
    tags: ["Record Setting", "入口", "整體設定"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-21", "vms-17", "vms-42", "vms-47", "vms-50"],
    sections: [
      {
        type: "text",
        content: "Record Setting 可以從右上角 Toolbar 進入。"
      },
      {
        type: "flow",
        steps: ["Toolbar", "Configure", "System Configure", "Record Setting"]
      },
      { type: "image", num: 1, label: "Configure 選單路徑，Record Setting 位置" },
      {
        type: "text",
        content: "Record Setting 主要分成兩個區域：上半部是整體錄影設定，下半部是每支 Camera 的個別錄影設定（見下一篇筆記）。"
      },
      { type: "image", num: 2, label: "Record Setting 整體設定畫面" },
      {
        type: "list",
        title: "整體錄影設定常見項目",
        items: [
          "<strong>Max Video Clip</strong>：每個錄影檔案的最大長度（可設定 1~5 min）。長時間錄影不會存成一個巨大檔案，而是依此長度切成多個片段。RTC 因為持續錄影，最容易看到檔案錄滿這個長度。",
          "<strong>Recycle</strong>：硬碟空間低於門檻時，自動回收（清除）較舊的錄影資料以釋放空間。",
          "<strong>Register Event</strong>：勾選後，Recycle 發生時會把這個行為寫進 Log。",
          "<strong>Storyline</strong>：把錄影片段整理／輸出成故事線影片時使用的設定，包含 Keep Image Ratio、Resolution、Path、Add Copyright Text（比較像畫面文字標記，不等於 Digital Watermark 的防竄改驗證）、Position。"
        ]
      },
      { type: "image", num: 3, label: "Storyline 設定彈窗" },
      {
        type: "list",
        title: "資料庫與加密相關",
        items: [
          "<strong>Database Folder</strong>：GV-VMS 儲存 Camera DB／錄影索引資料的位置，不是影片本體，可能包含哪支 Camera 有錄影、檔案名稱、起訖時間、事件資料等，Playback／Timeline 查詢就是靠這些索引。不建議隨意更改路徑，否則可能造成 Playback 查不到錄影。",
          "<strong>Use Digital Watermark Protection</strong>：數位浮水印保護，不是可見的 Logo，而是隱藏在錄影資料中的驗證資訊，用來驗證影片是否被竄改。",
          "<strong>Enable AES Encryption</strong>：錄影檔加密，保護內容不被未授權者直接開啟讀取。"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "錄影檔是影像本體，Database Folder 是查詢用的索引；Digital Watermark 管有沒有被改，AES Encryption 管能不能被讀取。"
      }
    ]
  },
{
    id: "vms-21",
    title: "Camera 個別錄影設定：Record Type / Storage / Stream",
    category: "Record Setting",
    categoryId: "gvvms",
    subgroupId: "recordsetting",
    tags: ["Record Type", "Storage", "Stream"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-22", "vms-10", "vms-20", "vms-23", "vms-24"],
    sections: [
      {
        type: "text",
        content: "Record Setting 下半部可以針對每支 Camera 設定錄影方式，常見欄位包含 Record Type、Storage、Stream、Advanced、Motion（Advanced 見下一篇筆記）。"
      },
      { type: "image", num: 1, label: "Record Type 下拉選單：Disable / Event Detection / Round-the-clock" },
      {
        type: "list",
        title: "Record Type",
        items: [
          "<strong>Disable</strong>：不進行影像錄影（Audio 是否仍有其他行為，需依 Audio Setting 與實際狀態判斷）",
          "<strong>Event Detection</strong>：有事件才錄影，例如 Motion Detection、I/O、AI Event、PVD Motion",
          "<strong>Round-the-clock（RTC）</strong>：持續錄影，不管有沒有 Motion 都會持續保存影像，但事件仍可被標記在 Timeline 或 Event List 中"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "RTC 是持續錄影，事件不是決定有沒有影片，而是決定有沒有事件標記。"
      },
      {
        type: "text",
        content: "<strong>Storage</strong> 決定該 Camera 錄影要寫到哪個儲存群組（例如 <code>Storage 1</code>）。Storage 清單要怎麼建、路徑指到哪裡，是 Add Recording Location 跟 Automatically Assign Partition to Camera 這兩個功能共同管理的（詳見 Record Setting 分類底下的專篇），不是這裡的下拉選單能新增的。"
      },
      { type: "image", num: 2, label: "Stream 下拉選單：Main / Sub / Main and Sub Stream" },
      {
        type: "list",
        title: "Stream",
        items: [
          "<strong>Main Stream</strong>：高解析度、高畫質，適合正式回放、放大看細節、保存證據",
          "<strong>Sub Stream</strong>：低解析度、低流量，適合節省空間、降低資源負擔、快速預覽",
          "<strong>Main and Sub Stream</strong>：兩者都錄，可保留高畫質也能依需求切換串流，但需要更多儲存空間"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Main 看細節，Sub 省資源，Main + Sub 都錄最完整，但最吃空間。"
      }
    ]
  },
{
    id: "vms-22",
    title: "Camera · Advanced：SD 卡回補、Pre/Post-Record 與事件錄影幀率",
    category: "Record Setting",
    categoryId: "gvvms",
    subgroupId: "recordsetting",
    tags: ["Advanced", "Pre-Record", "Post-Rec"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-17", "vms-21"],
    sections: [
      {
        type: "text",
        content: "點開 Camera 欄位中的 Advanced，可設定更細部的錄影行為。"
      },
      { type: "image", num: 1, label: "Advanced 彈窗：Pre-Record 設定" },
      {
        type: "text",
        title: "Sync recording from camera SD card when reconnected",
        content: "有些 Camera 本身具備 SD Card，斷線時會把影像暫存在自己的 SD Card 中。勾選這個選項後，Camera 重新連回 GV-VMS 時，系統會嘗試取回斷線期間的錄影資料並補回 Playback，這類補回來的錄影在 Timeline 上可能會以特殊顏色顯示。要注意不是所有 Camera 都支援，需要型號、SD Card、設定與 VMS 功能都支援才行。"
      },
      {
        type: "text",
        content: "<strong>Pre-Record</strong> 是事件發生前的預錄，讓事件前因更完整（例如人走進畫面前幾秒、門被打開前幾秒）。<strong>Post-Rec</strong> 是事件結束後繼續錄一段時間，避免事件剛結束系統就立刻停止錄影（例如 Motion 停止後再多錄 3 秒）。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Pre-Record 補事件發生前，Post-Rec 補事件結束後。"
      },
      { type: "image", num: 2, label: "Advanced 彈窗：Record Type 改為 RTC 後多出 Video record frame rate" },
      {
        type: "text",
        title: "Urgent Event / General Event",
        content: "這是事件錄影的幀率策略，會套用到 Camera Settings → Record 中的設定。一般可以理解成：Urgent Event 是重要事件，偏向完整錄影（例如 Maximum record frame rate）；General Event 是一般事件，偏向節省空間（例如 Record key frame only）。實際結果要看 Camera Settings → Record 裡 Urgent／General 的 frame rate control 設定。"
      },
      {
        type: "text",
        content: "當 Record Type 設為 RTC 時，Advanced 中會多出 <code>Video record frame rate</code>，因為 RTC 是持續錄影，系統需要知道要套用哪一種幀率策略（同樣是 Urgent Event／General Event 二選一）。"
      },
      { type: "image", num: 3, label: "Advanced 彈窗：Post-Rec 與 Pre-Rec 都勾選" },
      {
        type: "callout",
        label: "記憶點",
        content: "Urgent Event 比較完整，General Event 比較省空間。"
      }
    ]
  },
{
    id: "vms-23",
    title: "Add Recording Location：建立錄影儲存位置",
    category: "Record Setting",
    categoryId: "gvvms",
    subgroupId: "recordsetting",
    tags: ["Add Recording Location", "Storage", "Keep Days"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-24", "vms-21"],
    sections: [
      {
        type: "text",
        content: "Add Recording Location 是<strong>手動</strong>設定錄影儲存位置的地方，可以自己指定哪些路徑屬於哪個 Storage。跟自動分配（見下一篇）比起來，這裡彈性大很多："
      },
      {
        type: "list",
        title: "",
        items: [
          "資料夾名稱不一定要叫 <code>Record</code>，你想取 <code>Data</code>、<code>AI</code> 都可以",
          "Storage 編號也不用照磁碟代號排，例如 <code>Storage 1 = D:\\Data</code>、<code>Storage 2 = C:\\AI</code>，順序完全自己決定"
        ]
      },
      { type: "image", num: 1, label: "Add Recording Location 設定畫面" },
      {
        type: "list",
        title: "常見欄位",
        items: [
          "<strong>Storage / Path</strong>：Storage 是錄影儲存群組，Path 是實際錄影檔存放路徑",
          "<strong>Total Space / Available Space</strong>：該儲存位置總容量／目前可用空間",
          "<strong>Power on hour</strong>：硬碟使用時數資訊，可大致判斷硬碟已運作多久，不是錄影規則本身",
          "<strong>Keep Days</strong>：希望錄影保留幾天以內（例如 30 days），但不是絕對保證",
          "<strong>Enlarge Recycle Threshold</strong>：硬碟空間回收門檻（例如 32 GB），當可用空間低於此門檻時系統會開始回收舊錄影"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Keep Days 是希望保留多久，Recycle Threshold 是空間不足時的底線，兩者衝突時空間門檻優先——即使設定保留 30 天，只要硬碟空間低於門檻，系統仍會優先回收舊資料。"
      },
      {
        type: "note",
        title: "實測補充",
        content: "<strong>同一個磁碟分割區只能設一個錄影路徑</strong>，沒辦法在同一顆硬碟裡切出兩個 Storage（例如同時設 <code>D:\\A</code> 跟 <code>D:\\B</code> 兩個 Storage 是不行的）。而且這裡設完路徑<strong>不會自動幫你分配 Camera</strong>，每支 Camera 要用哪個 Storage，得自己在 Camera 個別錄影設定的 Storage 欄位手動指定。這點跟下一篇的 Automatically Assign Partition to Camera 剛好互補，兩者其實共用同一份 Storage 清單，細節見下一篇。"
      }
    ]
  },
{
    id: "vms-24",
    title: "Automatically Assign Partition to Camera：自動分配錄影分區",
    category: "Record Setting",
    categoryId: "gvvms",
    subgroupId: "recordsetting",
    tags: ["Automatically Assign Partition", "多硬碟"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-23", "vms-21"],
    sections: [
      {
        type: "text",
        content: "Automatically Assign Partition to Camera 是一站式的自動分配方式：打開後系統會偵測目前電腦上有哪些可用的儲存磁碟，列成清單讓你勾選要拿來錄影的磁碟。勾選完按 OK，GV-VMS 會照清單順序自動在每顆磁碟建立預設的 <code>Record</code> 資料夾（例如 <code>Storage 1 = C:\\Record</code>、<code>Storage 2 = D:\\Record</code>），並把 Camera 清單平均分配到這幾個 Storage。"
      },
      { type: "image", num: 1, label: "Automatically Assign Partition to Camera 設定畫面" },
      {
        type: "note",
        title: "實測補充（重點）",
        content: "這個功能跟 Add Recording Location 不是各玩各的，而是<strong>共用同一份 Storage 清單</strong>——差別在於誰負責「路徑」、誰負責「分配」："
      },
      {
        type: "list",
        title: "",
        items: [
          "如果你完全沒動過 Add Recording Location，直接打開這裡勾磁碟按 OK，系統會用預設的 <code>Record</code> 資料夾名稱建路徑，同時把 Camera 平均分配好，一次到位。",
          "但如果你<strong>已經先用 Add Recording Location 手動改過路徑</strong>（例如把 Storage 1 改成 <code>D:\\Data</code>），這時候回頭打開 Automatically Assign Partition to Camera，會看到 Storage 清單<strong>已經同步顯示你剛剛設定的自訂路徑</strong>，不會被打回預設的 <code>Record</code>。按 OK 之後，系統一樣會執行「把 Camera 平均分配進去」，但<strong>不會把路徑改回預設值</strong>——也就是說，這個 OK 鍵實際做的事只有「重新分配 Camera」，路徑本身完全尊重你之前手動設定的結果。"
        ]
      },
      {
        type: "note",
        title: "簡單說",
        content: "Add Recording Location 負責回答「Storage 要指到哪個路徑」，Automatically Assign Partition to Camera 負責回答「Camera 要怎麼分配進這些 Storage」。兩者共用同一張 Storage 清單表，只是各自改動表裡不同的欄位，不是誰先誰後的兩個步驟。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "路徑歸 Add Recording Location 管，Camera 分配歸 Automatically Assign Partition to Camera 管；就算改過自訂路徑，回來按這個功能的 OK 也只會重新分配 Camera，不會把路徑洗回預設的 Record 資料夾。"
      }
    ]
  }
);