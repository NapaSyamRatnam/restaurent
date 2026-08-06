/* ==========================================================================
   WISHLIST / FAVORITES VIEW
   ========================================================================== */

import { state } from '../state.js';
import { showToast } from '../components/toast.js';

export function renderWishlistView(container) {
  if (!state.isLoggedIn()) {
    container.innerHTML = `
      <div class="container" style="padding: 4rem 1.5rem; text-align: center;">
        <div class="auth-restricted-card">
          <div class="restricted-icon" style="background: rgba(239, 68, 68, 0.1); color: var(--accent-red);"><i class="fa-solid fa-heart"></i></div>
          <h2>Authentication Required</h2>
          <p>Please log in to your account to view and manage your saved wishlist items.</p>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-primary" id="wishlist-login-redirect-btn">
              <i class="fa-solid fa-right-to-bracket"></i> Log In Now
            </button>
            <button class="btn btn-outline" id="wishlist-back-menu-btn">
              <i class="fa-solid fa-utensils"></i> Browse Menu
            </button>
          </div>
        </div>
      </div>
    `;

    const loginBtn = document.getElementById('wishlist-login-redirect-btn');
    if (loginBtn) loginBtn.onclick = () => state.setView('login');

    const backBtn = document.getElementById('wishlist-back-menu-btn');
    if (backBtn) backBtn.onclick = () => state.setView('menu');

    return;
  }

  const wishlistedDishes = state.dishes.filter(dish => state.wishlist.includes(dish.id));

  container.innerHTML = `
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-heart" style="color: var(--accent-red);"></i> My Saved Wishlist</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Keep track of your favorite gourmet dishes for quick future orders.</p>
        </div>
        <span class="badge badge-primary" style="font-size: 0.9rem; padding: 0.4rem 1rem;">${wishlistedDishes.length} Saved Items</span>
      </div>

      ${wishlistedDishes.length === 0 ? `
        <div style="text-align: center; padding: 5rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <div style="width: 80px; height: 80px; border-radius: var(--radius-full); background: rgba(239, 68, 68, 0.1); color: var(--accent-red); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem auto;">
            <i class="fa-regular fa-heart"></i>
          </div>
          <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem;">Your Wishlist is Empty</h2>
          <p style="color: var(--text-muted); max-width: 420px; margin: 0 auto 2rem auto;">Browse our artisanal menu and click the heart icon on any dish to save it here.</p>
          <button class="btn btn-primary btn-lg" id="wishlist-explore-btn">
            <i class="fa-solid fa-book-open"></i> Explore Menu Now
          </button>
        </div>
      ` : `
        <div class="menu-grid">
          ${wishlistedDishes.map(dish => `
            <div class="dish-card">
              <div class="dish-media">
                <img src="${dish.image}" alt="${dish.name}" class="dish-img">
                <button class="dish-wishlist-btn active" data-remove-wishlist="${dish.id}" title="Remove from Wishlist">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>

              <div class="dish-content">
                <div class="dish-header-row">
                  <h3 class="dish-title">${dish.name}</h3>
                  <span class="dish-price">₹${dish.price.toFixed(2)}</span>
                </div>

                <p class="dish-desc">${dish.description}</p>

                <div class="dish-meta">
                  <span><i class="fa-solid fa-star" style="color: var(--accent-gold);"></i> ${dish.rating}</span>
                  <span><i class="fa-solid fa-clock"></i> ${dish.prepTime}</span>
                </div>

                <div class="dish-card-actions">
                  <button class="btn btn-primary btn-full add-cart-btn" data-wishlist-add="${dish.id}">
                    <i class="fa-solid fa-cart-plus"></i> Move to Cart
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </section>
  `;

  // Explore button
  const exploreBtn = document.getElementById('wishlist-explore-btn');
  if (exploreBtn) {
    exploreBtn.onclick = () => state.setView('menu');
  }

  // Remove handler
  document.querySelectorAll('[data-remove-wishlist]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-remove-wishlist');
      state.toggleWishlist(id);
      showToast('Item removed from Wishlist', 'info');
      renderWishlistView(container);
    };
  });

  // Move to cart handler
  document.querySelectorAll('[data-wishlist-add]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-wishlist-add');
      const dish = state.dishes.find(d => d.id === id);
      if (dish) {
        state.addToCart(id, 1);
        showToast(`Moved ${dish.name} to Cart!`, 'success');
      }
    };
  });
}
