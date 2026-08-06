/* ==========================================================================
   SUPABASE BACKEND & AUTHENTICATION INTEGRATION SERVICE
   ========================================================================== */

import { createClient } from '@supabase/supabase-js';

// Load stored or environment credentials
let supabaseUrl = localStorage.getItem('sb_supabase_url') || import.meta.env?.VITE_SUPABASE_URL || '';
let supabaseAnonKey = localStorage.getItem('sb_supabase_key') || import.meta.env?.VITE_SUPABASE_ANON_KEY || '';

let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.warn('Supabase initialization failed:', err);
  }
}

export function isSupabaseConfigured() {
  return !!supabase;
}

export function getSupabaseConfig() {
  return {
    url: supabaseUrl,
    key: supabaseAnonKey
  };
}

export function setSupabaseConfig(url, key) {
  const cleanUrl = url.trim();
  const cleanKey = key.trim();

  if (cleanUrl && cleanKey) {
    localStorage.setItem('sb_supabase_url', cleanUrl);
    localStorage.setItem('sb_supabase_key', cleanKey);
    supabaseUrl = cleanUrl;
    supabaseAnonKey = cleanKey;
    supabase = createClient(cleanUrl, cleanKey);
    return true;
  } else {
    localStorage.removeItem('sb_supabase_url');
    localStorage.removeItem('sb_supabase_key');
    supabaseUrl = '';
    supabaseAnonKey = '';
    supabase = null;
    return false;
  }
}

/* --------------------------------------------------------------------------
   AUTHENTICATION METHODS
   -------------------------------------------------------------------------- */
export async function supabaseSignUp(email, password, name, role = 'customer') {
  if (!supabase) return { error: 'Supabase client not configured' };

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name, role }
    }
  });

  if (error) return { error: error.message };

  const user = data.user;
  if (user) {
    // Upsert into public.profiles table
    await supabase.from('profiles').upsert({
      id: user.id,
      name,
      email,
      role
    });
  }

  return { data: user };
}

export async function supabaseGetCurrentUser() {
  if (!supabase) return null;
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    const isExplicitAdmin = user.email.toLowerCase() === 'syamratnam123@gmail.com' || user.email.includes('admin');
    const role = profile?.role || user.user_metadata?.role || (isExplicitAdmin ? 'admin' : 'customer');
    const name = profile?.name || user.user_metadata?.name || (isExplicitAdmin ? 'Syam Ratnam (Admin Manager)' : user.email.split('@')[0]);

    return {
      id: user.id,
      email: user.email,
      name,
      role
    };
  } catch (err) {
    console.warn('Error getting Supabase current user:', err);
    return null;
  }
}

export async function supabaseSignIn(email, password, role = 'user') {
  if (!supabase) return { error: 'Supabase client not configured' };

  const cleanEmail = email.trim().toLowerCase();
  const isAdminManager = cleanEmail === 'syamratnam123@gmail.com' || cleanEmail.includes('admin') || role === 'admin';
  const defaultAdminName = 'Syam Ratnam (Admin Manager)';

  let { data, error } = await supabase.auth.signInWithPassword({
    email: cleanEmail,
    password
  });

  // If user doesn't exist yet in Supabase Auth, attempt sign up automatically
  if (error) {
    const signUpName = isAdminManager ? defaultAdminName : cleanEmail.split('@')[0];
    const signUpRes = await supabaseSignUp(cleanEmail, password, signUpName, isAdminManager ? 'admin' : 'customer');
    if (signUpRes.data) {
      const secondTry = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
      if (secondTry.data?.user) {
        data = secondTry.data;
        error = null;
      } else if (signUpRes.data) {
        data = { user: signUpRes.data };
        error = null;
      }
    }
  }

  // Graceful admin fallback for syamratnam123@gmail.com with Syam@1234 if Supabase Auth requires email verification or throws error
  if (error && cleanEmail === 'syamratnam123@gmail.com' && password === 'Syam@1234') {
    try {
      await supabase.from('profiles').upsert({
        name: defaultAdminName,
        email: cleanEmail,
        role: 'admin',
        updated_at: new Date().toISOString()
      }, { onConflict: 'email' });
    } catch (e) {
      console.warn('Profile upsert notice:', e);
    }

    return {
      user: {
        id: `admin-syam`,
        email: cleanEmail,
        name: defaultAdminName,
        role: 'admin'
      }
    };
  }

  if (error) return { error: error.message };

  const user = data.user;
  if (user) {
    // Fetch profile role from Supabase database
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    const finalRole = isAdminManager ? 'admin' : (profile?.role || user.user_metadata?.role || 'customer');
    const finalName = profile?.name || user.user_metadata?.name || (isAdminManager ? defaultAdminName : cleanEmail.split('@')[0]);

    // Save & upsert user authentication & profile in Supabase table
    await supabase.from('profiles').upsert({
      id: user.id,
      name: finalName,
      email: user.email,
      role: finalRole,
      updated_at: new Date().toISOString()
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: finalName,
        role: finalRole
      }
    };
  }

  return { error: 'Sign in failed' };
}

