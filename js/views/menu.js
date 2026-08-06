/* ==========================================================================
   INTERACTIVE MENU VIEW
   ========================================================================== */

import { CATEGORIES } from '../data.js';
import { state } from '../state.js';
import { showToast } from '../components/toast.js';
import { openModal, closeModal } from '../components/modal.js';
import { openDishModal } from '../components/adminModal.js';

export function renderMenuView(container) {
  const isWishlisted = (id) => state.isWishlisted(id);

  // Filter & Sort Logic
  let filteredDishes = state.dishes.filter(dish => {
    // Category Filter
    if (state.selectedCategory !== 'all') {
      if (state.selectedCategory === 'specials') {
        if (!dish.tags.includes('chefSpecial')) return false;
      } else if (dish.category !== state.selectedCategory) {
        return false;
      }
    }
    // Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const matchName = dish.name.toLowerCase().includes(q);
      const matchDesc = dish.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }
    // Dietary Filter
    if (state.dietaryFilter === 'veg' && !dish.tags.includes('veg')) return false;
    if (state.dietaryFilter === 'gf' && !dish.tags.includes('gf')) return false;
    if (state.dietaryFilter === 'chefSpecial' && !dish.tags.includes('chefSpecial')) return false;

    return true;
  });

  // Sorting
  if (state.sortBy === 'price-low') {
    filteredDishes.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filteredDishes.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filteredDishes.sort((a, b) => b.rating - a.rating);
  }

  container.innerHTML = `
    <!-- Hero Banner -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-tag">
          <span class="badge badge-gold"><i class="fa-solid fa-star"></i> AWARD WINNING GOURMET DINING</span>
        </div>
        <h1 class="hero-title">Handcrafted Culinary Delights</h1>
        <p class="hero-subtitle">Taste the finest artisanal recipes made with organic farm-to-table ingredients, delivered fresh to your doorstep in minutes.</p>

        <div class="hero-search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="menu-search-input" placeholder="Search pizza, Wagyu burger, truffle, salmon..." value="${state.searchQuery}">
          <button class="btn btn-primary btn-sm" id="hero-search-btn">Search</button>
        </div>

        <div class="hero-quick-tags">
          <span style="color: var(--text-muted); font-size: 0.85rem;">Popular:</span>
          <button class="tag-btn" data-tag="woodfired">Woodfired Pizza</button>
          <button class="tag-btn" data-tag="wagyu">Wagyu Burger</button>
          <button class="tag-btn" data-tag="salmon">Atlantic Salmon</button>
          <button class="tag-btn" data-tag="truffle">Truffle Pasta</button>
        </div>
      </div>
    </section>

    <!-- Category Sticky Filter Bar -->
    <section class="category-filter-section">
      <div class="container">
        <div class="category-bar">
          ${CATEGORIES.map(cat => `
            <button class="cat-pill ${state.selectedCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
              <i class="${cat.icon}"></i>
              <span>${cat.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Main Menu Container -->
    <section class="container">
      <div class="menu-toolbar">
        <div class="filter-group">
          <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-sub);">Filter:</span>
          <button class="filter-chip ${state.dietaryFilter === 'all' ? 'active' : ''}" data-diet="all">All Items</button>
          <button class="filter-chip ${state.dietaryFilter === 'veg' ? 'active' : ''}" data-diet="veg">
            <i class="fa-solid fa-leaf" style="color: var(--accent-green);"></i> Vegetarian
          </button>
          <button class="filter-chip ${state.dietaryFilter === 'gf' ? 'active' : ''}" data-diet="gf">
            <i class="fa-solid fa-wheat-awn-circle-exclamation"></i> Gluten-Free
          </button>
          <button class="filter-chip ${state.dietaryFilter === 'chefSpecial' ? 'active' : ''}" data-diet="chefSpecial">
            <i class="fa-solid fa-crown" style="color: var(--accent-gold);"></i> Chef Specials
          </button>
        </div>

        <div class="filter-group">
          <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-sub);">Sort By:</span>
          <select id="sort-select" class="sort-select">
            <option value="popular" ${state.sortBy === 'popular' ? 'selected' : ''}>Most Popular</option>
            <option value="price-low" ${state.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
            <option value="price-high" ${state.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
            <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''}>Highest Rated</option>
          </select>
        </div>
      </div>

      <!-- Dishes Grid -->
      ${filteredDishes.length === 0 ? `
        <div style="text-align: center; padding: 4rem 1.5rem; color: var(--text-muted);">
          <i class="fa-solid fa-utensils" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
          <h3>No Dishes Found</h3>
          <p>Try searching for a different keyword or adjusting your filters.</p>
        </div>
      ` : `
        <div class="menu-grid">
          ${filteredDishes.map(dish => `
            <div class="dish-card" data-dish-id="${dish.id}">
              <div class="dish-media">
                <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy">
                
                <button class="dish-wishlist-btn ${isWishlisted(dish.id) ? 'active' : ''}" 
                        data-wishlist-id="${dish.id}" 
                        title="${isWishlisted(dish.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                  <i class="${isWishlisted(dish.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
                </button>

                ${dish.tags.includes('chefSpecial') ? `
                  <span class="badge badge-gold dish-tag-badge"><i class="fa-solid fa-crown"></i> Chef Special</span>
                ` : dish.tags.includes('veg') ? `
                  <span class="badge badge-green dish-tag-badge"><i class="fa-solid fa-leaf"></i> Vegetarian</span>
                ` : ''}
              </div>

              <div class="dish-content">
                <div class="dish-header-row">
                  <h3 class="dish-title">${dish.name}</h3>
                  <span class="dish-price">₹${dish.price.toFixed(2)}</span>
                </div>

                <p class="dish-desc">${dish.description}</p>

                <div class="dish-meta">
                  <span><i class="fa-solid fa-star" style="color: var(--accent-gold);"></i> ${dish.rating} (${dish.reviews})</span>
                  <span><i class="fa-solid fa-clock"></i> ${dish.prepTime}</span>
                  <span><i class="fa-solid fa-fire" style="color: var(--primary);"></i> ${dish.calories}</span>
                </div>

                <div class="dish-card-actions">
                  <button class="btn btn-outline btn-sm edit-dish-direct-btn" data-edit-dish-id="${dish.id}" title="Edit Dish (Admin)">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn btn-outline btn-sm dish-detail-btn" data-detail-id="${dish.id}">
                    <i class="fa-solid fa-sliders"></i> Customize
                  </button>
                  <button class="btn btn-primary btn-sm add-cart-btn" data-add-id="${dish.id}" ${!dish.inStock ? 'disabled' : ''}>
                    <i class="fa-solid fa-plus"></i> ${dish.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </section>
  `;

  // Attach Event Handlers
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      state.searchQuery = e.target.value;
      renderMenuView(container);
    };
  }

  // Edit Dish Direct listeners
  document.querySelectorAll('.edit-dish-direct-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const dishId = btn.getAttribute('data-edit-dish-id');
      const dish = state.dishes.find(d => d.id === dishId);
      if (dish) openDishModal(dish);
    };
  });

  // Quick Tags
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.onclick = () => {
      const tag = btn.getAttribute('data-tag');
      state.searchQuery = tag;
      renderMenuView(container);
    };
  });

  // Category Pills
  document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.onclick = () => {
      state.selectedCategory = btn.getAttribute('data-cat');
      renderMenuView(container);
    };
  });

  // Dietary Chips
  document.querySelectorAll('[data-diet]').forEach(btn => {
    btn.onclick = () => {
      state.dietaryFilter = btn.getAttribute('data-diet');
      renderMenuView(container);
    };
  });

  // Sort Selector
  const sortSel = document.getElementById('sort-select');
  if (sortSel) {
    sortSel.onchange = (e) => {
      state.sortBy = e.target.value;
      renderMenuView(container);
    };
  }

  // Wishlist Toggle
  document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      if (!state.isLoggedIn()) {
        showToast('Please log in to save items to your Wishlist.', 'info');
        state.setView('login');
        return;
      }
      const dishId = btn.getAttribute('data-wishlist-id');
      state.toggleWishlist(dishId);
      const isNowWishlisted = state.isWishlisted(dishId);
      showToast(isNowWishlisted ? 'Added to Wishlist!' : 'Removed from Wishlist', isNowWishlisted ? 'info' : 'info');
      renderMenuView(container);
    };
  });

  // Quick Add to Cart
  document.querySelectorAll('[data-add-id]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const dishId = btn.getAttribute('data-add-id');
      const dish = state.dishes.find(d => d.id === dishId);
      if (dish && dish.inStock) {
        state.addToCart(dishId, 1);
        showToast(`Added ${dish.name} to Cart!`, 'success');
      }
    };
  });

  // Detail & Customization Modal
  document.querySelectorAll('[data-detail-id]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const dishId = btn.getAttribute('data-detail-id');
      openDishCustomizationModal(dishId);
    };
  });
}

function openDishCustomizationModal(dishId) {
  const dish = state.dishes.find(d => d.id === dishId);
  if (!dish) return;

  let modalQty = 1;

  const bodyHTML = `
    <div style="display: flex; gap: 1.25rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
      <img src="${dish.image}" alt="${dish.name}" style="width: 140px; height: 120px; border-radius: var(--radius-md); object-fit: cover;">
      <div style="flex: 1;">
        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.3rem;">${dish.name}</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">${dish.description}</p>
        <span style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${dish.price.toFixed(2)}</span>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label"><i class="fa-solid fa-pepper-hot" style="color: var(--primary);"></i> Spice Level Selector</label>
      <select id="modal-spice-select" class="form-select">
        <option value="Mild / Regular">Mild / Regular (Default)</option>
        <option value="Medium Spicy">Medium Spicy 🔥</option>
        <option value="Extra Hot & Spicy">Extra Hot & Spicy 🔥🔥</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label"><i class="fa-solid fa-cheese"></i> Custom Add-Ons & Toppings</label>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub);">
          <input type="checkbox" id="addon-cheese" value="Extra Buffalo Cheese (+₹2.50)"> Extra Buffalo Cheese (+₹2.50)
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub);">
          <input type="checkbox" id="addon-sauce" value="Truffle Garlic Dip (+₹1.75)"> Truffle Garlic Dip (+₹1.75)
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub);">
          <input type="checkbox" id="addon-gf" value="Gluten-Free Crust/Bun (+₹2.00)"> Gluten-Free Option (+₹2.00)
        </label>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label"><i class="fa-solid fa-comment-dots"></i> Chef Preparation Notes</label>
      <textarea id="modal-notes-input" class="form-textarea" rows="2" placeholder="e.g. Dressing on the side, extra crispy, no onions..."></textarea>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--border-color);">
      <span style="font-weight: 600; color: var(--text-sub);">Quantity:</span>
      <div class="qty-control" style="transform: scale(1.1);">
        <button class="qty-btn" id="modal-qty-minus"><i class="fa-solid fa-minus"></i></button>
        <span class="qty-num" id="modal-qty-val">1</span>
        <button class="qty-btn" id="modal-qty-plus"><i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
  `;

  const footerHTML = `
    <button class="btn btn-secondary" id="modal-cancel-btn">Cancel</button>
    <button class="btn btn-primary" id="modal-add-cart-btn"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
  `;

  openModal({
    title: 'Customize Your Order',
    bodyHTML,
    footerHTML
  });

  // Modal Qty Listeners
  const minusBtn = document.getElementById('modal-qty-minus');
  const plusBtn = document.getElementById('modal-qty-plus');
  const valSpan = document.getElementById('modal-qty-val');

  if (minusBtn && plusBtn && valSpan) {
    minusBtn.onclick = () => {
      if (modalQty > 1) {
        modalQty--;
        valSpan.textContent = modalQty;
      }
    };
    plusBtn.onclick = () => {
      modalQty++;
      valSpan.textContent = modalQty;
    };
  }

  const cancelBtn = document.getElementById('modal-cancel-btn');
  if (cancelBtn) cancelBtn.onclick = closeModal;

  const addCartBtn = document.getElementById('modal-add-cart-btn');
  if (addCartBtn) {
    addCartBtn.onclick = () => {
      const spice = document.getElementById('modal-spice-select').value;
      const notes = document.getElementById('modal-notes-input').value.trim();

      const addons = [];
      if (document.getElementById('addon-cheese').checked) addons.push('Extra Cheese');
      if (document.getElementById('addon-sauce').checked) addons.push('Truffle Dip');
      if (document.getElementById('addon-gf').checked) addons.push('GF Option');

      let optionsStr = spice;
      if (addons.length > 0) optionsStr += ` | ${addons.join(', ')}`;
      if (notes) optionsStr += ` (${notes})`;

      state.addToCart(dishId, modalQty, optionsStr);
      showToast(`Added ${dish.name} (${modalQty}x) to Cart!`, 'success');
      closeModal();
    };
  }
}
