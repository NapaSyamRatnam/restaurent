/* ==========================================================================
   NAVIGATION BAR COMPONENT
   ========================================================================== */

import { state } from '../state.js';

export function renderNavbar() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = state.wishlist.length;
  const activeView = state.activeView;

  header.innerHTML = `
    <div class="nav-container">
      <a href="#" class="brand-logo" id="nav-brand-btn">
        <div class="brand-icon-wrapper">
          <i class="fa-solid fa-utensils"></i>
        </div>
        <span>SAVORY BITES <span class="brand-accent">BISTRO</span></span>
      </a>

      <nav class="nav-links">
        <button class="nav-link ${activeView === 'menu' ? 'active' : ''}" data-nav="menu">
          <i class="fa-solid fa-book-open"></i> Menu
        </button>
        <button class="nav-link ${activeView === 'wishlist' ? 'active' : ''}" data-nav="wishlist">
          <i class="fa-solid fa-heart"></i> Wishlist
          ${wishlistCount > 0 ? `<span class="badge-counter">${wishlistCount}</span>` : ''}
        </button>
        <button class="nav-link ${activeView === 'orders' ? 'active' : ''}" data-nav="orders">
          <i class="fa-solid fa-clock-rotate-left"></i> Track Orders
        </button>
        <button class="nav-link ${activeView === 'account' ? 'active' : ''}" data-nav="account">
          <i class="fa-solid fa-user"></i> Account
        </button>
        <button class="nav-link ${activeView === 'location' ? 'active' : ''}" data-nav="location">
          <i class="fa-solid fa-location-dot"></i> Locations
        </button>
      </nav>

      <div class="nav-actions">
        <button class="btn-icon" id="theme-toggle-btn" title="Toggle Theme">
          <i class="fa-solid ${state.theme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>
        </button>

        <button class="btn btn-primary" id="open-cart-btn">
          <i class="fa-solid fa-basket-shopping"></i>
          <span>Cart</span>
          ${cartCount > 0 ? `<span class="badge-counter">${cartCount}</span>` : ''}
        </button>

        <button class="btn ${activeView === 'staff' ? 'btn-primary' : 'btn-outline'} btn-sm" id="staff-portal-nav-btn">
          <i class="fa-solid fa-kitchen-set"></i>
          <span>${activeView === 'staff' ? 'Exit Staff Portal' : 'Kitchen Portal'}</span>
        </button>
      </div>
    </div>
  `;

  // Attach navbar event listeners
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const targetView = btn.getAttribute('data-nav');
      state.setView(targetView);
    };
  });

  const brandBtn = document.getElementById('nav-brand-btn');
  if (brandBtn) {
    brandBtn.onclick = (e) => {
      e.preventDefault();
      state.setView('menu');
    };
  }

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.onclick = () => {
      state.setTheme(state.theme === 'dark' ? 'light' : 'dark');
    };
  }

  const cartBtn = document.getElementById('open-cart-btn');
  if (cartBtn) {
    cartBtn.onclick = () => {
      const drawer = document.getElementById('cart-drawer');
      if (drawer) drawer.classList.remove('hidden');
    };
  }

  const staffBtn = document.getElementById('staff-portal-nav-btn');
  if (staffBtn) {
    staffBtn.onclick = () => {
      if (state.activeView === 'staff') {
        state.setView('menu');
      } else {
        state.setView('staff');
      }
    };
  }
}
