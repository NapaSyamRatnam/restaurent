/* ==========================================================================
   SEPARATE ADMIN DASHBOARD VIEW
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';
import { openDishModal, openLocationModal } from '../components/adminModal.js';
import { CATEGORIES } from '../data.js';

export function renderAdminView(container) {
  if (!container) return;

  // Enforce Admin Permission Check
  if (!state.isAdmin()) {
    container.innerHTML = `
      <div class="container" style="padding: 4rem 1.5rem; text-align: center;">
        <div class="auth-restricted-card">
          <div class="restricted-icon"><i class="fa-solid fa-lock"></i></div>
          <h2>Admin Access Restricted</h2>
          <p>You need Administrator permissions to view and manage restaurant items, locations, and orders.</p>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-primary" id="admin-login-redirect-btn">
              <i class="fa-solid fa-user-shield"></i> Log In as Admin
            </button>
            <button class="btn btn-outline" id="admin-back-menu-btn">
              <i class="fa-solid fa-arrow-left"></i> Back to Menu
            </button>
          </div>
        </div>
      </div>
    `;

    const loginBtn = document.getElementById('admin-login-redirect-btn');
    if (loginBtn) loginBtn.onclick = () => state.setView('login');

    const backBtn = document.getElementById('admin-back-menu-btn');
    if (backBtn) backBtn.onclick = () => state.setView('menu');

    return;
  }

  // Active sub-tab inside Admin Page: 'items', 'locations', 'orders'
  let activeTab = 'items';

  // Calculate Metrics
  const totalDishes = state.dishes.length;
  const inStockDishes = state.dishes.filter(d => d.inStock).length;
  const totalLocations = state.locations.length;
  const totalOrders = state.orders.length;
  const totalRevenue = state.orders.reduce((sum, o) => sum + (o.grandTotal || 0), 0).toFixed(2);

  container.innerHTML = `
    <div class="admin-dashboard-wrapper">
      <div class="container">
        <!-- Admin Dashboard Header -->
        <div class="admin-header-bar">
          <div>
            <span class="badge badge-admin"><i class="fa-solid fa-shield-halved"></i> ADMINISTRATOR PORTAL</span>
            <h1 class="admin-title">Bistro Management Console</h1>
            <p class="admin-subtitle">Full administrative authority to manage menu items, restaurant branches, and kitchen orders.</p>
          </div>

          <div class="admin-quick-actions">
            <button class="btn btn-primary" id="admin-add-item-btn">
              <i class="fa-solid fa-plus"></i> Add New Menu Item
            </button>
            <button class="btn btn-accent" id="admin-add-branch-btn">
              <i class="fa-solid fa-building-circle-check"></i> Add New Branch Location
            </button>
          </div>
        </div>

        <!-- Metric Cards Grid -->
        <div class="admin-metrics-grid">
          <div class="metric-card">
            <div class="metric-icon icon-primary"><i class="fa-solid fa-utensils"></i></div>
            <div class="metric-info">
              <span class="metric-value">${totalDishes}</span>
              <span class="metric-label">Menu Items (${inStockDishes} In Stock)</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon icon-gold"><i class="fa-solid fa-store"></i></div>
            <div class="metric-info">
              <span class="metric-value">${totalLocations}</span>
              <span class="metric-label">Active Restaurant Branches</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon icon-blue"><i class="fa-solid fa-basket-shopping"></i></div>
            <div class="metric-info">
              <span class="metric-value">${totalOrders}</span>
              <span class="metric-label">Total Customer Orders</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon icon-green"><i class="fa-solid fa-indian-rupee-sign"></i></div>
            <div class="metric-info">
              <span class="metric-value">₹${totalRevenue}</span>
              <span class="metric-label">Total Sales Revenue</span>
            </div>
          </div>
        </div>

        <!-- Navigation Sub-Tabs -->
        <div class="admin-tabs">
          <button class="admin-tab active" id="tab-admin-items" data-tab="items">
            <i class="fa-solid fa-list-check"></i> Menu Items (${totalDishes})
          </button>
          <button class="admin-tab" id="tab-admin-locations" data-tab="locations">
            <i class="fa-solid fa-map-location-dot"></i> Branches & Locations (${totalLocations})
          </button>
          <button class="admin-tab" id="tab-admin-orders" data-tab="orders">
            <i class="fa-solid fa-clock-rotate-left"></i> Live Orders (${totalOrders})
          </button>
        </div>

        <!-- Admin Content Section -->
        <div id="admin-tab-content" class="admin-tab-body"></div>
      </div>
    </div>
  `;

  // Attach Top Header Action Buttons
  const addItemBtn = document.getElementById('admin-add-item-btn');
  if (addItemBtn) addItemBtn.onclick = () => openDishModal();

  const addBranchBtn = document.getElementById('admin-add-branch-btn');
  if (addBranchBtn) addBranchBtn.onclick = () => openLocationModal();

  // Sub-tab Navigation logic
  const itemsTabBtn = document.getElementById('tab-admin-items');
  const locationsTabBtn = document.getElementById('tab-admin-locations');
  const ordersTabBtn = document.getElementById('tab-admin-orders');

  function renderSubTab(tabName) {
    activeTab = tabName;
    [itemsTabBtn, locationsTabBtn, ordersTabBtn].forEach(b => b && b.classList.remove('active'));

    const contentBox = document.getElementById('admin-tab-content');
    if (!contentBox) return;

    if (tabName === 'items') {
      if (itemsTabBtn) itemsTabBtn.classList.add('active');
      renderAdminItemsTab(contentBox);
    } else if (tabName === 'locations') {
      if (locationsTabBtn) locationsTabBtn.classList.add('active');
      renderAdminLocationsTab(contentBox);
    } else if (tabName === 'orders') {
      if (ordersTabBtn) ordersTabBtn.classList.add('active');
      renderAdminOrdersTab(contentBox);
    }
  }

  if (itemsTabBtn) itemsTabBtn.onclick = () => renderSubTab('items');
  if (locationsTabBtn) locationsTabBtn.onclick = () => renderSubTab('locations');
  if (ordersTabBtn) ordersTabBtn.onclick = () => renderSubTab('orders');

  // Initial render of default sub-tab
  renderSubTab('items');
}

/* Sub-Tab 1: Dishes / Items Management */
function renderAdminItemsTab(container) {
  const dishes = state.dishes;

  container.innerHTML = `
    <div class="admin-table-container">
      <div class="table-actions-header">
        <h3><i class="fa-solid fa-utensils"></i> All Registered Menu Items</h3>
        <button class="btn btn-primary btn-sm" id="tab-add-dish-btn">
          <i class="fa-solid fa-plus"></i> Add Item
        </button>
      </div>

      <div class="table-responsive">
        <table class="admin-data-table">
          <thead>
            <tr>
              <th>Dish</th>
              <th>Category</th>
              <th>Price</th>
              <th>Prep Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${dishes.map(dish => {
              const catName = CATEGORIES.find(c => c.id === dish.category)?.name || dish.category;
              return `
                <tr>
                  <td>
                    <div class="dish-item-cell">
                      <img src="${dish.image}" alt="${dish.name}" class="dish-thumb" onerror="this.src='./assets/woodfired-pizza.png'">
                      <div>
                        <strong>${dish.name}</strong>
                        <p class="dish-desc-sub">${dish.description.substring(0, 60)}...</p>
                      </div>
                    </div>
                  </td>
                  <td><span class="category-pill">${catName}</span></td>
                  <td><strong class="price-text">₹${dish.price.toFixed(2)}</strong></td>
                  <td>${dish.prepTime || '15 min'}</td>
                  <td>
                    <button class="stock-toggle-btn ${dish.inStock ? 'in-stock' : 'out-of-stock'}" data-dish-id="${dish.id}">
                      <i class="fa-solid ${dish.inStock ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                      ${dish.inStock ? 'In Stock' : 'Out of Stock'}
                    </button>
                  </td>
                  <td>
                    <div class="action-buttons-group">
                      <button class="btn btn-outline btn-xs edit-dish-btn" data-dish-id="${dish.id}" title="Edit Dish">
                        <i class="fa-solid fa-pen-to-square"></i> Edit
                      </button>
                      <button class="btn btn-outline btn-xs delete-dish-btn" data-dish-id="${dish.id}" style="color: var(--danger); border-color: var(--danger);" title="Delete Dish">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  const addBtn = document.getElementById('tab-add-dish-btn');
  if (addBtn) addBtn.onclick = () => openDishModal();

  // Stock toggle handler
  container.querySelectorAll('.stock-toggle-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-dish-id');
      const res = state.toggleDishStock(id);
      if (res && !res.success) {
        showToast(res.message, 'info');
      } else {
        showToast('Updated stock availability', 'success');
      }
    };
  });

  // Edit dish handler
  container.querySelectorAll('.edit-dish-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-dish-id');
      const dish = state.dishes.find(d => d.id === id);
      if (dish) openDishModal(dish);
    };
  });

  // Delete dish handler
  container.querySelectorAll('.delete-dish-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-dish-id');
      const dish = state.dishes.find(d => d.id === id);
      if (dish && confirm(`Are you sure you want to delete "${dish.name}"?`)) {
        const res = state.deleteDish(id);
        if (res && res.success) {
          showToast(`Deleted ${dish.name}`, 'info');
        } else if (res && res.message) {
          showToast(res.message, 'info');
        }
      }
    };
  });
}

