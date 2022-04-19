// BAD CODE
setTimeout(() => {
  // ...
}, 86400000);

function checkKeyboardEvent(event) {
  if (event.keyCode === 13) {
    // ...
  }
}

const shuffleCards = () => {
  for (let cardIndex = 0; cardIndex < 52; cardIndex++) {
    // shuffle card;
  }
};

// GOOD CODE
// const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;
// setTimeout(() => {
//   // ...
// }, MILLISECONDS_PER_DAY);

// function checkKeyboardEvent(event) {
//   const keyCodeOfEnter = 13;
//   if (event.keyCode === keyCodeOfEnter) {
//     // ...
//   }
// }

// const shuffleCards = () => {
//   const DECK_SIZE = 52;
//   for (let cardIndex = 0; cardIndex < DECK_SIZE; cardIndex++) {
//     // shuffle card;
//   }
// };
