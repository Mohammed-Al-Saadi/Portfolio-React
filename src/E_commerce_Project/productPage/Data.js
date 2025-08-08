export const products = [
  {
    id: 1,
    imageUrl:
      "https://cdn.pixabay.com/photo/2013/07/11/15/30/male-watch-144648_640.jpg",
    name: "Rolex Oyster Perpetual",
    price: 3499.99,
    currency: "EUR",
    inStock: true,
    sizes: [
      "Standard",
      { label: "Large (+€150)", value: "Large", priceDiff: 150 },
      { label: "Extra Large", value: "XL", disabled: true },
    ],
    colors: [
      "Gold",
      { label: "Silver (+€200)", value: "Silver", priceDiff: 200 },
      { label: "Rose Gold", value: "Rose Gold", disabled: true },
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.pixabay.com/photo/2013/09/30/21/56/male-watch-188781_640.jpg",
    name: "Omega Seamaster Aqua Terra",
    price: 2999.99,
    currency: "EUR",
    inStock: true,
    sizes: [
      "Standard",
      "Slim Edition",
      { label: "Diver’s Edition", value: "Diver", disabled: true },
    ],
    colors: [
      "Black",
      "Blue",
      { label: "Steel", value: "Steel", disabled: true },
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/08/26/15/43/headband-4432092_640.jpg",
    name: "Beats Flex Wireless Headband",
    price: 129.99,
    currency: "EUR",
    inStock: false,
    sizes: [
      "Standard",
      "Sport Edition",
      { label: "Limited Edition", value: "Limited", disabled: true },
    ],
    colors: [
      "Matte Black",
      { label: "Red (+€20)", value: "Red", priceDiff: 20 },
      { label: "Silver", value: "Silver", disabled: true },
    ],
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/01/01/11/40/apple-watch-1944362_640.jpg",
    name: "Apple Watch Series 9",
    price: 499.99,
    currency: "EUR",
    inStock: true,
    sizes: ["41mm", { label: "45mm (+€30)", value: "45mm", priceDiff: 30 }],
    colors: [
      "Midnight",
      { label: "Starlight (+€15)", value: "Starlight", priceDiff: 15 },
      { label: "PRODUCT(RED)", value: "Red", disabled: true },
    ],
  },
];
