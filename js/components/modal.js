/* ==========================================================================
   GLOBAL MODAL COMPONENT
   ========================================================================== */

export function openModal({ title, bodyHTML, footerHTML = '' }) {
  const container = document.getElementById('modal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h3 class="modal-title">${title}</h3>
        <button class="modal-close" id="global-modal-close-btn" aria-label="Close Modal">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="modal-body">
        ${bodyHTML}
      </div>
      ${footerHTML ? `<div class="modal-footer">${footerHTML}</div>` : ''}
    </div>
  `;

  container.classList.remove('hidden');

  const closeBtn = document.getElementById('global-modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  container.onclick = (e) => {
    if (e.target === container) {
      closeModal();
    }
  };
}

export function closeModal() {
  const container = document.getElementById('modal-container');
  if (container) {
    container.classList.add('hidden');
    container.innerHTML = '';
  }
}
