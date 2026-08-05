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

      <nav class="nav-links">
        <button class="nav-link ${activeView === 'landing' ? 'active' : ''}" data-nav="landing">
          <i class="fa-solid fa-house"></i> Home
        </button>
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
        <button class="nav-link ${activeView === 'location' ? 'active' : ''}" data-nav="location">
          <i class="fa-solid fa-location-dot"></i> Locations
        </button>
        ${isAdmin ? `
          <button class="nav-link nav-admin-link ${activeView === 'admin' ? 'active' : ''}" data-nav="admin" title="Admin Dashboard Page">
            <i class="fa-solid fa-user-shield"></i> Admin Page
          </button>
        ` : ''}
      </nav>

      <div class="nav-actions">
        ${isAdmin ? `
          <!-- Quick Admin Action Buttons (Visible for Admin) -->
          <button class="btn btn-outline btn-sm nav-admin-btn" id="nav-add-dish-btn" title="Add New Menu Item (Admin)" style="border-color: var(--primary); color: var(--primary);">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>

          <button class="btn btn-outline btn-sm nav-admin-btn" id="nav-add-branch-btn" title="Add New Restaurant Branch (Admin)" style="border-color: var(--accent-gold); color: var(--accent-gold);">
            <i class="fa-solid fa-building-circle-check"></i> Add Branch
          </button>
        ` : ''}

        <button class="btn-icon" id="theme-toggle-btn" title="Toggle Theme">
          <i class="fa-solid ${state.theme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>
        </button>

        <button class="btn btn-primary" id="open-cart-btn">
          <i class="fa-solid fa-basket-shopping"></i>
          <span>Cart</span>
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
      </div>
    </div>
  `;

  // Attach navbar event listeners
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const targetView = btn.getAttribute('data-nav');
      if (targetView === 'admin' && !state.isAdmin()) {
        showToast('Admin permission required. Please log in as Admin.', 'info');
        state.setView('login');
      } else {
        state.setView(targetView);
      }
    };
  });

  const brandBtn = document.getElementById('nav-brand-btn');
  if (brandBtn) {
    brandBtn.onclick = (e) => {
      e.preventDefault();
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

  const addDishBtn = document.getElementById('nav-add-dish-btn');
  if (addDishBtn) {
    addDishBtn.onclick = () => {
      if (state.isAdmin()) {
        openDishModal();
      } else {
        showToast('Admin permissions required to add items.', 'info');
        state.setView('login');
      }
    };
  }

  const addBranchBtn = document.getElementById('nav-add-branch-btn');
  if (addBranchBtn) {
    addBranchBtn.onclick = () => {
      if (state.isAdmin()) {
        openLocationModal();
      } else {
        showToast('Admin permissions required to add branch locations.', 'info');
        state.setView('login');
      }
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
