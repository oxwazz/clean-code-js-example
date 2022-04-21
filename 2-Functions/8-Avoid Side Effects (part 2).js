const cart = [
  { item: "Apple", date: "1650470966736" },
  { item: "Banana", date: "1650470966736" },
];

const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};
