/* ==========================================================================
   CART DRAWER & CHECKOUT FLOW
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';
import { openModal, closeModal } from '../components/modal.js';

export function renderCartDrawer() {
  const drawerBody = document.getElementById('cart-drawer-body');
  if (!drawerBody) return;

  const totals = state.getCartTotal();
  const cartItems = state.cart;

  drawerBody.innerHTML = `
    <div class="cart-header">
      <h3 style="font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
        <i class="fa-solid fa-basket-shopping" style="color: var(--primary);"></i> Your Cart Order
      </h3>
      <button class="modal-close" id="close-cart-drawer-btn" aria-label="Close Cart">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    ${cartItems.length === 0 ? `
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; text-align: center;">
        <i class="fa-solid fa-cart-arrow-down" style="font-size: 3.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Your Cart is empty</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Add some mouth-watering gourmet dishes from our menu!</p>
        <button class="btn btn-primary" id="cart-start-ordering-btn">Explore Menu</button>
      </div>
    ` : `
      <div class="cart-items-list">
        ${cartItems.map((item, index) => {
          const dish = state.dishes.find(d => d.id === item.dishId);
          if (!dish) return '';
          return `
            <div class="cart-item-card">
              <img src="${dish.image}" alt="${dish.name}" class="cart-item-thumb">
              <div class="cart-item-info">
                <h4 class="cart-item-title">${dish.name}</h4>
                ${item.options ? `<p class="cart-item-opts"><i class="fa-solid fa-sliders"></i> ${item.options}</p>` : ''}
                
                <div class="cart-item-price-row">
                  <span style="font-weight: 700; color: var(--primary);">$${(item.price * item.qty).toFixed(2)}</span>

                  <div class="qty-control">
                    <button class="qty-btn" data-qty-change="${index}" data-delta="-1"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-num">${item.qty}</span>
                    <button class="qty-btn" data-qty-change="${index}" data-delta="1"><i class="fa-solid fa-plus"></i></button>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}

        <!-- Promo Code Box -->
        <div style="margin-top: 1rem; background: var(--bg-dark); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <label style="font-size: 0.82rem; font-weight: 700; color: var(--text-sub); display: block; margin-bottom: 0.4rem;">
            <i class="fa-solid fa-ticket" style="color: var(--accent-gold);"></i> Promo Code / Voucher
          </label>
          <div style="display: flex; gap: 0.5rem;">
            <input type="text" id="coupon-input-field" class="form-input" style="padding: 0.45rem 0.75rem; font-size: 0.88rem;" placeholder="e.g. WELCOME20" value="${state.appliedCoupon ? state.appliedCoupon.code : ''}">
            <button class="btn btn-secondary btn-sm" id="apply-coupon-btn">Apply</button>
          </div>
          ${state.appliedCoupon ? `
            <div style="font-size: 0.8rem; color: var(--accent-green); font-weight: 600; margin-top: 0.4rem; display: flex; align-items: center; gap: 0.3rem;">
              <i class="fa-solid fa-check"></i> ${state.appliedCoupon.discountPercent}% Discount Active!
            </div>
          ` : ''}
        </div>
      </div>

      <div class="cart-footer">
        <div class="bill-row">
          <span>Subtotal</span>
          <span>$${totals.subtotal.toFixed(2)}</span>
        </div>
        ${totals.discountAmount > 0 ? `
          <div class="bill-row" style="color: var(--accent-green);">
            <span>Discount (${state.appliedCoupon.code})</span>
            <span>-$${totals.discountAmount.toFixed(2)}</span>
          </div>
        ` : ''}
        <div class="bill-row">
          <span>Service Tax (8%)</span>
          <span>$${totals.tax.toFixed(2)}</span>
        </div>
        <div class="bill-row">
          <span>Local Delivery Fee</span>
          <span>$${totals.deliveryFee.toFixed(2)}</span>
        </div>

        <div class="bill-row total">
          <span>Grand Total</span>
          <span class="price">$${totals.grandTotal.toFixed(2)}</span>
        </div>

        <button class="btn btn-primary btn-lg btn-full" id="checkout-trigger-btn" style="margin-top: 1.25rem;">
          <span>Proceed to Checkout</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `}
  `;

  // Overlay & Close handlers
  const closeBtn = document.getElementById('close-cart-drawer-btn');
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');

  const hideDrawer = () => {
    if (drawer) drawer.classList.add('hidden');
  };

  if (closeBtn) closeBtn.onclick = hideDrawer;
  if (overlay) overlay.onclick = hideDrawer;

  const startOrdBtn = document.getElementById('cart-start-ordering-btn');
  if (startOrdBtn) {
    startOrdBtn.onclick = () => {
      hideDrawer();
      state.setView('menu');
    };
  }

  // Quantity Change listeners
  document.querySelectorAll('[data-qty-change]').forEach(btn => {
    btn.onclick = () => {
      const index = parseInt(btn.getAttribute('data-qty-change'));
      const delta = parseInt(btn.getAttribute('data-delta'));
      const currentItem = state.cart[index];
      if (currentItem) {
        state.updateCartQty(index, currentItem.qty + delta);
        renderCartDrawer();
      }
    };
  });

  // Apply Coupon listener
  const applyBtn = document.getElementById('apply-coupon-btn');
  if (applyBtn) {
    applyBtn.onclick = () => {
      const input = document.getElementById('coupon-input-field');
      if (input) {
        const result = state.applyCoupon(input.value);
        if (result.success) {
          showToast(result.message, 'success');
        } else {
          showToast(result.message, 'info');
        }
        renderCartDrawer();
      }
    };
  }

  // Checkout modal listener
  const checkoutBtn = document.getElementById('checkout-trigger-btn');
  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      hideDrawer();
      openCheckoutModal();
    };
  }
}

function openCheckoutModal() {
  const totals = state.getCartTotal();
  const profile = state.profile;
  const defaultAddr = profile.addresses.find(a => a.isDefault) || profile.addresses[0];

  const bodyHTML = `
    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-sub);">
        <i class="fa-solid fa-motorcycle" style="color: var(--primary);"></i> 1. Select Fulfillment Mode
      </h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
        <label style="background: var(--bg-input); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-active); display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <input type="radio" name="fulfillment" value="Delivery" checked>
          <div>
            <div style="font-weight: 700; font-size: 0.9rem;">Doorstep Delivery</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">20 - 30 min</div>
          </div>
        </label>
        <label style="background: var(--bg-input); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <input type="radio" name="fulfillment" value="Pickup">
          <div>
            <div style="font-weight: 700; font-size: 0.9rem;">Store Pickup</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Ready in 15 min</div>
          </div>
        </label>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-sub);">
        <i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> 2. Delivery Address
      </h4>
      <select id="checkout-address-select" class="form-select">
        ${profile.addresses.map(a => `
          <option value="${a.street}, ${a.city} ${a.zip}">${a.label}: ${a.street}, ${a.city}</option>
        `).join('')}
      </select>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-sub);">
        <i class="fa-solid fa-credit-card" style="color: var(--primary);"></i> 3. Payment Method
      </h4>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <label style="background: var(--bg-input); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
          <span style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; font-weight: 600;">
            <input type="radio" name="payment" value="Credit/Debit Card" checked>
            <i class="fa-solid fa-credit-card"></i> Credit / Debit Card (Visa, Mastercard)
          </span>
          <span style="font-size: 0.75rem; color: var(--accent-green);">Instant</span>
        </label>
        <label style="background: var(--bg-input); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
          <span style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; font-weight: 600;">
            <input type="radio" name="payment" value="Cash on Delivery">
            <i class="fa-solid fa-money-bill-wave"></i> Cash / Pay on Delivery
          </span>
        </label>
      </div>
    </div>

    <div style="background: var(--bg-input); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 1.1rem;">
        <span>Total Payable</span>
        <span style="color: var(--primary);">$${totals.grandTotal.toFixed(2)}</span>
      </div>
    </div>
  `;

  const footerHTML = `
    <button class="btn btn-secondary" id="checkout-cancel-btn">Cancel</button>
    <button class="btn btn-primary btn-lg" id="confirm-pay-btn">
      <i class="fa-solid fa-lock"></i> Place Order ($${totals.grandTotal.toFixed(2)})
    </button>
  `;

  openModal({
    title: 'Complete Your Order',
    bodyHTML,
    footerHTML
  });

  const cancelBtn = document.getElementById('checkout-cancel-btn');
  if (cancelBtn) cancelBtn.onclick = closeModal;

  const payBtn = document.getElementById('confirm-pay-btn');
  if (payBtn) {
    payBtn.onclick = () => {
      const addressSel = document.getElementById('checkout-address-select').value;
      const fulfillment = document.querySelector('input[name="fulfillment"]:checked').value;

      const newOrder = state.placeOrder({
        deliveryAddress: addressSel,
        fulfillmentType: fulfillment,
        subtotal: totals.subtotal,
        discount: totals.discountAmount,
        tax: totals.tax,
        deliveryFee: totals.deliveryFee,
        total: totals.grandTotal,
        estimatedEta: '20-25 minutes',
        driverName: 'Srinivas Rao',
        driverPhone: '+91 98480 88990'
      });

      closeModal();
      showToast(`Order #${newOrder.id} Placed Successfully!`, 'success');
      state.setView('orders');
    };
  }
}
