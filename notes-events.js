/* notes-events.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-04",
    title: "Motion Detection 與 PVD Motion 的差異",
    category: "事件與偵測",
    categoryId: "gvvms",
    subgroupId: "events",
    tags: ["Motion Detection", "PVD", "事件偵測"],
    updated: "2026-07-16",
    status: "ok",
    related: ["ipcam-1", "vms-25", "vms-27"],

    // 參考文獻：GV-VMS Feature Guide V20，Chapter 3 Video Analysis，3.3 Easy AI Event Adjustment，p.22-23；
    // 參考文獻：GV-VMS Feature Guide V20，Chapter 4 Video Playback，4.3 Smart PVD Motion Search，p.33-34；
    // 參考文獻：GV-VMS Feature Guide V20，Chapter 5 GV-IP Speaker Integration，5.3 Motion-Triggered Audio on GV-IP Speaker，p.40-41
    sections: [
      {
        type: "list",
        title: "Motion Detection 與 PVD Motion 的差異",
        items: [
          "<strong>Motion Detection</strong>：一般位移偵測，主要判斷畫面中是否有變化或移動，但不會進一步判斷變動來源是人、車、樹影、光線或其他物體。<br>因此容易受到環境變化、反光、陰影或背景移動影響。",
          "<strong>PVD Motion</strong>：PVD（People / Vehicle Detection）是人車偵測，會判斷畫面中的移動目標是否符合 People / Vehicle 條件。<br>PVD Motion 則是以人車偵測事件作為觸發來源，例如用來觸發錄影、事件通知或其他連動。"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        content: "實務理解："
      },
      {
        type: "flow",
        steps: [
          "Motion Detection：畫面有變化 / 移動 → 觸發",
          "PVD Motion：偵測到符合條件的人或車 → 觸發"
        ]
      },
      {
        type: "text",
        content: "因此 PVD 通常能減少一般 Motion Detection 的誤報。但實務上要注意："
      },
      {
        type: "list",
        title: "實務注意",
        items: [
          "Record Type 選 PVD Motion，代表錄影觸發來源是 PVD 人車事件，而不是單純畫面變化。",
          "若要使用 PVD Motion，需要先在對應 Camera 的 Motion / Advanced Motion Detection Setup 中啟用 PVD。",
          "Smart PVD Motion Search 需要在錄影前同時啟用 PVD 與 Enable Smart Motion Search，之後才能在 Playback / Object Search 中依指定區域快速搜尋人車活動。",
          "PVD 通常可減少一般 Motion Detection 的誤報，但不代表完全不會誤判，仍需搭配 ROI、Mask、Size Filter 與實際回放確認。"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Motion Detection 看的是「畫面有沒有動」；PVD Motion 看的是「是否偵測到符合條件的人或車」。PVD 較適合降低一般 Motion 誤報，但仍需靠區域、遮罩與尺寸條件調整。"
      }
    ]
  },
{
    id: "vms-25",
    title: "Motion Detection 進階設定：偵測區域與靈敏度",
    category: "事件與偵測",
    categoryId: "gvvms",
    subgroupId: "events",
    tags: ["Motion Detection", "Set Region", "Sensitivity"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-04", "vms-26", "vms-27", "vms-29", "vms-35", "vms-43"],

    // 參考文獻：GV-VMS User's Manual V20，Chapter 1 Configuring Main System，1.3.4 Setting Up Motion Detection，p.24-29
    // 參考文獻：GV-VMS Feature Guide V20，Chapter 4 Video Playback，4.3 Smart PVD Motion Search，p.31
    // 參考文獻：GV-VMS PVD Motion Detection Usage and Case Studies，Article ID: GV1-23-05-30
    sections: [
      {
        type: "text",
        content: "在 Advanced Motion Detection Setup 中，可以針對 Motion Detection 做更細部的設定。<br>如果要使用 VMS 軟體端的進階 Motion 設定，需要關閉 <code>Enable Camera's Built-in Motion Detection</code>，也就是改由 GV-VMS 端進行 Motion Detection，而不是 Camera 端判斷。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Advanced Motion Detection Setup 介面",
      },
      { type: "image", num: 1, label: "Advanced Motion Detection Setup：Set Region 畫面" },
      {
        type: "text",
        title: "Set Region / Region Sensitivity 與 Mask Region",
        content: "Set Region / Region Sensitivity 是針對畫面中特定區域調整 Motion Detection 靈敏度，可用來加強或降低某些區域的偵測反應；Mask Region 則是指定不偵測的區域，適合排除電風扇、樹葉晃動、窗戶反光、螢幕閃爍等固定容易造成誤報的位置。<br>簡單理解：Region Sensitivity 是調整區域靈敏度，Mask Region 是直接排除區域。"
      },
      { type: "spacer" },
      {
        type: "note",
        title: "實務補充",
        content: "Sensitivity（靈敏度）越高越容易觸發，小動作也可能被偵測，但誤報可能增加；越低則觸發條件較嚴格，可能降低誤報但也可能漏報。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "關閉 H/W Motion 後的選項列表",
      },
      { type: "image", num: 2, label: "未啟用 Enable Camera's Built-in Motion Detection：改由 VMS 端判斷" },
      { type: "spacer" },
      {
        type: "text",
        title: "開啟 H/W Motion 後的選項列表",
      },
      { type: "image", num: 3, label: "啟用 Enable Camera's Built-in Motion Detection：由 Camera 端判斷" },
      {
        type: "list",
        title: "降低誤報相關設定",
        items: [
          "<strong>Noise Tolerance</strong>：忽略影像雜訊，避免低光源、畫面閃動等雜訊被誤判成 Motion。",
          "<strong>Ignore Environmental Changes</strong>：降低雨、雪等環境變化造成的誤報。官方定義是：當物件以穩定且重複的方式朝相同方向移動超過 1.5 秒，系統會將其過濾並忽略。",
          "<strong>Minimum Duration</strong>：Motion 必須持續指定秒數以上才觸發，用來降低瞬間雜訊或短暫光影變化造成的誤報。",
          "<strong>Process Video in Lower Resolution</strong>：以較低解析度進行 Motion Detection，可降低 CPU 負擔，但可能影響偵測準確度。",
          "<strong>Enable Smart Motion Search</strong>：錄影時建立可供 Smart Search 使用的 Motion 索引，之後 Playback / Object Search 搜尋時能更快查找指定區域內的 Motion 片段。"
        ]
      },
      { type: "spacer" },
      {
        type: "list",
        title: "Record：Motion / PVD Motion 設定介紹",
        items: [
          "<strong>Motion</strong>：選擇一般 Motion Detection，只要畫面有變動就會觸發 Motion 事件，也<code>包括PVD Motion在內</code>。",
          "<strong>PVD Motion</strong>：選擇 PVD Motion ，只會偵測 PVD Motion。",
          "<strong>Video Record</strong>：用來指定該類事件套用 Urgent Event 或 General Event 的錄影幀率策略。",
          "<strong>Register Motion Event</strong> 則決定 Motion 被觸發時是否登錄到 System Log。"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Motion Detection 是一般畫面變動偵測；PVD Motion 是人車事件偵測。<br>Region Sensitivity 是調整偵測區域靈敏度，Mask Region 是排除不偵測區域；Sensitivity 越高越容易觸發，Noise Tolerance 則是忽略雜訊，不是消除雜訊。"
      }
    ]
  },
{
    id: "vms-26",
    title: "Motion Detection 進階設定：物件大小過濾（User-defined）",
    category: "事件與偵測",
    categoryId: "gvvms",
    subgroupId: "events",
    tags: ["User-defined", "Object Size"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-25"],

    // 參考文獻：GV-VMS User's Manual V20，Chapter 1 Configuring Main System，1.3.4 Setting Up Motion Detection，Advanced Motion Detection Setup / Define Object，p.27
    sections: [
      {
        type: "text",
        content: "Define Object 是用物件大小範圍來過濾 Motion Detection。選擇 User-defined 後，可設定 Min Object Size 與 Max Object Size，讓系統只針對指定大小範圍內的變動進行偵測。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Min Object Size",
        content: "設定最小物件尺寸。小於 Min Object Size 的變動會被忽略，適合排除小飛蟲、小光點、細微晃動或低光源雜訊。"
      },
      { type: "image", num: 1, label: "Define Object：Min Object Size 設定畫面" },
      { type: "spacer" },
      {
        type: "text",
        title: "Max Object Size",
        content: "設定最大物件尺寸。大於 Max Object Size 的變動會被忽略，適合降低大面積光線變化、陰影變化或畫面大範圍變動造成的誤報。"
      },
      { type: "image", num: 2, label: "Define Object：Max Object Size 設定畫面" },
      {
        type: "note",
        title: "實務補充",
        content: "Object Size 與 Region Sensitivity 是不同調整方向。Object Size 是用物件大小範圍過濾 Motion；Region Sensitivity 是針對不同畫面區域調整靈敏度。若是固定區域不想偵測，則應使用 Mask Region 排除。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "有效 Motion 要介於 Min Object Size 與 Max Object Size 之間；太小的不算，太大的也不算。"
      }
    ]
  },
{
    id: "vms-27",
    title: "PVD Detection 基礎：People / Vehicle Detection",
    category: "事件與偵測",
    categoryId: "gvvms",
    subgroupId: "events",
    tags: ["PVD", "People Vehicle Detection"],
    updated: "2026-07-16",
    status: "ok",
    related: ["vms-28", "vms-04", "vms-25", "vms-35"],

    // 參考文獻：GV-VMS User's Manual V20，Chapter 1 Configuring Main System，Setting Up Motion Detection / Advanced Motion Detection Setup
    // 參考文獻：GV-VMS Feature Guide V20，Chapter 4 Video Playback，Smart PVD Motion Search，p.30
    // 參考文獻：GV-VMS V20 產品頁，AI Query / Smart PVD Motion Search 功能說明
    sections: [
      {
        type: "text",
        content: "PVD 是 People / Vehicle Detection，不是單純偵測畫面有沒有變動，而是判斷畫面中是否出現符合條件的人或車。<br>相較一般 Motion Detection，PVD 通常更能降低電風扇、樹葉、光影、反光等非人車物件造成的誤報；但 PVD 不是萬能，仍可能受到光線不足、角度不佳、遮擋、目標太小或太模糊、相似形狀等因素影響。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "PVD Enable",
        content: "PVD Enable 是啟用 People / Vehicle Detection 的開關。<br>若要使用 PVD Motion 作為錄影或事件觸發來源，就必須啟用 PVD，否則系統無法以人車偵測結果作為判斷依據。"
      },
      { type: "image", num: 1, label: "PVD Enable 示意圖" },
      {
        type: "note",
        title: "實測補充",
        content: "實測時發現：當 Record 選擇 <code>PVD Motion</code> 時，系統會自動勾選 PVD Enable，且不允許取消。<br>可理解為錄影觸發來源已指定為 PVD，因此 PVD 功能必須維持啟用。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "偵測目標類型",
        content: "PVD 可選擇偵測目標類型，例如 People Detection（只偵測人）、Vehicle Detection（只偵測車）、People or Vehicle Detection（偵測到人或車任一種目標都可觸發事件）。"
      },
      { type: "image", num: 2, label: "偵測目標類型選擇列表" },
      { type: "spacer" },
      {
        type: "text",
        title: "PVD Motion 設定",
        content: "進行 PVD Motion 詳細設定。"
      },
      { type: "image", num: 3, label: "PVD Motion 詳細設定示意圖" },
      {
        type: "list",
        title: "PVD Motion 設定介紹",
        items: [
          "<strong>Max / Selected</strong>：Max 表示目前系統可啟用 PVD 的最大通道數；Selected 表示目前已啟用 PVD 的通道數。<br>Max 可能受到 GV-VMS 版本、授權狀態、Camera 支援能力與系統資源影響。若未啟用或不支援對應功能，Max 可能顯示為 0。",
          "<strong>PVD Sensitivity</strong>：PVD Sensitivity 是 PVD 的整體偵測敏感程度。<br>數值越高越容易觸發，較容易偵測到目標，但誤報也可能增加；數值越低則判斷較保守，可能降低誤報但也可能漏報。",
          "<strong>Absence Event Detection</strong>：Absence Event Detection 是缺席事件偵測，不是單純沒有 Motion 就通知，而是指定目標在設定區域內持續不存在超過指定時間後才觸發事件。<br>常見情境例如停車格應有車但長時間沒有車、指定崗位應有人但長時間沒有人，或特定區域需要持續有指定目標存在時使用。<br>通常會搭配偵測類型、偵測區域與 Tolerance Time of Alarm 一起設定。"
        ]
      },
      {
        type: "note",
        title: "授權提醒",
        content: "PVD / AI 相關功能是否可用，需依 GV-VMS 版本、授權項目、Camera 支援能力與實際系統環境確認。若更換主機或重灌系統，授權狀態也可能需要重新確認。"
      },
      {
        type: "note",
        title: "Sensitivity 與 Confidence 的差異",
        content: "Sensitivity 可理解為偵測敏感程度；Confidence 則偏向 AI 判斷目標像不像人 / 車的信心分數門檻。兩者概念不同：Sensitivity 影響系統容易不容易觸發，Confidence 影響判斷結果要多有把握才被接受。"
      }
    ]
  },
{
    id: "vms-28",
    title: "PVD Detection 進階：Confidence 與 Size Filter",
    category: "事件與偵測",
    categoryId: "gvvms",
    subgroupId: "events",
    tags: ["Confidence", "Size Filter"],
    updated: "2026-07-22",
    status: "ok",
    related: ["vms-27", "vms-29"],

    // 參考文獻：GV-VMS User's Manual V20，Chapter 1 Configuring Main System，Setting Up Motion Detection / PVD Setting
    // 參考文獻：GV-VMS User's Manual V20，Event List / AI Query，PVD event type、confidence、size 顯示
    sections: [
      {
        type: "text",
        content: "Confidence 是 PVD 判斷目標屬於人或車的信心門檻。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "PVD Setting：Confidence 介紹",
        content: "數值越高，系統判斷越嚴格，通常誤報較少；數值越低，系統較容易接受偵測結果，但誤報可能增加。"
      },
      { type: "image", num: 1, label: "PVD Setting：Confidence 各類別預設信心分數" },
      {
        type: "text",
        title: "Event List 中的 conf / size",
        content: "PVD Event 會在 Event List / AI Query 顯示偵測類型、Confidence 與 Size 等資訊。<br>例如 <code>People, conf(90, 90), size(1/6, 1/6)</code>，可理解為系統判斷目標是 People，並顯示該偵測結果的信心值與目標大小資訊。"
      },
      {
        type: "note",
        title: "實務提醒",
        content: "Event List 中的 <code>conf(...)</code> 與 <code>size(...)</code> 可作為調整 PVD 設定的參考，但括號內數值的細部意義若未由官方或內部文件確認，不建議在筆記中寫得過死。<br>實務上可先用來判斷目前偵測結果是偏保守、偏寬鬆，或是否因目標太小造成漏判。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Confidence 設定邏輯",
        content: "Confidence 設太低時，遠處、模糊或角度不佳的目標比較容易被接受，但誤判機率也可能提高；Confidence 設太高時，判斷較嚴格，誤報可能降低，但也可能漏掉遠處、被遮擋、模糊或角度不佳的人 / 車。"
      },
      { type: "image", num: 2, label: "PVD Setting：Confidence 下拉選單，Default / High Precision" },
      {
        type: "note",
        title: "Default / High Precision",
        content: "<strong>Default</strong> 可作為一般設定；<strong>High Precision</strong> 則可理解為較保守、較嚴格的設定，通常會降低誤報，但也要注意可能增加漏判。實務上可依 Event List 的 conf / size 結果與現場誤報情況調整。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Size Filter",
        content: "Size Filter 是依照目標物件在畫面中的大小來過濾 PVD 偵測結果。<br>它不是調整畫面大小，而是設定人或車的最小偵測尺寸門檻；當目標小於設定尺寸時，系統就不偵測。用途是排除太遠、太小的目標，或降低小雜訊、反光、線材、背景物體被誤判成人或車的機率。"
      },
      { type: "image", num: 3, label: "Size Filter 設定畫面是意圖" },
      {
        type: "note",
        title: "Size Filter 比例",
        content: "官方文件提到 People / Vehicle Detection 的預設最小物件尺寸比例為畫面的 <code>1/80</code>。<br>例如 1920 × 1080 的影像中，1/80 約等於 24 × 24 pixels，可作為理解 Size Filter 的參考。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Confidence 是「系統要多有把握才接受這個人 / 車判斷」；Size Filter 是「目標至少要多大才偵測」。Confidence 越高越嚴格，Size Filter 越大越容易排除遠方小目標。"
      }
    ]
  },
{
    id: "vms-29",
    title: "PVD Detection 進階：ROI / Mask 與 Show Rect",
    category: "事件與偵測",
    categoryId: "gvvms",
    subgroupId: "events",
    tags: ["ROI", "Mask", "Show Rect"],
    updated: "2026-07-22",
    status: "ok",
    related: ["vms-25", "vms-28"],

    // 參考文獻：GV-VMS User's Manual V20，Chapter 1 Configuring Main System，Setting Up Motion Detection / PVD Setting
    // 參考文獻：GV-VMS User's Manual V20，PVD Event List / AI Query，type、confidence、size 顯示與 PVD 設定調整
    sections: [
      {
        type: "text",
        content: "PVD 裡也有自己的 ROI / Mask 設定，這和一般 Motion Detection 的 Region Sensitivity / Mask Region 是不同設定，需要分開理解。<br>Motion Detection 是針對畫面變動做區域設定；PVD 則是針對人 / 車偵測做區域設定。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "PVD Setting：ROI / Mask 設定",
        content: "<strong>ROI</strong>（Region of Interest）是指定 PVD 主要偵測區域，例如只偵測門口、走道、停車格或出入口。<br><strong>Mask</strong> 則是排除區域，指定某些位置不要做 PVD 偵測，例如排除電風扇、人形立牌、反光區、線材晃動、固定容易誤判的區域。"
      },
      { type: "image", num: 1, label: "PVD Setting：ROI / Mask 下拉選單" },
      {
        type: "note",
        title: "實務理解",
        content: "ROI 可以理解成「PVD 主要看哪裡」，Mask 則是「PVD 不要看哪裡」。<br>若只想針對特定區域偵測人車，可用 ROI 縮小偵測範圍；若只有某些固定位置容易誤判，則可用 Mask 排除。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "ROI 是 PVD 的加法：「我主要看這裡」；Mask 是 PVD 的減法：「這裡不要看」。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Show Rect",
        content: "Show Rect 是顯示偵測框。<br>當 PVD 偵測到人或車時，系統會用框框標示目標位置，方便確認 PVD 是否有正確抓到目標。"
      },
      { type: "image", num: 2, label: "Show Rect 在 Live View 上的表現" },
      {
        type: "note",
        title: "Show Rect 注意事項",
        content: "Show Rect 主要是輔助確認偵測結果，不一定代表偵測框會被寫進錄影檔本體。<br>實務上需依 Live View、Playback、匯出設定與實際播放結果確認是否會顯示或保留偵測框。若匯出影片需要顯示偵測框，通常要另外確認 Playback / Save as AVI 的相關顯示或匯出設定。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "與 Event List 的關係",
        content: "PVD Event 會在 Event List / AI Query 顯示偵測類型、confidence 與 size 資訊。<br>這些資訊不是設定值本身，而是該次事件的偵測結果，可用來回頭調整 Confidence、Size Filter、ROI 或 Mask。"
      },
      {
        type: "flow",
        steps: [
          "誤判出現在固定區域 → 優先檢查 Mask",
          "只想偵測特定範圍 → 優先檢查 ROI",
          "目標太小仍一直觸發 → 檢查 Size Filter",
          "不像人 / 車卻一直被判定 → 檢查 Confidence",
          "不知道有沒有抓對目標 → 開啟 Show Rect 觀察偵測框"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "實務建議",
        content: "如果案場同時會用到一般 Motion Detection 與 PVD Detection，兩邊的區域設定要分開檢查。<br>一般 Motion 的 Region Sensitivity / Mask Region 影響畫面變動偵測；PVD 的 ROI / Mask 則影響人車偵測。<br><br>若錄影或事件觸發來源選 PVD Motion，重點會落在 PVD 設定；若其他功能仍使用一般 Motion，則 Motion Detection 的區域與靈敏度也要另外調整。不要以為設定了 Motion Mask，PVD 就一定跟著排除；也不要以為設定了 PVD Mask，一般 Motion 就不會再觸發。"
      },
      {
        type: "note",
        title: "驗收 QA / 實務補充",
        content: "遇到 PVD 誤判時，可以先看 Event List 的 conf / size，再回頭調整 Confidence、Size Filter、ROI 與 Mask。<br>若誤判位置固定，通常優先用 Mask 排除；若只需要偵測門口、走道或停車格，則可用 ROI 限縮偵測範圍。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Motion 的區域設定管一般畫面變動；PVD 的 ROI / Mask 管人車偵測。<br>Show Rect 是用來看 PVD 有沒有框到正確目標，Event List 的 conf / size 則可拿來回頭調整 PVD 參數。"
      }
    ]
  },
);