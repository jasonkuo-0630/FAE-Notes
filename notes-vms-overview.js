/* notes-vms-overview.js —— 由 notes-data-core.js 提供的 notes 陣列，這裡只負責 push 進去 */
notes.push(
{
    id: "vms-01",
    title: "GV-VMS 是什麼？",
    category: "VMS 總覽",
    tags: ["VMS", "核心軟體"],
    updated: "2026-06-29",
    related: ["ipcam-1", "vms-05", "arch-1", "cms-1", "asmgr-1", "recorder-1", "vms-30"],
    body: `
      <p>GV-VMS 是 GeoVision 的 Video Management Software，是整個影像監控系統的核心軟體，可以理解成「監控系統的主控台」。</p>
      <p>它主要負責：</p>
      <ul>
        <li>新增與管理 IP Camera</li>
        <li>Live View 即時監看</li>
        <li>Recording 錄影 / Playback 回放 / Backup 備份</li>
        <li>Event 事件處理、Motion Detection 位移偵測</li>
        <li>PVD / AI 事件整合、I/O 連動</li>
        <li>與 CMS 系統整合</li>
      </ul>
      <p><strong>實務理解</strong><br>IP Camera 負責提供影像與事件來源，GV-VMS 負責把這些 Camera 集中管理起來，並處理觀看、錄影、回放、備份、事件觸發等功能。</p>
      <p>如果 Camera 本身有 AI 分析能力，實務上通常會優先讓 Camera 端做事件判斷，再把事件送給 VMS，這樣可以降低 VMS 主機的負載：</p>
      <div class="flow">
        <div class="step">Camera 端做人形 / 車輛 / 人臉判斷</div>
        <div class="arrow">↓</div>
        <div class="step">把事件送給 VMS</div>
        <div class="arrow">↓</div>
        <div class="step">VMS 負責錄影、彈窗、告警、事件紀錄</div>
      </div>
      <div class="memory-hook"><span class="hook-label">記憶點</span><span>Camera 負責「看」，VMS 負責「管」。判斷工作能交給 Camera 做的，就盡量別讓 VMS 重複做。</span></div>
    `
  }
);