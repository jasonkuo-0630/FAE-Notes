/* ============ 圖片待補佔位輔助函式 ============ */
/* 檔名規則：{筆記id}-{該篇第幾張圖，2位數}.png，例如 vms-12-01.png */
function imgPlaceholder(noteId, num, label){
  const n = String(num).padStart(2,'0');
  const filename = `${noteId}-${n}.png`;
  return `<div class="img-placeholder">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
    <span>[${filename}] 待補上傳 — ${label}</span>
  </div>`;
}

/* 圖片就緒後改用這個函式，自動讀取 images/ 資料夾對應檔案 */
function img(noteId, num, label){
  const n = String(num).padStart(2,'0');
  const filename = `${noteId}-${n}.png`;
  return `<img src="images/${filename}" alt="${label}" loading="lazy" onclick="openLightbox('images/${filename}')">`;
}

function openLightbox(src){
  const box = document.createElement('div');
  box.className = 'img-lightbox';
  box.innerHTML = `<img src="${src}">`;
  box.onclick = () => box.remove();
  document.body.appendChild(box);
}

/* 共用的筆記陣列，由下面各個 notes-*.js 檔案各自 push 自己分類的筆記進來 */
const notes = [];