/* notes-pos.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-pos-01",
    title: "POS 整合基礎：Text Sender / Data Capture / POS S/W Capture",
    category: "POS 整合",
    categoryId: "gvvms",
    subgroupId: "pos",
    tags: ["POS", "Text Sender", "Data Capture", "POS Software Capture"],
    updated: "2026-07-21",
    status: "draft",
    related: [],

    // 參考文獻：GV-POS Text Sender 產品頁 / Datasheet，retrieve transaction data from POS device under the same LAN
    // 參考文獻：GV-POS S/W Capture 產品頁 / Graphic Mode POS Integration，Windows-based POS、EMF / raw data、RS-232 / TCP/IP
    // 參考文獻：GV-Data Capture V3.1 產品頁 / User Manual，through wiring or network、POS / Cash Register 與收據印表機資料擷取
    sections: [
      {
        type: "text",
        content: "POS 就是收銀系統。<br>VMS 平常只會看影像，不知道客人買了什麼——POS 整合的目的，就是把收銀機的交易資料送進 GV-VMS，讓交易文字疊加在 Live View 與錄影畫面上，之後查錄影時可以同時對照影像跟交易內容。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "三種方式，差在 POS 機願意怎麼交出資料",
        content: "每種 POS 給資料的方式不一樣，所以才會有三種整合工具。差別不是誰功能比較高級，而是<strong>你的 POS 機能用哪種方式把交易資料交出來</strong>：能輸出文字檔、能不能裝軟體，還是完全不給檔案只能印收據。"
      },
      {
        type: "list",
        title: "選用邏輯（依序問三個問題）",
        items: [
          "<strong>POS 會不會輸出文字檔？</strong>會的話用 <strong>GV-POS Text Sender</strong>。POS 自己會產生 TXT / INI / JNL 或 raw text files 這類文字紀錄，可以想成 POS 已經把小抄寫好了，Text Sender 只是去把小抄讀出來、送給 VMS。",
          "<strong>POS 能不能安裝軟體？</strong>如果 POS 是 Windows 電腦、可以裝軟體，但交易資料不是乾淨的文字檔，而是比較像列印畫面的圖形化資料（Graphic Mode / EMF）或其他 raw unprocessed data，就可用 <strong>GV-POS S/W Capture</strong>。它是軟體直接安裝在 POS 電腦裡，擷取 POS 正在產生的交易 / 列印資料。",
          "<strong>POS 只能接印表機、不能裝軟體、也沒有檔案？</strong>那就用 <strong>GV-Data Capture</strong>。它是硬體，接在 POS 跟收據印表機 / 發票機中間，把 POS 原本要送去印表機列印的內容，複製一份送給 VMS。"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "GV-POS Text Sender",
        content: "GV-POS Text Sender 是軟體整合方式，主要從 POS 產生的文字檔取得交易資料，例如 TXT、INI、JNL 或其他 raw text files，再透過網路連線傳送給 GV-VMS。通常需要 POS 與 GV-VMS 在同一個 LAN，讓 GV-VMS / Text Sender 可透過 File Share 或 Network Drive 存取 POS 交易檔案。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "GV-POS S/W Capture",
        content: "GV-POS S/W Capture 是軟體整合方式，適合 Windows-based POS。若 POS 的交易資料不是單純文字檔，而是 Graphic Mode、EMF 或其他 raw unprocessed data，可在 POS 機上安裝 GV-POS S/W Capture，直接擷取 POS 的交易 / 列印資料，再透過 RS-232 或 TCP/IP 傳送到 GV-VMS。"
      },
      {
        type: "note",
        title: "與 Text Sender 的差異",
        content: "Text Sender 是讀 POS 已經產生好的文字檔；S/W Capture 則是軟體常駐在 POS 電腦裡，直接擷取 POS 產生的交易 / 列印資料。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "GV-Data Capture",
        content: "GV-Data Capture 是硬體整合設備，通常接在 POS / Cash Register 與收據印表機之間，擷取 POS 原本要送給印表機的交易文字資料，再送到 GV-VMS。適合不方便在 POS 上裝軟體、POS 沒有輸出文字檔，或 POS 是透過 Serial / Parallel 方式輸出列印資料的環境。"
      },
      {
        type: "note",
        title: "Data Capture 的白話理解",
        content: "POS 沒有主動給 VMS 資料，所以 Data Capture 站在 POS 跟印表機中間，把原本要印出來的內容擷取下來，再另外送給 VMS。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "連線方式：不是三者都用同一套 COM / IP 邏輯",
        content: "三種 POS 整合方式都能把交易資料送進 GV-VMS，但連線邏輯不完全一樣，不建議直接理解成像 I/O Box 那樣單純分成「實體線路 / IP」兩種模式。比較好的理解是：Text Sender 偏向讀取同一 LAN 內 POS 產生的文字檔；S/W Capture 是安裝在 Windows POS 上，再透過 RS-232 或 TCP/IP 傳送交易資料；Data Capture 則是硬體擷取設備，可透過實體接線或網路架構將 POS 資料整合到 VMS。"
      },
      {
        type: "list",
        title: "三者連線方式比較",
        items: [
          "<strong>GV-POS Text Sender</strong>：主要透過同一個 LAN 取得 POS 產生的交易文字檔，例如 File Share / Network Drive。它比較像「讀檔案」，不是典型的 COM 線路接收。",
          "<strong>GV-POS S/W Capture</strong>：安裝在 Windows-based POS 上，擷取交易 / 列印資料後，可透過 RS-232 serial cable 或 TCP/IP connection 傳送到 GV-VMS。",
          "<strong>GV-Data Capture</strong>：硬體設備，通常接在 POS 與收據印表機 / 發票機之間擷取資料；依型號與架構不同，可透過實體接線或網路方式與 GV-VMS 整合。"
        ]
      },
      {
        type: "note",
        title: "實務理解",
        content: "POS 整合不要只問「能不能走 IP」，而是要先確認 POS 機資料怎麼出來：是產生文字檔、可以裝軟體擷取，還是只能從印表機線路中間抓資料。資料來源確認後，才決定使用 Text Sender、S/W Capture 或 Data Capture。"
      },
      { type: "spacer" },
      {
        type: "note",
        title: "授權與硬體補充",
        content: "GV-POS Text Sender 與 GV-POS S/W Capture 屬於軟體整合方式，需搭配對應的 GV-USB Dongle / POS Port 授權；GV-Data Capture 則是硬體設備，授權概念主要跟硬體本身有關，可以簡單記成「Data Capture 是買機器，另外兩個是靠軟體，所以要看授權 / Dongle」。"
      },
      {
        type: "note",
        title: "設定原則",
        content: "通訊參數要以 POS 機實際輸出規格為準，GV-VMS / GV-Data Capture / GV-POS S/W Capture 端要保持一致，包含 Baud Rate、Data Bits、Parity、Stop Bits、COM Port、TCP/IP Port、Password。可以想成「POS 講中文，VMS 也要用中文聽」——只要有一邊的通訊參數對不上，VMS 收到的資料就可能變亂碼，或整個收不到。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Text Sender = 讀 POS 寫好的文字檔；S/W Capture = 軟體安裝在 POS 電腦裡抓列印 / 交易資料；Data Capture = 硬體接在 POS 跟印表機中間擷取資料。選哪一種，先看 POS 機能不能吐文字檔、能不能裝軟體，以及資料要從檔案、軟體還是印表機線路取得。"
      }
    ]
  },
{
    id: "vms-pos-02",
    title: "POS Text Sender 加入方式",
    category: "POS 整合",
    categoryId: "gvvms",
    subgroupId: "pos",
    tags: ["POS", "Text Sender", "File Source", "TCP/IP"],
    updated: "2026-07-22",
    status: "draft",
    related: ["vms-pos-01"],

    // 參考文獻：GV-POS Text Sender 產品頁，retrieve transaction data from POS device under the same LAN / file sharing / superimposed on live view and recordings
    // 參考文獻：GV-POS Text Sender 產品頁，POS Text Sender Dongle 1 / 2 / 4 / 8 / 12 / 16 / 32 ports
    // 實務補充：以下操作流程依公司測試環境與同事說明整理
    sections: [
      {
        type: "text",
        content: "GV-POS Text Sender 是軟體方式的 POS 整合工具，主要用來讀取 POS 產生的交易文字檔，並將交易文字送到 GV-VMS，讓 POS 文字可以疊加在指定 Camera 的 Live View 與錄影畫面上。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "使用前準備",
        content: "先從 GeoVision 官網下載並安裝 GV-POS Text Sender，並插上具有 POS Text Sender 授權的 GV-USB Dongle。<br>實務上若 VMS 已經開啟，插入 Dongle 後建議重新啟動 GV-VMS，避免授權狀態沒有被正確讀取。"
      },
      {
        type: "note",
        title: "授權提醒",
        content: "GV-POS Text Sender 屬於軟體整合方式，需要對應的 POS Text Sender / POS Port 授權。若 VMS 端沒有授權，設定 POS TextSender Filter 時可能跳出授權警告，甚至強制退出設定。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Monitor Source Type 設定",
        content: "開啟 GV-POS Text Sender 後，點擊 <code>New</code> 新增一筆來源，Monitor Source Type 選擇 <strong>File</strong>。<br>File 代表 Text Sender 會監控指定文字檔，當文字檔被寫入並存檔後，Text Sender 就會讀取該次資料並送到 GV-VMS。"
      },
      { type: "image", num: 1, label: "Monitor Source Type 列表" },
      { type: "spacer" },
      {
        type: "text",
        title: "Text Sender Configure 介面",
      },
      { type: "image", num: 2, label: "Text Sender Configure 介面" },
      {
        type: "list",
        title: "Text Sender 主要設定",
        items: [
          "<strong>Printer Type：TCP/IP Port</strong>：使用 TCP/IP 方式將 Text Sender 資料送到 GV-VMS。選擇 TCP/IP 後，COM Port 欄位會自動灰階。",
          "<strong>File Path</strong>：指定要監控的文字檔路徑。只要該檔案被寫入並存檔，Text Sender 就會抓取一次資料。",
          "<strong>POS Index</strong>：指定此來源對應的 POS 編號，例如 POS1。VMS 端也要設定相同 POS Device / Index。"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "TCP Port Setting 介面",
        content: "設定 Text Sender 使用的 Device Port 與 Password。此 Port 與 Password 需與 VMS 端 POS Device Setup 保持一致。"
      },
      { type: "image", num: 3, label: "TCP Port Setting 設定介面" },
      { type: "spacer" },
      {
        type: "note",
        title: "實務補充",
        content: "Monitor Source Type 下方可能還有 Internet、OPOS Printer Driver、Infogenesis 等選項，但公司目前測試 Text Sender 主要使用 File。<br>其他選項可先視為特定 POS 架構或舊整合方式，初學階段先掌握 File 即可。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "等待 VMS 連線",
        content: "Text Sender 設定完成並按下 Start 後，列表會顯示連線狀態。<br>若 VMS 端尚未完成 POS Device Setup，狀態會顯示 <strong>Wait Connect</strong>；等 VMS 端設定完成並連上後，狀態會變成 <strong>Connected</strong>。"
      },
      { type: "image", num: 4, label: "Text Sender 等待連線" },
      { type: "spacer" },
      {
        type: "note",
        title: "執行狀態",
        content: "Text Sender 按下 Start 後會在背景執行，實務上可能自動縮到工作列 / 系統匣。若要修改設定，需先回到 Text Sender 視窗停止或修改對應項目。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "GV-VMS 端設定位置",
        content: "回到 GV-VMS，從右上角選單進入 <strong>Accessories → POS Device Setup</strong>，新增 POS Device。<br>VMS 端設定需與 Text Sender 端保持一致，才能成功接收 POS 交易文字。"
      },
      { type: "image", num: 6, label: "GV-VMS POS Device Setup 設定介面" },
      { type: "spacer" },
      {
        type: "list",
        title: "VMS POS Device Setup 主要設定",
        items: [
          "<strong>Printer Type：TCP/IP Port</strong>：需與 Text Sender 端相同。若 Text Sender 使用 TCP/IP，VMS 端也要選 TCP/IP Port。",
          "<strong>IP Address or Domain Name</strong>：若 Text Sender 與 GV-VMS 在同一台電腦，可使用 <code>127.0.0.1</code>；若在不同電腦，則填入 Text Sender 所在電腦的 IP。",
          "<strong>Device Port</strong>：需與 Text Sender 的 TCP Port Setting 相同，例如 4000。",
          "<strong>Password</strong>：需與 Text Sender 的 TCP Port Setting 相同。",
          "<strong>Mapping Camera</strong>：指定 POS 文字要疊加到哪一台 Camera 畫面上。",
          "<strong>Filter Setting：POSTextSender</strong>：Text Sender 整合時需選擇對應 Filter，讓 VMS 依 Text Sender 格式處理資料。",
          "<strong>Character Encoding / Codepage</strong>：若顯示亂碼，可檢查字元編碼或 Codepage Mapping。"
        ]
      },
      {
        type: "note",
        title: "Text Setup 提醒",
        content: "若希望 POS 文字直接顯示在 Live View 上，需進入 Text Setup 確認是否啟用畫面顯示相關設定，例如 Print on screen。若只接收到資料但畫面沒有疊字，需檢查 Mapping Camera 與 Text Setup。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "測試方式",
        content: "設定完成後，返回 Text Sender 應可看到狀態變成 Connected。此時只要指定的文字檔被寫入並存檔，Text Sender 就會讀取資料並送進 GV-VMS。測試時可用公司內部批次檔自動產生 .txt 交易資料，或手動修改文字檔後儲存，觀察指定 Camera 畫面是否出現 POS 文字。"
      },
      { type: "image", num: 5, label: "Text Sender 已連線" },
      { type: "spacer" },
      {
        type: "flow",
        steps: [
          "安裝 GV-POS Text Sender",
          "插入具有 Text Sender 授權的 GV-USB Dongle",
          "重新啟動 GV-VMS，確認授權狀態",
          "Text Sender 新增來源，選擇 File",
          "指定 File Path、POS Index、TCP Port / Password",
          "按 Start，狀態先顯示 Wait Connect",
          "GV-VMS → Accessories → POS Device Setup",
          "新增 POS Device，Printer Type 選 TCP/IP Port",
          "設定 IP、Port、Password、Mapping Camera、Filter Setting",
          "VMS 設定完成後，Text Sender 狀態變成 Connected",
          "寫入 / 更新文字檔，確認 POS 文字是否顯示在指定 Camera"
        ]
      },
      { type: "spacer" },
      {
        type: "list",
        title: "常見問題排查",
        items: [
          "<strong>Text Sender 一直 Wait Connect</strong>：檢查 VMS 端是否已新增 POS Device，IP、Port、Password 是否與 Text Sender 一致。",
          "<strong>VMS 跳授權警告</strong>：確認是否插入具有 Text Sender / POS Port 授權的 Dongle，必要時重新啟動 VMS。",
          "<strong>Text Sender 顯示 Connected 但畫面沒文字</strong>：檢查 Mapping Camera 是否選對、Text Setup 是否啟用畫面顯示、指定 Camera 是否正在 Live View。",
          "<strong>資料顯示亂碼</strong>：檢查 Character Encoding / Codepage Mapping。",
          "<strong>沒有任何資料進來</strong>：確認 File Path 是否正確、文字檔是否真的有寫入並存檔，以及 Text Sender 是否已 Start。"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Text Sender 的核心是「監控文字檔 → 檔案更新後讀取資料 → 透過 TCP/IP 送進 VMS → 疊加到 Mapping Camera」。Text Sender 端與 VMS 端的 POS Index、Port、Password 與 Filter Setting 要對得起來。"
      }
    ]
  }
);