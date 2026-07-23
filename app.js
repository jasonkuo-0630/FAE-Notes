/* notes 陣列與 img()/imgPlaceholder() 輔助函式已搬到 notes-data.js
   記得在 note.html 裡先載入 notes-data.js，再載入 app.js */

/* ============ 渲染邏輯 ============ */
/* 分類結構：以「功能導向」而非選單路徑分組。
   GV-VMS 底下再分三個子群：核心功能 / 設定功能 / 通用功能。
   之後要新增分類，直接照功能屬性塞進對應 items 陣列即可，
   還沒有筆記的分類（例如 Playback、License）會自動被 renderSidebar 略過，不會顯示空分類。 */
const sidebarStructure = [
  { type: "item", cat: "系統架構" },
  { type: "supergroup", label: "GV-VMS", subgroups: [
      { label: "核心功能", items: ["VMS 總覽", "Live View", "Playback", "Backup", "事件與偵測", "System Log", "WebCam"] },
      { label: "設定功能", items: ["IP Device Setup", "Camera Settings", "Record Setting", "System Configure"] },
      { label: "通用功能", items: ["License", "POS 整合"] },
      { label: "排查與診斷", items: ["Troubleshooting"] }
    ]
  },
  { type: "item", cat: "IP Camera" },
  { type: "item", cat: "CMS 系統" },
  { type: "item", cat: "ASManager 門禁" },
  { type: "item", cat: "通訊協定" },
  { type: "item", cat: "錄影主機比較" },
  { type: "item", cat: "硬體組裝" },
  { type: "item", cat: "系統環境" }
];

/* 麵包屑路徑：陣列由外到內，例如 ["GV-VMS", "核心功能"] */
const categoryParent = {
  "VMS 總覽": ["GV-VMS", "核心功能"], "Live View": ["GV-VMS", "核心功能"],
  "Playback": ["GV-VMS", "核心功能"], "Backup": ["GV-VMS", "核心功能"],
  "事件與偵測": ["GV-VMS", "核心功能"],
  "System Log": ["GV-VMS", "核心功能"], "WebCam": ["GV-VMS", "核心功能"],
  "IP Device Setup": ["GV-VMS", "設定功能"], "Camera Settings": ["GV-VMS", "設定功能"],
  "Record Setting": ["GV-VMS", "設定功能"], "System Configure": ["GV-VMS", "設定功能"],
  "License": ["GV-VMS", "通用功能"],
  "POS 整合": ["GV-VMS", "通用功能"],
  "Troubleshooting": ["GV-VMS", "排查與診斷"]
};

/* Hero Section 用：每個分類的一句話簡介 */
const categoryMeta = {
  "VMS 總覽":        { subtitle: "放 VMS 架構、核心概念、Toolbar 地圖與新手總覽。" },
  "Live View":       { subtitle: "即時監看畫面、Layout 切換、Zoom / Scan / Popup 等常用操作。" },
  "事件與偵測":       { subtitle: "Motion Detection、PVD 等偵測機制與事件判斷邏輯。" },
  "IP Device Setup": { subtitle: "新增、掃描、批次匯入 Camera 的方式比較與實務注意事項。" },
  "Camera Settings": { subtitle: "單一 Camera 的頁籤設定：影像、串流、錄影、進階與異常事件。" },
  "Playback":        { subtitle: "回放、搜尋、書籤、備份與匯出：查錄影、看事件、找片段。" },
  "System Log":      { subtitle: "System Log 與 Advanced System Log：系統紀錄／事件紀錄的兩種查詢入口。" },
  "WebCam":          { subtitle: "透過瀏覽器遠端存取 GV-VMS，不必在遠端電腦安裝完整 VMS（籌備中）。" },
  "Backup":          { subtitle: "影像備份流程與注意事項（籌備中）。" },
  "Record Setting":  { subtitle: "整體錄影設定、Camera 個別錄影方式、儲存位置與硬碟分配。" },
  "System Configure":{ subtitle: "GV-VMS 主機層級設定：啟動行為、視窗位置、事件通知、閒置保護與快捷鍵。" },
  "License":         { subtitle: "GV-USB Dongle 與 Software License 的差異、啟用方式與注意事項。" },
  "POS 整合":         { subtitle: "GV-POS Text Sender、GV-Data Capture、GV-POS S/W Capture 的選用邏輯與設定原則。" },
  "Troubleshooting": { subtitle: "現場驗收與排查實務：環境前置準備、常見異常現象與排查邏輯。" }
};

