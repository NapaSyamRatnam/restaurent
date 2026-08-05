/* ==========================================================================
   APPLICATION STATE MANAGEMENT & LOCAL STORAGE PERSISTENCE
   ========================================================================== */

import { INITIAL_DISHES, RESTAURANT_LOCATIONS, DEFAULT_USER_PROFILE, INITIAL_ORDERS } from './data.js';

class AppState {
  constructor() {
    this.listeners = [];
    this.init();
  }

  init() {
    // Load persisted state or defaults
    this.activeView = 'menu';
    this.theme = localStorage.getItem('sb_theme') || 'dark';
    
    const savedWishlist = localStorage.getItem('sb_wishlist');
    this.wishlist = savedWishlist ? JSON.parse(savedWishlist) : ['dish-1', 'dish-4'];

    const savedCart = localStorage.getItem('sb_cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [
      { dishId: 'dish-1', qty: 1, options: 'Extra Fresh Basil', price: 18.99 }
    ];

    const savedDishes = localStorage.getItem('sb_dishes');
    this.dishes = savedDishes ? JSON.parse(savedDishes) : INITIAL_DISHES;

    const savedProfile = localStorage.getItem('sb_profile');
    this.profile = savedProfile ? JSON.parse(savedProfile) : DEFAULT_USER_PROFILE;
    if (!this.profile.name || this.profile.name === 'Alex Vance' || this.profile.name === 'Syam') {
      this.profile.name = 'syam';
      this.profile.email = 'syam@gmail.com';
      this.saveProfile();
    }

    const savedOrders = localStorage.getItem('sb_orders');
    this.orders = savedOrders ? JSON.parse(savedOrders) : INITIAL_ORDERS;

    const savedLocations = localStorage.getItem('sb_locations');
    this.locations = savedLocations ? JSON.parse(savedLocations) : RESTAURANT_LOCATIONS;
    this.selectedLocation = this.locations[0] || RESTAURANT_LOCATIONS[0];

    this.appliedCoupon = { code: 'WELCOME20', discountPercent: 20 };
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.dietaryFilter = 'all'; // all, veg, gf, chefSpecial
    this.sortBy = 'popular'; // popular, price-low, price-high, rating
  }

  // Subscribe to state changes
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify(event, payload) {
    this.listeners.forEach(fn => fn(event, payload));
  }

  // Theme Toggle
  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('sb_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.notify('THEME_CHANGED', theme);
  }

  // View Navigation
  setView(viewName) {
    this.activeView = viewName;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.notify('VIEW_CHANGED', viewName);
  }

  // Wishlist Actions
  toggleWishlist(dishId) {
    if (this.wishlist.includes(dishId)) {
      this.wishlist = this.wishlist.filter(id => id !== dishId);
    } else {
      this.wishlist.push(dishId);
    }
    localStorage.setItem('sb_wishlist', JSON.stringify(this.wishlist));
    this.notify('WISHLIST_UPDATED', this.wishlist);
  }

  isWishlisted(dishId) {
    return this.wishlist.includes(dishId);
  }

  // Cart Actions
  addToCart(dishId, qty = 1, options = '') {
    const dish = this.dishes.find(d => d.id === dishId);
    if (!dish) return;

    const existingIndex = this.cart.findIndex(
      item => item.dishId === dishId && item.options === options
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].qty += qty;
    } else {
      this.cart.push({
        dishId,
        qty,
        options,
        price: dish.price
      });
    }

