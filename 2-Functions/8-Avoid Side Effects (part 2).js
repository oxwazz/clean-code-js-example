// BAD CODE
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};

// GOOD CODE
// const addItemToCart = (cart, item) => {
//   return [...cart, { item, date: Date.now() }];
// };
