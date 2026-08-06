/* ==========================================================================
   NAVIGATION BAR COMPONENT
   ========================================================================== */

import { state } from '../state.js';
import { openDishModal, openLocationModal } from './adminModal.js';
import { showToast } from './toast.js';

export function renderNavbar() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = state.wishlist.length;
  const activeView = state.activeView;
  const currentUser = state.currentUser;
  const isAdmin = state.isAdmin();

  header.innerHTML = `
    <div class="nav-container">
      <a href="#" class="brand-logo" id="nav-brand-btn">
        <div class="brand-icon-wrapper">
          <i class="fa-solid fa-utensils"></i>
        </div>
        <span>SAVORY BITES <span class="brand-accent">BISTRO</span></span>
      </a>

      <nav class="nav-links" id="main-nav-links">
        <button class="nav-link ${activeView === 'landing' ? 'active' : ''}" data-nav="landing">
          <i class="fa-solid fa-house"></i> Home
        </button>
        <button class="nav-link ${activeView === 'menu' ? 'active' : ''}" data-nav="menu">
          <i class="fa-solid fa-book-open"></i> Menu
        </button>
        <button class="nav-link ${activeView === 'location' ? 'active' : ''}" data-nav="location">
          <i class="fa-solid fa-location-dot"></i> Locations
        </button>
        <button class="nav-link ${activeView === 'orders' ? 'active' : ''}" data-nav="orders">
          <i class="fa-solid fa-clock-rotate-left"></i> Track Orders
        </button>
        ${state.isLoggedIn() ? `
          <button class="nav-link ${activeView === 'wishlist' ? 'active' : ''}" data-nav="wishlist">
            <i class="fa-solid fa-heart"></i> Wishlist
            ${wishlistCount > 0 ? `<span class="badge-counter">${wishlistCount}</span>` : ''}
          </button>
        ` : ''}
        ${isAdmin ? `
          <button class="nav-link nav-admin-link ${activeView === 'admin' ? 'active' : ''}" data-nav="admin" title="Admin Portal">
            <i class="fa-solid fa-user-shield"></i> Admin Page
          </button>
        ` : !state.isLoggedIn() ? `
          <button class="nav-link nav-admin-link ${activeView === 'admin' ? 'active' : ''}" data-nav="admin" title="Admin Portal">
            <i class="fa-solid fa-user-shield"></i> Admin Portal
          </button>
        ` : ''}
      </nav>

      <div class="nav-actions">
        <button class="btn-icon" id="theme-toggle-btn" title="Toggle Theme">
          <i class="fa-solid ${state.theme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>
        </button>

        <button class="btn btn-primary" id="open-cart-btn">
          <i class="fa-solid fa-basket-shopping"></i>
          <span class="nav-cart-text">Cart</span>
          ${cartCount > 0 ? `<span class="badge-counter">${cartCount}</span>` : ''}
        </button>

        <!-- User Authentication & Profile Pill -->
        ${currentUser ? `
          <button class="nav-user-pill ${activeView === 'login' ? 'active' : ''}" id="nav-user-btn">
            <span class="user-role-badge ${currentUser.role}">${currentUser.role.toUpperCase()}</span>
            <span class="nav-user-name">${currentUser.name}</span>
          </button>
        ` : `
          <button class="btn btn-secondary btn-sm ${activeView === 'login' ? 'active' : ''}" id="nav-login-btn">
            <i class="fa-solid fa-right-to-bracket"></i> Login
          </button>
        `}

        <button class="btn-icon mobile-menu-toggle-btn" id="mobile-menu-toggle-btn" title="Toggle Mobile Navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  `;

  // Attach navbar event listeners
  const navLinksElem = document.getElementById('main-nav-links');

  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      if (navLinksElem) navLinksElem.classList.remove('nav-links-mobile-open');
      const targetView = btn.getAttribute('data-nav');
      if ((targetView === 'wishlist' || targetView === 'orders') && !state.isLoggedIn()) {
        showToast(`Please log in to access your ${targetView === 'wishlist' ? 'Wishlist' : 'Order Tracking'}.`, 'info');
        state.setView('login');
      } else if (targetView === 'admin' && !state.isAdmin()) {
        showToast('Admin permission required. Please log in as Admin.', 'info');
        state.setView('login', 'admin');
      } else {
        state.setView(targetView);
      }
    };
  });

  const mobileToggleBtn = document.getElementById('mobile-menu-toggle-btn');
  if (mobileToggleBtn && navLinksElem) {
    mobileToggleBtn.onclick = () => {
      navLinksElem.classList.toggle('nav-links-mobile-open');
    };
  }

  const brandBtn = document.getElementById('nav-brand-btn');
  if (brandBtn) {
    brandBtn.onclick = (e) => {
      e.preventDefault();
      if (navLinksElem) navLinksElem.classList.remove('nav-links-mobile-open');
      state.setView('landing');
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

  const userBtn = document.getElementById('nav-user-btn');
  if (userBtn) {
    userBtn.onclick = () => state.setView('login');
  }

  const loginBtn = document.getElementById('nav-login-btn');
  if (loginBtn) {
    loginBtn.onclick = () => state.setView('login');
  }
}


