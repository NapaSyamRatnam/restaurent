/* ==========================================================================
   SAVORY BITES BISTRO - MAIN APPLICATION ENTRY POINT
   ========================================================================== */

import { state } from './state.js';
import { renderNavbar } from './components/navbar.js';
import { renderMenuView } from './views/menu.js';
import { renderWishlistView } from './views/wishlist.js';
import { renderCartDrawer } from './views/cart.js';
import { renderOrdersView } from './views/orders.js';
import { renderAccountView } from './views/account.js';
import { renderLocationView } from './views/location.js';
import { renderStaffView } from './views/staff.js';

function initApp() {
  // Set theme from state
  document.documentElement.setAttribute('data-theme', state.theme);

  // Render static components
  renderNavbar();
  renderCartDrawer();
  renderCurrentView();

  // Subscribe to state updates
  state.subscribe((event, payload) => {
    if (event === 'VIEW_CHANGED' || event === 'THEME_CHANGED') {
      renderNavbar();
      renderCurrentView();
    } else if (event === 'CART_UPDATED' || event === 'COUPON_APPLIED') {
      renderNavbar();
      renderCartDrawer();
    } else if (event === 'WISHLIST_UPDATED') {
      renderNavbar();
      if (state.activeView === 'wishlist') renderWishlistView(document.getElementById('app-view'));
      if (state.activeView === 'menu') renderMenuView(document.getElementById('app-view'));
    } else if (event === 'ORDER_PLACED' || event === 'ORDER_STATUS_UPDATED') {
      renderNavbar();
      renderCartDrawer();
      if (state.activeView === 'orders') renderOrdersView(document.getElementById('app-view'));
      if (state.activeView === 'staff') renderStaffView(document.getElementById('app-view'));
    } else if (event === 'STOCK_UPDATED') {
      if (state.activeView === 'menu') renderMenuView(document.getElementById('app-view'));
      if (state.activeView === 'staff') renderStaffView(document.getElementById('app-view'));
    } else if (event === 'LOCATIONS_UPDATED') {
      renderNavbar();
      if (state.activeView === 'location') renderLocationView(document.getElementById('app-view'));
      if (state.activeView === 'staff') renderStaffView(document.getElementById('app-view'));
    }
  });

  // Footer staff toggle button
  const footerStaffBtn = document.getElementById('footer-staff-toggle');
  if (footerStaffBtn) {
    footerStaffBtn.onclick = () => {
      state.setView('staff');
    };
  }
}

function renderCurrentView() {
  const container = document.getElementById('app-view');
  if (!container) return;

  switch (state.activeView) {
    case 'menu':
      renderMenuView(container);
      break;
    case 'wishlist':
      renderWishlistView(container);
      break;
    case 'orders':
      renderOrdersView(container);
      break;
    case 'account':
      renderAccountView(container);
      break;
    case 'location':
      renderLocationView(container);
      break;
    case 'staff':
      renderStaffView(container);
      break;
    default:
      renderMenuView(container);
      break;
  }
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
