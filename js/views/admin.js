/* ==========================================================================
   SEPARATE ADMIN DASHBOARD VIEW
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';
import { openDishModal, openLocationModal, openReservationModal } from '../components/adminModal.js';
import { openModal, closeModal } from '../components/modal.js';
import { CATEGORIES } from '../data.js';
import { isSupabaseConfigured, getSupabaseConfig, setSupabaseConfig, supabaseSeedAllData } from '../supabase.js';

export function renderAdminView(container) {
  if (!container) return;

  // Enforce Admin Permission Check
  if (!state.isAdmin()) {
    container.innerHTML = `
      <div class="container" style="padding: 4rem 1.5rem; text-align: center;">
        <div class="auth-restricted-card">
          <div class="restricted-icon"><i class="fa-solid fa-lock"></i></div>
          <h2>Admin Access Restricted</h2>
          <p>You need Administrator permissions to view and manage restaurant items, locations, orders, and table reservations.</p>
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

  // Active sub-tab inside Admin Page: 'items', 'locations', 'orders', 'reservations'
  let activeTab = 'items';
  const supabaseActive = isSupabaseConfigured();

  // Calculate Metrics
  const totalDishes = state.dishes.length;
  const inStockDishes = state.dishes.filter(d => d.inStock).length;
  const totalLocations = state.locations.length;
  const totalOrders = state.orders.length;
  const totalReservations = state.reservations.length;
  const totalRevenue = state.orders.reduce((sum, o) => sum + (o.grandTotal || 0), 0).toFixed(2);

  container.innerHTML = `
    <div class="admin-dashboard-wrapper">
      <div class="container">
        <!-- Admin Dashboard Header -->
        <div class="admin-header-bar">
          <div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge badge-admin"><i class="fa-solid fa-shield-halved"></i> ADMINISTRATOR PORTAL</span>
              <span class="badge ${supabaseActive ? 'badge-green' : 'badge-gold'}" id="supabase-status-badge" style="cursor: pointer;">
                <i class="fa-solid ${supabaseActive ? 'fa-database' : 'fa-server'}"></i>
                ${supabaseActive ? 'Live Supabase DB' : 'Demo Local Mode'}
              </span>
            </div>
            <h1 class="admin-title">Bistro Management Console</h1>
            <p class="admin-subtitle">Full administrative authority to manage menu items, restaurant branches, customer orders, and table reservations.</p>
          </div>

          <div class="admin-quick-actions">
            <button class="btn btn-outline" id="admin-supabase-config-btn" title="Configure Supabase Credentials">
              <i class="fa-solid fa-bolt" style="color: #3ecf8e;"></i> Supabase Settings
            </button>
            <button class="btn btn-outline" id="admin-add-reservation-btn" style="border-color: var(--accent-blue); color: var(--accent-blue);">
              <i class="fa-solid fa-chair"></i> Add Reservation
            </button>
            <button class="btn btn-primary" id="admin-add-item-btn">
              <i class="fa-solid fa-plus"></i> Add Menu Item
            </button>
            <button class="btn btn-accent" id="admin-add-branch-btn">
              <i class="fa-solid fa-building-circle-check"></i> Add Branch
            </button>
          </div>
        </div>

        <!-- Metric Cards Grid -->
        <div class="admin-metrics-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
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
              <span class="metric-label">Active Branches</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon icon-blue"><i class="fa-solid fa-basket-shopping"></i></div>
            <div class="metric-info">
              <span class="metric-value">${totalOrders}</span>
              <span class="metric-label">Customer Orders</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-green);"><i class="fa-solid fa-calendar-check"></i></div>
            <div class="metric-info">
              <span class="metric-value">${totalReservations}</span>
              <span class="metric-label">Table Reservations</span>
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
          <button class="admin-tab" id="tab-admin-reservations" data-tab="reservations">
            <i class="fa-solid fa-calendar-check"></i> Table Reservations (${totalReservations})
          </button>
        </div>

        <!-- Admin Content Section -->
        <div id="admin-tab-content" class="admin-tab-body"></div>
      </div>
    </div>
  `;

  // Attach Top Header Action Buttons
  const supabaseConfigBtn = document.getElementById('admin-supabase-config-btn');
  if (supabaseConfigBtn) supabaseConfigBtn.onclick = () => openSupabaseConfigModal();

  const supabaseBadge = document.getElementById('supabase-status-badge');
  if (supabaseBadge) supabaseBadge.onclick = () => openSupabaseConfigModal();

  const addItemBtn = document.getElementById('admin-add-item-btn');
  if (addItemBtn) addItemBtn.onclick = () => openDishModal();

  const addBranchBtn = document.getElementById('admin-add-branch-btn');
  if (addBranchBtn) addBranchBtn.onclick = () => openLocationModal();

  const addResBtn = document.getElementById('admin-add-reservation-btn');
  if (addResBtn) addResBtn.onclick = () => openReservationModal();

  // Sub-tab Navigation logic
  const itemsTabBtn = document.getElementById('tab-admin-items');
  const locationsTabBtn = document.getElementById('tab-admin-locations');
  const ordersTabBtn = document.getElementById('tab-admin-orders');
  const reservationsTabBtn = document.getElementById('tab-admin-reservations');

  function renderSubTab(tabName) {
    activeTab = tabName;
    [itemsTabBtn, locationsTabBtn, ordersTabBtn, reservationsTabBtn].forEach(b => b && b.classList.remove('active'));

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
    } else if (tabName === 'reservations') {
      if (reservationsTabBtn) reservationsTabBtn.classList.add('active');
      renderAdminReservationsTab(contentBox);
    }
  }

  if (itemsTabBtn) itemsTabBtn.onclick = () => renderSubTab('items');
  if (locationsTabBtn) locationsTabBtn.onclick = () => renderSubTab('locations');
  if (ordersTabBtn) ordersTabBtn.onclick = () => renderSubTab('orders');
  if (reservationsTabBtn) reservationsTabBtn.onclick = () => renderSubTab('reservations');

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
    select.onchange = async () => {
      const orderId = select.getAttribute('data-order-id');
      const newStatus = select.value;
      await state.updateOrderStatus(orderId, newStatus);
      showToast(`Updated ${orderId} status to ${newStatus.toUpperCase()}`, 'success');
    };
  });
}

/* Sub-Tab 4: Table Reservations Management */
function renderAdminReservationsTab(container) {
  const reservations = state.reservations;

  container.innerHTML = `
    <div class="admin-table-container">
      <div class="table-actions-header">
        <h3><i class="fa-solid fa-calendar-check"></i> Customer Table Reservations</h3>
        <button class="btn btn-primary btn-sm" id="tab-add-res-btn">
          <i class="fa-solid fa-plus"></i> Add Table Reservation
        </button>
      </div>

      ${reservations.length === 0 ? `
        <div class="empty-state">
          <i class="fa-solid fa-chair empty-icon"></i>
          <h3>No Table Reservations Yet</h3>
        </div>
      ` : `
        <div class="table-responsive">
          <table class="admin-data-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Date & Time</th>
                <th>Customer</th>
                <th>Branch Location</th>
                <th>Guests</th>
                <th>Special Requests</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${reservations.map(resItem => `
                <tr>
                  <td><strong>${resItem.id}</strong></td>
                  <td>
                    <div>
                      <strong>${resItem.date}</strong>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">${resItem.time}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <strong>${resItem.customerName}</strong>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">${resItem.phone}</div>
                    </div>
                  </td>
                  <td><span class="badge badge-gold"><i class="fa-solid fa-building"></i> ${resItem.locationName}</span></td>
                  <td><span class="badge badge-primary">${resItem.guests}</span></td>
                  <td><span style="font-size: 0.85rem; color: var(--text-sub);">${resItem.specialRequests || 'None'}</span></td>
                  <td>
                    <select class="admin-res-status-select" data-res-id="${resItem.id}">
                      <option value="pending" ${resItem.status === 'pending' ? 'selected' : ''}>Pending</option>
                      <option value="confirmed" ${resItem.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                      <option value="completed" ${resItem.status === 'completed' ? 'selected' : ''}>Completed</option>
                      <option value="cancelled" ${resItem.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <div class="action-buttons-group">
                      <button class="btn btn-outline btn-xs edit-res-btn" data-res-id="${resItem.id}" title="Edit Reservation">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button class="btn btn-outline btn-xs delete-res-btn" data-res-id="${resItem.id}" style="color: var(--danger); border-color: var(--danger);" title="Cancel Reservation">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;

  const addBtn = document.getElementById('tab-add-res-btn');
  if (addBtn) addBtn.onclick = () => openReservationModal();

  // Status handler
  container.querySelectorAll('.admin-res-status-select').forEach(select => {
    select.onchange = async () => {
      const resId = select.getAttribute('data-res-id');
      const newStatus = select.value;
      await state.updateReservationStatus(resId, newStatus);
      showToast(`Updated reservation ${resId} status to ${newStatus.toUpperCase()}`, 'success');
    };
  });

  // Edit handler
  container.querySelectorAll('.edit-res-btn').forEach(btn => {
    btn.onclick = () => {
      const resId = btn.getAttribute('data-res-id');
      const resItem = state.reservations.find(r => r.id === resId);
      if (resItem) openReservationModal(resItem);
    };
  });

  // Delete handler
  container.querySelectorAll('.delete-res-btn').forEach(btn => {
    btn.onclick = async () => {
      const resId = btn.getAttribute('data-res-id');
      const resItem = state.reservations.find(r => r.id === resId);
      if (resItem && confirm(`Cancel reservation for ${resItem.customerName}?`)) {
        await state.deleteReservation(resId);
        showToast(`Cancelled reservation ${resId}`, 'info');
      }
    };
  });
}

/* Supabase Configuration & Setup Modal */
export function openSupabaseConfigModal() {
  const currentConfig = getSupabaseConfig();
  const configured = isSupabaseConfigured();

  const title = `<i class="fa-solid fa-bolt" style="color: #3ecf8e;"></i> Supabase Backend & Database Setup`;

  const bodyHTML = `
    <div class="supabase-modal-content">
      <div class="config-status-banner ${configured ? 'status-connected' : 'status-disconnected'}">
        <i class="fa-solid ${configured ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i>
        <div>
          <strong>Status: ${configured ? 'Connected to Supabase DB' : 'Local Demo Mode Active'}</strong>
          <p style="margin: 0.2rem 0 0 0; font-size: 0.82rem;">
            ${configured 
              ? 'Your bistro app is storing authentication, dishes, locations, orders, and table reservations in your live Supabase cloud database.' 
              : 'Enter your Supabase URL & Anon Key below to link your live database and authentication service.'}
          </p>
        </div>
      </div>

      <form id="supabase-config-form" style="margin-top: 1.5rem;">
        <div class="form-group">
          <label class="form-label">Supabase Project URL *</label>
          <input type="text" id="supabase-url" class="form-input" placeholder="https://xyzcompany.supabase.co" value="${currentConfig.url}">
        </div>

        <div class="form-group">
          <label class="form-label">Supabase Anon Key *</label>
          <input type="password" id="supabase-key" class="form-input" placeholder="eyJhYmdj... (anon key)" value="${currentConfig.key}">
        </div>

        <div class="form-group" style="background: var(--bg-input); padding: 1rem; border-radius: var(--radius-md);">
          <strong style="font-size: 0.88rem; color: var(--primary);"><i class="fa-solid fa-code"></i> Database Setup SQL Script</strong>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.3rem 0 0.75rem 0;">
            A complete <code>supabase_schema.sql</code> file has been created at your project root containing table schemas for <code>profiles</code>, <code>dishes</code>, <code>locations</code>, <code>orders</code>, and <code>reservations</code> with Row-Level Security policies.
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-outline btn-xs" id="copy-sql-guide-btn">
              <i class="fa-solid fa-copy"></i> View SQL Schema Instructions
            </button>
            ${configured ? `
              <button type="button" class="btn btn-accent btn-xs" id="seed-supabase-data-btn">
                <i class="fa-solid fa-cloud-arrow-up"></i> Seed / Reflect All App Data to Supabase
              </button>
            ` : ''}
          </div>
        </div>
      </form>
    </div>
  `;

  const footerHTML = `
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${configured ? `
        <button class="btn btn-outline" id="clear-supabase-credentials-btn" style="color: var(--danger); border-color: var(--danger);">
          <i class="fa-solid fa-trash"></i> Disconnect
        </button>
      ` : '<div></div>'}

      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-supabase">Cancel</button>
        <button class="btn btn-primary" id="save-supabase-credentials-btn">
          <i class="fa-solid fa-plug"></i> Save & Connect
        </button>
      </div>
    </div>
  `;

  openModal({ title, bodyHTML, footerHTML });

  document.getElementById('modal-cancel-supabase').onclick = closeModal;

  const copySqlBtn = document.getElementById('copy-sql-guide-btn');
  if (copySqlBtn) {
    copySqlBtn.onclick = () => {
      alert(`Supabase Setup Instructions:\n\n1. Open your Supabase Dashboard (https://app.supabase.com).\n2. Navigate to SQL Editor.\n3. Copy the SQL script from "supabase_schema.sql" in your workspace and paste it into the editor.\n4. Click Run to create tables (profiles, dishes, locations, orders, reservations) and security policies!`);
    };
  }

  const seedBtn = document.getElementById('seed-supabase-data-btn');
  if (seedBtn) {
    seedBtn.onclick = async () => {
      seedBtn.disabled = true;
      seedBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Uploading Data to Supabase...`;
      const res = await supabaseSeedAllData(state.dishes, state.locations, state.orders, state.reservations);
      if (res && res.success) {
        showToast(`Successfully seeded Supabase! (${res.seededDishes} Dishes, ${res.seededLocations} Branches, ${res.seededOrders} Orders, ${res.seededReservations} Bookings uploaded)`, 'success', 5000);
        closeModal();
        await state.syncWithSupabase();
        state.notify('VIEW_CHANGED', 'admin');
      } else {
        showToast(`Seeding error: ${res?.error || 'Failed to populate Supabase'}`, 'info');
        seedBtn.disabled = false;
        seedBtn.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> Seed / Reflect All App Data to Supabase`;
      }
    };
  }

  const clearBtn = document.getElementById('clear-supabase-credentials-btn');
  if (clearBtn) {
    clearBtn.onclick = () => {
      setSupabaseConfig('', '');
      closeModal();
      showToast('Disconnected from Supabase. Switched to Local Mode.', 'info');
      state.notify('VIEW_CHANGED', 'admin');
    };
  }

  document.getElementById('save-supabase-credentials-btn').onclick = async () => {
    const url = document.getElementById('supabase-url').value.trim();
    const key = document.getElementById('supabase-key').value.trim();

    if (!url || !key) {
      showToast('Please enter both Supabase URL and Anon Key', 'info');
      return;
    }

    setSupabaseConfig(url, key);
    closeModal();
    showToast('Saved Supabase configuration! Syncing live data...', 'success');
    await state.syncWithSupabase();
    state.notify('VIEW_CHANGED', 'admin');
  };
}