export async function supabaseUpdateAdminManagerProfile(details = {}) {
  if (!supabase) return { error: 'Supabase client not configured' };

  try {
    const { data: { user } } = await supabase.auth.getUser();
    const email = details.email || 'syamratnam123@gmail.com';
    const name = details.name || 'Syam Ratnam (Admin Manager)';
    const phone = details.phone || '+91 98480 12345';
    const role = 'admin';

    const payload = {
      name,
      email,
      phone,
      role,
      updated_at: new Date().toISOString()
    };

    if (user) {
      payload.id = user.id;
    }

    const { data, error } = await supabase.from('profiles').upsert(payload).select();
    if (error) {
      console.error('Error updating admin manager profile in Supabase:', error);
      return { error: error.message };
    }
    return { success: true, data: data[0] };
  } catch (err) {
    return { error: err.message };
  }
}

export async function supabaseSignOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

export async function supabaseResetPassword(email) {
  if (!supabase) return { error: 'Supabase client not configured' };
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin
  });
  if (error) {
    if (error.message.toLowerCase().includes('rate limit') || error.message.toLowerCase().includes('limit exceeded')) {
      return { 
        error: 'Supabase email rate limit exceeded. Too many reset emails sent recently from Supabase. You can log in directly using your password (e.g. Syam@1234 for syamratnam123@gmail.com) or wait a few minutes before trying again.' 
      };
    }
    return { error: error.message };
  }
  return { success: true, message: 'Password reset link sent to ' + email };
}

export async function supabaseUpdatePassword(newPassword) {
  if (!supabase) return { error: 'Supabase client not configured' };
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword
  });
  if (error) return { error: error.message };
  return { success: true, message: 'Password updated successfully in Supabase Auth' };
}

export async function supabaseSendPhoneOTP(phone) {
  if (!supabase) return { error: 'Supabase client not configured' };
  const formattedPhone = phone.startsWith('+') ? phone : `+91${phone.replace(/\D/g, '')}`;
  const { data, error } = await supabase.auth.signInWithOtp({
    phone: formattedPhone
  });
  if (error) return { error: error.message };
  return { success: true, phone: formattedPhone };
}

export async function supabaseVerifyPhoneOTP(phone, token, role = 'user') {
  if (!supabase) return { error: 'Supabase client not configured' };
  const formattedPhone = phone.startsWith('+') ? phone : `+91${phone.replace(/\D/g, '')}`;
  const { data, error } = await supabase.auth.verifyOtp({
    phone: formattedPhone,
    token,
    type: 'sms'
  });
  if (error) return { error: error.message };

  const user = data.user;
  if (user) {
    const userRole = role === 'admin' ? 'admin' : 'customer';
    const userName = `User (${formattedPhone.slice(-4)})`;
    await supabase.from('profiles').upsert({
      id: user.id,
      phone: formattedPhone,
      name: userName,
      role: userRole,
      updated_at: new Date().toISOString()
    });

    return {
      user: {
        id: user.id,
        phone: formattedPhone,
        name: userName,
        role: userRole
      }
    };
  }
  return { error: 'Phone verification failed' };
}

