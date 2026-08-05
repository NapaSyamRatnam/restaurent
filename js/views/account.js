/* ==========================================================================
   USER ACCOUNT & PROFILE DASHBOARD (PROFILE, ADDRESSES, PAYMENTS, LOYALTY)
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';
import { openModal, closeModal } from '../components/modal.js';

export function renderAccountView(container) {
  const profile = state.profile;
  const rewardCash = (profile.rewardPoints / 10).toFixed(2);
  const addresses = profile.addresses || [];
  const paymentMethods = profile.paymentMethods || [];

  container.innerHTML = `
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <div>
          <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-user-gear" style="color: var(--primary);"></i> Account Settings & Address Book</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Manage your profile details, delivery addresses, payment methods, and loyalty reward cash.</p>
        </div>

        <button class="btn btn-outline btn-sm" id="edit-profile-details-btn" style="border-color: var(--primary); color: var(--primary);">
          <i class="fa-solid fa-pen-to-square"></i> Edit Profile Info
        </button>
      </div>

      <div class="account-layout">
        <!-- Sidebar Profile Card -->
        <aside>
          <div class="profile-card">
            <div class="avatar-wrapper">
              <i class="fa-solid fa-user"></i>
            </div>
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.2rem;">${profile.name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">${profile.email}</p>
            <p style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 1rem;"><i class="fa-solid fa-phone"></i> ${profile.phone}</p>

            <span class="badge badge-gold" style="font-size: 0.8rem; margin-bottom: 1.5rem;">
              <i class="fa-solid fa-crown"></i> ${profile.loyaltyTier || 'Gold Gourmet Member'}
            </span>

            <!-- Loyalty Reward Cash Box -->
            <div style="background: var(--bg-dark); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: left; margin-bottom: 1.5rem;">
              <div style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 0.3rem;">
                <i class="fa-solid fa-coins" style="color: var(--accent-gold);"></i> Gourmet Reward Points
              </div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-gold);">${profile.rewardPoints} Points</div>
              <div style="font-size: 0.78rem; color: var(--accent-green); font-weight: 600; margin-top: 0.25rem; margin-bottom: 0.75rem;">
                = ₹${rewardCash} Redeemable Discount Cash
              </div>

              <button class="btn btn-primary btn-sm btn-full" id="redeem-points-btn" ${profile.rewardPoints < 100 ? 'disabled' : ''}>
                <i class="fa-solid fa-gift"></i> ${profile.rewardPoints >= 100 ? 'Redeem Cash Credit' : 'Min 100 Points to Redeem'}
              </button>
            </div>

            <!-- Navigation Tabs -->
            <div class="account-nav">
              <button class="account-nav-btn active" data-tab="addresses">
                <i class="fa-solid fa-map-location-dot"></i> Saved Addresses (${addresses.length})
              </button>
              <button class="account-nav-btn" data-tab="payments">
                <i class="fa-solid fa-credit-card"></i> Saved Payment Methods (${paymentMethods.length})
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Account Content -->
        <main>
          <!-- Addresses Panel -->
          <div id="account-tab-addresses">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 700;">Delivery Address Book</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Manage your default home, office, and delivery addresses.</p>
              </div>

              <button class="btn btn-primary btn-sm" id="add-new-address-btn">
                <i class="fa-solid fa-plus"></i> Add New Address
              </button>
            </div>

            <div class="address-grid">
              ${addresses.map(addr => `
                <div class="address-card ${addr.isDefault ? 'default' : ''}">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span style="font-weight: 700; font-size: 1rem; color: var(--text-main); display: flex; align-items: center; gap: 0.4rem;">
                      <i class="fa-solid ${addr.label.toLowerCase().includes('home') ? 'fa-house-chimney' : addr.label.toLowerCase().includes('work') ? 'fa-building' : 'fa-location-dot'}" style="color: var(--primary);"></i>
                      ${addr.label}
                    </span>
                    ${addr.isDefault ? `<span class="badge badge-primary">Default</span>` : `
                      <button class="btn btn-outline btn-sm set-default-addr-btn" data-default-addr-id="${addr.id}" style="font-size: 0.75rem; padding: 0.2rem 0.5rem;">
                        Make Default
                      </button>
                    `}
                  </div>

                  <p style="font-size: 0.9rem; color: var(--text-sub); margin-bottom: 0.5rem; line-height: 1.4;">
                    ${addr.street}<br>
                    ${addr.city}, ${addr.zip}
                  </p>

                  <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                    <span><i class="fa-solid fa-phone"></i> ${profile.phone}</span>

                    <div style="display: flex; gap: 0.4rem;">
                      <button class="btn btn-secondary btn-sm edit-addr-btn" data-edit-addr-id="${addr.id}" title="Edit Address">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button class="btn btn-outline btn-sm delete-addr-btn" data-delete-addr-id="${addr.id}" style="color: #ef4444; border-color: #ef4444;" title="Delete Address">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Payment Methods Panel -->
          <div id="account-tab-payments" style="display: none;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 700;">Saved Payment Methods</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Manage saved credit cards, debit cards, and UPI IDs for 1-click checkout.</p>
              </div>

              <button class="btn btn-primary btn-sm" id="add-new-payment-btn">
                <i class="fa-solid fa-plus"></i> Add Payment Method
              </button>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem;">
              ${paymentMethods.map(pm => `
                <div class="address-card ${pm.isPrimary ? 'default' : ''}">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <i class="fa-solid ${pm.type === 'card' ? 'fa-credit-card' : 'fa-mobile-screen-button'}" style="font-size: 1.8rem; color: var(--primary);"></i>
                    ${pm.isPrimary ? `<span class="badge badge-primary">Primary</span>` : `
                      <button class="btn btn-outline btn-sm set-primary-pay-btn" data-primary-pay-id="${pm.id}" style="font-size: 0.75rem; padding: 0.2rem 0.5rem;">
                        Make Primary
                      </button>
                    `}
                  </div>

                  <div style="font-size: 1rem; font-weight: 700; margin-bottom: 0.3rem; color: var(--text-main);">
                    ${pm.title}
                  </div>

                  <div style="font-family: monospace; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 1px; color: var(--text-sub);">
                    ${pm.cardNumber || pm.upiId}
                  </div>

                  <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                    <span>${pm.expiry ? `Expires ${pm.expiry}` : 'Verified Instant UPI'}</span>

                    <button class="btn btn-outline btn-sm delete-pay-btn" data-delete-pay-id="${pm.id}" style="color: #ef4444; border-color: #ef4444;" title="Delete Payment Method">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </main>
      </div>
    </section>
  `;

  // Attach Listeners
  const editProfileBtn = document.getElementById('edit-profile-details-btn');
  if (editProfileBtn) editProfileBtn.onclick = () => openEditProfileModal(container);

  const redeemBtn = document.getElementById('redeem-points-btn');
  if (redeemBtn) redeemBtn.onclick = () => openRedeemPointsModal(container);

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

  // Add Address
  const addAddrBtn = document.getElementById('add-new-address-btn');
  if (addAddrBtn) addAddrBtn.onclick = () => openAddressModal(container);

  // Edit Address
  document.querySelectorAll('.edit-addr-btn').forEach(btn => {
    btn.onclick = () => {
      const addrId = btn.getAttribute('data-edit-addr-id');
      const addr = state.profile.addresses.find(a => a.id === addrId);
      if (addr) openAddressModal(container, addr);
    };
  });

  // Delete Address
  document.querySelectorAll('.delete-addr-btn').forEach(btn => {
    btn.onclick = () => {
      const addrId = btn.getAttribute('data-delete-addr-id');
      if (confirm('Delete this address?')) {
        state.deleteAddress(addrId);
        showToast('Address removed', 'info');
      }
    };
  });

  // Set Default Address
  document.querySelectorAll('.set-default-addr-btn').forEach(btn => {
    btn.onclick = () => {
      const addrId = btn.getAttribute('data-default-addr-id');
      state.setDefaultAddress(addrId);
      showToast('Default delivery address updated', 'success');
    };
  });

  // Add Payment
  const addPayBtn = document.getElementById('add-new-payment-btn');
  if (addPayBtn) addPayBtn.onclick = () => openAddPaymentModal(container);

  // Delete Payment
  document.querySelectorAll('.delete-pay-btn').forEach(btn => {
    btn.onclick = () => {
      const payId = btn.getAttribute('data-delete-pay-id');
      if (confirm('Delete this payment method?')) {
        state.deletePaymentMethod(payId);
        showToast('Payment method removed', 'info');
      }
    };
  });

  // Set Primary Payment
  document.querySelectorAll('.set-primary-pay-btn').forEach(btn => {
    btn.onclick = () => {
      const payId = btn.getAttribute('data-primary-pay-id');
      state.setDefaultPayment(payId);
      showToast('Primary payment method updated', 'success');
    };
  });
}

function openEditProfileModal(container) {
  const profile = state.profile;
  const bodyHTML = `
    <div class="form-group">
      <label class="form-label">Full Name *</label>
      <input type="text" id="edit-profile-name" class="form-input" required value="${profile.name}">
    </div>

    <div class="form-group">
      <label class="form-label">Email Address *</label>
      <input type="email" id="edit-profile-email" class="form-input" required value="${profile.email}">
    </div>

    <div class="form-group">
      <label class="form-label">Phone Number *</label>
      <input type="text" id="edit-profile-phone" class="form-input" required value="${profile.phone}">
    </div>

    <div class="form-group">
      <label class="form-label">Loyalty Tier</label>
      <input type="text" class="form-input" disabled value="${profile.loyaltyTier || 'Gold Gourmet'}">
    </div>
  `;

  const footerHTML = `
    <button class="btn btn-secondary" id="modal-cancel-profile">Cancel</button>
    <button class="btn btn-primary" id="modal-save-profile">Save Profile</button>
  `;

  openModal({
    title: 'Edit Profile Information',
    bodyHTML,
    footerHTML
  });

  document.getElementById('modal-cancel-profile').onclick = closeModal;
  document.getElementById('modal-save-profile').onclick = () => {
    const name = document.getElementById('edit-profile-name').value.trim();
    const email = document.getElementById('edit-profile-email').value.trim();
    const phone = document.getElementById('edit-profile-phone').value.trim();

    if (!name || !email || !phone) {
      showToast('Please fill in name, email and phone', 'info');
      return;
    }

    state.updateProfile({ name, email, phone });
    closeModal();
    showToast('Profile information updated successfully!', 'success');
  };
}

function openAddressModal(container, addrToEdit = null) {
  const isEdit = !!addrToEdit;
  const bodyHTML = `
    <div class="form-group">
      <label class="form-label">Address Label (Home, Work, etc.) *</label>
      <input type="text" id="addr-label" class="form-input" required value="${isEdit ? addrToEdit.label : ''}" placeholder="e.g. Home, Office, Parent's House">
    </div>

    <div class="form-group">
      <label class="form-label">Street Address & Apartment *</label>
      <input type="text" id="addr-street" class="form-input" required value="${isEdit ? addrToEdit.street : ''}" placeholder="e.g. Door No. 24-2-154, Dargamitta">
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">City & State *</label>
        <input type="text" id="addr-city" class="form-input" required value="${isEdit ? addrToEdit.city : 'Nellore, Andhra Pradesh'}">
      </div>
      <div class="form-group">
        <label class="form-label">PIN Code *</label>
        <input type="text" id="addr-zip" class="form-input" required value="${isEdit ? addrToEdit.zip : '524003'}">
      </div>
    </div>

    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub); cursor: pointer;">
      <input type="checkbox" id="addr-default" ${isEdit ? (addrToEdit.isDefault ? 'checked' : '') : 'checked'}> Set as primary default delivery address
    </label>
  `;

  const footerHTML = `
    <button class="btn btn-secondary" id="modal-cancel-addr">Cancel</button>
    <button class="btn btn-primary" id="modal-save-addr">${isEdit ? 'Save Changes' : 'Add Address'}</button>
  `;

  openModal({
    title: isEdit ? `Edit Address (${addrToEdit.label})` : 'Add New Delivery Address',
    bodyHTML,
    footerHTML
  });

  document.getElementById('modal-cancel-addr').onclick = closeModal;
  document.getElementById('modal-save-addr').onclick = () => {
    const label = document.getElementById('addr-label').value.trim() || 'Other';
    const street = document.getElementById('addr-street').value.trim();
    const city = document.getElementById('addr-city').value.trim() || 'Nellore, Andhra Pradesh';
    const zip = document.getElementById('addr-zip').value.trim() || '524003';
    const isDefault = document.getElementById('addr-default').checked;

    if (!street) {
      showToast('Please enter a street address', 'info');
      return;
    }

    if (isEdit) {
      state.updateAddress(addrToEdit.id, { label, street, city, zip, isDefault });
      showToast('Address updated!', 'success');
    } else {
      state.addAddress({ label, street, city, zip, isDefault });
      showToast('New Address added!', 'success');
    }

    closeModal();
  };
}

function openAddPaymentModal(container) {
  const bodyHTML = `
    <div class="form-group">
      <label class="form-label">Payment Method Type</label>
      <select id="pay-type" class="form-select">
        <option value="card">Credit / Debit Card (Visa, Mastercard, RuPay)</option>
        <option value="upi">UPI ID (PhonePe, GPay, Paytm)</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Title / Label</label>
      <input type="text" id="pay-title" class="form-input" placeholder="e.g. HDFC Credit Card or My PhonePe UPI">
    </div>

    <div id="card-fields">
      <div class="form-group">
        <label class="form-label">Card Number (Last 4 digits or Full)</label>
        <input type="text" id="pay-card-num" class="form-input" placeholder="•••• •••• •••• 5678">
      </div>
      <div class="form-group">
        <label class="form-label">Expiry Date</label>
        <input type="text" id="pay-expiry" class="form-input" placeholder="MM/YY e.g. 10/28">
      </div>
    </div>

    <div id="upi-fields" style="display: none;">
      <div class="form-group">
        <label class="form-label">UPI ID</label>
        <input type="text" id="pay-upi-id" class="form-input" placeholder="e.g. username@ybl or mobile@paytm">
      </div>
    </div>

    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub); cursor: pointer;">
      <input type="checkbox" id="pay-primary" checked> Set as primary default payment method
    </label>
  `;

  const footerHTML = `
    <button class="btn btn-secondary" id="modal-cancel-pay">Cancel</button>
    <button class="btn btn-primary" id="modal-save-pay">Save Payment Method</button>
  `;

  openModal({
    title: 'Add Saved Payment Method',
    bodyHTML,
    footerHTML
  });

  const typeSelect = document.getElementById('pay-type');
  typeSelect.onchange = (e) => {
    if (e.target.value === 'card') {
      document.getElementById('card-fields').style.display = 'block';
      document.getElementById('upi-fields').style.display = 'none';
    } else {
      document.getElementById('card-fields').style.display = 'none';
      document.getElementById('upi-fields').style.display = 'block';
    }
  };

  document.getElementById('modal-cancel-pay').onclick = closeModal;
  document.getElementById('modal-save-pay').onclick = () => {
    const type = typeSelect.value;
    const title = document.getElementById('pay-title').value.trim() || (type === 'card' ? 'Credit Card' : 'UPI ID');
    const isPrimary = document.getElementById('pay-primary').checked;

    if (type === 'card') {
      const cardRaw = document.getElementById('pay-card-num').value.trim() || '5678';
      const cardNumber = cardRaw.length === 4 ? `•••• •••• •••• ${cardRaw}` : cardRaw;
      const expiry = document.getElementById('pay-expiry').value.trim() || '12/28';
      state.addPaymentMethod({ type: 'card', title, cardNumber, expiry, isPrimary });
    } else {
      const upiId = document.getElementById('pay-upi-id').value.trim() || 'user@upi';
      state.addPaymentMethod({ type: 'upi', title, upiId, isPrimary });
    }

    closeModal();
    showToast('New Payment Method Saved!', 'success');
  };
}

function openRedeemPointsModal(container) {
  const profile = state.profile;

  const bodyHTML = `
    <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.25rem;">
      You currently have <strong style="color: var(--accent-gold); font-size: 1.1rem;">${profile.rewardPoints} Reward Points</strong>. Every 100 Points = ₹10.00 Discount Cash!
    </p>

    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${profile.rewardPoints >= 100 ? `
        <button class="btn btn-outline redeem-option-btn" data-redeem-pts="100" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem;">
          <span>Redeem 100 Points</span>
          <strong style="color: var(--accent-green);">₹10.00 Voucher</strong>
        </button>
      ` : ''}

      ${profile.rewardPoints >= 200 ? `
        <button class="btn btn-outline redeem-option-btn" data-redeem-pts="200" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem;">
          <span>Redeem 200 Points</span>
          <strong style="color: var(--accent-green);">₹20.00 Voucher</strong>
        </button>
      ` : ''}

      ${profile.rewardPoints >= 400 ? `
        <button class="btn btn-outline redeem-option-btn" data-redeem-pts="400" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem;">
          <span>Redeem 400 Points</span>
          <strong style="color: var(--accent-green);">₹40.00 Voucher</strong>
        </button>
      ` : ''}
    </div>
  `;

  const footerHTML = `
    <button class="btn btn-secondary" id="modal-cancel-redeem">Close</button>
  `;

  openModal({
    title: 'Redeem Loyalty Points for Discount Cash',
    bodyHTML,
    footerHTML
  });

  document.getElementById('modal-cancel-redeem').onclick = closeModal;

  document.querySelectorAll('[data-redeem-pts]').forEach(btn => {
    btn.onclick = () => {
      const pts = parseInt(btn.getAttribute('data-redeem-pts'));
      const res = state.redeemRewardPoints(pts);
      if (res.success) {
        state.applyCoupon('WELCOME20');
        showToast(`Redeemed ${pts} Points! ₹${res.discountCash} discount applied to your active order!`, 'success', 6000);
        closeModal();
      } else {
        showToast(res.message, 'info');
      }
    };
  });
}
