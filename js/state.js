/* ==========================================================================
   APPLICATION STATE MANAGEMENT & LOCAL STORAGE PERSISTENCE
   ========================================================================== */

import { INITIAL_DISHES, RESTAURANT_LOCATIONS, DEFAULT_USER_PROFILE, INITIAL_ORDERS, INITIAL_RESERVATIONS } from './data.js';
import { 
  isSupabaseConfigured, 
  supabaseGetCurrentUser,
  supabaseSignIn, 
  supabaseSignUp, 
  supabaseSignOut, 
  supabaseResetPassword,
  supabaseSendPhoneOTP,
  supabaseVerifyPhoneOTP,
  supabaseGetDishes, 
  supabaseSaveDish, 
  supabaseDeleteDish, 
  supabaseGetLocations, 
  supabaseSaveLocation, 
  supabaseDeleteLocation, 
  supabaseGetOrders, 
  supabaseCreateOrder, 
  supabaseUpdateOrderStatus,
  supabaseGetReservations,
  supabaseCreateReservation,
  supabaseUpdateReservationStatus,
  supabaseDeleteReservation,
  supabaseUpdateAdminManagerProfile
} from './supabase.js';

class AppState {
  constructor() {
    this.listeners = [];
    this.init();
  }

  init() {
    // Load persisted state or defaults
    this.activeView = 'landing';
    this.theme = localStorage.getItem('sb_theme') || 'dark';
    
    // User Authentication & Roles - unauthenticated by default (null) unless explicitly logged in
    const savedUser = localStorage.getItem('sb_user');
    this.currentUser = savedUser ? JSON.parse(savedUser) : null;

    const savedWishlist = localStorage.getItem('sb_wishlist');
    this.wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

    const savedCart = localStorage.getItem('sb_cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [];

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
    this.orders = savedOrders ? JSON.parse(savedOrders) : [];

    const savedReservations = localStorage.getItem('sb_reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];

    const savedLocations = localStorage.getItem('sb_locations');
    this.locations = savedLocations ? JSON.parse(savedLocations) : RESTAURANT_LOCATIONS;
    this.selectedLocation = this.locations[0] || RESTAURANT_LOCATIONS[0];

    this.appliedCoupon = { code: 'WELCOME20', discountPercent: 20 };
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.dietaryFilter = 'all'; // all, veg, gf, chefSpecial
    this.sortBy = 'popular'; // popular, price-low, price-high, rating

    // Asynchronously sync with Supabase if configured
    this.syncWithSupabase();
  }

  async syncWithSupabase() {
    if (!isSupabaseConfigured()) return;
    try {
      // Sync active auth user session from Supabase
      const sbUser = await supabaseGetCurrentUser();
      if (sbUser) {
        this.currentUser = sbUser;
        localStorage.setItem('sb_user', JSON.stringify(this.currentUser));
        this.notify('AUTH_CHANGED', this.currentUser);
      }

      const dbDishes = await supabaseGetDishes();
      if (dbDishes && dbDishes.length > 0) {
        this.dishes = dbDishes;
        this.saveDishes();
        this.notify('STOCK_UPDATED', this.dishes);
      }

      const dbLocations = await supabaseGetLocations();
      if (dbLocations && dbLocations.length > 0) {
        this.locations = dbLocations;
        this.selectedLocation = this.locations[0];
        this.saveLocations();
        this.notify('LOCATIONS_UPDATED', this.locations);
      }

      const dbOrders = await supabaseGetOrders();
      if (dbOrders && dbOrders.length > 0) {
        this.orders = dbOrders;
        localStorage.setItem('sb_orders', JSON.stringify(this.orders));
        this.notify('ORDER_STATUS_UPDATED', this.orders);
      }

      const dbReservations = await supabaseGetReservations();
      if (dbReservations && dbReservations.length > 0) {
        this.reservations = dbReservations;
        this.saveReservations();
        this.notify('RESERVATIONS_UPDATED', this.reservations);
      }
    } catch (err) {
      console.warn('Supabase sync error:', err);
    }
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

  // Auth & Roles Management
  async login(email, password, role = 'user') {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();
    const isAdminRole = (role === 'admin' || cleanEmail.includes('admin') || cleanEmail === 'syamratnam123@gmail.com');
    const userRole = isAdminRole ? 'admin' : 'user';

    if (!cleanEmail || !cleanPassword) {
      return { success: false, error: 'Please enter both email and password' };
    }

    if (isSupabaseConfigured()) {
      const res = await supabaseSignIn(cleanEmail, cleanPassword, userRole);
      if (res.error) {
        console.warn('Supabase authentication failed:', res.error);
        return { success: false, error: res.error };
      } else if (res.user) {
        this.currentUser = res.user;
        localStorage.setItem('sb_user', JSON.stringify(this.currentUser));
        this.notify('AUTH_CHANGED', this.currentUser);
        return { success: true, user: this.currentUser };
      }
    }

    // Local Authentication Check
    if (cleanEmail === 'syamratnam123@gmail.com') {
      if (cleanPassword !== 'Syam@1234') {
        return { success: false, error: 'Invalid password for Admin Manager account syamratnam123@gmail.com. Password must be Syam@1234' };
      }
    } else if (cleanPassword.length < 4) {
      return { success: false, error: 'Password must be at least 4 characters long' };
    }

    this.currentUser = {
      id: `usr-${Date.now()}`,
      name: isAdminRole ? 'Syam Ratnam (Admin Manager)' : (cleanEmail.split('@')[0] || 'User'),
      email: cleanEmail,
      role: userRole
    };

    localStorage.setItem('sb_user', JSON.stringify(this.currentUser));
    this.notify('AUTH_CHANGED', this.currentUser);
    return { success: true, user: this.currentUser };
  }

  async updateAdminManagerDetails(details = {}) {
    const name = details.name || 'Syam Ratnam (Admin Manager)';
    const email = details.email || 'syamratnam123@gmail.com';
    const phone = details.phone || '+91 98480 12345';

    if (this.currentUser) {
      this.currentUser.name = name;
      this.currentUser.email = email;
      this.currentUser.phone = phone;
      this.currentUser.role = 'admin';
      localStorage.setItem('sb_user', JSON.stringify(this.currentUser));
    }

    let supabaseResult = null;
    if (isSupabaseConfigured()) {
      supabaseResult = await supabaseUpdateAdminManagerProfile({ name, email, phone });
    }

    this.notify('AUTH_CHANGED', this.currentUser);
    return { success: true, user: this.currentUser, supabaseResult };
  }

  async logout() {
    if (isSupabaseConfigured()) {
      await supabaseSignOut();
    }
    this.currentUser = null;
    localStorage.removeItem('sb_user');
    this.notify('AUTH_CHANGED', null);
  }

  async register(name, email, password) {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (isSupabaseConfigured()) {
      const res = await supabaseSignUp(cleanEmail, password, cleanName, 'customer');
      if (res.error) {
        console.warn('Supabase registration error:', res.error);
      } else if (res.data) {
        this.currentUser = {
          id: res.data.id,
          name: cleanName,
          email: cleanEmail,
          role: 'user'
        };
        this.profile.name = cleanName;
        this.profile.email = cleanEmail;
        this.saveProfile();
        localStorage.setItem('sb_user', JSON.stringify(this.currentUser));
        this.notify('AUTH_CHANGED', this.currentUser);
        return { success: true, user: this.currentUser };
      }
    }

    // Local Registration Fallback
    this.currentUser = {
      id: `usr-${Date.now()}`,
      name: cleanName,
      email: cleanEmail,
      role: 'user'
    };
    this.profile.name = cleanName;
    this.profile.email = cleanEmail;
    this.saveProfile();
    localStorage.setItem('sb_user', JSON.stringify(this.currentUser));
    this.notify('AUTH_CHANGED', this.currentUser);
    return { success: true, user: this.currentUser };
  }

  async requestPasswordReset(email) {
    const cleanEmail = email.trim().toLowerCase();
    if (isSupabaseConfigured()) {
      const res = await supabaseResetPassword(cleanEmail);
      if (res.error) {
        return { success: false, error: res.error };
      }
      return { success: true, message: `Password reset instructions sent to ${cleanEmail}` };
    }
    // Local Demo Reset Mode
    return { 
      success: true, 
      message: `Demo password reset link generated for ${cleanEmail}! Please check your email inbox.` 
    };
  }

  async sendPhoneOTP(phone) {
    const cleanPhone = phone.trim();
    if (!cleanPhone || cleanPhone.length < 10) {
      return { success: false, error: 'Please enter a valid 10-digit mobile phone number' };
    }

    if (isSupabaseConfigured()) {
      const res = await supabaseSendPhoneOTP(cleanPhone);
      if (res.error) {
        return { success: false, error: res.error };
      }
      return { success: true, phone: res.phone, message: `Real SMS OTP code sent directly to ${res.phone}` };
    }

    return { 
      success: false, 
      error: 'Supabase DB is not connected. Click "Connect Supabase DB" at the top of the Login page to enter your Supabase URL & Key to send real SMS OTPs to your mobile.' 
    };
  }

  async verifyPhoneOTP(phone, token, role = 'user') {
    const cleanPhone = phone.trim();
    const cleanToken = token.trim();

    if (!cleanToken || cleanToken.length !== 6) {
      return { success: false, error: 'Please enter the 6-digit SMS verification code' };
    }

    if (isSupabaseConfigured()) {
      const res = await supabaseVerifyPhoneOTP(cleanPhone, cleanToken, role);
      if (res.error) {
        return { success: false, error: res.error };
      } else if (res.user) {
        this.currentUser = res.user;
        localStorage.setItem('sb_user', JSON.stringify(this.currentUser));
        this.notify('AUTH_CHANGED', this.currentUser);
        return { success: true, user: this.currentUser };
      }
    }

    return { 
      success: false, 
      error: 'Supabase DB is not connected. Click "Connect Supabase DB" at the top of the Login page to connect your database for real SMS verification.' 
    };
  }

  isAdmin() {
    return !!(this.currentUser && this.currentUser.role === 'admin');
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  // Theme Toggle
  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('sb_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.notify('THEME_CHANGED', theme);
  }

  // View Navigation
  setView(viewName, tab = 'user') {
    this.activeView = viewName;
    if (viewName === 'login') {
      this.loginTab = tab;
    }
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
  async placeOrder(orderData) {
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

    if (isSupabaseConfigured()) {
      await supabaseCreateOrder(newOrder);
    }

    // Clear cart after order
    this.clearCart();
    this.notify('ORDER_PLACED', newOrder);
    this.setView('orders');
    return newOrder;
  }

  async updateOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      localStorage.setItem('sb_orders', JSON.stringify(this.orders));
      if (isSupabaseConfigured()) {
        await supabaseUpdateOrderStatus(orderId, newStatus);
      }
      this.notify('ORDER_STATUS_UPDATED', order);
    }
  }

  // Stock & Dish Admin Management
  async toggleDishStock(dishId) {
    if (!this.isAdmin()) return { success: false, message: 'Admin permissions required!' };
    const dish = this.dishes.find(d => d.id === dishId);
    if (dish) {
      dish.inStock = !dish.inStock;
      this.saveDishes();
      if (isSupabaseConfigured()) {
        await supabaseSaveDish(dish);
      }
      this.notify('STOCK_UPDATED', dish);
      return { success: true, dish };
    }
    return { success: false, message: 'Dish not found' };
  }

  async addDish(dishObj) {
    if (!this.isAdmin()) return { success: false, message: 'Admin permissions required!' };
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
    if (isSupabaseConfigured()) {
      await supabaseSaveDish(newDish);
    }
    this.notify('STOCK_UPDATED', newDish);
    return { success: true, dish: newDish };
  }

  async updateDish(dishId, updatedFields) {
    if (!this.isAdmin()) return { success: false, message: 'Admin permissions required!' };
    const idx = this.dishes.findIndex(d => d.id === dishId);
    if (idx > -1) {
      this.dishes[idx] = { ...this.dishes[idx], ...updatedFields };
      this.saveDishes();
      if (isSupabaseConfigured()) {
        await supabaseSaveDish(this.dishes[idx]);
      }
      this.notify('STOCK_UPDATED', this.dishes[idx]);
      return { success: true, dish: this.dishes[idx] };
    }
    return { success: false, message: 'Dish not found' };
  }

  async deleteDish(dishId) {
    if (!this.isAdmin()) return { success: false, message: 'Admin permissions required!' };
    this.dishes = this.dishes.filter(d => d.id !== dishId);
    this.saveDishes();
    if (isSupabaseConfigured()) {
      await supabaseDeleteDish(dishId);
    }
    this.notify('STOCK_UPDATED', dishId);
    return { success: true };
  }

  saveDishes() {
    localStorage.setItem('sb_dishes', JSON.stringify(this.dishes));
  }

  // Location Admin Management
  async addLocation(locObj) {
    if (!this.isAdmin()) return { success: false, message: 'Admin permissions required!' };
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
    if (isSupabaseConfigured()) {
      await supabaseSaveLocation(newLoc);
    }
    this.notify('LOCATIONS_UPDATED', newLoc);
    return { success: true, location: newLoc };
  }

  async updateLocation(locId, updatedFields) {
    if (!this.isAdmin()) return { success: false, message: 'Admin permissions required!' };
    const idx = this.locations.findIndex(l => l.id === locId);
    if (idx > -1) {
      this.locations[idx] = { ...this.locations[idx], ...updatedFields };
      if (this.selectedLocation.id === locId) {
        this.selectedLocation = this.locations[idx];
      }
      this.saveLocations();
      if (isSupabaseConfigured()) {
        await supabaseSaveLocation(this.locations[idx]);
      }
      this.notify('LOCATIONS_UPDATED', this.locations[idx]);
      return { success: true, location: this.locations[idx] };
    }
    return { success: false, message: 'Branch location not found' };
  }

  async deleteLocation(locId) {
    if (!this.isAdmin()) return { success: false, message: 'Admin permissions required!' };
    if (this.locations.length <= 1) {
      return { success: false, message: 'Cannot delete the only branch location!' };
    }
    this.locations = this.locations.filter(l => l.id !== locId);
    if (this.selectedLocation.id === locId) {
      this.selectedLocation = this.locations[0];
    }
    this.saveLocations();
    if (isSupabaseConfigured()) {
      await supabaseDeleteLocation(locId);
    }
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

  // Table Reservations Management
  async addReservation(resObj) {
    const newReservation = {
      id: `RES-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: resObj.customerName || (this.currentUser?.name || 'Guest'),
      phone: resObj.phone || '+91 98480 12345',
      email: resObj.email || (this.currentUser?.email || ''),
      locationId: resObj.locationId || (this.selectedLocation?.id || 'loc-1'),
      locationName: resObj.locationName || (this.selectedLocation?.name || 'GT Road Central'),
      date: resObj.date || new Date().toISOString().split('T')[0],
      time: resObj.time || '19:00',
      guests: resObj.guests || '2 Guests',
      specialRequests: resObj.specialRequests || resObj.notes || '',
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    this.reservations.unshift(newReservation);
    this.saveReservations();

    if (isSupabaseConfigured()) {
      await supabaseCreateReservation(newReservation);
    }

    this.notify('RESERVATIONS_UPDATED', newReservation);
    this.setView('orders');
    return { success: true, reservation: newReservation };
  }

  async updateReservationStatus(resId, newStatus) {
    const resItem = this.reservations.find(r => r.id === resId);
    if (resItem) {
      resItem.status = newStatus;
      this.saveReservations();
      if (isSupabaseConfigured()) {
        await supabaseUpdateReservationStatus(resId, newStatus);
      }
      this.notify('RESERVATIONS_UPDATED', resItem);
      return { success: true, reservation: resItem };
    }
    return { success: false, message: 'Reservation not found' };
  }

  async deleteReservation(resId) {
    this.reservations = this.reservations.filter(r => r.id !== resId);
    this.saveReservations();
    if (isSupabaseConfigured()) {
      await supabaseDeleteReservation(resId);
    }
    this.notify('RESERVATIONS_UPDATED', resId);
    return { success: true };
  }

  saveReservations() {
    localStorage.setItem('sb_reservations', JSON.stringify(this.reservations));
  }
}

export const state = new AppState();

