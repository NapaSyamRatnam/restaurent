-- ============================================================================
-- SAVORY BITES BISTRO - SUPABASE DATABASE SCHEMA & RLS POLICIES
-- Copy and paste this script into your Supabase SQL Editor (https://app.supabase.com)
-- ============================================================================

-- 1. Create Profiles Table (Linked to Auth.Users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
    phone TEXT,
    reward_points INT DEFAULT 100,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for Profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to read their own profile"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id OR EXISTS (
        SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
    ));

CREATE POLICY "Allow users to update their own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id);

-- Trigger to automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, name, email, role)
    VALUES (
        new.id,
        CASE 
            WHEN new.email = 'syamratnam123@gmail.com' THEN 'Syam Ratnam (Admin Manager)'
            ELSE COALESCE(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1))
        END,
        new.email,
        CASE 
            WHEN new.email = 'syamratnam123@gmail.com' THEN 'admin'
            ELSE COALESCE(new.raw_user_meta_data->>'role', 'customer')
        END
    )
    ON CONFLICT (id) DO UPDATE SET
        role = EXCLUDED.role,
        name = EXCLUDED.name;
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- 2. Create Dishes Table
CREATE TABLE IF NOT EXISTS public.dishes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT NOT NULL,
    prep_time TEXT DEFAULT '15-20 min',
    calories TEXT DEFAULT '500 kcal',
    image TEXT NOT NULL,
    rating NUMERIC(3, 2) DEFAULT 4.8,
    reviews INT DEFAULT 10,
    tags TEXT[] DEFAULT '{}',
    in_stock BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for Dishes
ALTER TABLE public.dishes ENABLE ROW LEVEL SECURITY;

-- Everyone can read menu dishes
CREATE POLICY "Allow public read access to dishes"
    ON public.dishes FOR SELECT USING (true);

-- Only Admins can INSERT, UPDATE, DELETE dishes
CREATE POLICY "Allow admin write access to dishes"
    ON public.dishes FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );


-- 3. Create Locations / Branches Table
CREATE TABLE IF NOT EXISTS public.locations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT NOT NULL,
    hours TEXT DEFAULT '10:30 AM - 11:00 PM',
    delivery_radius TEXT DEFAULT '7 km',
    avg_delivery_time TEXT DEFAULT '20-30 min',
    rating NUMERIC(3, 2) DEFAULT 4.9,
    features TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for Locations
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;

-- Everyone can read locations
CREATE POLICY "Allow public read access to locations"
    ON public.locations FOR SELECT USING (true);

-- Only Admins can modify locations
CREATE POLICY "Allow admin write access to locations"
    ON public.locations FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );


-- 4. Create Orders Table
CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    delivery_address TEXT NOT NULL,
    items JSONB NOT NULL,
    subtotal NUMERIC(10, 2) NOT NULL,
    tax NUMERIC(10, 2) NOT NULL,
    grand_total NUMERIC(10, 2) NOT NULL,
    status TEXT NOT NULL DEFAULT 'placed' CHECK (status IN ('placed', 'preparing', 'delivering', 'completed')),
    date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for Orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Users can read their own orders; Admins can read all orders
CREATE POLICY "Allow users and admins to view orders"
    ON public.orders FOR SELECT
    USING (
        auth.uid() = user_id OR EXISTS (
            SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
        ) OR user_id IS NULL
    );

-- Anyone can place an order
CREATE POLICY "Allow order creation"
    ON public.orders FOR INSERT
    WITH CHECK (true);

-- Admins can update order statuses
CREATE POLICY "Allow admin to update orders"
    ON public.orders FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
        )
    );


-- 5. Create Table Reservations Table
CREATE TABLE IF NOT EXISTS public.reservations (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    location_id TEXT REFERENCES public.locations(id) ON DELETE SET NULL,
    location_name TEXT NOT NULL,
    date DATE NOT NULL,
    time TEXT NOT NULL,
    guests TEXT NOT NULL,
    special_requests TEXT,
    status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for Reservations
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a reservation
CREATE POLICY "Allow public reservation creation"
    ON public.reservations FOR INSERT
    WITH CHECK (true);

-- Users can view their own reservations, admins can view all
CREATE POLICY "Allow users and admins to view reservations"
    ON public.reservations FOR SELECT
    USING (
        auth.uid() = user_id OR EXISTS (
            SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
        ) OR user_id IS NULL
    );

-- Admins can update reservations
CREATE POLICY "Allow admin to update reservations"
    ON public.reservations FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Admins can delete reservations
CREATE POLICY "Allow admin to delete reservations"
    ON public.reservations FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
        )
    );


-- Insert Sample Data
INSERT INTO public.dishes (id, name, category, price, description, prep_time, calories, image, tags, in_stock) VALUES
('dish-1', 'Artisanal Wood-Fired Margherita', 'mains', 350.00, 'Hand-stretched sourdough topped with San Marzano tomatoes, fresh buffalo mozzarella, and sweet basil leaves.', '15-20 min', '780 kcal', './assets/woodfired-pizza.png', ARRAY['chefSpecial', 'veg'], true),
('dish-2', 'Black Truffle Wagyu Burger', 'mains', 480.00, 'Seared double Wagyu beef patty with black truffle aioli, aged sharp cheddar, and caramelized onions on brioche.', '20-25 min', '920 kcal', './assets/truffle-burger.png', ARRAY['chefSpecial'], true),
('dish-3', 'Pan-Seared Salmon & Asparagus', 'mains', 550.00, 'Fresh Atlantic salmon filet with lemon-herb butter glaze, roasted organic asparagus, and whipped potatoes.', '25 min', '640 kcal', './assets/hero-banner.png', ARRAY['gf'], true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.locations (id, name, address, phone, hours, delivery_radius, avg_delivery_time, features) VALUES
('loc-1', 'GT Road Central Branch', 'GT Road Plaza, Opposite District Court, Nellore 524001', '+91 861 234 5678', 'Daily: 11:00 AM - 11:00 PM', '8 km', '20-30 min', ARRAY['AC Dining', 'Valet Parking', 'Family Lounge']),
('loc-2', 'Trunk Road Express', 'Near VRC Centre, Trunk Road, Nellore 524002', '+91 861 876 5432', 'Daily: 10:30 AM - 11:30 PM', '6 km', '15-25 min', ARRAY['Rooftop Dining', 'Live Kitchen'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.reservations (id, customer_name, phone, email, location_id, location_name, date, time, guests, special_requests, status) VALUES
('RES-101', 'Syam', '+91 98480 12345', 'syam@gmail.com', 'loc-1', 'GT Road Central Branch', '2026-08-07', '19:00', '4 Guests', 'Window table & birthday candle for dessert', 'confirmed'),
('RES-102', 'Anitha Reddy', '+91 98765 43210', 'anitha@example.com', 'loc-2', 'Trunk Road Express', '2026-08-08', '20:00', '2 Guests', 'Rooftop seating preferred', 'confirmed')
ON CONFLICT (id) DO NOTHING;

