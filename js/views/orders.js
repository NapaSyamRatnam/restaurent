/* ==========================================================================
   ORDER DETAILS & LIVE TRACKER VIEW
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';

export function renderOrdersView(container) {
  if (!state.isLoggedIn()) {
    container.innerHTML = `
      <div class="container" style="padding: 4rem 1.5rem; text-align: center;">
        <div class="auth-restricted-card">
          <div class="restricted-icon" style="background: var(--primary-light); color: var(--primary);"><i class="fa-solid fa-clock-rotate-left"></i></div>
          <h2>Authentication Required</h2>
          <p>Please log in to your account to view live order tracking and past dining receipts.</p>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-primary" id="orders-login-redirect-btn">
              <i class="fa-solid fa-right-to-bracket"></i> Log In Now
            </button>
            <button class="btn btn-outline" id="orders-back-menu-btn">
              <i class="fa-solid fa-utensils"></i> Browse Menu
            </button>
          </div>
        </div>
      </div>
    `;

    const loginBtn = document.getElementById('orders-login-redirect-btn');
    if (loginBtn) loginBtn.onclick = () => state.setView('login');

    const backBtn = document.getElementById('orders-back-menu-btn');
    if (backBtn) backBtn.onclick = () => state.setView('menu');

    return;
  }

  const currentUser = state.currentUser;
  let userOrders = state.orders;

  if (currentUser && currentUser.role !== 'admin') {
    userOrders = state.orders.filter(o => {
      if (o.userId && currentUser.id && o.userId === currentUser.id) return true;
      const orderEmail = (o.customerEmail || o.userEmail || '').toLowerCase();
      const currEmail = (currentUser.email || '').toLowerCase();
      if (orderEmail && currEmail && orderEmail === currEmail) return true;
      if (!o.userId && !orderEmail) return true; // session guest order fallback
      return false;
    });
  }

  const activeOrders = userOrders.filter(o => o.status !== 'delivered' && o.status !== 'completed');
  const pastOrders = userOrders.filter(o => o.status === 'delivered' || o.status === 'completed');

  container.innerHTML = `
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-clock-rotate-left" style="color: var(--primary);"></i> Order Tracker & History</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Track live kitchen prep, real-time delivery status, and review past dining receipts.</p>
      </div>

      <!-- Active Order Section -->
      ${activeOrders.length > 0 ? `
        <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.6rem;">
          <span class="pulse-dot"></span> Active Live Orders (${activeOrders.length})
        </h2>

        ${activeOrders.map(order => renderActiveOrderCard(order)).join('')}
      ` : `
        <div style="background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); padding: 2rem; text-align: center; margin-bottom: 2.5rem;">
          <i class="fa-solid fa-bell-concierge" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 0.75rem;"></i>
          <h3 style="font-size: 1.2rem; font-weight: 700;">No Active Live Orders Right Now</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.2rem;">Place a new order from our menu to track live kitchen preparation!</p>
          <button class="btn btn-outline btn-sm" id="active-order-explore-btn">Go to Menu</button>
        </div>
      `}

      <!-- Order History Section -->
      <div style="margin-top: 3rem;">
        <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem;">
          <i class="fa-solid fa-receipt" style="color: var(--accent-gold);"></i> Completed Past Orders (${pastOrders.length})
        </h2>

        ${pastOrders.length === 0 ? `
          <p style="color: var(--text-muted);">No completed past orders yet.</p>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${pastOrders.map(order => `
              <div class="dish-card" style="padding: 1.5rem; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                    <span class="order-id-badge">${order.id}</span>
                    <span class="badge badge-green"><i class="fa-solid fa-check-double"></i> Delivered / Completed</span>
                    <span style="font-size: 0.82rem; color: var(--text-muted);">${new Date(order.date).toLocaleDateString()}</span>
                  </div>
                  <div style="font-size: 0.9rem; color: var(--text-sub); margin-bottom: 0.3rem;">
                    ${(order.items || []).map(i => `${i.qty}x ${i.name}`).join(', ')}
                  </div>
                  <div style="font-size: 0.85rem; color: var(--text-muted);">
                    Address: ${order.deliveryAddress || 'Nellore, AP'}
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 1.5rem;">
                  <span style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${(order.total || order.grandTotal || 0).toFixed(2)}</span>
                  <button class="btn btn-outline btn-sm reorder-btn" data-reorder-id="${order.id}">
                    <i class="fa-solid fa-rotate-right"></i> Reorder Items
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </section>
  `;

  // Explore button
  const exploreBtn = document.getElementById('active-order-explore-btn');
  if (exploreBtn) exploreBtn.onclick = () => state.setView('menu');

  // Reorder buttons
  document.querySelectorAll('[data-reorder-id]').forEach(btn => {
    btn.onclick = () => {
      const orderId = btn.getAttribute('data-reorder-id');
      const order = state.orders.find(o => o.id === orderId);
      if (order && order.items) {
        order.items.forEach(item => {
          state.addToCart(item.dishId, item.qty, item.opts || '');
        });
        showToast('Items re-added to Cart!', 'success');
        state.setView('menu');
      }
    };
  });
}

function renderActiveOrderCard(order) {
  const status = order.status || 'placed';
  const isPlaced = true;
  const isPrep = status === 'preparing' || status === 'ready' || status === 'delivering' || status === 'delivered' || status === 'completed';
  const isReady = status === 'ready' || status === 'delivering' || status === 'delivered' || status === 'completed';
  const isDelivered = status === 'delivered' || status === 'completed';

  let etaText = '25 Mins';
  let etaDesc = 'Kitchen is reviewing your order details';
  if (status === 'preparing') {
    etaText = '18 Mins';
    etaDesc = 'Chef is preparing your fresh gourmet meal 🔥';
  } else if (status === 'ready' || status === 'delivering') {
    etaText = '10 Mins';
    etaDesc = 'Delivery partner is on the way! streamlining delivery 🛵';
  } else if (status === 'delivered' || status === 'completed') {
    etaText = 'Delivered!';
    etaDesc = 'Order delivered successfully! Enjoy your meal! ✅';
  }

  const orderTotal = (order.total || order.grandTotal || 0).toFixed(2);

  return `
    <div class="order-tracker-card" style="margin-bottom: 1.5rem;">
      <div class="tracker-header">
        <div>
          <span class="order-id-badge">${order.id}</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); margin-left: 0.75rem;">
            Placed at ${new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <span class="badge badge-gold" style="font-size: 0.85rem;">
          <i class="fa-solid fa-truck-ramp-box"></i> ${order.fulfillmentType || 'Delivery'}
        </span>
      </div>

      <div class="eta-timer-box">
        <i class="fa-solid fa-fire-burner"></i>
        <div>
          <div class="eta-time">${etaText}</div>
          <div style="font-size: 0.85rem; color: var(--text-sub);">
            ${etaDesc}
          </div>
        </div>
      </div>

      <!-- Timeline Stepper -->
      <div class="order-stepper">
        <div class="step-item ${isPlaced ? (isPrep ? 'completed' : 'active') : ''}">
          <div class="step-icon"><i class="fa-solid fa-check"></i></div>
          <div class="step-label">Order Placed</div>
          <div class="step-time">Confirmed</div>
        </div>

        <div class="step-item ${isPrep ? (isReady ? 'completed' : 'active') : ''}">
          <div class="step-icon"><i class="fa-solid fa-utensils"></i></div>
          <div class="step-label">Kitchen Prep</div>
          <div class="step-time">${status === 'preparing' ? 'Preparing 🔥' : isPrep ? 'Done' : 'Pending'}</div>
        </div>

        <div class="step-item ${isReady ? (isDelivered ? 'completed' : 'active') : ''}">
          <div class="step-icon"><i class="fa-solid fa-motorcycle"></i></div>
          <div class="step-label">Out for Delivery</div>
          <div class="step-time">${(status === 'ready' || status === 'delivering') ? 'En Route 🛵' : isReady ? 'Delivered' : 'Step 3'}</div>
        </div>

        <div class="step-item ${isDelivered ? 'completed' : ''}">
          <div class="step-icon"><i class="fa-solid fa-house-chimney"></i></div>
          <div class="step-label">Delivered</div>
          <div class="step-time">${isDelivered ? 'Completed ✅' : 'Step 4'}</div>
        </div>
      </div>

      <!-- Order Details Summary -->
      <div style="background: var(--bg-dark); border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-color); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-sub);">Ordered Items Summary</h4>
          <ul style="font-size: 0.88rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.3rem;">
            ${(order.items || []).map(item => `
              <li><strong style="color: var(--text-main);">${item.qty}x</strong> ${item.name} ${item.opts ? `(${item.opts})` : ''} - <strong>₹${((item.price || 0) * item.qty).toFixed(2)}</strong></li>
            `).join('')}
          </ul>
        </div>

        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-sub);">Delivery Information</h4>
          <div style="font-size: 0.88rem; color: var(--text-muted);">
            <div><i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> ${order.deliveryAddress || 'Nellore, AP'}</div>
            <div style="margin-top: 0.4rem;"><i class="fa-solid fa-user-ninja"></i> Driver: <strong>${order.driverName || 'Srinivas Rao'}</strong> (${order.driverPhone || '+91 98480 88990'})</div>
            <div style="margin-top: 0.4rem; font-size: 1.1rem; font-weight: 800; color: var(--primary);">Paid Total: ₹${orderTotal}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