/* --------------------------------------------------------------------------
   DATABASE CRUD METHODS (Dishes, Locations, Orders)
   -------------------------------------------------------------------------- */
export async function supabaseGetDishes() {
  if (!supabase) return null;
  const { data, error } = await supabase.from('dishes').select('*').order('created_at', { ascending: false });
  if (error) {
    console.error('Error fetching dishes from Supabase:', error);
    return null;
  }
  return data.map(d => ({
    ...d,
    prepTime: d.prep_time,
    inStock: d.in_stock
  }));
}

export async function supabaseSaveDish(dishObj) {
  if (!supabase) return null;
  const dbPayload = {
    id: dishObj.id,
    name: dishObj.name,
    category: dishObj.category,
    price: dishObj.price,
    description: dishObj.description,
    prep_time: dishObj.prepTime || dishObj.prep_time || '15 min',
    calories: dishObj.calories || '500 kcal',
    image: dishObj.image,
    rating: dishObj.rating || 4.8,
    reviews: dishObj.reviews || 1,
    tags: dishObj.tags || [],
    in_stock: dishObj.inStock ?? dishObj.in_stock ?? true
  };

  const { data, error } = await supabase.from('dishes').upsert(dbPayload).select();
  if (error) {
    console.error('Error saving dish to Supabase:', error);
    return { error: error.message };
  }
  return { data: data[0] };
}

export async function supabaseDeleteDish(dishId) {
  if (!supabase) return null;
  const { error } = await supabase.from('dishes').delete().eq('id', dishId);
  if (error) return { error: error.message };
  return { success: true };
}

export async function supabaseGetLocations() {
  if (!supabase) return null;
  const { data, error } = await supabase.from('locations').select('*').order('created_at', { ascending: true });
  if (error) {
    console.error('Error fetching locations from Supabase:', error);
    return null;
  }
  return data.map(l => ({
    ...l,
    deliveryRadius: l.delivery_radius,
    avgDeliveryTime: l.avg_delivery_time
  }));
}

export async function supabaseSaveLocation(locObj) {
  if (!supabase) return null;
  const dbPayload = {
    id: locObj.id,
    name: locObj.name,
    address: locObj.address,
    phone: locObj.phone,
    hours: locObj.hours || '10:30 AM - 11:00 PM',
    delivery_radius: locObj.deliveryRadius || locObj.delivery_radius || '7 km',
    avg_delivery_time: locObj.avgDeliveryTime || locObj.avg_delivery_time || '20-30 min',
    rating: locObj.rating || 4.9,
    features: locObj.features || []
  };

  const { data, error } = await supabase.from('locations').upsert(dbPayload).select();
  if (error) return { error: error.message };
  return { data: data[0] };
}

export async function supabaseDeleteLocation(locId) {
  if (!supabase) return null;
  const { error } = await supabase.from('locations').delete().eq('id', locId);
  if (error) return { error: error.message };
  return { success: true };
}

export async function supabaseGetOrders() {
  if (!supabase) return null;
  const { data, error } = await supabase.from('orders').select('*').order('date', { ascending: false });
  if (error) return null;
  return data.map(o => ({
    ...o,
    customerName: o.customer_name,
    deliveryAddress: o.delivery_address,
    grandTotal: o.grand_total
  }));
}

export async function supabaseCreateOrder(orderObj) {
  if (!supabase) return null;
  const dbPayload = {
    id: orderObj.id,
    customer_name: orderObj.customerName || 'Syam',
    phone: orderObj.phone || '+91 9876543210',
    delivery_address: orderObj.deliveryAddress || 'GT Road, Nellore',
    items: orderObj.items,
    subtotal: orderObj.subtotal || 200,
    tax: orderObj.tax || 16,
    grand_total: orderObj.grandTotal || 250,
    status: orderObj.status || 'placed',
    date: orderObj.date || new Date().toISOString()
  };

  const { data, error } = await supabase.from('orders').insert(dbPayload).select();
  if (error) return { error: error.message };
  return { data: data[0] };
}

export async function supabaseUpdateOrderStatus(orderId, status) {
  if (!supabase) return null;
  const { error } = await supabase.from('orders').update({ status }).eq('id', orderId);
  if (error) return { error: error.message };
  return { success: true };
}

