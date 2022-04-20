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