let activeCategory = "系統架構";
let searchTerm = "";
const expandedNotes = new Set();

/* 側邊欄子分類（核心功能／設定功能...）展開收合狀態，記在 localStorage，
   key 格式：{大群組}__{子群組}，例如 "GV-VMS__核心功能" */
function getStoredCollapsedSubgroups(){
  try {
    const raw = localStorage.getItem('vms-notes-collapsed-subgroups');
    return raw ? JSON.parse(raw) : [];
  } catch(e){ return []; }
}
function setStoredCollapsedSubgroups(arr){
  try { localStorage.setItem('vms-notes-collapsed-subgroups', JSON.stringify(arr)); } catch(e){ /* 忽略 */ }
}
const collapsedSubgroups = new Set(getStoredCollapsedSubgroups());

function getCategories(){
  const map = {};
  notes.forEach(n => { map[n.category] = (map[n.category]||0) + 1; });
  return map;
}

function freshnessClass(dateStr){
  const days = (new Date() - new Date(dateStr)) / (1000*60*60*24);
  if (days <= 14) return "fresh";
  if (days <= 60) return "aging";
  return "stale";
}

function highlight(text, term){
  if(!term) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(escaped, "gi"), m => `<mark>${m}</mark>`);
}

function renderSidebar(){
  const cats = getCategories();
  const total = notes.length;
  let html = `<div class="category-item ${activeCategory==='全部筆記'?'active':''}" data-cat="全部筆記">
    <span>全部筆記</span><span class="count">${total}</span></div>`;

  sidebarStructure.forEach(entry => {
    if (entry.type === "item"){
      if (!cats[entry.cat]) return;
      html += `<div class="category-item ${activeCategory===entry.cat?'active':''}" data-cat="${entry.cat}">
        <span>${entry.cat}</span><span class="count">${cats[entry.cat]}</span></div>`;
    } else if (entry.type === "group"){
      const visibleItems = entry.items.filter(c => cats[c]);
      if (!visibleItems.length) return;
      html += `<div class="category-group-label">${entry.label}</div>`;
      visibleItems.forEach(cat => {
        html += `<div class="category-item sub ${activeCategory===cat?'active':''}" data-cat="${cat}">
          <span>${cat}</span><span class="count">${cats[cat]}</span></div>`;
      });
    } else if (entry.type === "supergroup"){
      // 先檢查整個大群組（例如 GV-VMS）底下是否至少有一篇筆記，沒有就整組略過
      const anyVisible = entry.subgroups.some(sg => sg.items.some(c => cats[c]));
      if (!anyVisible) return;
      html += `<div class="category-group-label supergroup">${entry.label}</div>`;
      entry.subgroups.forEach(sg => {
        const visibleItems = sg.items.filter(c => cats[c]);
        if (!visibleItems.length) return;
        const key = entry.label + '__' + sg.label;
        const isCollapsed = collapsedSubgroups.has(key);
        html += `<div class="category-group-label subgroup toggle" data-subgroup="${key}">
          <span class="subgroup-arrow ${isCollapsed ? 'collapsed' : ''}">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </span>
          <span>${sg.label}</span>
        </div>`;
        if (!isCollapsed){
          visibleItems.forEach(cat => {
            html += `<div class="category-item sub sub2 ${activeCategory===cat?'active':''}" data-cat="${cat}">
              <span>${cat}</span><span class="count">${cats[cat]}</span></div>`;
          });
        }
      });
    }
  });

  document.getElementById('categoryList').innerHTML = html;

  document.querySelectorAll('.category-item').forEach(el => {
    el.addEventListener('click', () => {
      activeCategory = el.dataset.cat;
      expandedNotes.clear();
      render();
    });
  });

  document.querySelectorAll('.category-group-label.toggle').forEach(el => {
    el.addEventListener('click', () => {
      const key = el.dataset.subgroup;
      if (collapsedSubgroups.has(key)) collapsedSubgroups.delete(key);
      else collapsedSubgroups.add(key);
      setStoredCollapsedSubgroups([...collapsedSubgroups]);
      renderSidebar();
    });
  });

  document.getElementById('sidebarFooter').innerText = `共 ${total} 篇筆記`;
}

