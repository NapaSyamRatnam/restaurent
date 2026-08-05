/* ==========================================================================
   USER & ADMIN LOGIN / REGISTRATION VIEW
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';

export function renderLoginView(container) {
  if (!container) return;

  const currentUser = state.currentUser;
  let activeTab = 'user'; // 'user', 'admin', 'register'

  container.innerHTML = `
    <div class="auth-view-container">
      <div class="auth-card">
        <!-- Auth Card Header -->
        <div class="auth-header">
          <div class="auth-brand-logo">
            <i class="fa-solid fa-utensils"></i>
          </div>
          <h2>Savory Bites Portal</h2>
          <p id="auth-subtitle">Log in to manage orders, wishlist, and account preferences</p>
        </div>

        ${currentUser ? `
          <!-- Logged In Status Banner -->
          <div class="auth-logged-in-box">
            <div class="user-avatar-large">
              <i class="fa-solid ${currentUser.role === 'admin' ? 'fa-user-shield' : 'fa-user'}"></i>
            </div>
            <div class="logged-user-details">
              <h3>Currently Logged In As:</h3>
              <p class="user-name">${currentUser.name} <span class="role-pill role-${currentUser.role}">${currentUser.role.toUpperCase()}</span></p>
              <p class="user-email">${currentUser.email}</p>
            </div>
            <div class="logged-in-actions">
              ${currentUser.role === 'admin' ? `
                <button class="btn btn-primary btn-full" id="auth-goto-admin-btn">
                  <i class="fa-solid fa-gauge-high"></i> Go to Admin Dashboard
                </button>
              ` : `
                <button class="btn btn-primary btn-full" id="auth-goto-menu-btn">
                  <i class="fa-solid fa-utensils"></i> Browse Gourmet Menu
                </button>
              `}
              <button class="btn btn-outline btn-full" id="auth-logout-btn" style="border-color: var(--danger); color: var(--danger);">
                <i class="fa-solid fa-right-from-bracket"></i> Switch Account / Logout
              </button>
            </div>
          </div>
        ` : `
          <!-- Auth Tabs Header -->
          <div class="auth-tabs">
            <button class="auth-tab active" id="tab-user-btn" data-tab="user">
              <i class="fa-solid fa-user"></i> Customer Login
            </button>
            <button class="auth-tab" id="tab-admin-btn" data-tab="admin">
              <i class="fa-solid fa-user-shield"></i> Admin Portal
            </button>
            <button class="auth-tab" id="tab-register-btn" data-tab="register">
              <i class="fa-solid fa-user-plus"></i> New Account
            </button>
          </div>

          <!-- Quick One-Click Demo Logins -->
          <div class="auth-quick-demo">
            <span class="quick-demo-title"><i class="fa-solid fa-bolt"></i> One-Click Demo Access:</span>
            <div class="quick-demo-buttons">
              <button class="btn btn-outline btn-sm demo-btn" id="demo-user-btn" title="Log in as Customer Syam">
                <i class="fa-solid fa-user"></i> Customer: syam@gmail.com
              </button>
              <button class="btn btn-outline btn-sm demo-btn admin-demo-btn" id="demo-admin-btn" title="Log in as Admin Manager">
                <i class="fa-solid fa-crown"></i> Admin: admin@savorybites.com
              </button>
            </div>
          </div>

          <!-- Auth Form Body -->
          <form id="auth-form" class="auth-form-body">
            <div class="form-group" id="group-name" style="display: none;">
              <label class="form-label"><i class="fa-solid fa-signature"></i> Full Name *</label>
              <input type="text" id="auth-name" class="form-input" placeholder="e.g. Syam Sundar">
            </div>

            <div class="form-group">
              <label class="form-label"><i class="fa-solid fa-envelope"></i> Email Address *</label>
              <input type="email" id="auth-email" class="form-input" required placeholder="name@example.com" value="syam@gmail.com">
            </div>

            <div class="form-group">
              <label class="form-label"><i class="fa-solid fa-lock"></i> Password *</label>
              <input type="password" id="auth-password" class="form-input" required placeholder="••••••••" value="user123">
            </div>

            <div class="auth-submit-area">
              <button type="submit" class="btn btn-primary btn-full btn-lg" id="auth-submit-btn">
                <i class="fa-solid fa-right-to-bracket"></i> <span id="auth-btn-text">Sign In as Customer</span>
              </button>
            </div>
          </form>
        `}
      </div>
    </div>
  `;

  // Logged-in view event handlers
  const gotoAdminBtn = document.getElementById('auth-goto-admin-btn');
  if (gotoAdminBtn) gotoAdminBtn.onclick = () => state.setView('admin');

  const gotoMenuBtn = document.getElementById('auth-goto-menu-btn');
  if (gotoMenuBtn) gotoMenuBtn.onclick = () => state.setView('menu');

  const logoutBtn = document.getElementById('auth-logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      state.logout();
      showToast('Logged out successfully', 'info');
      renderLoginView(container);
    };
  }

  // Demo Login Buttons
  const demoUserBtn = document.getElementById('demo-user-btn');
  if (demoUserBtn) {
    demoUserBtn.onclick = () => {
      state.login('syam@gmail.com', 'user123', 'user');
      showToast('Logged in as Customer (Syam)', 'success');
      state.setView('menu');
    };
  }

  const demoAdminBtn = document.getElementById('demo-admin-btn');
  if (demoAdminBtn) {
    demoAdminBtn.onclick = () => {
      state.login('admin@savorybites.com', 'admin123', 'admin');
      showToast('Logged in as Admin Manager', 'success');
      state.setView('admin');
    };
  }

  // Tab Handlers
  const tabUser = document.getElementById('tab-user-btn');
  const tabAdmin = document.getElementById('tab-admin-btn');
  const tabRegister = document.getElementById('tab-register-btn');

  const nameGroup = document.getElementById('group-name');
  const emailInput = document.getElementById('auth-email');
  const passInput = document.getElementById('auth-password');
  const nameInput = document.getElementById('auth-name');
  const btnText = document.getElementById('auth-btn-text');
  const subtitle = document.getElementById('auth-subtitle');

  function updateTabs(selectedTab) {
    activeTab = selectedTab;
    [tabUser, tabAdmin, tabRegister].forEach(t => t && t.classList.remove('active'));

    if (selectedTab === 'user') {
      if (tabUser) tabUser.classList.add('active');
      if (nameGroup) nameGroup.style.display = 'none';
      if (emailInput) emailInput.value = 'syam@gmail.com';
      if (passInput) passInput.value = 'user123';
      if (btnText) btnText.textContent = 'Sign In as Customer';
      if (subtitle) subtitle.textContent = 'Log in to manage orders, wishlist, and account preferences';
    } else if (selectedTab === 'admin') {
      if (tabAdmin) tabAdmin.classList.add('active');
      if (nameGroup) nameGroup.style.display = 'none';
      if (emailInput) emailInput.value = 'admin@savorybites.com';
      if (passInput) passInput.value = 'admin123';
      if (btnText) btnText.textContent = 'Sign In to Admin Portal';
      if (subtitle) subtitle.textContent = 'Restricted access for restaurant managers & item control';
    } else if (selectedTab === 'register') {
      if (tabRegister) tabRegister.classList.add('active');
      if (nameGroup) nameGroup.style.display = 'block';
      if (emailInput) emailInput.value = '';
      if (passInput) passInput.value = '';
      if (btnText) btnText.textContent = 'Create Customer Account';
      if (subtitle) subtitle.textContent = 'Join Savory Bites Bistro for rewards, express checkout & tracking';
    }
  }

  if (tabUser) tabUser.onclick = () => updateTabs('user');
  if (tabAdmin) tabAdmin.onclick = () => updateTabs('admin');
  if (tabRegister) tabRegister.onclick = () => updateTabs('register');

  // Form Submit Handler
  const form = document.getElementById('auth-form');
  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passInput ? passInput.value.trim() : '';

      if (!email || !password) {
        showToast('Please enter email and password', 'info');
        return;
      }

      if (activeTab === 'register') {
        const name = nameInput ? nameInput.value.trim() : '';
        if (!name) {
          showToast('Please enter your full name', 'info');
          return;
        }
        await state.register(name, email, password);
        showToast(`Welcome ${name}! Account registered.`, 'success');
        state.setView('menu');
      } else {
        const res = await state.login(email, password, activeTab);
        if (res && res.user) {
          showToast(`Logged in as ${res.user.name} (${res.user.role.toUpperCase()})`, 'success');
          if (res.user.role === 'admin') {
            state.setView('admin');
          } else {
            state.setView('menu');
          }
        }
      }
    };
  }
}
