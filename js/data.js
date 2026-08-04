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
    name: 'Downtown Central (Flagship)',
    address: '742 Culinary Boulevard, Suite 100, Downtown',
    phone: '+1 (555) 234-8901',
    hours: 'Daily: 11:00 AM - 11:00 PM',
    deliveryRadius: '5 miles',
    avgDeliveryTime: '20-30 min',
    rating: 4.9,
    mapLat: 40.7128,
    mapLng: -74.0060,
    features: ['Valet Parking', 'Outdoor Terrace', 'Full Bar', 'Private Dining']
  },
  {
    id: 'loc-2',
    name: 'Uptown Bistro & Lounge',
    address: '129 Northside Avenue, Uptown Quarter',
    phone: '+1 (555) 987-6543',
    hours: 'Mon-Sat: 11:30 AM - 10:30 PM',
    deliveryRadius: '4.5 miles',
    avgDeliveryTime: '25-35 min',
    rating: 4.8,
    mapLat: 40.7589,
    mapLng: -73.9851,
    features: ['Rooftop Seating', 'Live Jazz Fridays', 'Craft Beer Taps']
  },
  {
    id: 'loc-3',
    name: 'Waterfront Bay Promenade',
    address: '45 Harbour Lights Pier, Bayfront',
    phone: '+1 (555) 456-7890',
    hours: 'Daily: 10:00 AM - 11:30 PM',
    deliveryRadius: '6 miles',
    avgDeliveryTime: '15-25 min',
    rating: 4.95,
    mapLat: 40.7061,
    mapLng: -74.0088,
    features: ['Sea View Dining', 'Pet Friendly Patio', 'Sommelier Selection']
  }
];

export const DEFAULT_USER_PROFILE = {
  name: 'Alex Vance',
  email: 'alex.vance@example.com',
  phone: '+1 (555) 432-1098',
  rewardPoints: 480,
  loyaltyTier: 'Gold Gourmet',
  addresses: [
    {
      id: 'addr-1',
      label: 'Home',
      street: '458 Oakwood Avenue, Apt 4B',
      city: 'Metropolis',
      zip: '10001',
      isDefault: true
    },
    {
      id: 'addr-2',
      label: 'Work / Tech Hub',
      street: '800 Innovation Way, Floor 7',
      city: 'Metropolis',
      zip: '10005',
      isDefault: false
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
    deliveryAddress: '458 Oakwood Avenue, Apt 4B',
    fulfillmentType: 'Delivery',
    estimatedEta: '18 minutes',
    driverName: 'Marcus Bennett',
    driverPhone: '+1 (555) 888-9900'
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
    deliveryAddress: '458 Oakwood Avenue, Apt 4B',
    fulfillmentType: 'Delivery',
    estimatedEta: 'Delivered',
    driverName: 'Sarah Jenkins',
    driverPhone: '+1 (555) 777-1122'
  }
];