function selectCategory(cat){
  activeCategory = cat;
  searchTerm = "";
  expandedNotes.clear();
  document.getElementById('searchInput').value = "";
  document.getElementById('searchClearBtn').style.display = 'none';
  render();
  document.getElementById('content').scrollTo({top:0, behavior:'smooth'});
}

/* Hero Section：首頁按鈕，回到系統架構總覽（整個筆記庫的起點） */
function goHome(){
  selectCategory("系統架構");
}

/* Hero Section：展開/收合全部按鈕，依目前篩選出的筆記狀態切換 */
function toggleAllNotes(){
  const filtered = getFilteredNotes();
  if (!filtered.length) return;
  const allExpanded = filtered.every(n => expandedNotes.has(n.id));
  filtered.forEach(n => {
    if (allExpanded) expandedNotes.delete(n.id);
    else expandedNotes.add(n.id);
  });
  render();
}

function jumpToNote(id){
  const note = notes.find(n => n.id === id);
  if(!note) return;
  activeCategory = note.category;
  searchTerm = "";
  document.getElementById('searchInput').value = "";
  document.getElementById('searchClearBtn').style.display = 'none';
  expandedNotes.add(id);
  render();
  requestAnimationFrame(() => {
    const el = document.getElementById('note-' + id);
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'});
      el.classList.add('flash');
      setTimeout(() => el.classList.remove('flash'), 1200);
    }
  });
}

function toggleNote(id){
  if (expandedNotes.has(id)) expandedNotes.delete(id);
  else expandedNotes.add(id);
  const card = document.getElementById('note-' + id);
  if (card) card.classList.toggle('collapsed', !expandedNotes.has(id));
}

