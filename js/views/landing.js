/* ==========================================================================
   LANDING PAGE VIEW
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';

export function renderLandingView(container) {
  if (!container) return;

  const chefSpecials = state.dishes.filter(d => d.tags && d.tags.includes('chefSpecial')).slice(0, 3);
  const featuredDishes = chefSpecials.length > 0 ? chefSpecials : state.dishes.slice(0, 3);
  const locations = state.locations.slice(0, 3);
  const isWishlisted = (id) => state.isWishlisted(id);

  container.innerHTML = `
    <!-- Landing Hero Section -->
    <section class="landing-hero">
      <div class="landing-hero-overlay"></div>
      <div class="landing-hero-content">
        <span class="landing-badge">
          <i class="fa-solid fa-sparkles"></i> Welcoming Gourmet Lovers
        </span>
        <h1 class="landing-title">
          Artisanal Culinary Magic <br> Delivered <span class="landing-highlight">Hot & Fresh</span>
        </h1>
        <p class="landing-subtitle">
          Experience handcrafted dishes prepared by world-class chefs, local organic ingredients, 
          and lightning-fast delivery to your doorstep.
        </p>

        <div class="landing-cta-group">
          <button class="btn btn-primary btn-lg" id="landing-menu-btn">
            <i class="fa-solid fa-utensils"></i> Explore Full Menu
          </button>
          <button class="btn btn-secondary btn-lg" id="landing-locations-btn">
            <i class="fa-solid fa-location-dot"></i> Book a Table
          </button>
          <button class="btn btn-outline btn-lg landing-admin-quick-btn" id="landing-admin-btn">
            <i class="fa-solid fa-user-shield"></i> Admin Portal
          </button>
        </div>

        <div class="landing-stats-row">
          <div class="stat-item">
            <span class="stat-number">4.9 ★</span>
            <span class="stat-label">10,000+ Reviews</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">20 Min</span>
            <span class="stat-label">Avg. Express Delivery</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Farm Fresh Organic</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Propositions / Highlights -->
    <section class="landing-features-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fa-solid fa-award"></i> WHY CHOOSE SAVORY BITES</span>
          <h2 class="section-title">Crafted With Passion & Excellence</h2>
          <p class="section-subtitle">We believe food is an art form. Here is why thousands choose us daily.</p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-leaf"></i>
            </div>
            <h3>Farm-to-Table Fresh</h3>
            <p>Sourced daily from local organic farms. Zero preservatives, maximum flavor, and authentic taste.</p>
          </div>

          <div class="feature-card highlight-card">
            <div class="feature-icon">
              <i class="fa-solid fa-fire-burner"></i>
            </div>
            <h3>Master Chef Artisans</h3>
            <p>Every dish is crafted under the guidance of award-winning culinary masters using traditional wood-fire techniques.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <h3>Insulated Express Delivery</h3>
            <p>Hot food stays piping hot. Our thermal-locked eco-friendly containers guarantee oven-fresh arrival.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Signature Dishes -->
    <section class="landing-dishes-section">
      <div class="container">
        <div class="landing-section-top">
          <div>
            <span class="section-tag"><i class="fa-solid fa-star"></i> CHEF'S SPECIAL SELECTIONS</span>
            <h2 class="section-title">Signature Delicacies</h2>
          </div>
          <button class="btn btn-outline" id="landing-view-all-dishes-btn">
            View All Dishes <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div class="menu-grid" id="landing-dishes-grid">
          ${featuredDishes.map(dish => `
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
                  <button class="btn btn-primary btn-sm btn-full add-cart-btn" data-add-id="${dish.id}">
                    <i class="fa-solid fa-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Branch Locations Highlights -->
    <section class="landing-branches-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fa-solid fa-building-circle-check"></i> OUR RESTAURANT LOCATIONS</span>
          <h2 class="section-title">Visit Our Nearest Bistro Branch</h2>
          <p class="section-subtitle">Dine-in with luxurious ambiance or order delivery from your closest location.</p>
        </div>

        <div class="landing-branches-grid">
          ${locations.map(loc => `
            <div class="landing-branch-card">
              <div class="branch-card-header">
                <i class="fa-solid fa-store branch-icon"></i>
                <div>
                  <h3 class="branch-title">${loc.name}</h3>
                  <span class="branch-status"><span class="pulse-dot"></span> Open Now</span>
                </div>
              </div>
              <p class="branch-address"><i class="fa-solid fa-location-dot"></i> ${loc.address}</p>
              <div class="branch-info-row">
                <span><i class="fa-solid fa-phone"></i> ${loc.phone}</span>
                <span><i class="fa-solid fa-motorcycle"></i> ${loc.avgDeliveryTime || '20-30 min'}</span>
              </div>
              <div class="branch-footer">
                <button class="btn btn-primary btn-sm btn-full branch-select-btn" data-loc-id="${loc.id}">
                  Select as My Branch
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Special Promo CTA Banner -->
    <section class="landing-promo-banner">
      <div class="container">
        <div class="promo-box">
          <div class="promo-content">
            <span class="badge badge-flash"><i class="fa-solid fa-tag"></i> EXCLUSIVE DISCOUNT</span>
            <h2>Get 20% OFF Your First Gourmet Order!</h2>
            <p>Apply promo code <strong>WELCOME20</strong> at checkout and enjoy artisanal dining delivered fast.</p>
            <div class="promo-buttons">
              <button class="btn btn-light btn-lg" id="promo-order-now-btn">
                <i class="fa-solid fa-cart-shopping"></i> Order Now
              </button>
              <button class="btn btn-outline-light btn-lg" id="promo-admin-link">
                <i class="fa-solid fa-user-gear"></i> Admin & Staff Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Event Listeners
  const menuBtn = document.getElementById('landing-menu-btn');
  if (menuBtn) menuBtn.onclick = () => state.setView('menu');

  const viewAllBtn = document.getElementById('landing-view-all-dishes-btn');
  if (viewAllBtn) viewAllBtn.onclick = () => state.setView('menu');

  const locBtn = document.getElementById('landing-locations-btn');
  if (locBtn) locBtn.onclick = () => state.setView('location');

  const adminBtn = document.getElementById('landing-admin-btn');
  if (adminBtn) adminBtn.onclick = () => {
    if (state.isAdmin()) {
      state.setView('admin');
    } else {
      showToast('Please log in with Admin credentials to access Admin Portal.', 'info');
      state.setView('login');
    }
  };

  const promoAdminBtn = document.getElementById('promo-admin-link');
  if (promoAdminBtn) promoAdminBtn.onclick = () => {
    if (state.isAdmin()) {
      state.setView('admin');
    } else {
      state.setView('login');
    }
  };

  const promoOrderBtn = document.getElementById('promo-order-now-btn');
  if (promoOrderBtn) promoOrderBtn.onclick = () => state.setView('menu');

  // Add to cart listener for featured dishes
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-add-id');
      state.addToCart(id, 1);
      showToast('Added to Cart!', 'success');
    };
  });

  // Wishlist listener for featured dishes
  document.querySelectorAll('.dish-wishlist-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-wishlist-id');
      state.toggleWishlist(id);
      renderLandingView(container);
    };
  });

  // Branch Selection Listeners
  document.querySelectorAll('.branch-select-btn').forEach(btn => {
    btn.onclick = () => {
      const locId = btn.getAttribute('data-loc-id');
      const loc = state.locations.find(l => l.id === locId);
      if (loc) {
        state.selectedLocation = loc;
        showToast(`Delivering from ${loc.name}`, 'success');
        state.setView('menu');
      }
    };
  });
}
