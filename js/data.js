/* ==========================================================================
   INITIAL APP DATA (MENU DISHES, RESTAURANT LOCATIONS, USER PROFILE, ORDERS)
   ========================================================================== */

export const CATEGORIES = [
  { id: 'all', name: 'All Dishes', icon: 'fa-solid fa-utensils' },
  { id: 'specials', name: "Chef's Specials", icon: 'fa-solid fa-crown' },
  { id: 'starters', name: 'Starters & Apps', icon: 'fa-solid fa-bowl-food' },
  { id: 'mains', name: 'Gourmet Mains', icon: 'fa-solid fa-drumstick-bite' },
  { id: 'pizzas', name: 'Artisanal Pizzas', icon: 'fa-solid fa-pizza-slice' },
  { id: 'burgers', name: 'Craft Burgers', icon: 'fa-solid fa-burger' },
  { id: 'desserts', name: 'Decadent Desserts', icon: 'fa-solid fa-ice-cream' },
  { id: 'drinks', name: 'Craft Beverages', icon: 'fa-solid fa-wine-glass' }
];

export const INITIAL_DISHES = [
  {
    id: 'dish-1',
    name: 'Artisanal Woodfired Neapolitan Pizza',
    category: 'pizzas',
    price: 18.99,
    rating: 4.9,
    reviews: 142,
    description: 'Freshly baked wood-fired pizza with San Marzano tomatoes, buffalo mozzarella, fresh basil leaves, and cold-pressed extra virgin olive oil drizzle.',
    image: './assets/woodfired-pizza.png',
    spicy: 0,
    calories: '850 kcal',
    prepTime: '15-20 min',
    tags: ['chefSpecial', 'veg'],
    inStock: true
  },
  {
    id: 'dish-2',
    name: 'Truffle Wagyu Gourmet Burger',
    category: 'burgers',
    price: 21.50,
    rating: 4.95,
    reviews: 218,
    description: 'Prime Wagyu beef patty with black truffle aioli, aged Swiss Gruyère, caramelized balsamic onions, and arugula on a toasted brioche bun.',
    image: './assets/truffle-burger.png',
    spicy: 1,
    calories: '920 kcal',
    prepTime: '12-15 min',
    tags: ['chefSpecial'],
    inStock: true
  },
  {
    id: 'dish-3',
    name: 'Crispy Calamari Fritti',
    category: 'starters',
    price: 14.25,
    rating: 4.7,
    reviews: 89,
    description: 'Wild-caught calamari lightly dusted in seasoned flour, flash-fried until golden, served with house garlic lemon aioli and spicy marinara.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    spicy: 1,
    calories: '540 kcal',
    prepTime: '10 min',
    tags: [],
    inStock: true
  },
  {
    id: 'dish-4',
    name: 'Grilled Atlantic Salmon Ribeye',
    category: 'mains',
    price: 26.80,
    rating: 4.85,
    reviews: 164,
    description: 'Pan-seared Atlantic salmon fillet served over saffron risotto, tender asparagus spears, and a citrus lemon butter dill emulsion.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
    spicy: 0,
    calories: '680 kcal',
    prepTime: '20 min',
    tags: ['gf', 'chefSpecial'],
    inStock: true
  },
  {
    id: 'dish-5',
    name: 'Fiery Spicy Thai Basil Noodle Bowl',
    category: 'mains',
    price: 17.50,
    rating: 4.6,
    reviews: 112,
    description: 'Wok-tossed rice noodles with red bell peppers, Thai bird chili, holy basil, garlic shoots, and grilled organic tofu or chicken.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    spicy: 3,
    calories: '610 kcal',
    prepTime: '15 min',
    tags: ['veg'],
    inStock: true
  },
  {
    id: 'dish-6',
    name: 'Creamy Wild Mushroom Rigatoni',
    category: 'mains',
    price: 19.00,
    rating: 4.75,
    reviews: 95,
    description: 'House-made rigatoni pasta tossed in a rich porcini mushroom cream sauce, white truffle oil, shaved Parmigiano-Reggiano, and thyme.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281318?auto=format&fit=crop&w=600&q=80',
    spicy: 0,
    calories: '740 kcal',
    prepTime: '15 min',
    tags: ['veg'],
    inStock: true
  },
  {
    id: 'dish-7',
    name: 'Molten Belgian Chocolate Lava Cake',
    category: 'desserts',
    price: 10.50,
    rating: 4.9,
    reviews: 178,
    description: 'Warm dark Belgian chocolate cake with a rich liquid fudge center, served with Madagascan bourbon vanilla bean gelato.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    spicy: 0,
    calories: '520 kcal',
    prepTime: '12 min',
    tags: ['veg'],
    inStock: true
  },
  {
    id: 'dish-8',
    name: 'Smoked Smoked Old Fashioned Cocktail',
    category: 'drinks',
    price: 13.00,
    rating: 4.8,
    reviews: 65,
    description: 'Bourbon infused with hickory smoke, Angostura bitters, maraschino cherry, and hand-carved ice sphere.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    spicy: 0,
    calories: '180 kcal',
    prepTime: '5 min',
    tags: [],
    inStock: true
  }
];