function archDiagramSVG(){
  return `
  <div class="arch-wrap">
    <svg viewBox="0 0 720 400" width="100%" style="max-width:680px; display:block; margin:0 auto;">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--text-tertiary)"/>
        </marker>
      </defs>

      <!-- connecting lines -->
      <path d="M360,70 L360,108" stroke="var(--text-tertiary)" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
      <path d="M360,168 L210,228" stroke="var(--text-tertiary)" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
      <path d="M360,168 L530,228" stroke="var(--text-tertiary)" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
      <path d="M210,300 L530,300" stroke="var(--border)" stroke-width="1.2" stroke-dasharray="4,4" fill="none"/>
      <text x="370" y="296" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--text-secondary)">事件連動</text>

      <!-- IP Camera -->
      <g class="arch-node" onclick="selectCategory('IP Camera')">
        <rect x="260" y="20" width="200" height="50" rx="9" fill="var(--surface)" stroke="var(--border)" stroke-width="1.5"/>
        <text x="360" y="40" text-anchor="middle" fill="var(--text-primary)" font-family="Inter,sans-serif" font-size="14" font-weight="700">IP Camera</text>
        <text x="360" y="58" text-anchor="middle" fill="var(--text-secondary)" font-family="JetBrains Mono, monospace" font-size="10">影像來源</text>
      </g>

      <!-- GV-VMS (hub) -->
      <g class="arch-node" onclick="selectCategory('VMS 總覽')">
        <rect x="240" y="108" width="240" height="60" rx="10" fill="var(--surface)" stroke="var(--accent-blue)" stroke-width="2"/>
        <text x="360" y="132" text-anchor="middle" fill="var(--text-primary)" font-family="Inter,sans-serif" font-size="15" font-weight="700">GV-VMS</text>
        <text x="360" y="150" text-anchor="middle" fill="var(--accent-blue)" font-family="JetBrains Mono, monospace" font-size="10">監控主控台 · 核心</text>
      </g>

      <!-- CMS box -->
      <g class="arch-node" onclick="selectCategory('CMS 系統')">
        <rect x="80" y="228" width="260" height="150" rx="10" fill="var(--surface)" stroke="var(--border)" stroke-width="1.5"/>
        <text x="210" y="252" text-anchor="middle" fill="var(--text-primary)" font-family="Inter,sans-serif" font-size="13.5" font-weight="700">CMS 系統</text>
        <text x="210" y="267" text-anchor="middle" fill="var(--text-secondary)" font-family="JetBrains Mono, monospace" font-size="9.5">上層集中監控 / 事件處理</text>
        <text x="100" y="290" fill="var(--text-secondary)" font-family="JetBrains Mono, monospace" font-size="10.5">· Control Center</text>
        <text x="100" y="308" fill="var(--text-secondary)" font-family="JetBrains Mono, monospace" font-size="10.5">· Center V2</text>
        <text x="100" y="326" fill="var(--text-secondary)" font-family="JetBrains Mono, monospace" font-size="10.5">· Vital Sign Monitor</text>
        <text x="100" y="344" fill="var(--text-secondary)" font-family="JetBrains Mono, monospace" font-size="10.5">· Dispatch Server　+ Video Wall</text>
      </g>

      <!-- ASManager box -->
      <g class="arch-node" onclick="selectCategory('ASManager 門禁')">
        <rect x="400" y="228" width="240" height="90" rx="10" fill="var(--surface)" stroke="var(--border)" stroke-width="1.5"/>
        <text x="520" y="256" text-anchor="middle" fill="var(--text-primary)" font-family="Inter,sans-serif" font-size="13.5" font-weight="700">ASManager</text>
        <text x="520" y="273" text-anchor="middle" fill="var(--text-secondary)" font-family="JetBrains Mono, monospace" font-size="9.5">門禁管理（平行系統）</text>
        <text x="520" y="298" text-anchor="middle" fill="var(--text-secondary)" font-family="Inter,sans-serif" font-size="10.5">Controller / Reader / Card</text>
      </g>
    </svg>
    <div class="arch-caption">點擊方框可直接跳到對應分類 ・ 虛線代表「門禁事件 ↔ VMS 影像」的連動關係</div>
  </div>
  `;
}

/* 統一的篩選邏輯，render() 跟「展開/收合全部」按鈕都會用到 */
/* 把 sections 陣列攤平成一段純文字，讓搜尋可以吃到 sections 格式的筆記
   （text/note 的 title、content，list/table 的每個項目，flow 的每個 step，callout 的 label/content 都算進去） */
function getSectionsText(note){
  if (!note.sections || !note.sections.length) return '';
  return note.sections.map(sec => {
    const parts = [sec.title, sec.content, sec.label];
    if (sec.items) parts.push(...sec.items);
    if (sec.steps) parts.push(...sec.steps);
    if (sec.headers) parts.push(...sec.headers);
    if (sec.rows) sec.rows.forEach(row => parts.push(...row));
    return parts.filter(Boolean).join(' ');
  }).join(' ');
}

function getFilteredNotes(){
  let filtered = notes.filter(n => activeCategory === "全部筆記" || n.category === activeCategory);
  if (searchTerm.trim()){
    const t = searchTerm.toLowerCase();
    filtered = filtered.filter(n => {
      const bodyText = n.body ? n.body.toLowerCase() : getSectionsText(n).toLowerCase();
      return n.title.toLowerCase().includes(t) ||
        bodyText.includes(t) ||
        n.tags.some(tag => tag.toLowerCase().includes(t));
    });
  }
  return filtered;
}

