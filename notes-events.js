/* notes-events.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-04",
    title: "Motion Detection 與 PVD Motion 的差異",
    category: "事件與偵測",
    tags: ["Motion Detection", "PVD", "事件偵測"],
    updated: "2026-06-29",
    related: ["ipcam-1", "vms-25", "vms-27"],
    body: `
      <p><strong>Motion Detection</strong> 是一般位移偵測，主要判斷畫面中是否有變動，但它不一定知道變動的是人、車、樹影、光線或其他物體。</p>
      <p><strong>PVD Motion</strong>（People / Vehicle Detection）會判斷畫面中是否有人或車，PVD Motion 指的是以人車偵測事件作為觸發條件。</p>
      <p>實務理解：</p>
      <div class="flow">
        <div class="step">Motion Detection：畫面有動 → 觸發</div>
        <div class="step">PVD Motion：偵測到人或車 → 觸發</div>
      </div>
      <p>因此 PVD 通常能減少一般 Motion Detection 的誤報。但實務上要注意：</p>
      <ul>
        <li>Record Type 選 PVD Motion，代表錄影觸發來源是 PVD 事件</li>
        <li>一般 Motion Detection 可能仍然存在</li>
        <li>其他功能可能仍使用一般 Motion，例如 Event List、Camera Popup、Smart Motion Search</li>
        <li>若要降低誤報，可能需要同時設定 Motion 區域與 PVD ROI / Mask</li>
      </ul>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Motion Detection 是「有沒有動」，PVD 是「動的是不是人或車」——PVD 更精準，但兩者可能要分開設定才會真正減少誤報。</span></div>
    `
  },
{
    id: "vms-25",
    title: "Motion Detection 進階設定：偵測區域與靈敏度",
    category: "事件與偵測",
    tags: ["Motion Detection", "Set Region", "Sensitivity"],
    updated: "2026-07-06",
    related: ["vms-04", "vms-26", "vms-27", "vms-29", "vms-35", "vms-43"],
    body: `
      <p>在 Advanced Motion Detection Setup 中，可以針對 Motion Detection 做更細部的設定。如果要使用 VMS 軟體端的進階 Motion 設定，通常需要關閉 <code>Enable Camera's Built-in Motion Detection</code>，也就是改由 GV-VMS 端進行 Motion Detection，而不是 Camera 端判斷。</p>
      ${img("vms-25", 1, "Advanced Motion Detection Setup：Set Region 畫面")}
      <p><strong>Set Region 與 Mask Region</strong><br>Set Region 是加法——指定「我要偵測這裡」，預設情況下偵測範圍可能涵蓋整個畫面，可用區域設定只偵測門口、走道等。Mask Region 是減法——指定「這裡不要偵測」，適合排除電風扇、樹葉晃動、窗戶反光等固定會動但不重要的物件。兩者都能做出同樣的最終偵測範圍，但邏輯不同：Set Region 是從 0 開始加，Mask Region 是從整體扣掉。</p>
      <p><strong>Sensitivity（靈敏度）</strong>越高越容易觸發，小動作也可能被偵測，但誤報可能增加；越低則觸發條件較嚴格，可能降低誤報但也可能漏報。</p>
      <p><strong>Noise Tolerance</strong> 不是消除雜訊，而是讓 Motion Detection 判斷時不要把影像雜訊（例如低光源環境的閃動）誤判成 Motion。<strong>Ignore environmental changes</strong> 是降低雨、雪這類環境因素被判定為 Motion 的機率，不是完全不偵測。官方文件的定義是：當物體以穩定且重複的方式，朝相同方向持續運動<strong>超過 1.5 秒</strong>，系統就會將其過濾並忽略，不觸發 Motion 事件。</p>
      <p><strong>Minimum Duration</strong> 是 Motion 必須持續幾秒以上才算事件，用來降低短暫雜訊、瞬間光影變化造成的誤報。<strong>Process Video in Lower Resolution</strong> 用較低解析度分析畫面，可降低 CPU 負擔，但細節變少、對小物件判斷可能較不精準。<strong>Enable Smart Motion Search</strong> 是在錄影時建立可供 Smart Search 使用的 Motion 索引，之後 Playback 搜尋時能更快找到有 Motion 的時間點。</p>
      ${img("vms-25", 2, "未啟用 Enable Camera's Built-in Motion Detection：改由 VMS 端判斷")}
      ${img("vms-25", 3, "啟用 Enable Camera's Built-in Motion Detection：由 Camera 端判斷")}
      <p><strong>Record：Motion / PVD Motion</strong><br>可選擇這個 Camera 的錄影事件來源要用一般 Motion Detection 還是 PVD Detection。要注意，這裡選 PVD Motion 只代表錄影觸發來源改成 PVD，不代表一般 Motion Detection 在整個 VMS 裡完全消失——Event List、Camera Popup Setting、Smart Motion Search 等其他功能仍可能依各自設定使用一般 Motion。<strong>Video Record Type</strong> 則是指定這類事件要套用 Urgent Event 還是 General Event 的錄影幀率策略。最後 <strong>Register Motion Event</strong> 決定 Motion 被觸發時要不要把事件登錄到事件紀錄中。</p>
      <p style="font-size:12px;color:var(--text-tertiary)">實測補充：Record 選 <strong>Motion</strong> 時（在 PVD Detection 也是 Enable 的前提下），Motion 與 PVD 事件都會觸發錄影；但 Record 選 <strong>PVD Motion</strong> 時，只有 PVD 事件會觸發錄影，一般 Motion 不會。可以理解成 PVD 本來就是 Motion 的一種子集合（人車出現本身也是一種畫面變動）——選 Motion 是廣撒網，PVD 事件自然包含在內；選 PVD Motion 則是刻意收窄範圍，只留下人車事件，如果選了 PVD Motion 卻連一般 Motion 也一起觸發，那 PVD 這層過濾就沒有意義了。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Set Region 是「我要看這裡」，Mask Region 是「這裡不要看」；Sensitivity 越高越敏感，Noise Tolerance 是忽略雜訊不是消除雜訊。</span></div>
    `
  },
{
    id: "vms-26",
    title: "Motion Detection 進階設定：物件大小過濾（User-defined）",
    category: "事件與偵測",
    tags: ["User-defined", "Object Size"],
    updated: "2026-06-12",
    related: ["vms-25"],
    body: `
      <p>User-defined 搭配 Define Object，可以用物件大小來過濾 Motion，而不是調整區域靈敏度。</p>
      ${img("vms-26", 1, "Define Object：Min Object Size 設定畫面")}
      <p><strong>Min Object Size</strong> 是設定最小物件尺寸，小於這個尺寸的變動會被忽略，適合排除小飛蟲、小光點、細微晃動這類雜訊。</p>
      ${img("vms-26", 2, "Define Object：Max Object Size 設定畫面")}
      <p><strong>Max Object Size</strong> 是設定最大物件尺寸，大於這個尺寸的變動會被忽略，適合排除整片光線變化、鏡頭晃動、大面積陰影變化這類大範圍誤判。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Min Object Size 是「太小的不算」，Max Object Size 是「太大的不算」。</span></div>
    `
  },
{
    id: "vms-27",
    title: "PVD Detection 基礎：People / Vehicle Detection",
    category: "事件與偵測",
    tags: ["PVD", "People Vehicle Detection"],
    updated: "2026-06-12",
    related: ["vms-28", "vms-04", "vms-25", "vms-35"],
    body: `
      <p>PVD 是 People / Vehicle Detection，不是單純偵測畫面有沒有變動，而是偵測畫面中是否出現特定目標（人或車）。因此 PVD 比一般 Motion Detection 更能降低電風扇、樹葉、光影、反光這類非人車物件造成的誤報——但 PVD 不是萬能，仍可能受光線不足、角度不佳、遮擋、物件太小或太模糊、相似形狀誤判等因素影響。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Motion 是有動就可能算，PVD 是人車出現才比較算。</span></div>
      <p><strong>PVD Enable</strong><br>如果 Record 選擇 <code>PVD Motion</code>，系統會強制啟用 PVD Enable 且不允許取消——因為錄影觸發來源選了 PVD Motion，PVD 功能就必須啟用，否則無法作為錄影判斷依據。</p>
      <p><strong>偵測目標類型</strong>可選擇 People Detection（只偵測人）、Vehicle Detection（只偵測車）、People or Vehicle Detection（人或車任一種被偵測到都可觸發事件）。</p>
      <p><strong>Max / Selected</strong>：Max 是目前系統可使用 PVD 功能的最大通道數，會受授權數量、PC 效能、是否有 AI Event／PVD 授權、AI 加速硬體、GV-VMS 版本與授權狀態影響，未啟用對應授權時 Max 可能顯示 0。Selected 是目前已經啟用 PVD 的通道數。PVD／AI Event 授權可能會綁定該台 PC 環境，若重灌或更換主機，可能需要重新申請或重新啟用授權。</p>
      <p><strong>PVD Sensitivity</strong> 是整體偵測敏感程度，越高越容易觸發但誤報可能增加，越低越保守。要注意 Sensitivity 跟 Confidence 不完全相同：Sensitivity 是整體敏感程度，Confidence 是 AI 判斷這個物件有多像人／車的信心分數門檻（下一篇會細講）。</p>
      <p><strong>Absence Event Detection</strong> 是缺席事件偵測，不是單純沒有 Motion 就通知，而是指定目標物件在指定時間內持續不存在才觸發事件，例如停車格應該有車但超過指定時間沒有車、指定崗位應該有人但超過指定時間沒有人。通常會搭配偵測類型、偵測區域與 Tolerance time of alarm 一起使用。</p>
    `
  },
{
    id: "vms-28",
    title: "PVD Detection 進階：Confidence 與 Size Filter",
    category: "事件與偵測",
    tags: ["Confidence", "Size Filter"],
    updated: "2026-06-12",
    related: ["vms-27", "vms-29"],
    body: `
      <p>Confidence 是 AI 判斷某個物件屬於某類別的信心分數門檻。例如 Event List 可能顯示 <code>People, conf(90, 90), size(1/6, 1/6)</code>：People 是系統判斷目標是人，conf 是 AI 判斷該目標是人的信心分數，size 是目標物件在畫面中的尺寸比例。</p>
      ${img("vms-28", 1, "PVD Setting：Confidence 各類別預設信心分數")}
      <p>Confidence 設太低比較容易偵測到，但可能增加誤判；設太高判斷比較嚴格、誤判可能降低，但也可能漏掉遠處、模糊、角度不佳的人或車。實務上可以依 Event List 中的 conf 與 size 資訊調整，公司若有測試過的推薦值（例如 <code>High Precision</code>），可以作為較保守的設定參考。</p>
      ${img("vms-28", 2, "PVD Setting：Confidence 下拉選單，Default / High Precision")}
      <p><strong>Size Filter</strong> 是依照目標物件在畫面中的大小過濾偵測結果，不是調整畫面大小，而是判斷偵測到的人或車尺寸是否符合想要的範圍。用途包含過濾太小的遠方物件、過濾小雜訊被誤判成人或車、過濾不合理大小的偵測結果，例如 People：1/80、Vehicle：1/80 可理解為用畫面比例作為大小門檻。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Confidence 越高越嚴格，越不容易誤判但也可能漏判；Size Filter 是用物件大小過濾誤判。</span></div>
    `
  },
{
    id: "vms-29",
    title: "PVD Detection 進階：ROI / Mask 與 Show Rect",
    category: "事件與偵測",
    tags: ["ROI", "Mask", "Show Rect"],
    updated: "2026-06-12",
    related: ["vms-25", "vms-28"],
    body: `
      <p>PVD 裡也有自己的 ROI／Mask 設定，這和一般 Motion Detection 的 Set Region／Mask Region 是不同的設定，需要分開設。</p>
      ${img("vms-29", 1, "PVD Setting：ROI / Mask 下拉選單")}
      <p><strong>ROI</strong>（Region of Interest）是只在指定區域內做 PVD 偵測，例如只偵測門口、走道、停車格、出入口。<strong>Mask</strong> 是排除區域，指定區域不要做 PVD 偵測，例如排除電風扇、人形立牌、反光區、固定容易誤判的區域。</p>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>ROI 是 PVD 的加法「我只想看這裡」，Mask 是 PVD 的減法「這裡不要看」。</span></div>
      <p><strong>Show Rect</strong> 是顯示偵測框，當 PVD 偵測到人或車時，系統會用框框標出目標位置，方便確認 PVD 是否有正確抓到目標。要注意 Show Rect 不一定代表框框會被寫進錄影檔本體，可能只是 Live View、Event Preview 或設定畫面上的輔助顯示，是否會保留在 Playback 畫面中需依實際設定與播放結果確認。</p>
      <p><strong>實務建議</strong>：如果案場同時會用 Motion Detection 與 PVD Detection，建議兩邊都設定好偵測／排除區域（Motion 設 Set Region／Mask Region，PVD 設 ROI／Mask），可以同時降低一般 Motion 誤判、PVD 誤判、Event List 多餘事件、Popup 被不必要事件觸發、Playback 出現過多無意義事件。Record 決定錄影聽誰的，但其他功能可能還是會看 Motion 或 PVD，所以兩邊都設好最乾淨。</p>
    `
  }
);