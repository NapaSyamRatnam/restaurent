/* ==========================================================================
   RESTAURANT STAFF / ADMIN PORTAL (LIVE KDS, MENU EDIT, LOCATION EDIT)
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';
import { openDishModal, openLocationModal } from '../components/adminModal.js';

export function renderStaffView(container) {
  const activeOrders = state.orders.filter(o => o.status !== 'delivered');
  const allOrders = state.orders;

  const totalRevenue = allOrders.reduce((sum, o) => sum + o.total, 0);
  const pendingCount = activeOrders.length;

  container.innerHTML = `
    <!-- Staff Banner -->
    <div class="staff-portal-banner">
      <div style="display: flex; align-items: center; gap: 0.75rem; color: #fff;">
        <i class="fa-solid fa-user-shield" style="font-size: 1.6rem; color: var(--accent-gold);"></i>
        <div>
          <h2 style="font-size: 1.25rem; font-weight: 800;">Restaurant Management & Staff Control Center</h2>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.85);">Real-time kitchen orders, full menu editor, and branch location management</p>
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <button class="btn btn-primary btn-sm" id="admin-banner-add-dish">
          <i class="fa-solid fa-plus"></i> Add New Dish
        </button>
        <button class="btn btn-secondary btn-sm" id="admin-banner-add-branch">
          <i class="fa-solid fa-building-circle-check"></i> Add New Branch
        </button>
        <button class="btn btn-outline btn-sm" id="exit-staff-portal-btn" style="border-color: rgba(255,255,255,0.3); color: #fff;">
          <i class="fa-solid fa-right-from-bracket"></i> Customer View
        </button>
      </div>
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
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Total Menu Dishes</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold);">${state.dishes.length} Items</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Active Branches</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--text-main);">${state.locations.length} Outlets</div>
        </div>
      </div>

      <!-- Section 1: Live Kitchen Display System (KDS) -->
      <div style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <h2 style="font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
            <span class="pulse-dot"></span> Live Kitchen Orders Queue (${activeOrders.length})
          </h2>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Changing order status updates customer tracker in real time</span>
        </div>

        ${activeOrders.length === 0 ? `
          <div style="background: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-color);">
            <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; color: var(--accent-green); margin-bottom: 0.75rem;"></i>
            <h3>All Kitchen Orders Cleared!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">No active pending orders right now.</p>
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

      <!-- Section 2: Menu Items & Inventory Control -->
      <div style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
              <i class="fa-solid fa-utensils" style="color: var(--primary);"></i> Menu Items Editor & Inventory
            </h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Add new dishes, edit descriptions & pricing, toggle stock, or delete items.</p>
          </div>

          <button class="btn btn-primary" id="admin-add-dish-btn">
            <i class="fa-solid fa-plus"></i> Add New Menu Dish
          </button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem;">
          ${state.dishes.map(dish => `
            <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
              <div style="display: flex; gap: 1rem;">
                <img src="${dish.image}" alt="${dish.name}" style="width: 64px; height: 64px; border-radius: var(--radius-md); object-fit: cover;">
                <div style="flex: 1;">
                  <div style="font-weight: 700; font-size: 1rem; color: var(--text-main); margin-bottom: 0.2rem;">${dish.name}</div>
                  <div style="font-size: 0.85rem; color: var(--primary); font-weight: 700;">$${dish.price.toFixed(2)} • <span style="color: var(--text-muted); font-weight: 400; text-transform: capitalize;">${dish.category}</span></div>
                  <div style="font-size: 0.8rem; color: var(--text-sub); margin-top: 0.3rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                    ${dish.description}
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.75rem; border-top: 1px dashed var(--border-color); flex-wrap: wrap; gap: 0.5rem;">
                <button class="btn ${dish.inStock ? 'btn-outline' : 'btn-primary'} btn-sm stock-toggle-btn" data-stock-dish-id="${dish.id}">
                  ${dish.inStock ? '<i class="fa-solid fa-check"></i> In Stock' : '<i class="fa-solid fa-ban"></i> Out of Stock'}
                </button>

                <div style="display: flex; gap: 0.4rem;">
                  <button class="btn btn-secondary btn-sm edit-dish-btn" data-edit-dish-id="${dish.id}">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <button class="btn btn-outline btn-sm delete-dish-btn" data-delete-dish-id="${dish.id}" style="color: #ef4444; border-color: #ef4444;">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 3: Branch Locations Control -->
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
              <i class="fa-solid fa-location-dot" style="color: var(--accent-gold);"></i> Restaurant Branch Outlets
            </h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Manage restaurant branches, addresses, contact phones, and operating hours.</p>
          </div>

          <button class="btn btn-primary" id="admin-add-branch-btn">
            <i class="fa-solid fa-plus"></i> Add New Branch Outlet
          </button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem;">
          ${state.locations.map(loc => `
            <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <h3 style="font-size: 1.1rem; font-weight: 700;">${loc.name}</h3>
                  <span class="badge badge-gold"><i class="fa-solid fa-star"></i> ${loc.rating || '4.8'}</span>
                </div>

                <div style="font-size: 0.88rem; color: var(--text-sub); display: flex; flex-direction: column; gap: 0.35rem;">
                  <div><i class="fa-solid fa-map-pin" style="color: var(--primary);"></i> ${loc.address}</div>
                  <div><i class="fa-solid fa-phone"></i> ${loc.phone}</div>
                  <div><i class="fa-solid fa-clock"></i> ${loc.hours}</div>
                  <div><i class="fa-solid fa-truck"></i> Radius: ${loc.deliveryRadius} (${loc.avgDeliveryTime})</div>
                </div>

                <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.75rem;">
                  ${loc.features.map(f => `<span class="badge badge-primary" style="font-size: 0.75rem;">${f}</span>`).join('')}
                </div>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
                <button class="btn btn-secondary btn-sm edit-loc-btn" data-edit-loc-id="${loc.id}">
                  <i class="fa-solid fa-pen-to-square"></i> Edit Branch
                </button>
                <button class="btn btn-outline btn-sm delete-loc-btn" data-delete-loc-id="${loc.id}" style="color: #ef4444; border-color: #ef4444;">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Attach Event Listeners
  const exitBtn = document.getElementById('exit-staff-portal-btn');
  if (exitBtn) exitBtn.onclick = () => state.setView('menu');

  // Add Dish Buttons
  const bannerAddDish = document.getElementById('admin-banner-add-dish');
  if (bannerAddDish) bannerAddDish.onclick = () => openDishModal();

  const addDishBtn = document.getElementById('admin-add-dish-btn');
  if (addDishBtn) addDishBtn.onclick = () => openDishModal();

  // Add Branch Buttons
  const bannerAddBranch = document.getElementById('admin-banner-add-branch');
  if (bannerAddBranch) bannerAddBranch.onclick = () => openLocationModal();

  const addBranchBtn = document.getElementById('admin-add-branch-btn');
  if (addBranchBtn) addBranchBtn.onclick = () => openLocationModal();

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

  // Edit Dish listeners
  document.querySelectorAll('.edit-dish-btn').forEach(btn => {
    btn.onclick = () => {
      const dishId = btn.getAttribute('data-edit-dish-id');
      const dish = state.dishes.find(d => d.id === dishId);
      if (dish) openDishModal(dish);
    };
  });

  // Delete Dish listeners
  document.querySelectorAll('.delete-dish-btn').forEach(btn => {
    btn.onclick = () => {
      const dishId = btn.getAttribute('data-delete-dish-id');
      const dish = state.dishes.find(d => d.id === dishId);
      if (dish && confirm(`Are you sure you want to delete "${dish.name}"?`)) {
        state.deleteDish(dishId);
        showToast(`Deleted ${dish.name}`, 'info');
        renderStaffView(container);
      }
    };
  });

  // Edit Location listeners
  document.querySelectorAll('.edit-loc-btn').forEach(btn => {
    btn.onclick = () => {
      const locId = btn.getAttribute('data-edit-loc-id');
      const loc = state.locations.find(l => l.id === locId);
      if (loc) openLocationModal(loc);
    };
  });

  // Delete Location listeners
  document.querySelectorAll('.delete-loc-btn').forEach(btn => {
    btn.onclick = () => {
      const locId = btn.getAttribute('data-delete-loc-id');
      const loc = state.locations.find(l => l.id === locId);
      if (loc && confirm(`Are you sure you want to delete branch "${loc.name}"?`)) {
        const res = state.deleteLocation(locId);
        if (!res.success) {
          showToast(res.message, 'info');
        } else {
          showToast(`Deleted branch ${loc.name}`, 'info');
          renderStaffView(container);
        }
      }
    };
  });
}