export const RESTAURANT_LOCATIONS = [
  {
    id: 'loc-1',
    name: 'GT Road Central (Flagship)',
    address: 'Grand Trunk Road, Near VRC Centre, Nellore, Andhra Pradesh 524001',
    phone: '+91 861 234 8901',
    hours: 'Daily: 11:00 AM - 11:00 PM',
    deliveryRadius: '8 km',
    avgDeliveryTime: '20-30 min',
    rating: 4.9,
    mapLat: 14.4426,
    mapLng: 79.9865,
    features: ['Valet Parking', 'Air Conditioned Dining', 'Full Bar & Mocktail Lounge', 'Private Family Section']
  },
  {
    id: 'loc-2',
    name: 'Magunta Layout Bistro',
    address: '16/1124 Mini Bypass Road, Magunta Layout, Nellore, Andhra Pradesh 524003',
    phone: '+91 861 239 8765',
    hours: 'Mon-Sat: 11:30 AM - 10:30 PM',
    deliveryRadius: '6 km',
    avgDeliveryTime: '25-35 min',
    rating: 4.8,
    mapLat: 14.4350,
    mapLng: 79.9780,
    features: ['Rooftop Seating', 'Weekend Special Buffet', 'Craft Beverage Counter']
  },
  {
    id: 'loc-3',
    name: 'Pogathota Plaza',
    address: "Opposite Children's Park, Pogathota, Nellore, Andhra Pradesh 524001",
    phone: '+91 861 230 4567',
    hours: 'Daily: 10:00 AM - 11:30 PM',
    deliveryRadius: '7 km',
    avgDeliveryTime: '15-25 min',
    rating: 4.95,
    mapLat: 14.4480,
    mapLng: 79.9890,
    features: ['Garden Dining', 'Family Dining Tables', 'Spicy Nellore Specials & Fusion Menu']
  }
];

export const DEFAULT_USER_PROFILE = {
  name: 'syam',
  email: 'syam@gmail.com',
  phone: '+91 98480 12345',
  rewardPoints: 480,
  loyaltyTier: 'Gold Gourmet',
  addresses: [
    {
      id: 'addr-1',
      label: 'Home',
      street: 'Door No. 24-2-154, Dargamitta',
      city: 'Nellore, Andhra Pradesh',
      zip: '524003',
      isDefault: true
    },
    {
      id: 'addr-2',
      label: 'Work / Tech Hub',
      street: 'Plot 45, Auto Nagar Industrial Area',
      city: 'Nellore, Andhra Pradesh',
      zip: '524004',
      isDefault: false
    }
  ],
  paymentMethods: [
    {
      id: 'pay-1',
      type: 'card',
      title: 'Visa Credit Card',
      cardNumber: '•••• •••• •••• 4892',
      expiry: '09/29',
      isPrimary: true
    },
    {
      id: 'pay-2',
      type: 'upi',
      title: 'UPI ID (PhonePe / GPay)',
      upiId: 'syam@ybl',
      isPrimary: false
    }
  ]
};

export const INITIAL_ORDERS = [
  {
    id: 'ORD-8492',
    date: '2026-08-04T15:30:00.000Z',
    status: 'preparing', // placed -> preparing -> ready -> delivered
    items: [
      { dishId: 'dish-1', name: 'Artisanal Woodfired Neapolitan Pizza', qty: 1, price: 18.99, opts: 'Extra Basil' },
      { dishId: 'dish-2', name: 'Truffle Wagyu Gourmet Burger', qty: 1, price: 21.50, opts: 'Medium Rare' },
      { dishId: 'dish-8', name: 'Smoked Smoked Old Fashioned Cocktail', qty: 2, price: 13.00, opts: '' }
    ],
    subtotal: 66.49,
    tax: 5.32,
    deliveryFee: 3.50,
    discount: 13.30, // WELCOME20 applied
    total: 62.01,
    deliveryAddress: 'Door No. 24-2-154, Dargamitta, Nellore, Andhra Pradesh 524003',
    fulfillmentType: 'Delivery',
    estimatedEta: '18 minutes',
    driverName: 'Srinivas Rao',
    driverPhone: '+91 98480 88990'
  },
  {
    id: 'ORD-7210',
    date: '2026-08-01T19:15:00.000Z',
    status: 'delivered',
    items: [
      { dishId: 'dish-4', name: 'Grilled Atlantic Salmon Ribeye', qty: 2, price: 26.80, opts: 'Lemon on side' },
      { dishId: 'dish-7', name: 'Molten Belgian Chocolate Lava Cake', qty: 1, price: 10.50, opts: '' }
    ],
    subtotal: 64.10,
    tax: 5.12,
    deliveryFee: 0.00,
    discount: 0.00,
    total: 69.22,
    deliveryAddress: 'Door No. 24-2-154, Dargamitta, Nellore, Andhra Pradesh 524003',
    fulfillmentType: 'Delivery',
    estimatedEta: 'Delivered',
    driverName: 'Kalyan Kumar',
    driverPhone: '+91 98480 77112'
  }
];

export const INITIAL_RESERVATIONS = [
  {
    id: 'RES-101',
    customerName: 'Syam',
    phone: '+91 98480 12345',
    email: 'syam@gmail.com',
    locationId: 'loc-1',
    locationName: 'GT Road Central (Flagship)',
    date: '2026-08-07',
    time: '19:00',
    guests: '4 Guests',
    specialRequests: 'Window table & birthday candle for dessert',
    status: 'confirmed',
    createdAt: '2026-08-05T10:00:00.000Z'
  },
  {
    id: 'RES-102',
    customerName: 'Anitha Reddy',
    phone: '+91 98765 43210',
    email: 'anitha@example.com',
    locationId: 'loc-2',
    locationName: 'Magunta Layout Bistro',
    date: '2026-08-08',
    time: '20:00',
    guests: '2 Guests',
    specialRequests: 'Rooftop seating preferred',
    status: 'confirmed',
    createdAt: '2026-08-05T14:30:00.000Z'
  }
];

