const dummyDishes = [
  {
    name: 'Standard Wagyu Burger',
    id: 1,
    restaurantName: 'The Golden Grille',
    description:
      'Wagyu beef with aged cheddar, caramelized onions, and truffle aioli on brioche.',
    stars: 3,
    imageUrl: '/images/burger.png',
    price: 18.5,
    location: {
      address: '123 Burger Lane, Foodie City',
      coordinates: { lat: 29.925845262231515, lng: -90.08293720471332 },
    },
    tags: ['Great Food', 'Great Service', 'Great Wine'],
  },
  {
    name: 'Signature Omakase Platter',
    restaurantName: 'Sakura Zen',
    description:
      "Premium selection of chef's favorite nigiri and specialty rolls.",
    stars: 5,
    id: 2,
    imageUrl: '/images/sushi.png',
    price: 45.0,
    location: {
      address: '456 Sakura Ave, Foodie City',
      coordinates: { lat: 40.7306, lng: -73.9352 },
    },
    tags: ['Great Cocktails', 'Great Service'],
  },
  {
    name: 'Molten Lava Cake',
    restaurantName: 'Sweet Retreat',
    description:
      'Decadent chocolate cake with a molten center and vanilla bean ice cream.',
    stars: 4,
    imageUrl: '/images/cake.png',
    price: 12.0,
    id: 3,
    location: {
      address: '789 Dessert Blvd, Foodie City',
      coordinates: { lat: 40.758, lng: -73.9855 },
    },
    tags: ['Great Beer', 'Great Atmosphere'],
  },
  {
    name: 'Heirloom Greek Salad',
    restaurantName: 'Olive & Vine',
    description:
      'Fresh heirloom tomatoes, Kalamata olives, and premium feta cheese.',
    stars: 4,
    id: 4,
    imageUrl: '/images/salad.png',
    price: 14.5,
    location: {
      address: '321 Garden Path, Foodie City',
      coordinates: { lat: 40.7112, lng: -74.0123 },
    },
    tags: ['Great Food'],
  },
];

module.exports = dummyDishes;
