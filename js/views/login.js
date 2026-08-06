/* ==========================================================================
   USER, MOBILE OTP, ADMIN LOGIN & FORGOT PASSWORD VIEW
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';
import { openModal, closeModal } from '../components/modal.js';
import { isSupabaseConfigured, getSupabaseConfig, setSupabaseConfig } from '../supabase.js';

export function renderLoginView(container) {
  if (!container) return;

  const currentUser = state.currentUser;
  const supabaseActive = isSupabaseConfigured();
  let activeTab = state.loginTab || 'user'; // 'user', 'phone', 'admin', 'register'
  let sentPhone = '';
  let resendCountdown = 30;
  let countdownTimer = null;

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
          <div style="margin-top: 0.75rem;">
            <button type="button" class="btn btn-outline btn-sm" id="auth-supabase-config-btn" style="border-color: ${supabaseActive ? '#10b981' : 'var(--accent-gold)'}; color: ${supabaseActive ? '#10b981' : 'var(--accent-gold)'}; font-size: 0.8rem; border-radius: var(--radius-full);">
              <i class="fa-solid ${supabaseActive ? 'fa-database' : 'fa-bolt'}"></i> ${supabaseActive ? 'Live Supabase Connected' : 'Connect Supabase DB'}
            </button>
          </div>
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
              <p class="user-email">${currentUser.email || currentUser.phone || 'Authenticated User'}</p>
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
                <button class="btn btn-secondary btn-full" id="auth-goto-wishlist-btn">
                  <i class="fa-solid fa-heart" style="color: var(--accent-red);"></i> My Saved Wishlist (${state.wishlist.length})
                </button>
                <button class="btn btn-secondary btn-full" id="auth-goto-orders-btn">
                  <i class="fa-solid fa-clock-rotate-left" style="color: var(--primary);"></i> Track Active Orders
                </button>
                <button class="btn btn-outline btn-full" id="auth-goto-account-btn">
                  <i class="fa-solid fa-user-gear"></i> Account Profile & Reservations
                </button>
              `}
              <button class="btn btn-outline btn-full" id="auth-logout-btn" style="border-color: var(--danger); color: var(--danger);">
                <i class="fa-solid fa-right-from-bracket"></i> Switch Account / Logout
              </button>
            </div>
          </div>
        ` : `
          <!-- Auth Tabs Header -->
          <div class="auth-tabs" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.25rem;">
            <button class="auth-tab ${activeTab === 'user' ? 'active' : ''}" id="tab-user-btn" data-tab="user">
              <i class="fa-solid fa-user"></i> Email Login
            </button>
            <button class="auth-tab ${activeTab === 'phone' ? 'active' : ''}" id="tab-phone-btn" data-tab="phone">
              <i class="fa-solid fa-mobile-screen-button"></i> Mobile OTP
            </button>
            <button class="auth-tab ${activeTab === 'admin' ? 'active' : ''}" id="tab-admin-btn" data-tab="admin">
              <i class="fa-solid fa-user-shield"></i> Admin
            </button>
            <button class="auth-tab ${activeTab === 'register' ? 'active' : ''}" id="tab-register-btn" data-tab="register">
              <i class="fa-solid fa-user-plus"></i> Register
            </button>
          </div>

          <!-- Email / Register / Admin Form -->
          <form id="auth-form" class="auth-form-body">
            <div id="admin-credentials-hint" style="display: none; background: rgba(245, 158, 11, 0.1); border: 1px dashed var(--accent-gold); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                <div style="font-size: 0.85rem; color: var(--text-main);">
                  <strong style="color: var(--accent-gold);"><i class="fa-solid fa-user-shield"></i> Admin Manager Credentials:</strong><br>
                  <span>Username: <code style="color: var(--primary); font-weight: bold;">syamratnam123@gmail.com</code></span><br>
                  <span>Password: <code style="color: var(--primary); font-weight: bold;">Syam@1234</code></span>
                </div>
                <button type="button" class="btn btn-outline btn-xs" id="autofill-admin-btn" style="border-color: var(--accent-gold); color: var(--accent-gold);">
                  <i class="fa-solid fa-wand-magic-sparkles"></i> Auto-fill Credentials
                </button>
              </div>
            </div>

            <div class="form-group" id="group-name" style="display: none;">
              <label class="form-label"><i class="fa-solid fa-signature"></i> Full Name *</label>
              <input type="text" id="auth-name" class="form-input" placeholder="Enter your full name" value="">
            </div>

            <div class="form-group" id="group-email">
              <label class="form-label"><i class="fa-solid fa-envelope"></i> Email Address *</label>
              <input type="email" id="auth-email" class="form-input" placeholder="name@example.com" value="">
            </div>

            <div class="form-group" id="group-password">
              <label class="form-label" style="display: flex; justify-content: space-between; align-items: center;">
                <span><i class="fa-solid fa-lock"></i> Password *</span>
                <a href="#" class="forgot-pass-link" id="forgot-password-link"><i class="fa-solid fa-key"></i> Forgot Password?</a>
              </label>
              <div style="position: relative;">
                <input type="password" id="auth-password" class="form-input" placeholder="••••••••" value="" style="padding-right: 2.5rem;">
                <button type="button" id="toggle-password-visibility" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text-muted); cursor: pointer;" title="Toggle Password Visibility">
                  <i class="fa-solid fa-eye" id="password-eye-icon"></i>
                </button>
              </div>
            </div>

            <div class="auth-submit-area" id="group-submit">
              <button type="submit" class="btn btn-primary btn-full btn-lg" id="auth-submit-btn">
                <i class="fa-solid fa-right-to-bracket"></i> <span id="auth-btn-text">Sign In</span>
              </button>
            </div>
          </form>

          <!-- Mobile OTP Verification Container -->
          <div id="phone-auth-container" style="display: none;" class="auth-form-body">
            <div id="phone-step-1">
              <div class="form-group">
                <label class="form-label"><i class="fa-solid fa-mobile-retro"></i> Mobile Phone Number *</label>
                <div style="display: flex; gap: 0.5rem;">
                  <span style="padding: 0.75rem 0.85rem; background: var(--bg-input); border: 1px solid var(--border-color); border-radius: var(--radius-md); font-weight: 700; color: var(--primary);">+91</span>
                  <input type="tel" id="auth-phone-input" class="form-input" placeholder="Enter 10-digit mobile number" maxlength="10" value="">
                </div>
                <small style="color: var(--text-muted); font-size: 0.78rem; margin-top: 0.3rem; display: block;">
                  A 6-digit SMS verification code will be sent to your mobile.
                </small>
              </div>
              <button type="button" class="btn btn-primary btn-full btn-lg" id="send-otp-btn">
                <i class="fa-solid fa-paper-plane"></i> Send OTP Verification Code
              </button>
            </div>

            <div id="phone-step-2" style="display: none; text-align: center;">
              <div style="background: var(--primary-light); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-active); margin-bottom: 1.25rem;">
                <span style="font-size: 0.85rem; color: var(--text-sub);">Verification code sent to <strong id="sent-phone-display" style="color: var(--primary);">+91 ...</strong></span>
              </div>

              <label class="form-label"><i class="fa-solid fa-shield-halved"></i> Enter 6-Digit OTP Code</label>
              
              <div class="otp-digit-group">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-1" data-index="1">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-2" data-index="2">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-3" data-index="3">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-4" data-index="4">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-5" data-index="5">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-6" data-index="6">
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; margin: 1rem 0;">
                <span class="resend-timer-badge" id="resend-timer-badge">
                  <i class="fa-solid fa-clock"></i> Resend code in <strong id="timer-sec">30</strong>s
                </span>
                <button type="button" class="btn btn-outline btn-sm" id="resend-otp-btn" disabled style="opacity: 0.5;">
                  <i class="fa-solid fa-rotate-right"></i> Resend OTP
                </button>
              </div>

              <button type="button" class="btn btn-primary btn-full btn-lg" id="verify-otp-btn">
                <i class="fa-solid fa-circle-check"></i> Verify & Sign In
              </button>
              
              <button type="button" class="btn btn-link btn-sm" id="change-phone-btn" style="margin-top: 0.75rem; color: var(--text-muted); background: none; border: none; cursor: pointer;">
                <i class="fa-solid fa-pen"></i> Change Phone Number
              </button>
            </div>
          </div>
        `}
      </div>
    </div>
  `;

  // Supabase Config Button Click
  const supabaseConfigBtn = document.getElementById('auth-supabase-config-btn');
  if (supabaseConfigBtn) {
    supabaseConfigBtn.onclick = () => openSupabaseSetupModal(container);
  }

  // Logged-in handlers
  const gotoAdminBtn = document.getElementById('auth-goto-admin-btn');
  if (gotoAdminBtn) gotoAdminBtn.onclick = () => state.setView('admin');

  const gotoMenuBtn = document.getElementById('auth-goto-menu-btn');
  if (gotoMenuBtn) gotoMenuBtn.onclick = () => state.setView('menu');

  const gotoWishlistBtn = document.getElementById('auth-goto-wishlist-btn');
  if (gotoWishlistBtn) gotoWishlistBtn.onclick = () => state.setView('wishlist');

  const gotoOrdersBtn = document.getElementById('auth-goto-orders-btn');
  if (gotoOrdersBtn) gotoOrdersBtn.onclick = () => state.setView('orders');

  const gotoAccountBtn = document.getElementById('auth-goto-account-btn');
  if (gotoAccountBtn) gotoAccountBtn.onclick = () => state.setView('account');

  const logoutBtn = document.getElementById('auth-logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      state.logout();
      showToast('Logged out successfully', 'info');
      renderLoginView(container);
    };
  }

  // Password Visibility Toggle
  const togglePassBtn = document.getElementById('toggle-password-visibility');
  if (togglePassBtn) {
    togglePassBtn.onclick = () => {
      const passField = document.getElementById('auth-password');
      const eyeIcon = document.getElementById('password-eye-icon');
      if (passField) {
        if (passField.type === 'password') {
          passField.type = 'text';
          if (eyeIcon) eyeIcon.className = 'fa-solid fa-eye-slash';
        } else {
          passField.type = 'password';
          if (eyeIcon) eyeIcon.className = 'fa-solid fa-eye';
        }
      }
    };
  }

  // Forgot Password Modal Handler
  const forgotPassLink = document.getElementById('forgot-password-link');
  if (forgotPassLink) {
    forgotPassLink.onclick = (e) => {
      e.preventDefault();
      openForgotPasswordModal();
    };
  }

  // Tab Navigation Elements
  const tabUser = document.getElementById('tab-user-btn');
  const tabPhone = document.getElementById('tab-phone-btn');
  const tabAdmin = document.getElementById('tab-admin-btn');
  const tabRegister = document.getElementById('tab-register-btn');

  const authForm = document.getElementById('auth-form');
  const phoneContainer = document.getElementById('phone-auth-container');
  const nameGroup = document.getElementById('group-name');
  const emailGroup = document.getElementById('group-email');
  const passGroup = document.getElementById('group-password');
  const emailInput = document.getElementById('auth-email');
  const passInput = document.getElementById('auth-password');
  const btnText = document.getElementById('auth-btn-text');
  const subtitle = document.getElementById('auth-subtitle');
  const adminHintBox = document.getElementById('admin-credentials-hint');
  const autofillAdminBtn = document.getElementById('autofill-admin-btn');

  if (autofillAdminBtn) {
    autofillAdminBtn.onclick = () => {
      if (emailInput) emailInput.value = 'syamratnam123@gmail.com';
      if (passInput) passInput.value = 'Syam@1234';
      showToast('Admin Manager credentials filled!', 'info');
    };
  }

  function updateTabs(selectedTab) {
    activeTab = selectedTab;
    state.loginTab = selectedTab;

    [tabUser, tabPhone, tabAdmin, tabRegister].forEach(t => t && t.classList.remove('active'));

    if (adminHintBox) adminHintBox.style.display = 'none';

    // Clear inputs by default
    if (emailInput) emailInput.value = '';
    if (passInput) passInput.value = '';

    if (selectedTab === 'user') {
      if (tabUser) tabUser.classList.add('active');
      if (authForm) authForm.style.display = 'flex';
      if (phoneContainer) phoneContainer.style.display = 'none';
      if (nameGroup) nameGroup.style.display = 'none';
      if (emailGroup) emailGroup.style.display = 'block';
      if (passGroup) passGroup.style.display = 'block';
      if (btnText) btnText.textContent = 'Sign In as Customer';
      if (subtitle) subtitle.textContent = 'Enter your email and password to access your account';
    } else if (selectedTab === 'phone') {
      if (tabPhone) tabPhone.classList.add('active');
      if (authForm) authForm.style.display = 'none';
      if (phoneContainer) phoneContainer.style.display = 'flex';
      if (subtitle) subtitle.textContent = 'Authenticate securely via SMS 6-digit OTP verification code';
    } else if (selectedTab === 'admin') {
      if (tabAdmin) tabAdmin.classList.add('active');
      if (authForm) authForm.style.display = 'flex';
      if (phoneContainer) phoneContainer.style.display = 'none';
      if (nameGroup) nameGroup.style.display = 'none';
      if (emailGroup) emailGroup.style.display = 'block';
      if (passGroup) passGroup.style.display = 'block';
      if (adminHintBox) adminHintBox.style.display = 'block';
      if (emailInput) emailInput.value = 'syamratnam123@gmail.com';
      if (passInput) passInput.value = 'Syam@1234';
      if (btnText) btnText.textContent = 'Sign In to Admin Portal';
      if (subtitle) subtitle.textContent = 'Sign in as Admin Manager (syamratnam123@gmail.com) for Bistro item & branch control';
    } else if (selectedTab === 'register') {
      if (tabRegister) tabRegister.classList.add('active');
      if (authForm) authForm.style.display = 'flex';
      if (phoneContainer) phoneContainer.style.display = 'none';
      if (nameGroup) nameGroup.style.display = 'block';
      if (emailGroup) emailGroup.style.display = 'block';
      if (passGroup) passGroup.style.display = 'block';
      if (btnText) btnText.textContent = 'Create Customer Account';
      if (subtitle) subtitle.textContent = 'Join Savory Bites Bistro for rewards, express checkout & tracking';
    }
  }

  // Set initial tab state
  updateTabs(activeTab);

  if (tabUser) tabUser.onclick = () => updateTabs('user');
  if (tabPhone) tabPhone.onclick = () => updateTabs('phone');
  if (tabAdmin) tabAdmin.onclick = () => updateTabs('admin');
  if (tabRegister) tabRegister.onclick = () => updateTabs('register');

  // Form Submit Handler (Email / Password / Register)
  if (authForm) {
    authForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passInput ? passInput.value.trim() : '';

      if (!email || !password) {
        showToast('Please enter email and password', 'info');
        return;
      }

      if (activeTab === 'register') {
        const nameInput = document.getElementById('auth-name');
        const name = nameInput ? nameInput.value.trim() : '';
        if (!name) {
          showToast('Please enter your full name', 'info');
          return;
        }
        const res = await state.register(name, email, password);
        const sbMsg = isSupabaseConfigured() ? ' (Saved to Supabase DB)' : '';
        showToast(`Welcome ${name}! Account registered${sbMsg}.`, 'success');
        state.setView('menu');
      } else {
        const res = await state.login(email, password, activeTab);
        if (res && res.error) {
          showToast(`Login failed: ${res.error}`, 'info');
        } else if (res && res.user) {
          const sbMsg = isSupabaseConfigured() ? ' (Auth saved to Supabase DB)' : '';
          showToast(`Logged in as ${res.user.name} (${res.user.role.toUpperCase()})${sbMsg}`, 'success');
          if (res.user.role === 'admin') {
            state.setView('admin');
          } else {
            state.setView('menu');
          }
        }
      }
    };
  }

  // Mobile OTP Handlers
  const sendOtpBtn = document.getElementById('send-otp-btn');
  const verifyOtpBtn = document.getElementById('verify-otp-btn');
  const resendOtpBtn = document.getElementById('resend-otp-btn');
  const changePhoneBtn = document.getElementById('change-phone-btn');
  const phoneInput = document.getElementById('auth-phone-input');
  const phoneStep1 = document.getElementById('phone-step-1');
  const phoneStep2 = document.getElementById('phone-step-2');
  const sentPhoneDisplay = document.getElementById('sent-phone-display');

  if (sendOtpBtn) {
    sendOtpBtn.onclick = async () => {
      const num = phoneInput ? phoneInput.value.trim() : '';
      if (!num || num.length < 10) {
        showToast('Please enter a valid 10-digit mobile number', 'info');
        return;
      }

      const res = await state.sendPhoneOTP(num);
      if (res.error) {
        showToast(`Failed to send OTP: ${res.error}`, 'info');
        return;
      }

      sentPhone = res.phone || `+91 ${num}`;
      if (sentPhoneDisplay) sentPhoneDisplay.textContent = sentPhone;
      
      showToast(res.message || `Verification OTP sent to ${sentPhone}`, 'success');

      if (phoneStep1 && phoneStep2) {
        phoneStep1.style.display = 'none';
        phoneStep2.style.display = 'block';
        setupOtpInputAutoAdvance();
        startResendTimer();
      }
    };
  }

  if (resendOtpBtn) {
    resendOtpBtn.onclick = async () => {
      const num = phoneInput ? phoneInput.value.trim() : '';
      const res = await state.sendPhoneOTP(num);
      if (res.error) {
        showToast(`Failed to resend OTP: ${res.error}`, 'info');
        return;
      }
      showToast(res.message || `Resent new OTP code to ${sentPhone}`, 'success');
      startResendTimer();
    };
  }

  if (changePhoneBtn) {
    changePhoneBtn.onclick = () => {
      if (phoneStep1 && phoneStep2) {
        phoneStep1.style.display = 'block';
        phoneStep2.style.display = 'none';
        if (countdownTimer) clearInterval(countdownTimer);
      }
    };
  }

  if (verifyOtpBtn) {
    verifyOtpBtn.onclick = async () => {
      let code = '';
      for (let i = 1; i <= 6; i++) {
        const digitEl = document.getElementById(`otp-${i}`);
        if (digitEl) code += digitEl.value;
      }

      if (code.length !== 6) {
        showToast('Please enter the full 6-digit verification code', 'info');
        return;
      }

      const res = await state.verifyPhoneOTP(sentPhone, code, 'user');
      if (res && res.error) {
        showToast(`Verification failed: ${res.error}`, 'info');
      } else if (res && res.user) {
        const sbMsg = isSupabaseConfigured() ? ' (Auth verified via Supabase)' : '';
        showToast(`Mobile Verification Successful! Welcome ${res.user.name}${sbMsg}`, 'success');
        state.setView('menu');
      }
    };
  }

  function setupOtpInputAutoAdvance() {
    for (let i = 1; i <= 6; i++) {
      const el = document.getElementById(`otp-${i}`);
      if (!el) continue;

      el.value = '';
      el.oninput = (e) => {
        const val = e.target.value;
        if (val && i < 6) {
          const nextEl = document.getElementById(`otp-${i + 1}`);
          if (nextEl) nextEl.focus();
        }
      };

      el.onkeydown = (e) => {
        if (e.key === 'Backspace' && !el.value && i > 1) {
          const prevEl = document.getElementById(`otp-${i - 1}`);
          if (prevEl) prevEl.focus();
        }
      };
    }
    const firstOtp = document.getElementById('otp-1');
    if (firstOtp) firstOtp.focus();
  }

  function startResendTimer() {
    if (countdownTimer) clearInterval(countdownTimer);
    resendCountdown = 30;
    const badge = document.getElementById('resend-timer-badge');
    const secEl = document.getElementById('timer-sec');
    if (resendOtpBtn) {
      resendOtpBtn.disabled = true;
      resendOtpBtn.style.opacity = '0.5';
    }

    countdownTimer = setInterval(() => {
      resendCountdown--;
      if (secEl) secEl.textContent = resendCountdown;
      if (resendCountdown <= 0) {
        clearInterval(countdownTimer);
        if (badge) badge.style.display = 'none';
        if (resendOtpBtn) {
          resendOtpBtn.disabled = false;
          resendOtpBtn.style.opacity = '1';
        }
      }
    }, 1000);
  }
}

/* ==========================================================================
   FORGOT PASSWORD MODAL COMPONENT
   ========================================================================== */