/* Sub-Tab 2: Locations / Branches Management */
function renderAdminLocationsTab(container) {
  const locations = state.locations;

  container.innerHTML = `
    <div class="admin-table-container">
      <div class="table-actions-header">
        <h3><i class="fa-solid fa-store"></i> Restaurant Branch Locations</h3>
        <button class="btn btn-accent btn-sm" id="tab-add-loc-btn">
          <i class="fa-solid fa-plus"></i> Add Branch
        </button>
      </div>

      <div class="admin-locations-grid">
        ${locations.map(loc => `
          <div class="admin-loc-card">
            <div class="loc-card-top">
              <div>
                <span class="badge badge-gold"><i class="fa-solid fa-building"></i> Branch</span>
                <h3 class="loc-card-title">${loc.name}</h3>
              </div>
              <div class="loc-actions">
                <button class="btn btn-outline btn-xs edit-loc-btn" data-loc-id="${loc.id}">
                  <i class="fa-solid fa-pen"></i> Edit
                </button>
                <button class="btn btn-outline btn-xs delete-loc-btn" data-loc-id="${loc.id}" style="color: var(--danger); border-color: var(--danger);">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>

            <p class="loc-address-text"><i class="fa-solid fa-location-dot"></i> ${loc.address}</p>
            
            <div class="loc-details-grid">
              <div><i class="fa-solid fa-phone"></i> <strong>Phone:</strong> ${loc.phone}</div>
              <div><i class="fa-solid fa-clock"></i> <strong>Hours:</strong> ${loc.hours || '10:30 AM - 11 PM'}</div>
              <div><i class="fa-solid fa-map-pin"></i> <strong>Radius:</strong> ${loc.deliveryRadius || '7 km'}</div>
              <div><i class="fa-solid fa-motorcycle"></i> <strong>Delivery:</strong> ${loc.avgDeliveryTime || '20-30 min'}</div>
            </div>

            ${loc.features && loc.features.length > 0 ? `
              <div class="loc-tags">
                ${loc.features.map(f => `<span class="tag-mini">${f}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const addBtn = document.getElementById('tab-add-loc-btn');
  if (addBtn) addBtn.onclick = () => openLocationModal();

  // Edit location handler
  container.querySelectorAll('.edit-loc-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-loc-id');
      const loc = state.locations.find(l => l.id === id);
      if (loc) openLocationModal(loc);
    };
  });

  // Delete location handler
  container.querySelectorAll('.delete-loc-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-loc-id');
      const loc = state.locations.find(l => l.id === id);
      if (loc && confirm(`Are you sure you want to delete branch "${loc.name}"?`)) {
        const res = state.deleteLocation(id);
        if (res && res.success) {
          showToast(`Deleted branch ${loc.name}`, 'info');
        } else if (res && res.message) {
          showToast(res.message, 'info');
        }
      }
    };
  });
}

