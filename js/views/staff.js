/* ==========================================================================
   RESTAURANT STAFF / OWNER LIVE KITCHEN PORTAL ("HELP FOR RESTAURANT PEOPLE")
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';

export function renderStaffView(container) {
  const activeOrders = state.orders.filter(o => o.status !== 'delivered');
  const allOrders = state.orders;

  const totalRevenue = allOrders.reduce((sum, o) => sum + o.total, 0);
  const pendingCount = activeOrders.length;

  container.innerHTML = `
    <!-- Staff Banner -->
    <div class="staff-portal-banner">
      <div style="display: flex; align-items: center; gap: 0.75rem; color: #fff;">
        <i class="fa-solid fa-kitchen-set" style="font-size: 1.5rem; color: var(--accent-gold);"></i>
        <div>
          <h2 style="font-size: 1.2rem; font-weight: 800;">Kitchen Display & Live Staff Management System</h2>
          <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Real-time kitchen order processing & menu inventory stock control</p>
        </div>
      </div>
      <button class="btn btn-outline btn-sm" id="exit-staff-portal-btn" style="border-color: rgba(255,255,255,0.3); color: #fff;">
        <i class="fa-solid fa-right-from-bracket"></i> Exit to Customer View
      </button>
    </div>

    <section class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
      <!-- Daily Analytics Summary Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Total Daily Revenue</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-green);">$${totalRevenue.toFixed(2)}</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Active Kitchen Orders</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--primary);">${pendingCount} Pending</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Total Orders Placed</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--text-main);">${allOrders.length} Orders</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Menu Dish Items</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold);">${state.dishes.length} Dishes</div>
        </div>
      </div>

      <!-- Live Kitchen Display System (KDS) -->
      <div style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <h2 style="font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
            <span class="pulse-dot"></span> Kitchen Display Orders Queue (${activeOrders.length})
          </h2>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Updating order status here syncs live with customer tracker!</span>
        </div>

        ${activeOrders.length === 0 ? `
          <div style="background: var(--bg-card); padding: 3rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-color);">
            <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; color: var(--accent-green); margin-bottom: 0.75rem;"></i>
            <h3>All Kitchen Orders Cleared!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">No pending kitchen orders at the moment.</p>
          </div>
        ` : `
          <div class="staff-kds-grid">
            ${activeOrders.map(order => `
              <div class="kds-card status-${order.status}">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span class="order-id-badge">${order.id}</span>
                  <span class="badge ${order.status === 'placed' ? 'badge-gold' : order.status === 'preparing' ? 'badge-primary' : 'badge-green'}">
                    ${order.status.toUpperCase()}
                  </span>
                </div>

                <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                  <i class="fa-solid fa-clock"></i> Placed ${new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • <strong>${order.fulfillmentType}</strong>
                </div>

                <!-- Order Items -->
                <div class="kds-order-items">
                  ${order.items.map(item => `
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.3rem;">
                      <span><strong style="color: var(--primary);">${item.qty}x</strong> ${item.name}</span>
                      <span style="font-size: 0.8rem; color: var(--text-muted);">${item.opts || ''}</span>
                    </div>
                  `).join('')}
                </div>

                <div style="font-size: 0.85rem; color: var(--text-sub); margin-bottom: 1rem;">
                  <strong>Deliver to:</strong> ${order.deliveryAddress}
                </div>

                <!-- Update Status Controller -->
                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label" style="font-size: 0.8rem;">Change Order Status:</label>
                  <select class="form-select status-change-select" data-order-status-id="${order.id}">
                    <option value="placed" ${order.status === 'placed' ? 'selected' : ''}>Placed (New)</option>
                    <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Preparing in Kitchen 🔥</option>
                    <option value="ready" ${order.status === 'ready' ? 'selected' : ''}>Out for Delivery 🛵</option>
                    <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Mark Delivered / Completed ✅</option>
                  </select>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- Menu Stock Availability Management -->
      <div>
        <h2 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 1.25rem;">
          <i class="fa-solid fa-boxes-stacked" style="color: var(--primary);"></i> Menu Stock & Ingredient Availability
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
          ${state.dishes.map(dish => `
            <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-weight: 700; font-size: 0.95rem;">${dish.name}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">$${dish.price.toFixed(2)} • ${dish.category}</div>
              </div>

              <button class="btn ${dish.inStock ? 'btn-outline' : 'btn-primary'} btn-sm stock-toggle-btn" data-stock-dish-id="${dish.id}">
                ${dish.inStock ? '<i class="fa-solid fa-check"></i> In Stock' : '<i class="fa-solid fa-ban"></i> Out of Stock'}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Exit staff portal
  const exitBtn = document.getElementById('exit-staff-portal-btn');
  if (exitBtn) exitBtn.onclick = () => state.setView('menu');

  // Status Change listeners
  document.querySelectorAll('.status-change-select').forEach(select => {
    select.onchange = (e) => {
      const orderId = select.getAttribute('data-order-status-id');
      const newStatus = e.target.value;
      state.updateOrderStatus(orderId, newStatus);
      showToast(`Order #${orderId} status updated to ${newStatus.toUpperCase()}`, 'success');
      renderStaffView(container);
    };
  });

  // Stock toggle listeners
  document.querySelectorAll('.stock-toggle-btn').forEach(btn => {
    btn.onclick = () => {
      const dishId = btn.getAttribute('data-stock-dish-id');
      state.toggleDishStock(dishId);
      const dish = state.dishes.find(d => d.id === dishId);
      showToast(`${dish.name} stock toggled: ${dish.inStock ? 'In Stock' : 'Out of Stock'}`, 'info');
      renderStaffView(container);
    };
  });
}
