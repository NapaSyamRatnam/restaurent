(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`all`,name:`All Dishes`,icon:`fa-solid fa-utensils`},{id:`specials`,name:`Chef's Specials`,icon:`fa-solid fa-crown`},{id:`starters`,name:`Starters & Apps`,icon:`fa-solid fa-bowl-food`},{id:`mains`,name:`Gourmet Mains`,icon:`fa-solid fa-drumstick-bite`},{id:`pizzas`,name:`Artisanal Pizzas`,icon:`fa-solid fa-pizza-slice`},{id:`burgers`,name:`Craft Burgers`,icon:`fa-solid fa-burger`},{id:`desserts`,name:`Decadent Desserts`,icon:`fa-solid fa-ice-cream`},{id:`drinks`,name:`Craft Beverages`,icon:`fa-solid fa-wine-glass`}],t=[{id:`dish-1`,name:`Artisanal Woodfired Neapolitan Pizza`,category:`pizzas`,price:18.99,rating:4.9,reviews:142,description:`Freshly baked wood-fired pizza with San Marzano tomatoes, buffalo mozzarella, fresh basil leaves, and cold-pressed extra virgin olive oil drizzle.`,image:`./assets/woodfired-pizza.png`,spicy:0,calories:`850 kcal`,prepTime:`15-20 min`,tags:[`chefSpecial`,`veg`],inStock:!0},{id:`dish-2`,name:`Truffle Wagyu Gourmet Burger`,category:`burgers`,price:21.5,rating:4.95,reviews:218,description:`Prime Wagyu beef patty with black truffle aioli, aged Swiss Gruyère, caramelized balsamic onions, and arugula on a toasted brioche bun.`,image:`./assets/truffle-burger.png`,spicy:1,calories:`920 kcal`,prepTime:`12-15 min`,tags:[`chefSpecial`],inStock:!0},{id:`dish-3`,name:`Crispy Calamari Fritti`,category:`starters`,price:14.25,rating:4.7,reviews:89,description:`Wild-caught calamari lightly dusted in seasoned flour, flash-fried until golden, served with house garlic lemon aioli and spicy marinara.`,image:`https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80`,spicy:1,calories:`540 kcal`,prepTime:`10 min`,tags:[],inStock:!0},{id:`dish-4`,name:`Grilled Atlantic Salmon Ribeye`,category:`mains`,price:26.8,rating:4.85,reviews:164,description:`Pan-seared Atlantic salmon fillet served over saffron risotto, tender asparagus spears, and a citrus lemon butter dill emulsion.`,image:`https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80`,spicy:0,calories:`680 kcal`,prepTime:`20 min`,tags:[`gf`,`chefSpecial`],inStock:!0},{id:`dish-5`,name:`Fiery Spicy Thai Basil Noodle Bowl`,category:`mains`,price:17.5,rating:4.6,reviews:112,description:`Wok-tossed rice noodles with red bell peppers, Thai bird chili, holy basil, garlic shoots, and grilled organic tofu or chicken.`,image:`https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80`,spicy:3,calories:`610 kcal`,prepTime:`15 min`,tags:[`veg`],inStock:!0},{id:`dish-6`,name:`Creamy Wild Mushroom Rigatoni`,category:`mains`,price:19,rating:4.75,reviews:95,description:`House-made rigatoni pasta tossed in a rich porcini mushroom cream sauce, white truffle oil, shaved Parmigiano-Reggiano, and thyme.`,image:`https://images.unsplash.com/photo-1621996346565-e3d5d6281318?auto=format&fit=crop&w=600&q=80`,spicy:0,calories:`740 kcal`,prepTime:`15 min`,tags:[`veg`],inStock:!0},{id:`dish-7`,name:`Molten Belgian Chocolate Lava Cake`,category:`desserts`,price:10.5,rating:4.9,reviews:178,description:`Warm dark Belgian chocolate cake with a rich liquid fudge center, served with Madagascan bourbon vanilla bean gelato.`,image:`https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80`,spicy:0,calories:`520 kcal`,prepTime:`12 min`,tags:[`veg`],inStock:!0},{id:`dish-8`,name:`Smoked Smoked Old Fashioned Cocktail`,category:`drinks`,price:13,rating:4.8,reviews:65,description:`Bourbon infused with hickory smoke, Angostura bitters, maraschino cherry, and hand-carved ice sphere.`,image:`https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80`,spicy:0,calories:`180 kcal`,prepTime:`5 min`,tags:[],inStock:!0}],n=[{id:`loc-1`,name:`GT Road Central (Flagship)`,address:`Grand Trunk Road, Near VRC Centre, Nellore, Andhra Pradesh 524001`,phone:`+91 861 234 8901`,hours:`Daily: 11:00 AM - 11:00 PM`,deliveryRadius:`8 km`,avgDeliveryTime:`20-30 min`,rating:4.9,mapLat:14.4426,mapLng:79.9865,features:[`Valet Parking`,`Air Conditioned Dining`,`Full Bar & Mocktail Lounge`,`Private Family Section`]},{id:`loc-2`,name:`Magunta Layout Bistro`,address:`16/1124 Mini Bypass Road, Magunta Layout, Nellore, Andhra Pradesh 524003`,phone:`+91 861 239 8765`,hours:`Mon-Sat: 11:30 AM - 10:30 PM`,deliveryRadius:`6 km`,avgDeliveryTime:`25-35 min`,rating:4.8,mapLat:14.435,mapLng:79.978,features:[`Rooftop Seating`,`Weekend Special Buffet`,`Craft Beverage Counter`]},{id:`loc-3`,name:`Pogathota Plaza`,address:`Opposite Children's Park, Pogathota, Nellore, Andhra Pradesh 524001`,phone:`+91 861 230 4567`,hours:`Daily: 10:00 AM - 11:30 PM`,deliveryRadius:`7 km`,avgDeliveryTime:`15-25 min`,rating:4.95,mapLat:14.448,mapLng:79.989,features:[`Garden Dining`,`Family Dining Tables`,`Spicy Nellore Specials & Fusion Menu`]}],r={name:`Alex Vance`,email:`alex.vance@example.com`,phone:`+91 98480 12345`,rewardPoints:480,loyaltyTier:`Gold Gourmet`,addresses:[{id:`addr-1`,label:`Home`,street:`Door No. 24-2-154, Dargamitta`,city:`Nellore, Andhra Pradesh`,zip:`524003`,isDefault:!0},{id:`addr-2`,label:`Work / Tech Hub`,street:`Plot 45, Auto Nagar Industrial Area`,city:`Nellore, Andhra Pradesh`,zip:`524004`,isDefault:!1}]},i=[{id:`ORD-8492`,date:`2026-08-04T15:30:00.000Z`,status:`preparing`,items:[{dishId:`dish-1`,name:`Artisanal Woodfired Neapolitan Pizza`,qty:1,price:18.99,opts:`Extra Basil`},{dishId:`dish-2`,name:`Truffle Wagyu Gourmet Burger`,qty:1,price:21.5,opts:`Medium Rare`},{dishId:`dish-8`,name:`Smoked Smoked Old Fashioned Cocktail`,qty:2,price:13,opts:``}],subtotal:66.49,tax:5.32,deliveryFee:3.5,discount:13.3,total:62.01,deliveryAddress:`Door No. 24-2-154, Dargamitta, Nellore, Andhra Pradesh 524003`,fulfillmentType:`Delivery`,estimatedEta:`18 minutes`,driverName:`Srinivas Rao`,driverPhone:`+91 98480 88990`},{id:`ORD-7210`,date:`2026-08-01T19:15:00.000Z`,status:`delivered`,items:[{dishId:`dish-4`,name:`Grilled Atlantic Salmon Ribeye`,qty:2,price:26.8,opts:`Lemon on side`},{dishId:`dish-7`,name:`Molten Belgian Chocolate Lava Cake`,qty:1,price:10.5,opts:``}],subtotal:64.1,tax:5.12,deliveryFee:0,discount:0,total:69.22,deliveryAddress:`Door No. 24-2-154, Dargamitta, Nellore, Andhra Pradesh 524003`,fulfillmentType:`Delivery`,estimatedEta:`Delivered`,driverName:`Kalyan Kumar`,driverPhone:`+91 98480 77112`}],a=new class{constructor(){this.listeners=[],this.init()}init(){this.activeView=`menu`,this.theme=localStorage.getItem(`sb_theme`)||`dark`;let e=localStorage.getItem(`sb_wishlist`);this.wishlist=e?JSON.parse(e):[`dish-1`,`dish-4`];let a=localStorage.getItem(`sb_cart`);this.cart=a?JSON.parse(a):[{dishId:`dish-1`,qty:1,options:`Extra Fresh Basil`,price:18.99}];let o=localStorage.getItem(`sb_dishes`);this.dishes=o?JSON.parse(o):t;let s=localStorage.getItem(`sb_profile`);this.profile=s?JSON.parse(s):r;let c=localStorage.getItem(`sb_orders`);this.orders=c?JSON.parse(c):i,this.selectedLocation=n[0],this.appliedCoupon={code:`WELCOME20`,discountPercent:20},this.searchQuery=``,this.selectedCategory=`all`,this.dietaryFilter=`all`,this.sortBy=`popular`}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(e,t){this.listeners.forEach(n=>n(e,t))}setTheme(e){this.theme=e,localStorage.setItem(`sb_theme`,e),document.documentElement.setAttribute(`data-theme`,e),this.notify(`THEME_CHANGED`,e)}setView(e){this.activeView=e,window.scrollTo({top:0,behavior:`smooth`}),this.notify(`VIEW_CHANGED`,e)}toggleWishlist(e){this.wishlist.includes(e)?this.wishlist=this.wishlist.filter(t=>t!==e):this.wishlist.push(e),localStorage.setItem(`sb_wishlist`,JSON.stringify(this.wishlist)),this.notify(`WISHLIST_UPDATED`,this.wishlist)}isWishlisted(e){return this.wishlist.includes(e)}addToCart(e,t=1,n=``){let r=this.dishes.find(t=>t.id===e);if(!r)return;let i=this.cart.findIndex(t=>t.dishId===e&&t.options===n);i>-1?this.cart[i].qty+=t:this.cart.push({dishId:e,qty:t,options:n,price:r.price}),this.saveCart(),this.notify(`CART_UPDATED`,this.cart)}updateCartQty(e,t){t<=0?this.cart.splice(e,1):this.cart[e].qty=t,this.saveCart(),this.notify(`CART_UPDATED`,this.cart)}clearCart(){this.cart=[],this.saveCart(),this.notify(`CART_UPDATED`,this.cart)}saveCart(){localStorage.setItem(`sb_cart`,JSON.stringify(this.cart))}getCartTotal(){let e=this.cart.reduce((e,t)=>e+t.price*t.qty,0),t=this.appliedCoupon?e*(this.appliedCoupon.discountPercent/100):0,n=(e-t)*.08,r=e>0?3.5:0;return{subtotal:e,discountAmount:t,tax:n,deliveryFee:r,grandTotal:Math.max(0,e-t+n+r)}}applyCoupon(e){let t=e.trim().toUpperCase();return t===`WELCOME20`?(this.appliedCoupon={code:`WELCOME20`,discountPercent:20},this.notify(`COUPON_APPLIED`,this.appliedCoupon),{success:!0,message:`20% Discount Coupon Applied!`}):t===`SAVORY10`?(this.appliedCoupon={code:`SAVORY10`,discountPercent:10},this.notify(`COUPON_APPLIED`,this.appliedCoupon),{success:!0,message:`10% Discount Coupon Applied!`}):{success:!1,message:`Invalid promo code. Try WELCOME20`}}placeOrder(e){let t={id:`ORD-${Math.floor(1e3+Math.random()*9e3)}`,date:new Date().toISOString(),status:`placed`,items:this.cart.map(e=>{let t=this.dishes.find(t=>t.id===e.dishId);return{dishId:e.dishId,name:t?t.name:`Gourmet Dish`,qty:e.qty,price:e.price,opts:e.options}}),...e};return this.orders.unshift(t),localStorage.setItem(`sb_orders`,JSON.stringify(this.orders)),this.clearCart(),this.notify(`ORDER_PLACED`,t),t}updateOrderStatus(e,t){let n=this.orders.find(t=>t.id===e);n&&(n.status=t,localStorage.setItem(`sb_orders`,JSON.stringify(this.orders)),this.notify(`ORDER_STATUS_UPDATED`,n))}toggleDishStock(e){let t=this.dishes.find(t=>t.id===e);t&&(t.inStock=!t.inStock,localStorage.setItem(`sb_dishes`,JSON.stringify(this.dishes)),this.notify(`STOCK_UPDATED`,t))}addAddress(e){let t={id:`addr-${Date.now()}`,...e};e.isDefault&&this.profile.addresses.forEach(e=>e.isDefault=!1),this.profile.addresses.push(t),localStorage.setItem(`sb_profile`,JSON.stringify(this.profile)),this.notify(`PROFILE_UPDATED`,this.profile)}};function o(){let e=document.getElementById(`main-header`);if(!e)return;let t=a.cart.reduce((e,t)=>e+t.qty,0),n=a.wishlist.length,r=a.activeView;e.innerHTML=`
    <div class="nav-container">
      <a href="#" class="brand-logo" id="nav-brand-btn">
        <div class="brand-icon-wrapper">
          <i class="fa-solid fa-utensils"></i>
        </div>
        <span>SAVORY BITES <span class="brand-accent">BISTRO</span></span>
      </a>

      <nav class="nav-links">
        <button class="nav-link ${r===`menu`?`active`:``}" data-nav="menu">
          <i class="fa-solid fa-book-open"></i> Menu
        </button>
        <button class="nav-link ${r===`wishlist`?`active`:``}" data-nav="wishlist">
          <i class="fa-solid fa-heart"></i> Wishlist
          ${n>0?`<span class="badge-counter">${n}</span>`:``}
        </button>
        <button class="nav-link ${r===`orders`?`active`:``}" data-nav="orders">
          <i class="fa-solid fa-clock-rotate-left"></i> Track Orders
        </button>
        <button class="nav-link ${r===`account`?`active`:``}" data-nav="account">
          <i class="fa-solid fa-user"></i> Account
        </button>
        <button class="nav-link ${r===`location`?`active`:``}" data-nav="location">
          <i class="fa-solid fa-location-dot"></i> Locations
        </button>
      </nav>

      <div class="nav-actions">
        <button class="btn-icon" id="theme-toggle-btn" title="Toggle Theme">
          <i class="fa-solid ${a.theme===`dark`?`fa-sun`:`fa-moon`}"></i>
        </button>

        <button class="btn btn-primary" id="open-cart-btn">
          <i class="fa-solid fa-basket-shopping"></i>
          <span>Cart</span>
          ${t>0?`<span class="badge-counter">${t}</span>`:``}
        </button>

        <button class="btn ${r===`staff`?`btn-primary`:`btn-outline`} btn-sm" id="staff-portal-nav-btn">
          <i class="fa-solid fa-kitchen-set"></i>
          <span>${r===`staff`?`Exit Staff Portal`:`Kitchen Portal`}</span>
        </button>
      </div>
    </div>
  `,document.querySelectorAll(`[data-nav]`).forEach(e=>{e.onclick=t=>{t.preventDefault();let n=e.getAttribute(`data-nav`);a.setView(n)}});let i=document.getElementById(`nav-brand-btn`);i&&(i.onclick=e=>{e.preventDefault(),a.setView(`menu`)});let o=document.getElementById(`theme-toggle-btn`);o&&(o.onclick=()=>{a.setTheme(a.theme===`dark`?`light`:`dark`)});let s=document.getElementById(`open-cart-btn`);s&&(s.onclick=()=>{let e=document.getElementById(`cart-drawer`);e&&e.classList.remove(`hidden`)});let c=document.getElementById(`staff-portal-nav-btn`);c&&(c.onclick=()=>{a.activeView===`staff`?a.setView(`menu`):a.setView(`staff`)})}function s(e,t=`success`,n=3e3){let r=document.getElementById(`toast-container`);if(!r)return;let i=document.createElement(`div`);i.className=`toast toast-${t}`,i.innerHTML=`
    <i class="${t===`success`?`fa-solid fa-circle-check`:t===`info`?`fa-solid fa-circle-info`:`fa-solid fa-triangle-exclamation`}"></i>
    <span class="toast-message">${e}</span>
  `,r.appendChild(i),setTimeout(()=>{i.style.opacity=`0`,i.style.transform=`translateY(20px)`,setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},300)},n)}function c({title:e,bodyHTML:t,footerHTML:n=``}){let r=document.getElementById(`modal-container`);if(!r)return;r.innerHTML=`
    <div class="modal-card">
      <div class="modal-header">
        <h3 class="modal-title">${e}</h3>
        <button class="modal-close" id="global-modal-close-btn" aria-label="Close Modal">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="modal-body">
        ${t}
      </div>
      ${n?`<div class="modal-footer">${n}</div>`:``}
    </div>
  `,r.classList.remove(`hidden`);let i=document.getElementById(`global-modal-close-btn`);i&&i.addEventListener(`click`,l),r.onclick=e=>{e.target===r&&l()}}function l(){let e=document.getElementById(`modal-container`);e&&(e.classList.add(`hidden`),e.innerHTML=``)}function u(t){let n=e=>a.isWishlisted(e),r=a.dishes.filter(e=>{if(a.selectedCategory!==`all`){if(a.selectedCategory===`specials`){if(!e.tags.includes(`chefSpecial`))return!1}else if(e.category!==a.selectedCategory)return!1}if(a.searchQuery.trim()!==``){let t=a.searchQuery.toLowerCase(),n=e.name.toLowerCase().includes(t),r=e.description.toLowerCase().includes(t);if(!n&&!r)return!1}return!(a.dietaryFilter===`veg`&&!e.tags.includes(`veg`)||a.dietaryFilter===`gf`&&!e.tags.includes(`gf`)||a.dietaryFilter===`chefSpecial`&&!e.tags.includes(`chefSpecial`))});a.sortBy===`price-low`?r.sort((e,t)=>e.price-t.price):a.sortBy===`price-high`?r.sort((e,t)=>t.price-e.price):a.sortBy===`rating`&&r.sort((e,t)=>t.rating-e.rating),t.innerHTML=`
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
          <input type="text" id="menu-search-input" placeholder="Search pizza, Wagyu burger, truffle, salmon..." value="${a.searchQuery}">
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
          ${e.map(e=>`
            <button class="cat-pill ${a.selectedCategory===e.id?`active`:``}" data-cat="${e.id}">
              <i class="${e.icon}"></i>
              <span>${e.name}</span>
            </button>
          `).join(``)}
        </div>
      </div>
    </section>

    <!-- Main Menu Container -->
    <section class="container">
      <div class="menu-toolbar">
        <div class="filter-group">
          <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-sub);">Filter:</span>
          <button class="filter-chip ${a.dietaryFilter===`all`?`active`:``}" data-diet="all">All Items</button>
          <button class="filter-chip ${a.dietaryFilter===`veg`?`active`:``}" data-diet="veg">
            <i class="fa-solid fa-leaf" style="color: var(--accent-green);"></i> Vegetarian
          </button>
          <button class="filter-chip ${a.dietaryFilter===`gf`?`active`:``}" data-diet="gf">
            <i class="fa-solid fa-wheat-awn-circle-exclamation"></i> Gluten-Free
          </button>
          <button class="filter-chip ${a.dietaryFilter===`chefSpecial`?`active`:``}" data-diet="chefSpecial">
            <i class="fa-solid fa-crown" style="color: var(--accent-gold);"></i> Chef Specials
          </button>
        </div>

        <div class="filter-group">
          <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-sub);">Sort By:</span>
          <select id="sort-select" class="sort-select">
            <option value="popular" ${a.sortBy===`popular`?`selected`:``}>Most Popular</option>
            <option value="price-low" ${a.sortBy===`price-low`?`selected`:``}>Price: Low to High</option>
            <option value="price-high" ${a.sortBy===`price-high`?`selected`:``}>Price: High to Low</option>
            <option value="rating" ${a.sortBy===`rating`?`selected`:``}>Highest Rated</option>
          </select>
        </div>
      </div>

      <!-- Dishes Grid -->
      ${r.length===0?`
        <div style="text-align: center; padding: 4rem 1.5rem; color: var(--text-muted);">
          <i class="fa-solid fa-utensils" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
          <h3>No Dishes Found</h3>
          <p>Try searching for a different keyword or adjusting your filters.</p>
        </div>
      `:`
        <div class="menu-grid">
          ${r.map(e=>`
            <div class="dish-card" data-dish-id="${e.id}">
              <div class="dish-media">
                <img src="${e.image}" alt="${e.name}" class="dish-img" loading="lazy">
                
                <button class="dish-wishlist-btn ${n(e.id)?`active`:``}" 
                        data-wishlist-id="${e.id}" 
                        title="${n(e.id)?`Remove from Wishlist`:`Add to Wishlist`}">
                  <i class="${n(e.id)?`fa-solid fa-heart`:`fa-regular fa-heart`}"></i>
                </button>

                ${e.tags.includes(`chefSpecial`)?`
                  <span class="badge badge-gold dish-tag-badge"><i class="fa-solid fa-crown"></i> Chef Special</span>
                `:e.tags.includes(`veg`)?`
                  <span class="badge badge-green dish-tag-badge"><i class="fa-solid fa-leaf"></i> Vegetarian</span>
                `:``}
              </div>

              <div class="dish-content">
                <div class="dish-header-row">
                  <h3 class="dish-title">${e.name}</h3>
                  <span class="dish-price">$${e.price.toFixed(2)}</span>
                </div>

                <p class="dish-desc">${e.description}</p>

                <div class="dish-meta">
                  <span><i class="fa-solid fa-star" style="color: var(--accent-gold);"></i> ${e.rating} (${e.reviews})</span>
                  <span><i class="fa-solid fa-clock"></i> ${e.prepTime}</span>
                  <span><i class="fa-solid fa-fire" style="color: var(--primary);"></i> ${e.calories}</span>
                </div>

                <div class="dish-card-actions">
                  <button class="btn btn-outline btn-sm dish-detail-btn" data-detail-id="${e.id}">
                    <i class="fa-solid fa-sliders"></i> Customize
                  </button>
                  <button class="btn btn-primary btn-sm add-cart-btn" data-add-id="${e.id}" ${e.inStock?``:`disabled`}>
                    <i class="fa-solid fa-plus"></i> ${e.inStock?`Add to Cart`:`Out of Stock`}
                  </button>
                </div>
              </div>
            </div>
          `).join(``)}
        </div>
      `}
    </section>
  `;let i=document.getElementById(`menu-search-input`);i&&(i.oninput=e=>{a.searchQuery=e.target.value,u(t)}),document.querySelectorAll(`.tag-btn`).forEach(e=>{e.onclick=()=>{a.searchQuery=e.getAttribute(`data-tag`),u(t)}}),document.querySelectorAll(`[data-cat]`).forEach(e=>{e.onclick=()=>{a.selectedCategory=e.getAttribute(`data-cat`),u(t)}}),document.querySelectorAll(`[data-diet]`).forEach(e=>{e.onclick=()=>{a.dietaryFilter=e.getAttribute(`data-diet`),u(t)}});let o=document.getElementById(`sort-select`);o&&(o.onchange=e=>{a.sortBy=e.target.value,u(t)}),document.querySelectorAll(`[data-wishlist-id]`).forEach(e=>{e.onclick=n=>{n.stopPropagation();let r=e.getAttribute(`data-wishlist-id`);a.toggleWishlist(r),s(a.isWishlisted(r)?`Added to Wishlist!`:`Removed from Wishlist`,`info`),u(t)}}),document.querySelectorAll(`[data-add-id]`).forEach(e=>{e.onclick=t=>{t.stopPropagation();let n=e.getAttribute(`data-add-id`),r=a.dishes.find(e=>e.id===n);r&&r.inStock&&(a.addToCart(n,1),s(`Added ${r.name} to Cart!`,`success`))}}),document.querySelectorAll(`[data-detail-id]`).forEach(e=>{e.onclick=t=>{t.stopPropagation(),d(e.getAttribute(`data-detail-id`))}})}function d(e){let t=a.dishes.find(t=>t.id===e);if(!t)return;let n=1;c({title:`Customize Your Order`,bodyHTML:`
    <div style="display: flex; gap: 1.25rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
      <img src="${t.image}" alt="${t.name}" style="width: 140px; height: 120px; border-radius: var(--radius-md); object-fit: cover;">
      <div style="flex: 1;">
        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.3rem;">${t.name}</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">${t.description}</p>
        <span style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">$${t.price.toFixed(2)}</span>
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
          <input type="checkbox" id="addon-cheese" value="Extra Buffalo Cheese (+$2.50)"> Extra Buffalo Cheese (+$2.50)
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub);">
          <input type="checkbox" id="addon-sauce" value="Truffle Garlic Dip (+$1.75)"> Truffle Garlic Dip (+$1.75)
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub);">
          <input type="checkbox" id="addon-gf" value="Gluten-Free Crust/Bun (+$2.00)"> Gluten-Free Option (+$2.00)
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
  `,footerHTML:`
    <button class="btn btn-secondary" id="modal-cancel-btn">Cancel</button>
    <button class="btn btn-primary" id="modal-add-cart-btn"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
  `});let r=document.getElementById(`modal-qty-minus`),i=document.getElementById(`modal-qty-plus`),o=document.getElementById(`modal-qty-val`);r&&i&&o&&(r.onclick=()=>{n>1&&(n--,o.textContent=n)},i.onclick=()=>{n++,o.textContent=n});let u=document.getElementById(`modal-cancel-btn`);u&&(u.onclick=l);let d=document.getElementById(`modal-add-cart-btn`);d&&(d.onclick=()=>{let r=document.getElementById(`modal-spice-select`).value,i=document.getElementById(`modal-notes-input`).value.trim(),o=[];document.getElementById(`addon-cheese`).checked&&o.push(`Extra Cheese`),document.getElementById(`addon-sauce`).checked&&o.push(`Truffle Dip`),document.getElementById(`addon-gf`).checked&&o.push(`GF Option`);let c=r;o.length>0&&(c+=` | ${o.join(`, `)}`),i&&(c+=` (${i})`),a.addToCart(e,n,c),s(`Added ${t.name} (${n}x) to Cart!`,`success`),l()})}function f(e){let t=a.dishes.filter(e=>a.wishlist.includes(e.id));e.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-heart" style="color: var(--accent-red);"></i> My Saved Wishlist</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Keep track of your favorite gourmet dishes for quick future orders.</p>
        </div>
        <span class="badge badge-primary" style="font-size: 0.9rem; padding: 0.4rem 1rem;">${t.length} Saved Items</span>
      </div>

      ${t.length===0?`
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
      `:`
        <div class="menu-grid">
          ${t.map(e=>`
            <div class="dish-card">
              <div class="dish-media">
                <img src="${e.image}" alt="${e.name}" class="dish-img">
                <button class="dish-wishlist-btn active" data-remove-wishlist="${e.id}" title="Remove from Wishlist">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>

              <div class="dish-content">
                <div class="dish-header-row">
                  <h3 class="dish-title">${e.name}</h3>
                  <span class="dish-price">$${e.price.toFixed(2)}</span>
                </div>

                <p class="dish-desc">${e.description}</p>

                <div class="dish-meta">
                  <span><i class="fa-solid fa-star" style="color: var(--accent-gold);"></i> ${e.rating}</span>
                  <span><i class="fa-solid fa-clock"></i> ${e.prepTime}</span>
                </div>

                <div class="dish-card-actions">
                  <button class="btn btn-primary btn-full add-cart-btn" data-wishlist-add="${e.id}">
                    <i class="fa-solid fa-cart-plus"></i> Move to Cart
                  </button>
                </div>
              </div>
            </div>
          `).join(``)}
        </div>
      `}
    </section>
  `;let n=document.getElementById(`wishlist-explore-btn`);n&&(n.onclick=()=>a.setView(`menu`)),document.querySelectorAll(`[data-remove-wishlist]`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-remove-wishlist`);a.toggleWishlist(n),s(`Item removed from Wishlist`,`info`),f(e)}}),document.querySelectorAll(`[data-wishlist-add]`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-wishlist-add`),n=a.dishes.find(e=>e.id===t);n&&(a.addToCart(t,1),s(`Moved ${n.name} to Cart!`,`success`))}})}function p(){let e=document.getElementById(`cart-drawer-body`);if(!e)return;let t=a.getCartTotal(),n=a.cart;e.innerHTML=`
    <div class="cart-header">
      <h3 style="font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
        <i class="fa-solid fa-basket-shopping" style="color: var(--primary);"></i> Your Cart Order
      </h3>
      <button class="modal-close" id="close-cart-drawer-btn" aria-label="Close Cart">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    ${n.length===0?`
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; text-align: center;">
        <i class="fa-solid fa-cart-arrow-down" style="font-size: 3.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Your Cart is empty</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Add some mouth-watering gourmet dishes from our menu!</p>
        <button class="btn btn-primary" id="cart-start-ordering-btn">Explore Menu</button>
      </div>
    `:`
      <div class="cart-items-list">
        ${n.map((e,t)=>{let n=a.dishes.find(t=>t.id===e.dishId);return n?`
            <div class="cart-item-card">
              <img src="${n.image}" alt="${n.name}" class="cart-item-thumb">
              <div class="cart-item-info">
                <h4 class="cart-item-title">${n.name}</h4>
                ${e.options?`<p class="cart-item-opts"><i class="fa-solid fa-sliders"></i> ${e.options}</p>`:``}
                
                <div class="cart-item-price-row">
                  <span style="font-weight: 700; color: var(--primary);">$${(e.price*e.qty).toFixed(2)}</span>

                  <div class="qty-control">
                    <button class="qty-btn" data-qty-change="${t}" data-delta="-1"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-num">${e.qty}</span>
                    <button class="qty-btn" data-qty-change="${t}" data-delta="1"><i class="fa-solid fa-plus"></i></button>
                  </div>
                </div>
              </div>
            </div>
          `:``}).join(``)}

        <!-- Promo Code Box -->
        <div style="margin-top: 1rem; background: var(--bg-dark); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <label style="font-size: 0.82rem; font-weight: 700; color: var(--text-sub); display: block; margin-bottom: 0.4rem;">
            <i class="fa-solid fa-ticket" style="color: var(--accent-gold);"></i> Promo Code / Voucher
          </label>
          <div style="display: flex; gap: 0.5rem;">
            <input type="text" id="coupon-input-field" class="form-input" style="padding: 0.45rem 0.75rem; font-size: 0.88rem;" placeholder="e.g. WELCOME20" value="${a.appliedCoupon?a.appliedCoupon.code:``}">
            <button class="btn btn-secondary btn-sm" id="apply-coupon-btn">Apply</button>
          </div>
          ${a.appliedCoupon?`
            <div style="font-size: 0.8rem; color: var(--accent-green); font-weight: 600; margin-top: 0.4rem; display: flex; align-items: center; gap: 0.3rem;">
              <i class="fa-solid fa-check"></i> ${a.appliedCoupon.discountPercent}% Discount Active!
            </div>
          `:``}
        </div>
      </div>

      <div class="cart-footer">
        <div class="bill-row">
          <span>Subtotal</span>
          <span>$${t.subtotal.toFixed(2)}</span>
        </div>
        ${t.discountAmount>0?`
          <div class="bill-row" style="color: var(--accent-green);">
            <span>Discount (${a.appliedCoupon.code})</span>
            <span>-$${t.discountAmount.toFixed(2)}</span>
          </div>
        `:``}
        <div class="bill-row">
          <span>Service Tax (8%)</span>
          <span>$${t.tax.toFixed(2)}</span>
        </div>
        <div class="bill-row">
          <span>Local Delivery Fee</span>
          <span>$${t.deliveryFee.toFixed(2)}</span>
        </div>

        <div class="bill-row total">
          <span>Grand Total</span>
          <span class="price">$${t.grandTotal.toFixed(2)}</span>
        </div>

        <button class="btn btn-primary btn-lg btn-full" id="checkout-trigger-btn" style="margin-top: 1.25rem;">
          <span>Proceed to Checkout</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `}
  `;let r=document.getElementById(`close-cart-drawer-btn`),i=document.getElementById(`cart-overlay`),o=document.getElementById(`cart-drawer`),c=()=>{o&&o.classList.add(`hidden`)};r&&(r.onclick=c),i&&(i.onclick=c);let l=document.getElementById(`cart-start-ordering-btn`);l&&(l.onclick=()=>{c(),a.setView(`menu`)}),document.querySelectorAll(`[data-qty-change]`).forEach(e=>{e.onclick=()=>{let t=parseInt(e.getAttribute(`data-qty-change`)),n=parseInt(e.getAttribute(`data-delta`)),r=a.cart[t];r&&(a.updateCartQty(t,r.qty+n),p())}});let u=document.getElementById(`apply-coupon-btn`);u&&(u.onclick=()=>{let e=document.getElementById(`coupon-input-field`);if(e){let t=a.applyCoupon(e.value);t.success?s(t.message,`success`):s(t.message,`info`),p()}});let d=document.getElementById(`checkout-trigger-btn`);d&&(d.onclick=()=>{c(),m()})}function m(){let e=a.getCartTotal(),t=a.profile;t.addresses.find(e=>e.isDefault)||t.addresses[0],c({title:`Complete Your Order`,bodyHTML:`
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
        ${t.addresses.map(e=>`
          <option value="${e.street}, ${e.city} ${e.zip}">${e.label}: ${e.street}, ${e.city}</option>
        `).join(``)}
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
        <span style="color: var(--primary);">$${e.grandTotal.toFixed(2)}</span>
      </div>
    </div>
  `,footerHTML:`
    <button class="btn btn-secondary" id="checkout-cancel-btn">Cancel</button>
    <button class="btn btn-primary btn-lg" id="confirm-pay-btn">
      <i class="fa-solid fa-lock"></i> Place Order ($${e.grandTotal.toFixed(2)})
    </button>
  `});let n=document.getElementById(`checkout-cancel-btn`);n&&(n.onclick=l);let r=document.getElementById(`confirm-pay-btn`);r&&(r.onclick=()=>{let t=document.getElementById(`checkout-address-select`).value,n=document.querySelector(`input[name="fulfillment"]:checked`).value,r=a.placeOrder({deliveryAddress:t,fulfillmentType:n,subtotal:e.subtotal,discount:e.discountAmount,tax:e.tax,deliveryFee:e.deliveryFee,total:e.grandTotal,estimatedEta:`20-25 minutes`,driverName:`Srinivas Rao`,driverPhone:`+91 98480 88990`});l(),s(`Order #${r.id} Placed Successfully!`,`success`),a.setView(`orders`)})}function h(e){let t=a.orders.filter(e=>e.status!==`delivered`),n=a.orders.filter(e=>e.status===`delivered`);e.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-clock-rotate-left" style="color: var(--primary);"></i> Order Tracker & History</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Track live kitchen prep, real-time delivery status, and review past dining receipts.</p>
      </div>

      <!-- Active Order Section -->
      ${t.length>0?`
        <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.6rem;">
          <span class="pulse-dot"></span> Active Live Orders (${t.length})
        </h2>

        ${t.map(e=>g(e)).join(``)}
      `:`
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
          <i class="fa-solid fa-receipt" style="color: var(--accent-gold);"></i> Completed Past Orders
        </h2>

        ${n.length===0?`
          <p style="color: var(--text-muted);">No completed past orders yet.</p>
        `:`
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${n.map(e=>`
              <div class="dish-card" style="padding: 1.5rem; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                    <span class="order-id-badge">${e.id}</span>
                    <span class="badge badge-green"><i class="fa-solid fa-check-double"></i> Delivered</span>
                    <span style="font-size: 0.82rem; color: var(--text-muted);">${new Date(e.date).toLocaleDateString()}</span>
                  </div>
                  <div style="font-size: 0.9rem; color: var(--text-sub); margin-bottom: 0.3rem;">
                    ${e.items.map(e=>`${e.qty}x ${e.name}`).join(`, `)}
                  </div>
                  <div style="font-size: 0.85rem; color: var(--text-muted);">
                    Address: ${e.deliveryAddress}
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 1.5rem;">
                  <span style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">$${e.total.toFixed(2)}</span>
                  <button class="btn btn-outline btn-sm reorder-btn" data-reorder-id="${e.id}">
                    <i class="fa-solid fa-rotate-right"></i> Reorder Items
                  </button>
                </div>
              </div>
            `).join(``)}
          </div>
        `}
      </div>
    </section>
  `;let r=document.getElementById(`active-order-explore-btn`);r&&(r.onclick=()=>a.setView(`menu`)),document.querySelectorAll(`[data-reorder-id]`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-reorder-id`),n=a.orders.find(e=>e.id===t);n&&(n.items.forEach(e=>{a.addToCart(e.dishId,e.qty,e.opts||``)}),s(`Items re-added to Cart!`,`success`),a.setView(`menu`))}})}function g(e){let t=e.status===`preparing`||e.status===`ready`||e.status===`delivered`,n=e.status===`ready`||e.status===`delivered`,r=e.status===`delivered`;return`
    <div class="order-tracker-card">
      <div class="tracker-header">
        <div>
          <span class="order-id-badge">${e.id}</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); margin-left: 0.75rem;">
            Placed at ${new Date(e.date).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}
          </span>
        </div>
        <span class="badge badge-gold" style="font-size: 0.85rem;">
          <i class="fa-solid fa-truck-ramp-box"></i> ${e.fulfillmentType}
        </span>
      </div>

      <div class="eta-timer-box">
        <i class="fa-solid fa-fire-burner"></i>
        <div>
          <div class="eta-time">${e.status===`placed`?`25 Mins`:e.status===`preparing`?`18 Mins`:e.status===`ready`?`Out for Delivery`:`Delivered!`}</div>
          <div style="font-size: 0.85rem; color: var(--text-sub);">
            ${e.status===`placed`?`Kitchen is reviewing your order details`:e.status===`preparing`?`Chef is preparing your fresh meal`:e.status===`ready`?`Delivery partner is on the way!`:`Enjoy your meal!`}
          </div>
        </div>
      </div>

      <!-- Timeline Stepper -->
      <div class="order-stepper">
        <div class="step-item ${t?`completed`:`active`}">
          <div class="step-icon"><i class="fa-solid fa-check"></i></div>
          <div class="step-label">Order Placed</div>
          <div class="step-time">Confirmed</div>
        </div>

        <div class="step-item ${t?n?`completed`:`active`:``}">
          <div class="step-icon"><i class="fa-solid fa-utensils"></i></div>
          <div class="step-label">Kitchen Prep</div>
          <div class="step-time">In Progress</div>
        </div>

        <div class="step-item ${n?r?`completed`:`active`:``}">
          <div class="step-icon"><i class="fa-solid fa-motorcycle"></i></div>
          <div class="step-label">Out for Delivery</div>
          <div class="step-time">En Route</div>
        </div>

        <div class="step-item ${r?`completed`:``}">
          <div class="step-icon"><i class="fa-solid fa-house-chimney"></i></div>
          <div class="step-label">Delivered</div>
          <div class="step-time">Step 4</div>
        </div>
      </div>

      <!-- Order Details Summary -->
      <div style="background: var(--bg-dark); border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-color); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-sub);">Ordered Items Summary</h4>
          <ul style="font-size: 0.88rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.3rem;">
            ${e.items.map(e=>`
              <li><strong style="color: var(--text-main);">${e.qty}x</strong> ${e.name} ${e.opts?`(${e.opts})`:``} - <strong>$${(e.price*e.qty).toFixed(2)}</strong></li>
            `).join(``)}
          </ul>
        </div>

        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-sub);">Delivery Information</h4>
          <div style="font-size: 0.88rem; color: var(--text-muted);">
            <div><i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> ${e.deliveryAddress}</div>
            <div style="margin-top: 0.4rem;"><i class="fa-solid fa-user-ninja"></i> Driver: <strong>${e.driverName}</strong> (${e.driverPhone})</div>
            <div style="margin-top: 0.4rem; font-size: 1.1rem; font-weight: 800; color: var(--primary);">Paid Total: $${e.total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  `}function _(e){let t=a.profile,n=(t.rewardPoints/10).toFixed(2);e.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-user-gear" style="color: var(--primary);"></i> Account Settings & Address Book</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Manage your profile details, delivery addresses, payment methods, and loyalty reward cash.</p>
      </div>

      <div class="account-layout">
        <!-- Sidebar Profile Card -->
        <aside>
          <div class="profile-card">
            <div class="avatar-wrapper">
              <i class="fa-solid fa-user"></i>
            </div>
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.2rem;">${t.name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">${t.email}</p>

            <span class="badge badge-gold" style="font-size: 0.8rem; margin-bottom: 1.5rem;">
              <i class="fa-solid fa-crown"></i> ${t.loyaltyTier}
            </span>

            <div style="background: var(--bg-dark); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: left; margin-bottom: 1.5rem;">
              <div style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 0.3rem;">
                <i class="fa-solid fa-coins" style="color: var(--accent-gold);"></i> Gourmet Reward Points
              </div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-gold);">${t.rewardPoints} Points</div>
              <div style="font-size: 0.78rem; color: var(--accent-green); font-weight: 600; margin-top: 0.25rem;">
                = $${n} Redeemable Discount Cash
              </div>
            </div>

            <div class="account-nav">
              <button class="account-nav-btn active" data-tab="addresses">
                <i class="fa-solid fa-map-location-dot"></i> Saved Addresses
              </button>
              <button class="account-nav-btn" data-tab="payments">
                <i class="fa-solid fa-credit-card"></i> Saved Payment Methods
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Account Content -->
        <main>
          <!-- Addresses Panel -->
          <div id="account-tab-addresses">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <h3 style="font-size: 1.25rem; font-weight: 700;">Delivery Address Book</h3>
              <button class="btn btn-primary btn-sm" id="add-new-address-btn">
                <i class="fa-solid fa-plus"></i> Add New Address
              </button>
            </div>

            <div class="address-grid">
              ${t.addresses.map(e=>`
                <div class="address-card ${e.isDefault?`default`:``}">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span style="font-weight: 700; font-size: 1rem; color: var(--text-main); display: flex; align-items: center; gap: 0.4rem;">
                      <i class="fa-solid ${e.label===`Home`?`fa-house-chimney`:`fa-building`}" style="color: var(--primary);"></i>
                      ${e.label}
                    </span>
                    ${e.isDefault?`<span class="badge badge-primary">Default</span>`:``}
                  </div>

                  <p style="font-size: 0.9rem; color: var(--text-sub); margin-bottom: 0.5rem; line-height: 1.4;">
                    ${e.street}<br>
                    ${e.city}, ${e.zip}
                  </p>

                  <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                    <i class="fa-solid fa-phone"></i> ${t.phone}
                  </div>
                </div>
              `).join(``)}
            </div>
          </div>

          <!-- Payment Methods Panel -->
          <div id="account-tab-payments" style="display: none; margin-top: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem;">Saved Payment Methods</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem;">
              <div class="address-card default">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <i class="fa-brands fa-cc-visa" style="font-size: 2rem; color: #3b82f6;"></i>
                  <span class="badge badge-primary">Primary Card</span>
                </div>
                <div style="font-family: monospace; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 1px;">
                  •••• •••• •••• 4892
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Expires 09/29 • ${t.name}</div>
              </div>

              <div class="address-card">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                  <i class="fa-brands fa-apple-pay" style="font-size: 2rem; color: var(--text-main);"></i>
                  <span class="badge badge-green">Connected</span>
                </div>
                <div style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">
                  Apple Pay Wallet
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">One-touch checkout enabled</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  `,document.querySelectorAll(`[data-tab]`).forEach(e=>{e.onclick=()=>{document.querySelectorAll(`[data-tab]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),e.getAttribute(`data-tab`)===`addresses`?(document.getElementById(`account-tab-addresses`).style.display=`block`,document.getElementById(`account-tab-payments`).style.display=`none`):(document.getElementById(`account-tab-addresses`).style.display=`none`,document.getElementById(`account-tab-payments`).style.display=`block`)}});let r=document.getElementById(`add-new-address-btn`);r&&(r.onclick=()=>{v(e)})}function v(e){c({title:`Add New Delivery Address`,bodyHTML:`
    <div class="form-group">
      <label class="form-label">Address Label</label>
      <input type="text" id="new-addr-label" class="form-input" placeholder="e.g. Home, Office, Summer House">
    </div>

    <div class="form-group">
      <label class="form-label">Street Address & Apartment</label>
      <input type="text" id="new-addr-street" class="form-input" placeholder="e.g. 120 Ocean Drive, Apt 3C">
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">City & State</label>
        <input type="text" id="new-addr-city" class="form-input" placeholder="e.g. Nellore, Andhra Pradesh">
      </div>
      <div class="form-group">
        <label class="form-label">PIN Code</label>
        <input type="text" id="new-addr-zip" class="form-input" placeholder="e.g. 524001">
      </div>
    </div>

    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub); cursor: pointer;">
      <input type="checkbox" id="new-addr-default" checked> Set as primary default delivery address
    </label>
  `,footerHTML:`
    <button class="btn btn-secondary" id="modal-cancel-addr">Cancel</button>
    <button class="btn btn-primary" id="modal-save-addr">Save Address</button>
  `}),document.getElementById(`modal-cancel-addr`).onclick=l,document.getElementById(`modal-save-addr`).onclick=()=>{let t=document.getElementById(`new-addr-label`).value.trim()||`Other`,n=document.getElementById(`new-addr-street`).value.trim(),r=document.getElementById(`new-addr-city`).value.trim()||`Nellore, Andhra Pradesh`,i=document.getElementById(`new-addr-zip`).value.trim()||`524001`,o=document.getElementById(`new-addr-default`).checked;if(!n){s(`Please enter a street address`,`info`);return}a.addAddress({label:t,street:n,city:r,zip:i,isDefault:o}),l(),s(`New Address Saved!`,`success`),_(e)}}function y(e){let t=a.selectedLocation;e.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> Restaurant Locations & Table Booking</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Find your nearest Savory Bites Bistro branch or reserve a dining table online.</p>
      </div>

      <div class="locations-grid">
        <!-- Branch Selector & Details -->
        <div>
          <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem;">Select Bistro Branch</h2>
          
          <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2rem;">
            ${n.map(e=>`
              <div class="branch-card ${e.id===t.id?`active`:``}" data-select-loc="${e.id}" style="${e.id===t.id?`border-color: var(--primary); background: rgba(255, 107, 53, 0.04);`:``} cursor: pointer;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 700;">${e.name}</h3>
                  <span class="badge badge-gold"><i class="fa-solid fa-star"></i> ${e.rating}</span>
                </div>

                <div style="font-size: 0.9rem; color: var(--text-sub); display: flex; flex-direction: column; gap: 0.4rem;">
                  <div><i class="fa-solid fa-map-pin" style="color: var(--primary);"></i> ${e.address}</div>
                  <div><i class="fa-solid fa-phone"></i> ${e.phone}</div>
                  <div><i class="fa-solid fa-clock"></i> ${e.hours}</div>
                  <div><i class="fa-solid fa-truck"></i> Delivery Radius: ${e.deliveryRadius} (${e.avgDeliveryTime})</div>
                </div>

                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
                  ${e.features.map(e=>`<span class="badge badge-primary">${e}</span>`).join(``)}
                </div>
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- Map Visual & Online Reservation Form -->
        <div>
          <!-- Mock Interactive Map Visual -->
          <div class="mock-map-container">
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255,107,53,0.15) 0%, rgba(15,17,21,0.9) 80%);"></div>
            <div class="map-pin-pulse" style="z-index: 2;">
              <i class="fa-solid fa-location-dot"></i>
              <span style="font-size: 0.85rem; font-weight: 700; color: #fff; background: rgba(0,0,0,0.8); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); border: 1px solid var(--primary);">
                ${t.name}
              </span>
            </div>
          </div>

          <!-- Table Reservation Form -->
          <div class="branch-card">
            <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-calendar-check" style="color: var(--primary);"></i> Online Table Reservation
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">Book a dining table at <strong>${t.name}</strong> for your party.</p>

            <form id="reservation-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label">Date</label>
                  <input type="date" id="res-date" class="form-input" required value="2026-08-05">
                </div>
                <div class="form-group">
                  <label class="form-label">Time</label>
                  <select id="res-time" class="form-select">
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00" selected>7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Number of Guests</label>
                <select id="res-guests" class="form-select">
                  <option value="2 Guests">2 Guests (Table for 2)</option>
                  <option value="4 Guests" selected>4 Guests (Family Table)</option>
                  <option value="6 Guests">6 Guests (Party)</option>
                  <option value="8+ Guests">8+ Guests (Private Room)</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Special Requests (Optional)</label>
                <input type="text" id="res-notes" class="form-input" placeholder="e.g. Birthday celebration, window seating, high chair...">
              </div>

              <button type="submit" class="btn btn-primary btn-full btn-lg">
                <i class="fa-solid fa-chair"></i> Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,document.querySelectorAll(`[data-select-loc]`).forEach(t=>{t.onclick=()=>{let r=t.getAttribute(`data-select-loc`),i=n.find(e=>e.id===r);if(i){a.selectedLocation=i;let t=document.getElementById(`header-location-name`);t&&(t.textContent=i.name),y(e)}}});let r=document.getElementById(`reservation-form`);r&&(r.onsubmit=e=>{e.preventDefault();let n=document.getElementById(`res-date`).value,i=document.getElementById(`res-time`).value,a=document.getElementById(`res-guests`).value;s(`Table Reserved for ${a} at ${t.name} on ${n} @ ${i}!`,`success`,5e3),r.reset()})}function b(e){let t=a.orders.filter(e=>e.status!==`delivered`),n=a.orders,r=n.reduce((e,t)=>e+t.total,0),i=t.length;e.innerHTML=`
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
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-green);">$${r.toFixed(2)}</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Active Kitchen Orders</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--primary);">${i} Pending</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Total Orders Placed</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--text-main);">${n.length} Orders</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Menu Dish Items</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold);">${a.dishes.length} Dishes</div>
        </div>
      </div>

      <!-- Live Kitchen Display System (KDS) -->
      <div style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <h2 style="font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
            <span class="pulse-dot"></span> Kitchen Display Orders Queue (${t.length})
          </h2>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Updating order status here syncs live with customer tracker!</span>
        </div>

        ${t.length===0?`
          <div style="background: var(--bg-card); padding: 3rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-color);">
            <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; color: var(--accent-green); margin-bottom: 0.75rem;"></i>
            <h3>All Kitchen Orders Cleared!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">No pending kitchen orders at the moment.</p>
          </div>
        `:`
          <div class="staff-kds-grid">
            ${t.map(e=>`
              <div class="kds-card status-${e.status}">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span class="order-id-badge">${e.id}</span>
                  <span class="badge ${e.status===`placed`?`badge-gold`:e.status===`preparing`?`badge-primary`:`badge-green`}">
                    ${e.status.toUpperCase()}
                  </span>
                </div>

                <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                  <i class="fa-solid fa-clock"></i> Placed ${new Date(e.date).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})} • <strong>${e.fulfillmentType}</strong>
                </div>

                <!-- Order Items -->
                <div class="kds-order-items">
                  ${e.items.map(e=>`
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.3rem;">
                      <span><strong style="color: var(--primary);">${e.qty}x</strong> ${e.name}</span>
                      <span style="font-size: 0.8rem; color: var(--text-muted);">${e.opts||``}</span>
                    </div>
                  `).join(``)}
                </div>

                <div style="font-size: 0.85rem; color: var(--text-sub); margin-bottom: 1rem;">
                  <strong>Deliver to:</strong> ${e.deliveryAddress}
                </div>

                <!-- Update Status Controller -->
                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label" style="font-size: 0.8rem;">Change Order Status:</label>
                  <select class="form-select status-change-select" data-order-status-id="${e.id}">
                    <option value="placed" ${e.status===`placed`?`selected`:``}>Placed (New)</option>
                    <option value="preparing" ${e.status===`preparing`?`selected`:``}>Preparing in Kitchen 🔥</option>
                    <option value="ready" ${e.status===`ready`?`selected`:``}>Out for Delivery 🛵</option>
                    <option value="delivered" ${e.status===`delivered`?`selected`:``}>Mark Delivered / Completed ✅</option>
                  </select>
                </div>
              </div>
            `).join(``)}
          </div>
        `}
      </div>

      <!-- Menu Stock Availability Management -->
      <div>
        <h2 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 1.25rem;">
          <i class="fa-solid fa-boxes-stacked" style="color: var(--primary);"></i> Menu Stock & Ingredient Availability
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
          ${a.dishes.map(e=>`
            <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-weight: 700; font-size: 0.95rem;">${e.name}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">$${e.price.toFixed(2)} • ${e.category}</div>
              </div>

              <button class="btn ${e.inStock?`btn-outline`:`btn-primary`} btn-sm stock-toggle-btn" data-stock-dish-id="${e.id}">
                ${e.inStock?`<i class="fa-solid fa-check"></i> In Stock`:`<i class="fa-solid fa-ban"></i> Out of Stock`}
              </button>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>
  `;let o=document.getElementById(`exit-staff-portal-btn`);o&&(o.onclick=()=>a.setView(`menu`)),document.querySelectorAll(`.status-change-select`).forEach(t=>{t.onchange=n=>{let r=t.getAttribute(`data-order-status-id`),i=n.target.value;a.updateOrderStatus(r,i),s(`Order #${r} status updated to ${i.toUpperCase()}`,`success`),b(e)}}),document.querySelectorAll(`.stock-toggle-btn`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-stock-dish-id`);a.toggleDishStock(n);let r=a.dishes.find(e=>e.id===n);s(`${r.name} stock toggled: ${r.inStock?`In Stock`:`Out of Stock`}`,`info`),b(e)}})}function x(){document.documentElement.setAttribute(`data-theme`,a.theme),o(),p(),S(),a.subscribe((e,t)=>{e===`VIEW_CHANGED`||e===`THEME_CHANGED`?(o(),S()):e===`CART_UPDATED`||e===`COUPON_APPLIED`?(o(),p()):e===`WISHLIST_UPDATED`?(o(),a.activeView===`wishlist`&&f(document.getElementById(`app-view`)),a.activeView===`menu`&&u(document.getElementById(`app-view`))):e===`ORDER_PLACED`||e===`ORDER_STATUS_UPDATED`?(o(),p(),a.activeView===`orders`&&h(document.getElementById(`app-view`)),a.activeView===`staff`&&b(document.getElementById(`app-view`))):e===`STOCK_UPDATED`&&(a.activeView===`menu`&&u(document.getElementById(`app-view`)),a.activeView===`staff`&&b(document.getElementById(`app-view`)))});let e=document.getElementById(`footer-staff-toggle`);e&&(e.onclick=()=>{a.setView(`staff`)})}function S(){let e=document.getElementById(`app-view`);if(e)switch(a.activeView){case`menu`:u(e);break;case`wishlist`:f(e);break;case`orders`:h(e);break;case`account`:_(e);break;case`location`:y(e);break;case`staff`:b(e);break;default:u(e)}}document.addEventListener(`DOMContentLoaded`,x);