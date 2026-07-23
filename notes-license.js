/* notes-license.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-license-01",
    title: "License：GV-USB Dongle 與 Software License",
    category: "License",
    categoryId: "gvvms",
    subgroupId: "license",
    tags: ["License", "Dongle", "Software License", "GVUSBKeyClient", "License Activation Tool"],
    updated: "2026-07-15",
    status: "draft",
    related: ["vms-onboarding-01", "vms-onboarding-02"],

    // 內容來源：GV-VMS User's Manual（各版本 Channel 數量與免費額度略有差異，待自行查證版本後更新）。
    // 已驗證（實測截圖）：VMS 內建圖示只認 Dongle；Software License 可透過 Windows 開始功能表的
    // Register GV-VMS Platform 獨立查詢，不受 Dongle 插著與否影響；Software License 綁第三方 Camera
    // 需同一 LAN + RTSP。
    sections: [
      {
        type: "text",
        content: "GV-VMS 的授權分成兩種形式：GV-USB Dongle（硬體）與 Software License（軟體）。兩者都是用來提供額外 Channel、第三方 IP Camera 等授權能力，差別在於授權存放的地方跟啟用方式。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "VMS GV-USB Dongle / Software License",
        content: "VMS 的 License分為 GV-USB Dongle 與 Software License 兩種，詳細介紹如下"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>GV-USB Dongle</strong> : 授權跟著 USB Dongle 走，插上 Dongle 並確保安裝官方 Driver 就能讀授權。如果 Dongle 內已有 3rd-party license，通常不用像 Software License 一樣逐支 Camera 登記。擴充授權要做 Dongle Upgrade (匯出<code>.out</code>檔提供官方進行更新，再匯入官方更新後的<code>.in2</code>檔完成擴充授權)",
          "<strong>Software License</strong> : 不用插實體 USB Key ，功能權限可以透過 License Activation Tool 管理與擴充。但綁死單一主機，換電腦、重灌、系統變動時比較麻煩；且 3rd-party / ONVIF Camera 需要做登記 / 指派到 Software License。"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "進入路徑",
        content: "Home👁️ > Toolbar🛠️ > Configure⚙️ > Camera Install > IP Device Setup > GeoVision License Activation Tool🔑"
      },
      { type: "image", num: 1, label: "IP Device Setup 介面，介面左下角為 GeoVision License Activation Tool 圖示" },
      { type: "spacer" },
      {
        type: "text",
        title: "GeoVision License Activation Tool (以 GV-USB Dongle 啟動) 的介面",
        content: "插上 GV-USB Dongle 時開啟 GeoVision License Activation Tool 會顯示此介面，授權內容存放在實體 USB Dongle 裡。使用前需確認 Dongle 已插入電腦，且對應的 USB Driver 已安裝完成，VMS 才能讀取到 Dongle 內的授權。"
      },
      { type: "image", num: 2, label: "GeoVision License Activation Tool(GV-USB Dongle) 介面" },
      {
        type: "list",
        title: "實務提醒",
        items: [
          "<strong>GV-USB Dongle 不提供熱插拔</strong>，首次插上 GV-USB Dongle 並安裝完 Driver 須重啟 Windows 讓系統讀取。",
          "由於本測試機是同時擁有 GV-USB Dongle / Software License 的測試環境，<strong>同時擁有兩種授權時系統會以 GV-USB Dongle 讀取為優先</strong>，上方也有提示 : 如欲使用Software License ，需先移除已安裝至 Windows 的 GV-USB Dongle 。"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "GeoVision License Activation Tool (以 Software License 金鑰啟動) 的介面",
        content: "使用登記 Software License 後開啟 GeoVision License Activation Tool 會顯示此介面，圖中是已登記 Software License 時的狀態，打開 GeoVision License Activation Tool 會看到 Register License 呈現灰階不可選。"
      },
      { type: "image", num: 3, label: "GeoVision License Activation Tool(Software License) 介面" },
      { type: "spacer" },
      {
        type: "text",
        title: "在 GV-USB Dongle 插著的情況下查看 Software License",
        content: "當系統同時擁有 GV-USB Dongle / Software License 的情況下，即使 GV-USB Dongle 插著依舊有方法可以查看 Software License 權限資訊。"
      },
      {
        type: "list",
        title: "獨立入口",
        items: [
          "Windows 開始功能表 > GV-VMS 資料夾 > <strong>Register GV-VMS Platform</strong>",
          "開啟後會出現獨立的 <strong>GeoVision License Activation Tool(Software License)</strong> 視窗，顯示 Software License 的 Online/Offline 狀態、License State（例如「License is registered.」），不受 Dongle 插著與否影響"
        ]
      },
      { type: "image", num: 4, label: "Register GV-VMS Platform 進入流程示意圖" },
      { type: "image", num: 3, label: "GeoVision License Activation Tool(Software License) 介面(同圖三，一樣的介面借用)" },
      { type: "image", num: 5, label: "Adjust Registered License介面 顯示 Software License 權限" },
      {
        type: "note",
        title: "實務補充",
        content: "Adjust Registered License介面中會顯示當前金鑰權限與已登記至 Software License 內的 ONVIF 裝置。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "GV-USB Dongle = 授權跟著實體 USB 走，插著時 VMS 內建圖示只認 Dongle；Software License = 靠序號在軟體端啟用，綁死單一主機。兩者同時存在時，Windows 開始功能表的 Register GV-VMS Platform 是唯一能繞過 Dongle、直接查 Software License 狀態的入口。Dongle 底下加 ONVIF 裝置不用逐支登記，Software License 則需要。"
      }
    ]
  }
);