function render(){
  const meta = categoryMeta[activeCategory];
  document.getElementById('pageTitle').innerText = activeCategory;

  const subtitleEl = document.getElementById('heroSubtitle');
  if (meta && meta.subtitle){
    subtitleEl.innerText = meta.subtitle;
    subtitleEl.style.display = "block";
  } else {
    subtitleEl.style.display = "none";
  }

  const breadcrumbEl = document.getElementById('breadcrumb');
  const parent = categoryParent[activeCategory];
  if (parent){
    breadcrumbEl.innerText = parent.join(" › ") + " ›";
    breadcrumbEl.style.display = "block";
  } else {
    breadcrumbEl.style.display = "none";
  }

  const filtered = getFilteredNotes();

  const metaEl = document.getElementById('searchMeta');
  metaEl.innerText = searchTerm.trim()
    ? `符合「${searchTerm}」的筆記：${filtered.length} 筆`
    : `目前顯示 ${filtered.length} 筆筆記`;

  // 展開/收合全部按鈕：依目前是否已全部展開切換文字
  const expandBtn = document.getElementById('expandAllBtn');
  if (expandBtn){
    const allExpanded = filtered.length > 0 && filtered.every(n => expandedNotes.has(n.id));
    expandBtn.innerText = allExpanded ? "全部收合" : "全部展開";
    expandBtn.disabled = filtered.length === 0;
  }

  const contentEl = document.getElementById('content');
  const showDiagram = activeCategory === "系統架構" && !searchTerm.trim();

  if (filtered.length === 0){
    contentEl.innerHTML = (showDiagram ? archDiagramSVG() : '') + `<div class="empty-state">沒有符合條件的筆記，換個關鍵字試試？</div>`;
    renderSidebar();
    return;
  }

  contentEl.innerHTML = (showDiagram ? archDiagramSVG() : '') + filtered.map(n => {
    const isSearching = !!searchTerm.trim();
    const isExpanded = isSearching || expandedNotes.has(n.id);
    if (isSearching) expandedNotes.add(n.id); // 搜尋命中時順便記住展開狀態，清空搜尋後維持展開
    return `
    <div class="note-card ${isExpanded ? '' : 'collapsed'}" id="note-${n.id}">
      <div class="note-head" onclick="toggleNote('${n.id}')">
        <div class="note-head-main">
          <div class="note-tags">
            <span class="tag">${n.category}</span>
            ${n.tags.map(t => `<span class="tag" style="background:rgba(126,138,153,0.12);color:var(--text-secondary)">${t}</span>`).join('')}
          </div>
          <div class="note-title">${highlight(n.title, searchTerm)}</div>
          <div class="note-meta">
            <span class="status-dot ${freshnessClass(n.updated)}"></span>
            <span>最後更新 ${n.updated}</span>
          </div>
        </div>
        <div class="expand-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </div>
      <div class="note-body">
        <div class="note-body-inner">
          ${n.sections && n.sections.length ? renderSections(n) : highlight(n.body, searchTerm)}
          ${renderRelated(n)}
        </div>
      </div>
    </div>
  `;
  }).join('');

  renderSidebar();
}

function shortenTitle(title, category){
  const prefix = title.split(/：|[？?]/)[0];
  // 如果冒號前的部分等於分類名稱，代表沒有區別度，改抓冒號後面的內容
  const useSuffix = prefix === category;
  let text = useSuffix
    ? title.split('：').slice(1).join('：').replace(/[？?].*$/, '')
    : prefix;
  text = text.trim();
  if (!text) text = title; // 保險：萬一切出空字串，退回完整標題
  if (text.length > 18) text = text.slice(0, 18) + '…';
  return text;
}