function openForgotPasswordModal() {
  const bodyHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--primary-light); color: var(--primary); font-size: 1.8rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
        <i class="fa-solid fa-key"></i>
      </div>
      <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.4rem;">Reset Your Password</h3>
      <p style="font-size: 0.88rem; color: var(--text-muted);">
        Enter your registered email address and we will send password reset instructions to your inbox.
      </p>
    </div>

    <form id="forgot-pass-form">
      <div class="form-group">
        <label class="form-label"><i class="fa-solid fa-envelope"></i> Account Email Address *</label>
        <input type="email" id="reset-email-input" class="form-input" required placeholder="Enter your account email" value="">
      </div>

      <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <button type="submit" class="btn btn-primary btn-full btn-lg">
          <i class="fa-solid fa-paper-plane"></i> Send Password Reset Link
        </button>
        <button type="button" class="btn btn-outline btn-full" id="cancel-reset-btn">
          Cancel
        </button>
      </div>
    </form>
  `;

  openModal({
    title: 'Password Reset Request',
    bodyHTML
  });

  const form = document.getElementById('forgot-pass-form');
  const cancelBtn = document.getElementById('cancel-reset-btn');

  if (cancelBtn) cancelBtn.onclick = closeModal;

  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('reset-email-input');
      const email = emailInput ? emailInput.value.trim() : '';

      if (!email) {
        showToast('Please enter your email address', 'info');
        return;
      }

      const res = await state.requestPasswordReset(email);
      if (res && res.error) {
        showToast(res.error, 'info', 7000);
      } else {
        showToast(res.message || `Password reset link sent to ${email}`, 'success');
        closeModal();
      }
    };
  }
}

/* ==========================================================================
   SUPABASE CONNECTION & SQL SCHEMA SETUP MODAL
   ========================================================================== */
function openSupabaseSetupModal(viewContainer) {
  const currentConfig = getSupabaseConfig();
  const isConnected = isSupabaseConfigured();

  const bodyHTML = `
    <div style="margin-bottom: 1.25rem;">
      <div class="config-status-banner ${isConnected ? 'status-connected' : 'status-disconnected'}" style="padding: 0.85rem 1rem; margin-bottom: 1.25rem;">
        <i class="fa-solid ${isConnected ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i>
        <div>
          <strong style="font-size: 0.95rem;">${isConnected ? 'Supabase Backend Connected' : 'Supabase Not Connected Yet'}</strong>
          <p style="font-size: 0.82rem; margin-top: 0.2rem; color: var(--text-sub);">
            ${isConnected ? 'Live authentication, dishes, orders, and reservations are syncing directly with your Supabase database.' : 'Enter your Supabase Project URL and Anon API Key below to connect live backend auth & database storage.'}
          </p>
        </div>
      </div>

      <form id="supabase-modal-form">
        <div class="form-group">
          <label class="form-label"><i class="fa-solid fa-link"></i> Supabase Project URL *</label>
          <input type="url" id="sb-input-url" class="form-input" placeholder="https://xyzcompany.supabase.co" value="${currentConfig.url || ''}">
        </div>

        <div class="form-group">
          <label class="form-label"><i class="fa-solid fa-key"></i> Supabase Anon / Public API Key *</label>
          <input type="text" id="sb-input-key" class="form-input" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." value="${currentConfig.key || ''}">
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 1.25rem; flex-wrap: wrap;">
          <button type="submit" class="btn btn-primary btn-full">
            <i class="fa-solid fa-floppy-disk"></i> Save & Connect Supabase
          </button>
          ${isConnected ? `
            <button type="button" class="btn btn-accent btn-full" id="sb-sync-admin-btn">
              <i class="fa-solid fa-user-shield"></i> Create / Sync Admin Manager (syamratnam123@gmail.com) in Supabase
            </button>
            <button type="button" class="btn btn-outline btn-full" id="sb-disconnect-btn" style="border-color: var(--danger); color: var(--danger);">
              Disconnect
            </button>
          ` : ''}
        </div>
      </form>

      <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px dashed var(--border-color);">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span><i class="fa-solid fa-code" style="color: var(--primary);"></i> Supabase SQL Tables Schema</span>
          <button type="button" class="btn btn-outline btn-sm" id="copy-sql-schema-btn">
            <i class="fa-solid fa-copy"></i> Copy SQL Code
          </button>
        </h4>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          Paste this SQL into your Supabase Dashboard SQL Editor to automatically create the required database tables.
        </p>

        <textarea id="sql-schema-textarea" readonly style="width: 100%; height: 160px; font-family: monospace; font-size: 0.75rem; padding: 0.75rem; background: var(--bg-dark); color: #3ecf8e; border: 1px solid var(--border-color); border-radius: var(--radius-sm); resize: vertical;">
