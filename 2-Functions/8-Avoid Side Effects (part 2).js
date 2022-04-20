// BAD CODE
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};

// GOOD CODE