    this.saveCart();
    this.notify('CART_UPDATED', this.cart);
  }

  updateCartQty(index, newQty) {
    if (newQty <= 0) {
      this.cart.splice(index, 1);
    } else {
      this.cart[index].qty = newQty;
    }
    this.saveCart();
    this.notify('CART_UPDATED', this.cart);
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.notify('CART_UPDATED', this.cart);
  }

  saveCart() {
    localStorage.setItem('sb_cart', JSON.stringify(this.cart));
  }

  getCartTotal() {
    const subtotal = this.cart.reduce((sum, item) => {
      return sum + (item.price * item.qty);
    }, 0);

    const discountAmount = this.appliedCoupon 
      ? (subtotal * (this.appliedCoupon.discountPercent / 100)) 
      : 0;

    const tax = (subtotal - discountAmount) * 0.08;
    const deliveryFee = subtotal > 0 ? 3.50 : 0;
    const grandTotal = Math.max(0, subtotal - discountAmount + tax + deliveryFee);

    return {
      subtotal,
      discountAmount,
      tax,
      deliveryFee,
      grandTotal
    };
  }

  applyCoupon(code) {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'WELCOME20') {
      this.appliedCoupon = { code: 'WELCOME20', discountPercent: 20 };
      this.notify('COUPON_APPLIED', this.appliedCoupon);
      return { success: true, message: '20% Discount Coupon Applied!' };
    } else if (cleanCode === 'SAVORY10') {
      this.appliedCoupon = { code: 'SAVORY10', discountPercent: 10 };
      this.notify('COUPON_APPLIED', this.appliedCoupon);
      return { success: true, message: '10% Discount Coupon Applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try WELCOME20' };
    }
  }

  // Order Placement & Live Status Updates
  placeOrder(orderData) {
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString(),
      status: 'placed',
      items: this.cart.map(item => {
        const dish = this.dishes.find(d => d.id === item.dishId);
        return {
          dishId: item.dishId,
          name: dish ? dish.name : 'Gourmet Dish',
          qty: item.qty,
          price: item.price,
          opts: item.options
        };
      }),
      ...orderData
    };

    this.orders.unshift(newOrder);
    localStorage.setItem('sb_orders', JSON.stringify(this.orders));

    // Clear cart after order
    this.clearCart();
    this.notify('ORDER_PLACED', newOrder);
    return newOrder;
  }

  updateOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      localStorage.setItem('sb_orders', JSON.stringify(this.orders));
      this.notify('ORDER_STATUS_UPDATED', order);
    }
  }

  // Stock & Dish Admin Management
  toggleDishStock(dishId) {
    const dish = this.dishes.find(d => d.id === dishId);
    if (dish) {
      dish.inStock = !dish.inStock;
      this.saveDishes();
      this.notify('STOCK_UPDATED', dish);
    }
  }

  addDish(dishObj) {
    const newDish = {
      id: `dish-${Date.now()}`,
      rating: 4.8,
      reviews: 1,
      inStock: true,
      tags: [],
      ...dishObj
    };
    this.dishes.unshift(newDish);
    this.saveDishes();
    this.notify('STOCK_UPDATED', newDish);
    return newDish;
  }

  updateDish(dishId, updatedFields) {
    const idx = this.dishes.findIndex(d => d.id === dishId);
    if (idx > -1) {
      this.dishes[idx] = { ...this.dishes[idx], ...updatedFields };
      this.saveDishes();
      this.notify('STOCK_UPDATED', this.dishes[idx]);
    }
  }

  deleteDish(dishId) {
    this.dishes = this.dishes.filter(d => d.id !== dishId);
    this.saveDishes();
    this.notify('STOCK_UPDATED', dishId);
  }

  saveDishes() {
    localStorage.setItem('sb_dishes', JSON.stringify(this.dishes));
  }

  // Location Admin Management
  addLocation(locObj) {
    const newLoc = {
      id: `loc-${Date.now()}`,
      rating: 4.8,
      mapLat: 14.4426,
      mapLng: 79.9865,
      features: [],
      ...locObj
    };
    this.locations.push(newLoc);
    this.saveLocations();
    this.notify('LOCATIONS_UPDATED', newLoc);
    return newLoc;
  }

  updateLocation(locId, updatedFields) {
    const idx = this.locations.findIndex(l => l.id === locId);
    if (idx > -1) {
      this.locations[idx] = { ...this.locations[idx], ...updatedFields };
      if (this.selectedLocation.id === locId) {
        this.selectedLocation = this.locations[idx];
      }
      this.saveLocations();
      this.notify('LOCATIONS_UPDATED', this.locations[idx]);
    }
  }

  deleteLocation(locId) {
    if (this.locations.length <= 1) {
      return { success: false, message: 'Cannot delete the only branch location!' };
    }
    this.locations = this.locations.filter(l => l.id !== locId);
    if (this.selectedLocation.id === locId) {
      this.selectedLocation = this.locations[0];
    }
    this.saveLocations();
    this.notify('LOCATIONS_UPDATED', locId);
    return { success: true };
  }

  saveLocations() {
    localStorage.setItem('sb_locations', JSON.stringify(this.locations));
  }

  // Address, Payment & Profile Control (Account)
  updateProfile(fields) {
    this.profile = { ...this.profile, ...fields };
    this.saveProfile();
    this.notify('PROFILE_UPDATED', this.profile);
  }

  addAddress(addressObj) {
    if (!this.profile.addresses) this.profile.addresses = [];
    const newAddr = {
      id: `addr-${Date.now()}`,
      ...addressObj
    };
    if (addressObj.isDefault) {
      this.profile.addresses.forEach(a => a.isDefault = false);
    }
    this.profile.addresses.push(newAddr);
    this.saveProfile();
    this.notify('PROFILE_UPDATED', this.profile);
  }

  updateAddress(addressId, updatedFields) {
    if (!this.profile.addresses) return;
    const idx = this.profile.addresses.findIndex(a => a.id === addressId);
    if (idx > -1) {
      if (updatedFields.isDefault) {
        this.profile.addresses.forEach(a => a.isDefault = false);
      }
      this.profile.addresses[idx] = { ...this.profile.addresses[idx], ...updatedFields };
      this.saveProfile();
      this.notify('PROFILE_UPDATED', this.profile);
    }
  }

  deleteAddress(addressId) {
    if (!this.profile.addresses) return;
    this.profile.addresses = this.profile.addresses.filter(a => a.id !== addressId);
    if (this.profile.addresses.length > 0 && !this.profile.addresses.some(a => a.isDefault)) {
      this.profile.addresses[0].isDefault = true;
    }
    this.saveProfile();
    this.notify('PROFILE_UPDATED', this.profile);
  }

  setDefaultAddress(addressId) {
    if (!this.profile.addresses) return;
    this.profile.addresses.forEach(a => {
      a.isDefault = (a.id === addressId);
    });
    this.saveProfile();
    this.notify('PROFILE_UPDATED', this.profile);
  }

  addPaymentMethod(paymentObj) {
    if (!this.profile.paymentMethods) this.profile.paymentMethods = [];
    const newPayment = {
      id: `pay-${Date.now()}`,
      isPrimary: this.profile.paymentMethods.length === 0,
      ...paymentObj
    };
    if (paymentObj.isPrimary) {
      this.profile.paymentMethods.forEach(p => p.isPrimary = false);
    }
    this.profile.paymentMethods.push(newPayment);
    this.saveProfile();
    this.notify('PROFILE_UPDATED', this.profile);
  }

  deletePaymentMethod(paymentId) {
    if (!this.profile.paymentMethods) return;
    this.profile.paymentMethods = this.profile.paymentMethods.filter(p => p.id !== paymentId);
    if (this.profile.paymentMethods.length > 0 && !this.profile.paymentMethods.some(p => p.isPrimary)) {
      this.profile.paymentMethods[0].isPrimary = true;
    }
    this.saveProfile();
    this.notify('PROFILE_UPDATED', this.profile);
  }

  setDefaultPayment(paymentId) {
    if (!this.profile.paymentMethods) return;
    this.profile.paymentMethods.forEach(p => {
      p.isPrimary = (p.id === paymentId);
    });
    this.saveProfile();
    this.notify('PROFILE_UPDATED', this.profile);
  }

  redeemRewardPoints(pointsToRedeem) {
    if (this.profile.rewardPoints >= pointsToRedeem) {
      this.profile.rewardPoints -= pointsToRedeem;
      const discountCash = (pointsToRedeem / 10).toFixed(2);
      this.saveProfile();
      this.notify('PROFILE_UPDATED', this.profile);
      return { success: true, discountCash };
    }
    return { success: false, message: 'Insufficient Reward Points!' };
  }

  saveProfile() {
    localStorage.setItem('sb_profile', JSON.stringify(this.profile));
  }
}

export const state = new AppState();