/* Sub-Tab 3: Orders Control Center */
function renderAdminOrdersTab(container) {
  const orders = state.orders;

  container.innerHTML = `
    <div class="admin-table-container">
      <div class="table-actions-header">
        <h3><i class="fa-solid fa-clock-rotate-left"></i> Incoming Customer Orders</h3>
      </div>

      ${orders.length === 0 ? `
        <div class="empty-state">
          <i class="fa-solid fa-clipboard-list empty-icon"></i>
          <h3>No Orders Placed Yet</h3>
        </div>
      ` : `
        <div class="table-responsive">
          <table class="admin-data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${orders.map(order => `
                <tr>
                  <td><strong>${order.id}</strong></td>
                  <td>${new Date(order.date).toLocaleDateString()}</td>
                  <td>
                    <div>
                      <strong>${order.customerName || 'Syam'}</strong>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">${order.phone || '+91 9876543210'}</div>
                    </div>
                  </td>
                  <td>
                    <div style="font-size: 0.85rem;">
                      ${order.items.map(i => `${i.qty}x ${i.name}`).join(', ')}
                    </div>
                  </td>
                  <td><strong style="color: var(--primary);">₹${(order.grandTotal || 250).toFixed(2)}</strong></td>
                  <td>
                    <select class="admin-status-select" data-order-id="${order.id}">
                      <option value="placed" ${order.status === 'placed' ? 'selected' : ''}>Placed</option>
                      <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Preparing</option>
                      <option value="delivering" ${order.status === 'delivering' ? 'selected' : ''}>Out for Delivery</option>
                      <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>Completed</option>
                    </select>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;

  // Status Change Handler
  container.querySelectorAll('.admin-status-select').forEach(select => {
    select.onchange = () => {
      const orderId = select.getAttribute('data-order-id');
      const newStatus = select.value;
      state.updateOrderStatus(orderId, newStatus);
      showToast(`Updated ${orderId} status to ${newStatus.toUpperCase()}`, 'success');
    };
  });
}
