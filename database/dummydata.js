const dummyDishes = [
  {
    name: "Standard Wagyu Burger",
    restaurantName: "The Golden Grille",
    description: "Wagyu beef with aged cheddar, caramelized onions, and truffle aioli on brioche.",
    rating: 5,
    imageUrl: "/images/burger.png",
    price: 18.50,
    location: {
      address: "123 Burger Lane, Foodie City",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    tags: ["Gourmet", "Burger", "Truffle"]
  },
  {
    name: "Signature Omakase Platter",
    restaurantName: "Sakura Zen",
    description: "Premium selection of chef's favorite nigiri and specialty rolls.",
    rating: 5,
    imageUrl: "/images/sushi.png",
    price: 45.00,
    location: {
      address: "456 Sakura Ave, Foodie City",
      coordinates: { lat: 40.7306, lng: -73.9352 }
    },
    tags: ["Sushi", "Japanese", "Fresh"]
  },
  {
    name: "Molten Lava Cake",
    restaurantName: "Sweet Retreat",
    description: "Decadent chocolate cake with a molten center and vanilla bean ice cream.",
    rating: 4,
    imageUrl: "/images/cake.png",
    price: 12.00,
    location: {
      address: "789 Dessert Blvd, Foodie City",
      coordinates: { lat: 40.7580, lng: -73.9855 }
    },
    tags: ["Dessert", "Chocolate"]
  },
  {
    name: "Heirloom Greek Salad",
    restaurantName: "Olive & Vine",
    description: "Fresh heirloom tomatoes, Kalamata olives, and premium feta cheese.",
    rating: 4,
    imageUrl: "/images/salad.png",
    price: 14.50,
    location: {
      address: "321 Garden Path, Foodie City",
      coordinates: { lat: 40.7112, lng: -74.0123 }
    },
    tags: ["Salad", "Healthy", "Vegetarian"]
  }
];

module.exports = dummyDishes;
