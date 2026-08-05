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

export async function supabaseSignIn(email, password) {
  if (!supabase) return { error: 'Supabase client not configured' };

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) return { error: error.message };

  const user = data.user;
  if (user) {
    // Fetch profile role from database
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    return {
      user: {
        id: user.id,
        email: user.email,
        name: profile?.name || user.user_metadata?.name || email.split('@')[0],
        role: profile?.role || user.user_metadata?.role || (email.includes('admin') ? 'admin' : 'customer')
      }
    };
  }

  return { error: 'Sign in failed' };
}

export async function supabaseSignOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
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

export async function supabaseSeedAllData(dishes = [], locations = [], orders = []) {
  if (!supabase) return { error: 'Supabase client not configured' };

  let seededDishes = 0;
  let seededLocations = 0;
  let seededOrders = 0;

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

  return {
    success: true,
    seededDishes,
    seededLocations,
    seededOrders
  };
}

export { supabase };
