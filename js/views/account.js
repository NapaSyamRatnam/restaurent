/* ==========================================================================
   USER ACCOUNT & PROFILE DASHBOARD
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';
import { openModal, closeModal } from '../components/modal.js';

export function renderAccountView(container) {
  const profile = state.profile;
  const rewardCash = (profile.rewardPoints / 10).toFixed(2);

  container.innerHTML = `
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-user-gear" style="color: var(--primary);"></i> Account Settings & Address Book</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Manage your profile details, delivery addresses, payment methods, and loyalty reward cash.</p>
      </div>

      <div class="account-layout">
        <!-- Sidebar Profile Card -->
        <aside>
          <div class="profile-card">
            <div class="avatar-wrapper">
              <i class="fa-solid fa-user"></i>
            </div>
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.2rem;">${profile.name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">${profile.email}</p>

            <span class="badge badge-gold" style="font-size: 0.8rem; margin-bottom: 1.5rem;">
              <i class="fa-solid fa-crown"></i> ${profile.loyaltyTier}
            </span>

            <div style="background: var(--bg-dark); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: left; margin-bottom: 1.5rem;">
              <div style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 0.3rem;">
                <i class="fa-solid fa-coins" style="color: var(--accent-gold);"></i> Gourmet Reward Points
              </div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-gold);">${profile.rewardPoints} Points</div>
              <div style="font-size: 0.78rem; color: var(--accent-green); font-weight: 600; margin-top: 0.25rem;">
                = $${rewardCash} Redeemable Discount Cash
              </div>
            </div>

            <div class="account-nav">
              <button class="account-nav-btn active" data-tab="addresses">
                <i class="fa-solid fa-map-location-dot"></i> Saved Addresses
              </button>
              <button class="account-nav-btn" data-tab="payments">
                <i class="fa-solid fa-credit-card"></i> Saved Payment Methods
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Account Content -->
        <main>
          <!-- Addresses Panel -->
          <div id="account-tab-addresses">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <h3 style="font-size: 1.25rem; font-weight: 700;">Delivery Address Book</h3>
              <button class="btn btn-primary btn-sm" id="add-new-address-btn">
                <i class="fa-solid fa-plus"></i> Add New Address
              </button>
            </div>

            <div class="address-grid">
              ${profile.addresses.map(addr => `
                <div class="address-card ${addr.isDefault ? 'default' : ''}">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span style="font-weight: 700; font-size: 1rem; color: var(--text-main); display: flex; align-items: center; gap: 0.4rem;">
                      <i class="fa-solid ${addr.label === 'Home' ? 'fa-house-chimney' : 'fa-building'}" style="color: var(--primary);"></i>
                      ${addr.label}
                    </span>
                    ${addr.isDefault ? `<span class="badge badge-primary">Default</span>` : ''}
                  </div>

                  <p style="font-size: 0.9rem; color: var(--text-sub); margin-bottom: 0.5rem; line-height: 1.4;">
                    ${addr.street}<br>
                    ${addr.city}, ${addr.zip}
                  </p>

                  <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                    <i class="fa-solid fa-phone"></i> ${profile.phone}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Payment Methods Panel -->
          <div id="account-tab-payments" style="display: none; margin-top: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem;">Saved Payment Methods</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem;">
              <div class="address-card default">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <i class="fa-brands fa-cc-visa" style="font-size: 2rem; color: #3b82f6;"></i>
                  <span class="badge badge-primary">Primary Card</span>
                </div>
                <div style="font-family: monospace; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 1px;">
                  •••• •••• •••• 4892
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Expires 09/29 • ${profile.name}</div>
              </div>

              <div class="address-card">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <i class="fa-brands fa-apple-pay" style="font-size: 2rem; color: var(--text-main);"></i>
                  <span class="badge badge-green">Connected</span>
                </div>
                <div style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">
                  Apple Pay Wallet
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">One-touch checkout enabled</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  `;

  // Tab switching
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-tab');
      if (target === 'addresses') {
        document.getElementById('account-tab-addresses').style.display = 'block';
        document.getElementById('account-tab-payments').style.display = 'none';
      } else {
        document.getElementById('account-tab-addresses').style.display = 'none';
        document.getElementById('account-tab-payments').style.display = 'block';
      }
    };
  });

  // Add Address Modal
  const addAddrBtn = document.getElementById('add-new-address-btn');
  if (addAddrBtn) {
    addAddrBtn.onclick = () => {
      openAddAddressModal(container);
    };
  }
}

function openAddAddressModal(container) {
  const bodyHTML = `
    <div class="form-group">
      <label class="form-label">Address Label</label>
      <input type="text" id="new-addr-label" class="form-input" placeholder="e.g. Home, Office, Summer House">
    </div>

    <div class="form-group">
      <label class="form-label">Street Address & Apartment</label>
      <input type="text" id="new-addr-street" class="form-input" placeholder="e.g. 120 Ocean Drive, Apt 3C">
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">City & State</label>
        <input type="text" id="new-addr-city" class="form-input" placeholder="e.g. Nellore, Andhra Pradesh">
      </div>
      <div class="form-group">
        <label class="form-label">PIN Code</label>
        <input type="text" id="new-addr-zip" class="form-input" placeholder="e.g. 524001">
      </div>
    </div>

    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub); cursor: pointer;">
      <input type="checkbox" id="new-addr-default" checked> Set as primary default delivery address
    </label>
  `;

  const footerHTML = `
    <button class="btn btn-secondary" id="modal-cancel-addr">Cancel</button>
    <button class="btn btn-primary" id="modal-save-addr">Save Address</button>
  `;

  openModal({
    title: 'Add New Delivery Address',
    bodyHTML,
    footerHTML
  });

  document.getElementById('modal-cancel-addr').onclick = closeModal;
  document.getElementById('modal-save-addr').onclick = () => {
    const label = document.getElementById('new-addr-label').value.trim() || 'Other';
    const street = document.getElementById('new-addr-street').value.trim();
    const city = document.getElementById('new-addr-city').value.trim() || 'Nellore, Andhra Pradesh';
    const zip = document.getElementById('new-addr-zip').value.trim() || '524001';
    const isDefault = document.getElementById('new-addr-default').checked;

    if (!street) {
      showToast('Please enter a street address', 'info');
      return;
    }

    state.addAddress({ label, street, city, zip, isDefault });
    closeModal();
    showToast('New Address Saved!', 'success');
    renderAccountView(container);
  };
}
