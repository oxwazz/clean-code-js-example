// BAD CODE
function createUser(fullname, email, phone, address, username, password) {
  // ...
}

createUser(
  "Monkey D. Luffy",
  "kingofpirate@shp.com",
  "312-608-0533",
  "Foosha Village, Dawn Island",
  "kingofpirate",
  "hitohitonomi"
);

// GOOD CODE
// function createUser({ fullname, email, phone, address, username, password }) {
//   // ...
// }

// createUser({
//   fullname: "Monkey D. Luffy",
//   email: "kingofpirate@shp.com",
//   phone: "312-608-0533",
//   address: "Foosha Village, Dawn Island",
//   username: "kingofpirate",
//   password: "hitohitonomi",
// });