function renderRelated(n){
  if (!n.related || !n.related.length) return '';
  const targets = n.related.map(id => notes.find(x => x.id === id)).filter(Boolean);
  const labels = targets.map(t => shortenTitle(t.title, t.category));
  // 同一組相關筆記裡，如果縮寫後撞名（例如兩篇都叫「General Setting」），
  // 撞名的那幾個改用完整標題截斷，而不是冒號前的縮寫，避免使用者分不出是哪一篇
  const count = {};
  labels.forEach(l => { count[l] = (count[l] || 0) + 1; });
  const chips = targets.map((t, i) => {
    let text = labels[i];
    if (count[text] > 1) {
      text = t.title.length > 18 ? t.title.slice(0, 18) + '…' : t.title;
    }
    return `<span class="related-chip" onclick="jumpToNote('${t.id}')">${text}</span>`;
  }).join('');
  return `<div class="related-row"><span class="related-label">相關筆記</span>${chips}</div>`;
}

/* ============ 新版 sections 渲染（跟舊版 body 並存，互不干擾） ============ */

/* 圖片載入失敗時（檔案還沒放進 images/ 資料夾）自動換成待補框，
   不用像舊版那樣自己判斷要呼叫 img() 還是 imgPlaceholder()。 */
function handleImageError(imgEl, noteId, num, label){
  imgEl.outerHTML = imgPlaceholder(noteId, num, label);
}

function renderImageSection(note, sec){
  const filename = `${note.id}-${String(sec.num).padStart(2,'0')}.png`;
  const path = `images/${filename}`;
  return `<img src="${path}" alt="${sec.label || ''}" loading="lazy"
    onclick="openLightbox('${path}')"
    onerror="handleImageError(this, '${note.id}', ${sec.num}, '${(sec.label||'').replace(/'/g, "\\'")}')">`;
}

function renderSection(note, sec){
  switch(sec.type){
    case 'text':
      return `${sec.title ? `<p><strong>${sec.title}</strong></p>` : ''}<p>${sec.content || ''}</p>`;

    case 'list':
      return `${sec.title ? `<p><strong>${sec.title}</strong></p>` : ''}<ul>${(sec.items || []).map(i => `<li>${i}</li>`).join('')}</ul>`;

    case 'flow':
      return `<div class="flow">${(sec.steps || []).map((s, i, arr) =>
        `<div class="step">${s}</div>${i < arr.length - 1 ? '<div class="arrow">↓</div>' : ''}`
      ).join('')}</div>`;

    case 'image':
      return renderImageSection(note, sec);

    case 'table': {
      const headRow = sec.headers ? `<tr>${sec.headers.map(h => `<th>${h}</th>`).join('')}</tr>` : '';
      const bodyRows = (sec.rows || []).map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
      return `<table>${headRow}${bodyRows}</table>`;
    }

    case 'note':
      return `<p style="font-size:13px;color:var(--text-tertiary)">${sec.title ? `<strong>${sec.title}：</strong>` : ''}${sec.content || ''}</p>`;

    case 'callout':
      return `<div class="memory-hook"><span class="hook-label">${sec.label || '記憶點'}</span><span>${sec.content || ''}</span></div>`;

    case 'spacer':
      return `<div class="section-spacer"></div>`;

    default:
      return '';
  }
}

function renderSections(note){
  return note.sections.map(sec => renderSection(note, sec)).join('');
}

/* ============ 亮 / 暗主題切換 ============ */
const SUN_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
const MOON_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;

function getStoredTheme(){
  try { return localStorage.getItem('vms-notes-theme'); } catch(e){ return null; }
}
function setStoredTheme(t){
  try { localStorage.setItem('vms-notes-theme', t); } catch(e){ /* file:// 下部分瀏覽器可能擋掉，忽略即可 */ }
}
function applyTheme(theme){
  document.body.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.innerHTML = theme === 'dark' ? SUN_ICON : MOON_ICON;
}
function toggleTheme(){
  const current = document.body.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  setStoredTheme(next);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  searchTerm = e.target.value;
  document.getElementById('searchClearBtn').style.display = searchTerm ? 'block' : 'none';
  render();
});

function clearSearchInput(){
  searchTerm = "";
  document.getElementById('searchInput').value = "";
  document.getElementById('searchClearBtn').style.display = 'none';
  render();
}

applyTheme(getStoredTheme() || 'dark');
renderSidebar();
render();