-- SAVORY BITES BISTRO - SUPABASE DATABASE TABLES SCHEMA
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  phone TEXT,
  role TEXT DEFAULT 'customer',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.dishes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC NOT NULL,
  description TEXT,
  prep_time TEXT,
  calories TEXT,
  image TEXT,
  rating NUMERIC DEFAULT 4.8,
  reviews INTEGER DEFAULT 1,
  tags TEXT[],
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.locations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  hours TEXT,
  delivery_radius TEXT,
  avg_delivery_time TEXT,
  rating NUMERIC DEFAULT 4.9,
  features TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT,
  phone TEXT,
  delivery_address TEXT,
  items JSONB,
  subtotal NUMERIC,
  tax NUMERIC,
  grand_total NUMERIC,
  status TEXT DEFAULT 'placed',
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.reservations (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  location_id TEXT,
  location_name TEXT,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  guests INTEGER NOT NULL,
  special_requests TEXT,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dishes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Access" ON public.dishes;
DROP POLICY IF EXISTS "Public Read Access" ON public.locations;
DROP POLICY IF EXISTS "Public All Access" ON public.profiles;
DROP POLICY IF EXISTS "Public All Access" ON public.orders;
DROP POLICY IF EXISTS "Public All Access" ON public.reservations;
DROP POLICY IF EXISTS "Public Dish Control" ON public.dishes;
DROP POLICY IF EXISTS "Public Location Control" ON public.locations;

CREATE POLICY "Public Read Access" ON public.dishes FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON public.locations FOR SELECT USING (true);
CREATE POLICY "Public All Access" ON public.profiles FOR ALL USING (true);
CREATE POLICY "Public All Access" ON public.orders FOR ALL USING (true);
CREATE POLICY "Public All Access" ON public.reservations FOR ALL USING (true);
CREATE POLICY "Public Dish Control" ON public.dishes FOR ALL USING (true);
CREATE POLICY "Public Location Control" ON public.locations FOR ALL USING (true);
</textarea>
      </div>
    </div>
  `;

  openModal({
    title: 'Supabase Database Connection',
    bodyHTML
  });

  const form = document.getElementById('supabase-modal-form');
  const disconnectBtn = document.getElementById('sb-disconnect-btn');
  const syncAdminBtn = document.getElementById('sb-sync-admin-btn');
  const copySqlBtn = document.getElementById('copy-sql-schema-btn');

  if (syncAdminBtn) {
    syncAdminBtn.onclick = async () => {
      syncAdminBtn.disabled = true;
      syncAdminBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Syncing Admin Manager with Supabase...`;
      const res = await state.createOrSyncAdminManagerInSupabase('syamratnam123@gmail.com', 'Syam@1234');
      if (res.error) {
        showToast(`Sync Notice: ${res.error}`, 'info');
        syncAdminBtn.disabled = false;
        syncAdminBtn.innerHTML = `<i class="fa-solid fa-user-shield"></i> Create / Sync Admin Manager (syamratnam123@gmail.com) in Supabase`;
      } else {
        showToast(res.message || 'Admin Manager created & synced in Supabase Auth & DB!', 'success');
        closeModal();
        renderLoginView(viewContainer);
      }
    };
  }

  if (copySqlBtn) {
    copySqlBtn.onclick = () => {
      const sqlText = document.getElementById('sql-schema-textarea');
      if (sqlText) {
        sqlText.select();
        navigator.clipboard.writeText(sqlText.value);
        showToast('SQL Schema code copied to clipboard!', 'success');
      }
    };
  }

  if (disconnectBtn) {
    disconnectBtn.onclick = () => {
      setSupabaseConfig('', '');
      showToast('Supabase disconnected.', 'info');
      closeModal();
      renderLoginView(viewContainer);
    };
  }

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const urlInput = document.getElementById('sb-input-url');
      const keyInput = document.getElementById('sb-input-key');
      const url = urlInput ? urlInput.value.trim() : '';
      const key = keyInput ? keyInput.value.trim() : '';

      if (!url || !key) {
        showToast('Please enter both Supabase URL and Anon Key', 'info');
        return;
      }

      const success = setSupabaseConfig(url, key);
      if (success) {
        showToast('Supabase Database Connected Live!', 'success');
        closeModal();
        state.syncWithSupabase();
        renderLoginView(viewContainer);
      } else {
        showToast('Invalid Supabase URL or Key format', 'info');
      }
    };
  }
}
