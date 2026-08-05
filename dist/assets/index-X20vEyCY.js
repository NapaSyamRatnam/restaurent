(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`all`,name:`All Dishes`,icon:`fa-solid fa-utensils`},{id:`specials`,name:`Chef's Specials`,icon:`fa-solid fa-crown`},{id:`starters`,name:`Starters & Apps`,icon:`fa-solid fa-bowl-food`},{id:`mains`,name:`Gourmet Mains`,icon:`fa-solid fa-drumstick-bite`},{id:`pizzas`,name:`Artisanal Pizzas`,icon:`fa-solid fa-pizza-slice`},{id:`burgers`,name:`Craft Burgers`,icon:`fa-solid fa-burger`},{id:`desserts`,name:`Decadent Desserts`,icon:`fa-solid fa-ice-cream`},{id:`drinks`,name:`Craft Beverages`,icon:`fa-solid fa-wine-glass`}],t=[{id:`dish-1`,name:`Artisanal Woodfired Neapolitan Pizza`,category:`pizzas`,price:18.99,rating:4.9,reviews:142,description:`Freshly baked wood-fired pizza with San Marzano tomatoes, buffalo mozzarella, fresh basil leaves, and cold-pressed extra virgin olive oil drizzle.`,image:`./assets/woodfired-pizza.png`,spicy:0,calories:`850 kcal`,prepTime:`15-20 min`,tags:[`chefSpecial`,`veg`],inStock:!0},{id:`dish-2`,name:`Truffle Wagyu Gourmet Burger`,category:`burgers`,price:21.5,rating:4.95,reviews:218,description:`Prime Wagyu beef patty with black truffle aioli, aged Swiss Gruyère, caramelized balsamic onions, and arugula on a toasted brioche bun.`,image:`./assets/truffle-burger.png`,spicy:1,calories:`920 kcal`,prepTime:`12-15 min`,tags:[`chefSpecial`],inStock:!0},{id:`dish-3`,name:`Crispy Calamari Fritti`,category:`starters`,price:14.25,rating:4.7,reviews:89,description:`Wild-caught calamari lightly dusted in seasoned flour, flash-fried until golden, served with house garlic lemon aioli and spicy marinara.`,image:`https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80`,spicy:1,calories:`540 kcal`,prepTime:`10 min`,tags:[],inStock:!0},{id:`dish-4`,name:`Grilled Atlantic Salmon Ribeye`,category:`mains`,price:26.8,rating:4.85,reviews:164,description:`Pan-seared Atlantic salmon fillet served over saffron risotto, tender asparagus spears, and a citrus lemon butter dill emulsion.`,image:`https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80`,spicy:0,calories:`680 kcal`,prepTime:`20 min`,tags:[`gf`,`chefSpecial`],inStock:!0},{id:`dish-5`,name:`Fiery Spicy Thai Basil Noodle Bowl`,category:`mains`,price:17.5,rating:4.6,reviews:112,description:`Wok-tossed rice noodles with red bell peppers, Thai bird chili, holy basil, garlic shoots, and grilled organic tofu or chicken.`,image:`https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80`,spicy:3,calories:`610 kcal`,prepTime:`15 min`,tags:[`veg`],inStock:!0},{id:`dish-6`,name:`Creamy Wild Mushroom Rigatoni`,category:`mains`,price:19,rating:4.75,reviews:95,description:`House-made rigatoni pasta tossed in a rich porcini mushroom cream sauce, white truffle oil, shaved Parmigiano-Reggiano, and thyme.`,image:`https://images.unsplash.com/photo-1621996346565-e3d5d6281318?auto=format&fit=crop&w=600&q=80`,spicy:0,calories:`740 kcal`,prepTime:`15 min`,tags:[`veg`],inStock:!0},{id:`dish-7`,name:`Molten Belgian Chocolate Lava Cake`,category:`desserts`,price:10.5,rating:4.9,reviews:178,description:`Warm dark Belgian chocolate cake with a rich liquid fudge center, served with Madagascan bourbon vanilla bean gelato.`,image:`https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80`,spicy:0,calories:`520 kcal`,prepTime:`12 min`,tags:[`veg`],inStock:!0},{id:`dish-8`,name:`Smoked Smoked Old Fashioned Cocktail`,category:`drinks`,price:13,rating:4.8,reviews:65,description:`Bourbon infused with hickory smoke, Angostura bitters, maraschino cherry, and hand-carved ice sphere.`,image:`https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80`,spicy:0,calories:`180 kcal`,prepTime:`5 min`,tags:[],inStock:!0}],n=[{id:`loc-1`,name:`GT Road Central (Flagship)`,address:`Grand Trunk Road, Near VRC Centre, Nellore, Andhra Pradesh 524001`,phone:`+91 861 234 8901`,hours:`Daily: 11:00 AM - 11:00 PM`,deliveryRadius:`8 km`,avgDeliveryTime:`20-30 min`,rating:4.9,mapLat:14.4426,mapLng:79.9865,features:[`Valet Parking`,`Air Conditioned Dining`,`Full Bar & Mocktail Lounge`,`Private Family Section`]},{id:`loc-2`,name:`Magunta Layout Bistro`,address:`16/1124 Mini Bypass Road, Magunta Layout, Nellore, Andhra Pradesh 524003`,phone:`+91 861 239 8765`,hours:`Mon-Sat: 11:30 AM - 10:30 PM`,deliveryRadius:`6 km`,avgDeliveryTime:`25-35 min`,rating:4.8,mapLat:14.435,mapLng:79.978,features:[`Rooftop Seating`,`Weekend Special Buffet`,`Craft Beverage Counter`]},{id:`loc-3`,name:`Pogathota Plaza`,address:`Opposite Children's Park, Pogathota, Nellore, Andhra Pradesh 524001`,phone:`+91 861 230 4567`,hours:`Daily: 10:00 AM - 11:30 PM`,deliveryRadius:`7 km`,avgDeliveryTime:`15-25 min`,rating:4.95,mapLat:14.448,mapLng:79.989,features:[`Garden Dining`,`Family Dining Tables`,`Spicy Nellore Specials & Fusion Menu`]}],r={name:`Alex Vance`,email:`alex.vance@example.com`,phone:`+91 98480 12345`,rewardPoints:480,loyaltyTier:`Gold Gourmet`,addresses:[{id:`addr-1`,label:`Home`,street:`Door No. 24-2-154, Dargamitta`,city:`Nellore, Andhra Pradesh`,zip:`524003`,isDefault:!0},{id:`addr-2`,label:`Work / Tech Hub`,street:`Plot 45, Auto Nagar Industrial Area`,city:`Nellore, Andhra Pradesh`,zip:`524004`,isDefault:!1}],paymentMethods:[{id:`pay-1`,type:`card`,title:`Visa Credit Card`,cardNumber:`•••• •••• •••• 4892`,expiry:`09/29`,isPrimary:!0},{id:`pay-2`,type:`upi`,title:`UPI ID (PhonePe / GPay)`,upiId:`alexvance@ybl`,isPrimary:!1}]},i=[{id:`ORD-8492`,date:`2026-08-04T15:30:00.000Z`,status:`preparing`,items:[{dishId:`dish-1`,name:`Artisanal Woodfired Neapolitan Pizza`,qty:1,price:18.99,opts:`Extra Basil`},{dishId:`dish-2`,name:`Truffle Wagyu Gourmet Burger`,qty:1,price:21.5,opts:`Medium Rare`},{dishId:`dish-8`,name:`Smoked Smoked Old Fashioned Cocktail`,qty:2,price:13,opts:``}],subtotal:66.49,tax:5.32,deliveryFee:3.5,discount:13.3,total:62.01,deliveryAddress:`Door No. 24-2-154, Dargamitta, Nellore, Andhra Pradesh 524003`,fulfillmentType:`Delivery`,estimatedEta:`18 minutes`,driverName:`Srinivas Rao`,driverPhone:`+91 98480 88990`},{id:`ORD-7210`,date:`2026-08-01T19:15:00.000Z`,status:`delivered`,items:[{dishId:`dish-4`,name:`Grilled Atlantic Salmon Ribeye`,qty:2,price:26.8,opts:`Lemon on side`},{dishId:`dish-7`,name:`Molten Belgian Chocolate Lava Cake`,qty:1,price:10.5,opts:``}],subtotal:64.1,tax:5.12,deliveryFee:0,discount:0,total:69.22,deliveryAddress:`Door No. 24-2-154, Dargamitta, Nellore, Andhra Pradesh 524003`,fulfillmentType:`Delivery`,estimatedEta:`Delivered`,driverName:`Kalyan Kumar`,driverPhone:`+91 98480 77112`}],a=new class{constructor(){this.listeners=[],this.init()}init(){this.activeView=`menu`,this.theme=localStorage.getItem(`sb_theme`)||`dark`;let e=localStorage.getItem(`sb_wishlist`);this.wishlist=e?JSON.parse(e):[`dish-1`,`dish-4`];let a=localStorage.getItem(`sb_cart`);this.cart=a?JSON.parse(a):[{dishId:`dish-1`,qty:1,options:`Extra Fresh Basil`,price:18.99}];let o=localStorage.getItem(`sb_dishes`);this.dishes=o?JSON.parse(o):t;let s=localStorage.getItem(`sb_profile`);this.profile=s?JSON.parse(s):r;let c=localStorage.getItem(`sb_orders`);this.orders=c?JSON.parse(c):i;let l=localStorage.getItem(`sb_locations`);this.locations=l?JSON.parse(l):n,this.selectedLocation=this.locations[0]||n[0],this.appliedCoupon={code:`WELCOME20`,discountPercent:20},this.searchQuery=``,this.selectedCategory=`all`,this.dietaryFilter=`all`,this.sortBy=`popular`}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(e,t){this.listeners.forEach(n=>n(e,t))}setTheme(e){this.theme=e,localStorage.setItem(`sb_theme`,e),document.documentElement.setAttribute(`data-theme`,e),this.notify(`THEME_CHANGED`,e)}setView(e){this.activeView=e,window.scrollTo({top:0,behavior:`smooth`}),this.notify(`VIEW_CHANGED`,e)}toggleWishlist(e){this.wishlist.includes(e)?this.wishlist=this.wishlist.filter(t=>t!==e):this.wishlist.push(e),localStorage.setItem(`sb_wishlist`,JSON.stringify(this.wishlist)),this.notify(`WISHLIST_UPDATED`,this.wishlist)}isWishlisted(e){return this.wishlist.includes(e)}addToCart(e,t=1,n=``){let r=this.dishes.find(t=>t.id===e);if(!r)return;let i=this.cart.findIndex(t=>t.dishId===e&&t.options===n);i>-1?this.cart[i].qty+=t:this.cart.push({dishId:e,qty:t,options:n,price:r.price}),this.saveCart(),this.notify(`CART_UPDATED`,this.cart)}updateCartQty(e,t){t<=0?this.cart.splice(e,1):this.cart[e].qty=t,this.saveCart(),this.notify(`CART_UPDATED`,this.cart)}clearCart(){this.cart=[],this.saveCart(),this.notify(`CART_UPDATED`,this.cart)}saveCart(){localStorage.setItem(`sb_cart`,JSON.stringify(this.cart))}getCartTotal(){let e=this.cart.reduce((e,t)=>e+t.price*t.qty,0),t=this.appliedCoupon?e*(this.appliedCoupon.discountPercent/100):0,n=(e-t)*.08,r=e>0?3.5:0;return{subtotal:e,discountAmount:t,tax:n,deliveryFee:r,grandTotal:Math.max(0,e-t+n+r)}}applyCoupon(e){let t=e.trim().toUpperCase();return t===`WELCOME20`?(this.appliedCoupon={code:`WELCOME20`,discountPercent:20},this.notify(`COUPON_APPLIED`,this.appliedCoupon),{success:!0,message:`20% Discount Coupon Applied!`}):t===`SAVORY10`?(this.appliedCoupon={code:`SAVORY10`,discountPercent:10},this.notify(`COUPON_APPLIED`,this.appliedCoupon),{success:!0,message:`10% Discount Coupon Applied!`}):{success:!1,message:`Invalid promo code. Try WELCOME20`}}placeOrder(e){let t={id:`ORD-${Math.floor(1e3+Math.random()*9e3)}`,date:new Date().toISOString(),status:`placed`,items:this.cart.map(e=>{let t=this.dishes.find(t=>t.id===e.dishId);return{dishId:e.dishId,name:t?t.name:`Gourmet Dish`,qty:e.qty,price:e.price,opts:e.options}}),...e};return this.orders.unshift(t),localStorage.setItem(`sb_orders`,JSON.stringify(this.orders)),this.clearCart(),this.notify(`ORDER_PLACED`,t),t}updateOrderStatus(e,t){let n=this.orders.find(t=>t.id===e);n&&(n.status=t,localStorage.setItem(`sb_orders`,JSON.stringify(this.orders)),this.notify(`ORDER_STATUS_UPDATED`,n))}toggleDishStock(e){let t=this.dishes.find(t=>t.id===e);t&&(t.inStock=!t.inStock,this.saveDishes(),this.notify(`STOCK_UPDATED`,t))}addDish(e){let t={id:`dish-${Date.now()}`,rating:4.8,reviews:1,inStock:!0,tags:[],...e};return this.dishes.unshift(t),this.saveDishes(),this.notify(`STOCK_UPDATED`,t),t}updateDish(e,t){let n=this.dishes.findIndex(t=>t.id===e);n>-1&&(this.dishes[n]={...this.dishes[n],...t},this.saveDishes(),this.notify(`STOCK_UPDATED`,this.dishes[n]))}deleteDish(e){this.dishes=this.dishes.filter(t=>t.id!==e),this.saveDishes(),this.notify(`STOCK_UPDATED`,e)}saveDishes(){localStorage.setItem(`sb_dishes`,JSON.stringify(this.dishes))}addLocation(e){let t={id:`loc-${Date.now()}`,rating:4.8,mapLat:14.4426,mapLng:79.9865,features:[],...e};return this.locations.push(t),this.saveLocations(),this.notify(`LOCATIONS_UPDATED`,t),t}updateLocation(e,t){let n=this.locations.findIndex(t=>t.id===e);n>-1&&(this.locations[n]={...this.locations[n],...t},this.selectedLocation.id===e&&(this.selectedLocation=this.locations[n]),this.saveLocations(),this.notify(`LOCATIONS_UPDATED`,this.locations[n]))}deleteLocation(e){return this.locations.length<=1?{success:!1,message:`Cannot delete the only branch location!`}:(this.locations=this.locations.filter(t=>t.id!==e),this.selectedLocation.id===e&&(this.selectedLocation=this.locations[0]),this.saveLocations(),this.notify(`LOCATIONS_UPDATED`,e),{success:!0})}saveLocations(){localStorage.setItem(`sb_locations`,JSON.stringify(this.locations))}updateProfile(e){this.profile={...this.profile,...e},this.saveProfile(),this.notify(`PROFILE_UPDATED`,this.profile)}addAddress(e){this.profile.addresses||(this.profile.addresses=[]);let t={id:`addr-${Date.now()}`,...e};e.isDefault&&this.profile.addresses.forEach(e=>e.isDefault=!1),this.profile.addresses.push(t),this.saveProfile(),this.notify(`PROFILE_UPDATED`,this.profile)}updateAddress(e,t){if(!this.profile.addresses)return;let n=this.profile.addresses.findIndex(t=>t.id===e);n>-1&&(t.isDefault&&this.profile.addresses.forEach(e=>e.isDefault=!1),this.profile.addresses[n]={...this.profile.addresses[n],...t},this.saveProfile(),this.notify(`PROFILE_UPDATED`,this.profile))}deleteAddress(e){this.profile.addresses&&(this.profile.addresses=this.profile.addresses.filter(t=>t.id!==e),this.profile.addresses.length>0&&!this.profile.addresses.some(e=>e.isDefault)&&(this.profile.addresses[0].isDefault=!0),this.saveProfile(),this.notify(`PROFILE_UPDATED`,this.profile))}setDefaultAddress(e){this.profile.addresses&&(this.profile.addresses.forEach(t=>{t.isDefault=t.id===e}),this.saveProfile(),this.notify(`PROFILE_UPDATED`,this.profile))}addPaymentMethod(e){this.profile.paymentMethods||(this.profile.paymentMethods=[]);let t={id:`pay-${Date.now()}`,isPrimary:this.profile.paymentMethods.length===0,...e};e.isPrimary&&this.profile.paymentMethods.forEach(e=>e.isPrimary=!1),this.profile.paymentMethods.push(t),this.saveProfile(),this.notify(`PROFILE_UPDATED`,this.profile)}deletePaymentMethod(e){this.profile.paymentMethods&&(this.profile.paymentMethods=this.profile.paymentMethods.filter(t=>t.id!==e),this.profile.paymentMethods.length>0&&!this.profile.paymentMethods.some(e=>e.isPrimary)&&(this.profile.paymentMethods[0].isPrimary=!0),this.saveProfile(),this.notify(`PROFILE_UPDATED`,this.profile))}setDefaultPayment(e){this.profile.paymentMethods&&(this.profile.paymentMethods.forEach(t=>{t.isPrimary=t.id===e}),this.saveProfile(),this.notify(`PROFILE_UPDATED`,this.profile))}redeemRewardPoints(e){if(this.profile.rewardPoints>=e){this.profile.rewardPoints-=e;let t=(e/10).toFixed(2);return this.saveProfile(),this.notify(`PROFILE_UPDATED`,this.profile),{success:!0,discountCash:t}}return{success:!1,message:`Insufficient Reward Points!`}}saveProfile(){localStorage.setItem(`sb_profile`,JSON.stringify(this.profile))}};function o(e,t=`success`,n=3e3){let r=document.getElementById(`toast-container`);if(!r)return;let i=document.createElement(`div`);i.className=`toast toast-${t}`,i.innerHTML=`
    <i class="${t===`success`?`fa-solid fa-circle-check`:t===`info`?`fa-solid fa-circle-info`:`fa-solid fa-triangle-exclamation`}"></i>
    <span class="toast-message">${e}</span>
  `,r.appendChild(i),setTimeout(()=>{i.style.opacity=`0`,i.style.transform=`translateY(20px)`,setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},300)},n)}function s({title:e,bodyHTML:t,footerHTML:n=``}){let r=document.getElementById(`modal-container`);if(!r)return;r.innerHTML=`
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
  `,r.classList.remove(`hidden`);let i=document.getElementById(`global-modal-close-btn`);i&&i.addEventListener(`click`,c),r.onclick=e=>{e.target===r&&c()}}function c(){let e=document.getElementById(`modal-container`);e&&(e.classList.add(`hidden`),e.innerHTML=``)}function l(t=null){let n=!!t;if(s({title:n?`Edit Menu Item: ${t.name}`:`Add New Menu Item`,bodyHTML:`
    <form id="admin-dish-form">
      <div class="form-group">
        <label class="form-label">Dish Name *</label>
        <input type="text" id="dish-name" class="form-input" required value="${n?t.name:``}" placeholder="e.g. Nellore Special Royyala Biryani">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Category *</label>
          <select id="dish-category" class="form-select">
            ${e.filter(e=>e.id!==`all`&&e.id!==`specials`).map(e=>`
              <option value="${e.id}" ${n&&t.category===e.id?`selected`:``}>${e.name}</option>
            `).join(``)}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Price ($ / ₹ equivalent) *</label>
          <input type="number" step="0.01" id="dish-price" class="form-input" required value="${n?t.price:`15.99`}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Description *</label>
        <textarea id="dish-desc" class="form-input" rows="3" required placeholder="Describe the flavors, ingredients, and preparation...">${n?t.description:``}</textarea>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Preparation Time</label>
          <input type="text" id="dish-prep" class="form-input" value="${n?t.prepTime:`15-20 min`}">
        </div>

        <div class="form-group">
          <label class="form-label">Calories</label>
          <input type="text" id="dish-calories" class="form-input" value="${n?t.calories:`650 kcal`}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Image URL / Asset Path</label>
        <input type="text" id="dish-image" class="form-input" value="${n?t.image:`./assets/woodfired-pizza.png`}" placeholder="e.g. ./assets/woodfired-pizza.png or image URL">
      </div>

      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 0.5rem; background: var(--bg-input); padding: 0.75rem; border-radius: var(--radius-md);">
        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-tag-special" ${n&&t.tags?.includes(`chefSpecial`)?`checked`:``}> Chef's Special
        </label>

        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-tag-veg" ${n&&t.tags?.includes(`veg`)?`checked`:``}> Vegetarian
        </label>

        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-tag-gf" ${n&&t.tags?.includes(`gf`)?`checked`:``}> Gluten-Free
        </label>

        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-instock" ${!n||t.inStock?`checked`:``}> In Stock
        </label>
      </div>
    </form>
  `,footerHTML:`
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${n?`
        <button class="btn btn-outline" id="modal-delete-dish-btn" style="color: #ef4444; border-color: #ef4444;">
          <i class="fa-solid fa-trash"></i> Delete Dish
        </button>
      `:`<div></div>`}
      
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-dish">Cancel</button>
        <button class="btn btn-primary" id="modal-save-dish">${n?`Save Changes`:`Create Dish`}</button>
      </div>
    </div>
  `}),document.getElementById(`modal-cancel-dish`).onclick=c,n){let e=document.getElementById(`modal-delete-dish-btn`);e&&(e.onclick=()=>{confirm(`Are you sure you want to delete "${t.name}"?`)&&(a.deleteDish(t.id),c(),o(`Deleted ${t.name}`,`info`))})}document.getElementById(`modal-save-dish`).onclick=()=>{let e=document.getElementById(`dish-name`).value.trim(),r=document.getElementById(`dish-category`).value,i=parseFloat(document.getElementById(`dish-price`).value)||0,s=document.getElementById(`dish-desc`).value.trim(),l=document.getElementById(`dish-prep`).value.trim(),u=document.getElementById(`dish-calories`).value.trim(),d=document.getElementById(`dish-image`).value.trim(),f=[];document.getElementById(`dish-tag-special`).checked&&f.push(`chefSpecial`),document.getElementById(`dish-tag-veg`).checked&&f.push(`veg`),document.getElementById(`dish-tag-gf`).checked&&f.push(`gf`);let p=document.getElementById(`dish-instock`).checked;if(!e||!s||i<=0){o(`Please fill in dish name, price and description`,`info`);return}let m={name:e,category:r,price:i,description:s,prepTime:l,calories:u,image:d||`./assets/woodfired-pizza.png`,tags:f,inStock:p};n?(a.updateDish(t.id,m),o(`Updated dish: ${e}`,`success`)):(a.addDish(m),o(`Added new dish: ${e}`,`success`)),c()}}function u(e=null){let t=!!e;if(s({title:t?`Edit Branch: ${e.name}`:`Add New Restaurant Branch`,bodyHTML:`
    <form id="admin-loc-form">
      <div class="form-group">
        <label class="form-label">Branch Name *</label>
        <input type="text" id="loc-name" class="form-input" required value="${t?e.name:``}" placeholder="e.g. Trunk Road Plaza, Nellore">
      </div>

      <div class="form-group">
        <label class="form-label">Full Address *</label>
        <input type="text" id="loc-address" class="form-input" required value="${t?e.address:``}" placeholder="e.g. Trunk Road, Near VRC Centre, Nellore, Andhra Pradesh 524001">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="text" id="loc-phone" class="form-input" required value="${t?e.phone:`+91 861 234 5678`}">
        </div>

        <div class="form-group">
          <label class="form-label">Opening Hours</label>
          <input type="text" id="loc-hours" class="form-input" value="${t?e.hours:`Daily: 10:30 AM - 11:00 PM`}">
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Delivery Radius</label>
          <input type="text" id="loc-radius" class="form-input" value="${t?e.deliveryRadius:`7 km`}">
        </div>

        <div class="form-group">
          <label class="form-label">Avg Delivery Time</label>
          <input type="text" id="loc-time" class="form-input" value="${t?e.avgDeliveryTime:`20-30 min`}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Features / Amenities (comma separated)</label>
        <input type="text" id="loc-features" class="form-input" value="${t?e.features.join(`, `):`AC Dining, Valet Parking, Family Section`}" placeholder="e.g. AC Dining, Rooftop, Parking">
      </div>
    </form>
  `,footerHTML:`
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${t?`
        <button class="btn btn-outline" id="modal-delete-loc-btn" style="color: #ef4444; border-color: #ef4444;">
          <i class="fa-solid fa-trash"></i> Delete Branch
        </button>
      `:`<div></div>`}

      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-loc">Cancel</button>
        <button class="btn btn-primary" id="modal-save-loc">${t?`Save Branch`:`Add Branch`}</button>
      </div>
    </div>
  `}),document.getElementById(`modal-cancel-loc`).onclick=c,t){let t=document.getElementById(`modal-delete-loc-btn`);t&&(t.onclick=()=>{if(confirm(`Are you sure you want to delete branch "${e.name}"?`)){let t=a.deleteLocation(e.id);t.success?(c(),o(`Deleted branch ${e.name}`,`info`)):o(t.message,`info`)}})}document.getElementById(`modal-save-loc`).onclick=()=>{let n=document.getElementById(`loc-name`).value.trim(),r=document.getElementById(`loc-address`).value.trim(),i=document.getElementById(`loc-phone`).value.trim(),s=document.getElementById(`loc-hours`).value.trim(),l=document.getElementById(`loc-radius`).value.trim(),u=document.getElementById(`loc-time`).value.trim(),d=document.getElementById(`loc-features`).value.trim(),f=d?d.split(`,`).map(e=>e.trim()).filter(Boolean):[];if(!n||!r||!i){o(`Please fill in branch name, address and phone`,`info`);return}let p={name:n,address:r,phone:i,hours:s,deliveryRadius:l,avgDeliveryTime:u,features:f};t?(a.updateLocation(e.id,p),o(`Updated branch: ${n}`,`success`)):(a.addLocation(p),o(`Added branch: ${n}`,`success`)),c()}}function d(){let e=document.getElementById(`main-header`);if(!e)return;let t=a.cart.reduce((e,t)=>e+t.qty,0),n=a.wishlist.length,r=a.activeView;e.innerHTML=`
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
        <!-- Quick Admin Action Buttons -->
        <button class="btn btn-outline btn-sm nav-admin-btn" id="nav-add-dish-btn" title="Add New Menu Item (Admin)" style="border-color: var(--primary); color: var(--primary);">
          <i class="fa-solid fa-plus"></i> Add Item
        </button>

        <button class="btn btn-outline btn-sm nav-admin-btn" id="nav-add-branch-btn" title="Add New Restaurant Branch (Admin)" style="border-color: var(--accent-gold); color: var(--accent-gold);">
          <i class="fa-solid fa-building-circle-check"></i> Add Branch
        </button>

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
          <span>${r===`staff`?`Exit Staff Portal`:`Admin Portal`}</span>
        </button>
      </div>
    </div>
  `,document.querySelectorAll(`[data-nav]`).forEach(e=>{e.onclick=t=>{t.preventDefault();let n=e.getAttribute(`data-nav`);a.setView(n)}});let i=document.getElementById(`nav-brand-btn`);i&&(i.onclick=e=>{e.preventDefault(),a.setView(`menu`)});let o=document.getElementById(`theme-toggle-btn`);o&&(o.onclick=()=>{a.setTheme(a.theme===`dark`?`light`:`dark`)});let s=document.getElementById(`open-cart-btn`);s&&(s.onclick=()=>{let e=document.getElementById(`cart-drawer`);e&&e.classList.remove(`hidden`)});let c=document.getElementById(`nav-add-dish-btn`);c&&(c.onclick=()=>l());let d=document.getElementById(`nav-add-branch-btn`);d&&(d.onclick=()=>u());let f=document.getElementById(`staff-portal-nav-btn`);f&&(f.onclick=()=>{a.activeView===`staff`?a.setView(`menu`):a.setView(`staff`)})}function f(t){let n=e=>a.isWishlisted(e),r=a.dishes.filter(e=>{if(a.selectedCategory!==`all`){if(a.selectedCategory===`specials`){if(!e.tags.includes(`chefSpecial`))return!1}else if(e.category!==a.selectedCategory)return!1}if(a.searchQuery.trim()!==``){let t=a.searchQuery.toLowerCase(),n=e.name.toLowerCase().includes(t),r=e.description.toLowerCase().includes(t);if(!n&&!r)return!1}return!(a.dietaryFilter===`veg`&&!e.tags.includes(`veg`)||a.dietaryFilter===`gf`&&!e.tags.includes(`gf`)||a.dietaryFilter===`chefSpecial`&&!e.tags.includes(`chefSpecial`))});a.sortBy===`price-low`?r.sort((e,t)=>e.price-t.price):a.sortBy===`price-high`?r.sort((e,t)=>t.price-e.price):a.sortBy===`rating`&&r.sort((e,t)=>t.rating-e.rating),t.innerHTML=`
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
                  <button class="btn btn-outline btn-sm edit-dish-direct-btn" data-edit-dish-id="${e.id}" title="Edit Dish (Admin)">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
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
  `;let i=document.getElementById(`menu-search-input`);i&&(i.oninput=e=>{a.searchQuery=e.target.value,f(t)}),document.querySelectorAll(`.edit-dish-direct-btn`).forEach(e=>{e.onclick=t=>{t.stopPropagation();let n=e.getAttribute(`data-edit-dish-id`),r=a.dishes.find(e=>e.id===n);r&&l(r)}}),document.querySelectorAll(`.tag-btn`).forEach(e=>{e.onclick=()=>{a.searchQuery=e.getAttribute(`data-tag`),f(t)}}),document.querySelectorAll(`[data-cat]`).forEach(e=>{e.onclick=()=>{a.selectedCategory=e.getAttribute(`data-cat`),f(t)}}),document.querySelectorAll(`[data-diet]`).forEach(e=>{e.onclick=()=>{a.dietaryFilter=e.getAttribute(`data-diet`),f(t)}});let s=document.getElementById(`sort-select`);s&&(s.onchange=e=>{a.sortBy=e.target.value,f(t)}),document.querySelectorAll(`[data-wishlist-id]`).forEach(e=>{e.onclick=n=>{n.stopPropagation();let r=e.getAttribute(`data-wishlist-id`);a.toggleWishlist(r),o(a.isWishlisted(r)?`Added to Wishlist!`:`Removed from Wishlist`,`info`),f(t)}}),document.querySelectorAll(`[data-add-id]`).forEach(e=>{e.onclick=t=>{t.stopPropagation();let n=e.getAttribute(`data-add-id`),r=a.dishes.find(e=>e.id===n);r&&r.inStock&&(a.addToCart(n,1),o(`Added ${r.name} to Cart!`,`success`))}}),document.querySelectorAll(`[data-detail-id]`).forEach(e=>{e.onclick=t=>{t.stopPropagation(),p(e.getAttribute(`data-detail-id`))}})}function p(e){let t=a.dishes.find(t=>t.id===e);if(!t)return;let n=1;s({title:`Customize Your Order`,bodyHTML:`
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
  `});let r=document.getElementById(`modal-qty-minus`),i=document.getElementById(`modal-qty-plus`),l=document.getElementById(`modal-qty-val`);r&&i&&l&&(r.onclick=()=>{n>1&&(n--,l.textContent=n)},i.onclick=()=>{n++,l.textContent=n});let u=document.getElementById(`modal-cancel-btn`);u&&(u.onclick=c);let d=document.getElementById(`modal-add-cart-btn`);d&&(d.onclick=()=>{let r=document.getElementById(`modal-spice-select`).value,i=document.getElementById(`modal-notes-input`).value.trim(),s=[];document.getElementById(`addon-cheese`).checked&&s.push(`Extra Cheese`),document.getElementById(`addon-sauce`).checked&&s.push(`Truffle Dip`),document.getElementById(`addon-gf`).checked&&s.push(`GF Option`);let l=r;s.length>0&&(l+=` | ${s.join(`, `)}`),i&&(l+=` (${i})`),a.addToCart(e,n,l),o(`Added ${t.name} (${n}x) to Cart!`,`success`),c()})}function m(e){let t=a.dishes.filter(e=>a.wishlist.includes(e.id));e.innerHTML=`
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
  `;let n=document.getElementById(`wishlist-explore-btn`);n&&(n.onclick=()=>a.setView(`menu`)),document.querySelectorAll(`[data-remove-wishlist]`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-remove-wishlist`);a.toggleWishlist(n),o(`Item removed from Wishlist`,`info`),m(e)}}),document.querySelectorAll(`[data-wishlist-add]`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-wishlist-add`),n=a.dishes.find(e=>e.id===t);n&&(a.addToCart(t,1),o(`Moved ${n.name} to Cart!`,`success`))}})}function h(){let e=document.getElementById(`cart-drawer-body`);if(!e)return;let t=a.getCartTotal(),n=a.cart;e.innerHTML=`
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
  `;let r=document.getElementById(`close-cart-drawer-btn`),i=document.getElementById(`cart-overlay`),s=document.getElementById(`cart-drawer`),c=()=>{s&&s.classList.add(`hidden`)};r&&(r.onclick=c),i&&(i.onclick=c);let l=document.getElementById(`cart-start-ordering-btn`);l&&(l.onclick=()=>{c(),a.setView(`menu`)}),document.querySelectorAll(`[data-qty-change]`).forEach(e=>{e.onclick=()=>{let t=parseInt(e.getAttribute(`data-qty-change`)),n=parseInt(e.getAttribute(`data-delta`)),r=a.cart[t];r&&(a.updateCartQty(t,r.qty+n),h())}});let u=document.getElementById(`apply-coupon-btn`);u&&(u.onclick=()=>{let e=document.getElementById(`coupon-input-field`);if(e){let t=a.applyCoupon(e.value);t.success?o(t.message,`success`):o(t.message,`info`),h()}});let d=document.getElementById(`checkout-trigger-btn`);d&&(d.onclick=()=>{c(),g()})}function g(){let e=a.getCartTotal(),t=a.profile;t.addresses.find(e=>e.isDefault)||t.addresses[0],s({title:`Complete Your Order`,bodyHTML:`
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
  `});let n=document.getElementById(`checkout-cancel-btn`);n&&(n.onclick=c);let r=document.getElementById(`confirm-pay-btn`);r&&(r.onclick=()=>{let t=document.getElementById(`checkout-address-select`).value,n=document.querySelector(`input[name="fulfillment"]:checked`).value,r=a.placeOrder({deliveryAddress:t,fulfillmentType:n,subtotal:e.subtotal,discount:e.discountAmount,tax:e.tax,deliveryFee:e.deliveryFee,total:e.grandTotal,estimatedEta:`20-25 minutes`,driverName:`Srinivas Rao`,driverPhone:`+91 98480 88990`});c(),o(`Order #${r.id} Placed Successfully!`,`success`),a.setView(`orders`)})}function _(e){let t=a.orders.filter(e=>e.status!==`delivered`),n=a.orders.filter(e=>e.status===`delivered`);e.innerHTML=`
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

        ${t.map(e=>v(e)).join(``)}
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
  `;let r=document.getElementById(`active-order-explore-btn`);r&&(r.onclick=()=>a.setView(`menu`)),document.querySelectorAll(`[data-reorder-id]`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-reorder-id`),n=a.orders.find(e=>e.id===t);n&&(n.items.forEach(e=>{a.addToCart(e.dishId,e.qty,e.opts||``)}),o(`Items re-added to Cart!`,`success`),a.setView(`menu`))}})}function v(e){let t=e.status===`preparing`||e.status===`ready`||e.status===`delivered`,n=e.status===`ready`||e.status===`delivered`,r=e.status===`delivered`;return`
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
  `}function y(e){let t=a.profile,n=(t.rewardPoints/10).toFixed(2),r=t.addresses||[],i=t.paymentMethods||[];e.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <div>
          <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-user-gear" style="color: var(--primary);"></i> Account Settings & Address Book</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Manage your profile details, delivery addresses, payment methods, and loyalty reward cash.</p>
        </div>

        <button class="btn btn-outline btn-sm" id="edit-profile-details-btn" style="border-color: var(--primary); color: var(--primary);">
          <i class="fa-solid fa-pen-to-square"></i> Edit Profile Info
        </button>
      </div>

      <div class="account-layout">
        <!-- Sidebar Profile Card -->
        <aside>
          <div class="profile-card">
            <div class="avatar-wrapper">
              <i class="fa-solid fa-user"></i>
            </div>
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.2rem;">${t.name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">${t.email}</p>
            <p style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 1rem;"><i class="fa-solid fa-phone"></i> ${t.phone}</p>

            <span class="badge badge-gold" style="font-size: 0.8rem; margin-bottom: 1.5rem;">
              <i class="fa-solid fa-crown"></i> ${t.loyaltyTier||`Gold Gourmet Member`}
            </span>

            <!-- Loyalty Reward Cash Box -->
            <div style="background: var(--bg-dark); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: left; margin-bottom: 1.5rem;">
              <div style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 0.3rem;">
                <i class="fa-solid fa-coins" style="color: var(--accent-gold);"></i> Gourmet Reward Points
              </div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-gold);">${t.rewardPoints} Points</div>
              <div style="font-size: 0.78rem; color: var(--accent-green); font-weight: 600; margin-top: 0.25rem; margin-bottom: 0.75rem;">
                = $${n} Redeemable Discount Cash
              </div>

              <button class="btn btn-primary btn-sm btn-full" id="redeem-points-btn" ${t.rewardPoints<100?`disabled`:``}>
                <i class="fa-solid fa-gift"></i> ${t.rewardPoints>=100?`Redeem Cash Credit`:`Min 100 Points to Redeem`}
              </button>
            </div>

            <!-- Navigation Tabs -->
            <div class="account-nav">
              <button class="account-nav-btn active" data-tab="addresses">
                <i class="fa-solid fa-map-location-dot"></i> Saved Addresses (${r.length})
              </button>
              <button class="account-nav-btn" data-tab="payments">
                <i class="fa-solid fa-credit-card"></i> Saved Payment Methods (${i.length})
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Account Content -->
        <main>
          <!-- Addresses Panel -->
          <div id="account-tab-addresses">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 700;">Delivery Address Book</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Manage your default home, office, and delivery addresses.</p>
              </div>

              <button class="btn btn-primary btn-sm" id="add-new-address-btn">
                <i class="fa-solid fa-plus"></i> Add New Address
              </button>
            </div>

            <div class="address-grid">
              ${r.map(e=>`
                <div class="address-card ${e.isDefault?`default`:``}">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span style="font-weight: 700; font-size: 1rem; color: var(--text-main); display: flex; align-items: center; gap: 0.4rem;">
                      <i class="fa-solid ${e.label.toLowerCase().includes(`home`)?`fa-house-chimney`:e.label.toLowerCase().includes(`work`)?`fa-building`:`fa-location-dot`}" style="color: var(--primary);"></i>
                      ${e.label}
                    </span>
                    ${e.isDefault?`<span class="badge badge-primary">Default</span>`:`
                      <button class="btn btn-outline btn-sm set-default-addr-btn" data-default-addr-id="${e.id}" style="font-size: 0.75rem; padding: 0.2rem 0.5rem;">
                        Make Default
                      </button>
                    `}
                  </div>

                  <p style="font-size: 0.9rem; color: var(--text-sub); margin-bottom: 0.5rem; line-height: 1.4;">
                    ${e.street}<br>
                    ${e.city}, ${e.zip}
                  </p>

                  <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                    <span><i class="fa-solid fa-phone"></i> ${t.phone}</span>

                    <div style="display: flex; gap: 0.4rem;">
                      <button class="btn btn-secondary btn-sm edit-addr-btn" data-edit-addr-id="${e.id}" title="Edit Address">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button class="btn btn-outline btn-sm delete-addr-btn" data-delete-addr-id="${e.id}" style="color: #ef4444; border-color: #ef4444;" title="Delete Address">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              `).join(``)}
            </div>
          </div>

          <!-- Payment Methods Panel -->
          <div id="account-tab-payments" style="display: none;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 700;">Saved Payment Methods</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Manage saved credit cards, debit cards, and UPI IDs for 1-click checkout.</p>
              </div>

              <button class="btn btn-primary btn-sm" id="add-new-payment-btn">
                <i class="fa-solid fa-plus"></i> Add Payment Method
              </button>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem;">
              ${i.map(e=>`
                <div class="address-card ${e.isPrimary?`default`:``}">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <i class="fa-solid ${e.type===`card`?`fa-credit-card`:`fa-mobile-screen-button`}" style="font-size: 1.8rem; color: var(--primary);"></i>
                    ${e.isPrimary?`<span class="badge badge-primary">Primary</span>`:`
                      <button class="btn btn-outline btn-sm set-primary-pay-btn" data-primary-pay-id="${e.id}" style="font-size: 0.75rem; padding: 0.2rem 0.5rem;">
                        Make Primary
                      </button>
                    `}
                  </div>

                  <div style="font-size: 1rem; font-weight: 700; margin-bottom: 0.3rem; color: var(--text-main);">
                    ${e.title}
                  </div>

                  <div style="font-family: monospace; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 1px; color: var(--text-sub);">
                    ${e.cardNumber||e.upiId}
                  </div>

                  <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                    <span>${e.expiry?`Expires ${e.expiry}`:`Verified Instant UPI`}</span>

                    <button class="btn btn-outline btn-sm delete-pay-btn" data-delete-pay-id="${e.id}" style="color: #ef4444; border-color: #ef4444;" title="Delete Payment Method">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              `).join(``)}
            </div>
          </div>
        </main>
      </div>
    </section>
  `;let s=document.getElementById(`edit-profile-details-btn`);s&&(s.onclick=()=>b(e));let c=document.getElementById(`redeem-points-btn`);c&&(c.onclick=()=>C(e)),document.querySelectorAll(`[data-tab]`).forEach(e=>{e.onclick=()=>{document.querySelectorAll(`[data-tab]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),e.getAttribute(`data-tab`)===`addresses`?(document.getElementById(`account-tab-addresses`).style.display=`block`,document.getElementById(`account-tab-payments`).style.display=`none`):(document.getElementById(`account-tab-addresses`).style.display=`none`,document.getElementById(`account-tab-payments`).style.display=`block`)}});let l=document.getElementById(`add-new-address-btn`);l&&(l.onclick=()=>x(e)),document.querySelectorAll(`.edit-addr-btn`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-edit-addr-id`),r=a.profile.addresses.find(e=>e.id===n);r&&x(e,r)}}),document.querySelectorAll(`.delete-addr-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-delete-addr-id`);confirm(`Delete this address?`)&&(a.deleteAddress(t),o(`Address removed`,`info`))}}),document.querySelectorAll(`.set-default-addr-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-default-addr-id`);a.setDefaultAddress(t),o(`Default delivery address updated`,`success`)}});let u=document.getElementById(`add-new-payment-btn`);u&&(u.onclick=()=>S(e)),document.querySelectorAll(`.delete-pay-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-delete-pay-id`);confirm(`Delete this payment method?`)&&(a.deletePaymentMethod(t),o(`Payment method removed`,`info`))}}),document.querySelectorAll(`.set-primary-pay-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-primary-pay-id`);a.setDefaultPayment(t),o(`Primary payment method updated`,`success`)}})}function b(e){let t=a.profile;s({title:`Edit Profile Information`,bodyHTML:`
    <div class="form-group">
      <label class="form-label">Full Name *</label>
      <input type="text" id="edit-profile-name" class="form-input" required value="${t.name}">
    </div>

    <div class="form-group">
      <label class="form-label">Email Address *</label>
      <input type="email" id="edit-profile-email" class="form-input" required value="${t.email}">
    </div>

    <div class="form-group">
      <label class="form-label">Phone Number *</label>
      <input type="text" id="edit-profile-phone" class="form-input" required value="${t.phone}">
    </div>

    <div class="form-group">
      <label class="form-label">Loyalty Tier</label>
      <input type="text" class="form-input" disabled value="${t.loyaltyTier||`Gold Gourmet`}">
    </div>
  `,footerHTML:`
    <button class="btn btn-secondary" id="modal-cancel-profile">Cancel</button>
    <button class="btn btn-primary" id="modal-save-profile">Save Profile</button>
  `}),document.getElementById(`modal-cancel-profile`).onclick=c,document.getElementById(`modal-save-profile`).onclick=()=>{let e=document.getElementById(`edit-profile-name`).value.trim(),t=document.getElementById(`edit-profile-email`).value.trim(),n=document.getElementById(`edit-profile-phone`).value.trim();if(!e||!t||!n){o(`Please fill in name, email and phone`,`info`);return}a.updateProfile({name:e,email:t,phone:n}),c(),o(`Profile information updated successfully!`,`success`)}}function x(e,t=null){let n=!!t,r=`
    <div class="form-group">
      <label class="form-label">Address Label (Home, Work, etc.) *</label>
      <input type="text" id="addr-label" class="form-input" required value="${n?t.label:``}" placeholder="e.g. Home, Office, Parent's House">
    </div>

    <div class="form-group">
      <label class="form-label">Street Address & Apartment *</label>
      <input type="text" id="addr-street" class="form-input" required value="${n?t.street:``}" placeholder="e.g. Door No. 24-2-154, Dargamitta">
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">City & State *</label>
        <input type="text" id="addr-city" class="form-input" required value="${n?t.city:`Nellore, Andhra Pradesh`}">
      </div>
      <div class="form-group">
        <label class="form-label">PIN Code *</label>
        <input type="text" id="addr-zip" class="form-input" required value="${n?t.zip:`524003`}">
      </div>
    </div>

    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub); cursor: pointer;">
      <input type="checkbox" id="addr-default" ${n?t.isDefault?`checked`:``:`checked`}> Set as primary default delivery address
    </label>
  `,i=`
    <button class="btn btn-secondary" id="modal-cancel-addr">Cancel</button>
    <button class="btn btn-primary" id="modal-save-addr">${n?`Save Changes`:`Add Address`}</button>
  `;s({title:n?`Edit Address (${t.label})`:`Add New Delivery Address`,bodyHTML:r,footerHTML:i}),document.getElementById(`modal-cancel-addr`).onclick=c,document.getElementById(`modal-save-addr`).onclick=()=>{let e=document.getElementById(`addr-label`).value.trim()||`Other`,r=document.getElementById(`addr-street`).value.trim(),i=document.getElementById(`addr-city`).value.trim()||`Nellore, Andhra Pradesh`,s=document.getElementById(`addr-zip`).value.trim()||`524003`,l=document.getElementById(`addr-default`).checked;if(!r){o(`Please enter a street address`,`info`);return}n?(a.updateAddress(t.id,{label:e,street:r,city:i,zip:s,isDefault:l}),o(`Address updated!`,`success`)):(a.addAddress({label:e,street:r,city:i,zip:s,isDefault:l}),o(`New Address added!`,`success`)),c()}}function S(e){s({title:`Add Saved Payment Method`,bodyHTML:`
    <div class="form-group">
      <label class="form-label">Payment Method Type</label>
      <select id="pay-type" class="form-select">
        <option value="card">Credit / Debit Card (Visa, Mastercard, RuPay)</option>
        <option value="upi">UPI ID (PhonePe, GPay, Paytm)</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Title / Label</label>
      <input type="text" id="pay-title" class="form-input" placeholder="e.g. HDFC Credit Card or My PhonePe UPI">
    </div>

    <div id="card-fields">
      <div class="form-group">
        <label class="form-label">Card Number (Last 4 digits or Full)</label>
        <input type="text" id="pay-card-num" class="form-input" placeholder="•••• •••• •••• 5678">
      </div>
      <div class="form-group">
        <label class="form-label">Expiry Date</label>
        <input type="text" id="pay-expiry" class="form-input" placeholder="MM/YY e.g. 10/28">
      </div>
    </div>

    <div id="upi-fields" style="display: none;">
      <div class="form-group">
        <label class="form-label">UPI ID</label>
        <input type="text" id="pay-upi-id" class="form-input" placeholder="e.g. username@ybl or mobile@paytm">
      </div>
    </div>

    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub); cursor: pointer;">
      <input type="checkbox" id="pay-primary" checked> Set as primary default payment method
    </label>
  `,footerHTML:`
    <button class="btn btn-secondary" id="modal-cancel-pay">Cancel</button>
    <button class="btn btn-primary" id="modal-save-pay">Save Payment Method</button>
  `});let t=document.getElementById(`pay-type`);t.onchange=e=>{e.target.value===`card`?(document.getElementById(`card-fields`).style.display=`block`,document.getElementById(`upi-fields`).style.display=`none`):(document.getElementById(`card-fields`).style.display=`none`,document.getElementById(`upi-fields`).style.display=`block`)},document.getElementById(`modal-cancel-pay`).onclick=c,document.getElementById(`modal-save-pay`).onclick=()=>{let e=t.value,n=document.getElementById(`pay-title`).value.trim()||(e===`card`?`Credit Card`:`UPI ID`),r=document.getElementById(`pay-primary`).checked;if(e===`card`){let e=document.getElementById(`pay-card-num`).value.trim()||`5678`,t=e.length===4?`•••• •••• •••• ${e}`:e,i=document.getElementById(`pay-expiry`).value.trim()||`12/28`;a.addPaymentMethod({type:`card`,title:n,cardNumber:t,expiry:i,isPrimary:r})}else{let e=document.getElementById(`pay-upi-id`).value.trim()||`user@upi`;a.addPaymentMethod({type:`upi`,title:n,upiId:e,isPrimary:r})}c(),o(`New Payment Method Saved!`,`success`)}}function C(e){let t=a.profile;s({title:`Redeem Loyalty Points for Discount Cash`,bodyHTML:`
    <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.25rem;">
      You currently have <strong style="color: var(--accent-gold); font-size: 1.1rem;">${t.rewardPoints} Reward Points</strong>. Every 100 Points = $10.00 Discount Cash!
    </p>

    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${t.rewardPoints>=100?`
        <button class="btn btn-outline redeem-option-btn" data-redeem-pts="100" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem;">
          <span>Redeem 100 Points</span>
          <strong style="color: var(--accent-green);">$10.00 Voucher</strong>
        </button>
      `:``}

      ${t.rewardPoints>=200?`
        <button class="btn btn-outline redeem-option-btn" data-redeem-pts="200" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem;">
          <span>Redeem 200 Points</span>
          <strong style="color: var(--accent-green);">$20.00 Voucher</strong>
        </button>
      `:``}

      ${t.rewardPoints>=400?`
        <button class="btn btn-outline redeem-option-btn" data-redeem-pts="400" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem;">
          <span>Redeem 400 Points</span>
          <strong style="color: var(--accent-green);">$40.00 Voucher</strong>
        </button>
      `:``}
    </div>
  `,footerHTML:`
    <button class="btn btn-secondary" id="modal-cancel-redeem">Close</button>
  `}),document.getElementById(`modal-cancel-redeem`).onclick=c,document.querySelectorAll(`[data-redeem-pts]`).forEach(e=>{e.onclick=()=>{let t=parseInt(e.getAttribute(`data-redeem-pts`)),n=a.redeemRewardPoints(t);n.success?(a.applyCoupon(`WELCOME20`),o(`Redeemed ${t} Points! $${n.discountCash} discount applied to your active order!`,`success`,6e3),c()):o(n.message,`info`)}})}function w(e){let t=a.selectedLocation||a.locations[0];e.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <div>
          <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> Restaurant Locations & Table Booking</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Find your nearest Savory Bites Bistro branch in Nellore or reserve a dining table online.</p>
        </div>

        <button class="btn btn-outline btn-sm" id="view-add-branch-btn" style="border-color: var(--accent-gold); color: var(--accent-gold);">
          <i class="fa-solid fa-plus"></i> Add New Branch (Admin)
        </button>
      </div>

      <div class="locations-grid">
        <!-- Branch Selector & Details -->
        <div>
          <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem;">Select Bistro Branch</h2>
          
          <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2rem;">
            ${a.locations.map(e=>`
              <div class="branch-card ${e.id===t.id?`active`:``}" data-select-loc="${e.id}" style="${e.id===t.id?`border-color: var(--primary); background: rgba(255, 107, 53, 0.04);`:``} cursor: pointer;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 700;">${e.name}</h3>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span class="badge badge-gold"><i class="fa-solid fa-star"></i> ${e.rating||`4.9`}</span>
                    <button class="btn btn-secondary btn-sm edit-branch-direct-btn" data-edit-loc-id="${e.id}" title="Edit Branch (Admin)">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
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
  `,document.querySelectorAll(`[data-select-loc]`).forEach(t=>{t.onclick=n=>{if(n.target.closest(`.edit-branch-direct-btn`))return;let r=t.getAttribute(`data-select-loc`),i=a.locations.find(e=>e.id===r);if(i){a.selectedLocation=i;let t=document.getElementById(`header-location-name`);t&&(t.textContent=i.name),w(e)}}}),document.querySelectorAll(`.edit-branch-direct-btn`).forEach(e=>{e.onclick=t=>{t.stopPropagation();let n=e.getAttribute(`data-edit-loc-id`),r=a.locations.find(e=>e.id===n);r&&u(r)}});let n=document.getElementById(`view-add-branch-btn`);n&&(n.onclick=()=>u());let r=document.getElementById(`reservation-form`);r&&(r.onsubmit=e=>{e.preventDefault();let n=document.getElementById(`res-date`).value,i=document.getElementById(`res-time`).value,a=document.getElementById(`res-guests`).value;o(`Table Reserved for ${a} at ${t.name} on ${n} @ ${i}!`,`success`,5e3),r.reset()})}function T(e){let t=a.orders.filter(e=>e.status!==`delivered`),n=a.orders.reduce((e,t)=>e+t.total,0),r=t.length;e.innerHTML=`
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
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-green);">$${n.toFixed(2)}</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Active Kitchen Orders</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--primary);">${r} Pending</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Total Menu Dishes</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold);">${a.dishes.length} Items</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Active Branches</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--text-main);">${a.locations.length} Outlets</div>
        </div>
      </div>

      <!-- Section 1: Live Kitchen Display System (KDS) -->
      <div style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <h2 style="font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
            <span class="pulse-dot"></span> Live Kitchen Orders Queue (${t.length})
          </h2>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Changing order status updates customer tracker in real time</span>
        </div>

        ${t.length===0?`
          <div style="background: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-color);">
            <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; color: var(--accent-green); margin-bottom: 0.75rem;"></i>
            <h3>All Kitchen Orders Cleared!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">No active pending orders right now.</p>
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
          ${a.dishes.map(e=>`
            <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
              <div style="display: flex; gap: 1rem;">
                <img src="${e.image}" alt="${e.name}" style="width: 64px; height: 64px; border-radius: var(--radius-md); object-fit: cover;">
                <div style="flex: 1;">
                  <div style="font-weight: 700; font-size: 1rem; color: var(--text-main); margin-bottom: 0.2rem;">${e.name}</div>
                  <div style="font-size: 0.85rem; color: var(--primary); font-weight: 700;">$${e.price.toFixed(2)} • <span style="color: var(--text-muted); font-weight: 400; text-transform: capitalize;">${e.category}</span></div>
                  <div style="font-size: 0.8rem; color: var(--text-sub); margin-top: 0.3rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                    ${e.description}
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.75rem; border-top: 1px dashed var(--border-color); flex-wrap: wrap; gap: 0.5rem;">
                <button class="btn ${e.inStock?`btn-outline`:`btn-primary`} btn-sm stock-toggle-btn" data-stock-dish-id="${e.id}">
                  ${e.inStock?`<i class="fa-solid fa-check"></i> In Stock`:`<i class="fa-solid fa-ban"></i> Out of Stock`}
                </button>

                <div style="display: flex; gap: 0.4rem;">
                  <button class="btn btn-secondary btn-sm edit-dish-btn" data-edit-dish-id="${e.id}">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <button class="btn btn-outline btn-sm delete-dish-btn" data-delete-dish-id="${e.id}" style="color: #ef4444; border-color: #ef4444;">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join(``)}
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
          ${a.locations.map(e=>`
            <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <h3 style="font-size: 1.1rem; font-weight: 700;">${e.name}</h3>
                  <span class="badge badge-gold"><i class="fa-solid fa-star"></i> ${e.rating||`4.8`}</span>
                </div>

                <div style="font-size: 0.88rem; color: var(--text-sub); display: flex; flex-direction: column; gap: 0.35rem;">
                  <div><i class="fa-solid fa-map-pin" style="color: var(--primary);"></i> ${e.address}</div>
                  <div><i class="fa-solid fa-phone"></i> ${e.phone}</div>
                  <div><i class="fa-solid fa-clock"></i> ${e.hours}</div>
                  <div><i class="fa-solid fa-truck"></i> Radius: ${e.deliveryRadius} (${e.avgDeliveryTime})</div>
                </div>

                <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.75rem;">
                  ${e.features.map(e=>`<span class="badge badge-primary" style="font-size: 0.75rem;">${e}</span>`).join(``)}
                </div>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
                <button class="btn btn-secondary btn-sm edit-loc-btn" data-edit-loc-id="${e.id}">
                  <i class="fa-solid fa-pen-to-square"></i> Edit Branch
                </button>
                <button class="btn btn-outline btn-sm delete-loc-btn" data-delete-loc-id="${e.id}" style="color: #ef4444; border-color: #ef4444;">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>
  `;let i=document.getElementById(`exit-staff-portal-btn`);i&&(i.onclick=()=>a.setView(`menu`));let s=document.getElementById(`admin-banner-add-dish`);s&&(s.onclick=()=>l());let c=document.getElementById(`admin-add-dish-btn`);c&&(c.onclick=()=>l());let d=document.getElementById(`admin-banner-add-branch`);d&&(d.onclick=()=>u());let f=document.getElementById(`admin-add-branch-btn`);f&&(f.onclick=()=>u()),document.querySelectorAll(`.status-change-select`).forEach(t=>{t.onchange=n=>{let r=t.getAttribute(`data-order-status-id`),i=n.target.value;a.updateOrderStatus(r,i),o(`Order #${r} status updated to ${i.toUpperCase()}`,`success`),T(e)}}),document.querySelectorAll(`.stock-toggle-btn`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-stock-dish-id`);a.toggleDishStock(n);let r=a.dishes.find(e=>e.id===n);o(`${r.name} stock toggled: ${r.inStock?`In Stock`:`Out of Stock`}`,`info`),T(e)}}),document.querySelectorAll(`.edit-dish-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-edit-dish-id`),n=a.dishes.find(e=>e.id===t);n&&l(n)}}),document.querySelectorAll(`.delete-dish-btn`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-delete-dish-id`),r=a.dishes.find(e=>e.id===n);r&&confirm(`Are you sure you want to delete "${r.name}"?`)&&(a.deleteDish(n),o(`Deleted ${r.name}`,`info`),T(e))}}),document.querySelectorAll(`.edit-loc-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-edit-loc-id`),n=a.locations.find(e=>e.id===t);n&&u(n)}}),document.querySelectorAll(`.delete-loc-btn`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-delete-loc-id`),r=a.locations.find(e=>e.id===n);if(r&&confirm(`Are you sure you want to delete branch "${r.name}"?`)){let t=a.deleteLocation(n);t.success?(o(`Deleted branch ${r.name}`,`info`),T(e)):o(t.message,`info`)}}})}function E(){document.documentElement.setAttribute(`data-theme`,a.theme),d(),h(),D(),a.subscribe((e,t)=>{e===`VIEW_CHANGED`||e===`THEME_CHANGED`?(d(),D()):e===`CART_UPDATED`||e===`COUPON_APPLIED`?(d(),h()):e===`WISHLIST_UPDATED`?(d(),a.activeView===`wishlist`&&m(document.getElementById(`app-view`)),a.activeView===`menu`&&f(document.getElementById(`app-view`))):e===`ORDER_PLACED`||e===`ORDER_STATUS_UPDATED`?(d(),h(),a.activeView===`orders`&&_(document.getElementById(`app-view`)),a.activeView===`staff`&&T(document.getElementById(`app-view`))):e===`STOCK_UPDATED`?(a.activeView===`menu`&&f(document.getElementById(`app-view`)),a.activeView===`staff`&&T(document.getElementById(`app-view`))):e===`LOCATIONS_UPDATED`?(d(),a.activeView===`location`&&w(document.getElementById(`app-view`)),a.activeView===`staff`&&T(document.getElementById(`app-view`))):e===`PROFILE_UPDATED`&&(d(),a.activeView===`account`&&y(document.getElementById(`app-view`)))});let e=document.getElementById(`footer-staff-toggle`);e&&(e.onclick=()=>{a.setView(`staff`)})}function D(){let e=document.getElementById(`app-view`);if(e)switch(a.activeView){case`menu`:f(e);break;case`wishlist`:m(e);break;case`orders`:_(e);break;case`account`:y(e);break;case`location`:w(e);break;case`staff`:T(e);break;default:f(e)}}document.addEventListener(`DOMContentLoaded`,E);