/* --------------------------------------------------------------------------
   RESERVATIONS CRUD METHODS
   -------------------------------------------------------------------------- */
export async function supabaseGetReservations() {
  if (!supabase) return null;
  const { data, error } = await supabase.from('reservations').select('*').order('created_at', { ascending: false });
  if (error) {
    console.error('Error fetching reservations from Supabase:', error);
    return null;
  }
  return data.map(r => ({
    ...r,
    customerName: r.customer_name,
    locationId: r.location_id,
    locationName: r.location_name,
    specialRequests: r.special_requests,
    createdAt: r.created_at
  }));
}

export async function supabaseCreateReservation(resObj) {
  if (!supabase) return null;
  const dbPayload = {
    id: resObj.id,
    customer_name: resObj.customerName,
    phone: resObj.phone,
    email: resObj.email || null,
    location_id: resObj.locationId || null,
    location_name: resObj.locationName,
    date: resObj.date,
    time: resObj.time,
    guests: resObj.guests,
    special_requests: resObj.specialRequests || '',
    status: resObj.status || 'confirmed'
  };

  const { data, error } = await supabase.from('reservations').insert(dbPayload).select();
  if (error) {
    console.error('Error creating reservation in Supabase:', error);
    return { error: error.message };
  }
  return { data: data[0] };
}

export async function supabaseUpdateReservationStatus(resId, status) {
  if (!supabase) return null;
  const { error } = await supabase.from('reservations').update({ status }).eq('id', resId);
  if (error) return { error: error.message };
  return { success: true };
}

export async function supabaseDeleteReservation(resId) {
  if (!supabase) return null;
  const { error } = await supabase.from('reservations').delete().eq('id', resId);
  if (error) return { error: error.message };
  return { success: true };
}

export async function supabaseSeedAllData(dishes = [], locations = [], orders = [], reservations = []) {
  if (!supabase) return { error: 'Supabase client not configured' };

  let seededDishes = 0;
  let seededLocations = 0;
  let seededOrders = 0;
  let seededReservations = 0;

  for (const d of dishes) {
    const res = await supabaseSaveDish(d);
    if (!res?.error) seededDishes++;
  }

  for (const l of locations) {
    const res = await supabaseSaveLocation(l);
    if (!res?.error) seededLocations++;
  }

  for (const o of orders) {
    const res = await supabaseCreateOrder(o);
    if (!res?.error) seededOrders++;
  }

  for (const r of reservations) {
    const res = await supabaseCreateReservation(r);
    if (!res?.error) seededReservations++;
  }

  return {
    success: true,
    seededDishes,
    seededLocations,
    seededOrders,
    seededReservations
  };
}

export async function supabaseCreateOrSyncAdminManager(email = 'syamratnam123@gmail.com', password = 'Syam@1234') {
  if (!supabase) return { error: 'Supabase client not configured' };

  const cleanEmail = email.trim().toLowerCase();
  const name = 'Syam Ratnam (Admin Manager)';
  const role = 'admin';

  // 1. Try to sign up user in Supabase Auth
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: cleanEmail,
    password,
    options: {
      data: { name, role }
    }
  });

  // 2. Try to sign in user to verify credentials
  const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
    email: cleanEmail,
    password
  });

  const activeUser = signInData?.user || signUpData?.user;

  if (activeUser) {
    // 3. Upsert profile into public.profiles database table
    const { error: profileError } = await supabase.from('profiles').upsert({
      id: activeUser.id,
      name,
      email: cleanEmail,
      role,
      updated_at: new Date().toISOString()
    });

    if (profileError) {
      console.warn('Profile upsert notice:', profileError.message);
    }

    return {
      success: true,
      message: `Admin Manager (${cleanEmail}) registered & synced in Supabase Auth & DB!`,
      user: {
        id: activeUser.id,
        email: cleanEmail,
        name,
        role
      }
    };
  }

  return {
    error: signInError?.message || signUpError?.message || 'Failed to sync Admin Manager in Supabase'
  };
}

export { supabase };

