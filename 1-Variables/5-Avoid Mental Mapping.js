// BAD CODE
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach((l) => {
  doSomeStuff();
  // ...
  // ...
  // ...
  // ...
  doSomeOtherStuff(l);
});

function showDOB() {
  // ...
}

function renderWSpace() {
  // ...
}

// GOOD CODE
// const locations = ["Austin", "New York", "San Francisco"];
// locations.forEach((location) => {
//   doSomeStuff();
//   // ...
//   // ...
//   // ...
//   //  ...
//   doSomeOtherStuff(location);
// });

// function showDateOfBirth() {
//   // ...
// }

// function renderWithSpace() {
//   // ...
// }
