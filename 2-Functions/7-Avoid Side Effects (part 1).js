// BAD CODE
let name = "Monkey Luffy";

function splitIntoFirstAndLastName() {
  name = name.split(" ");
}

splitIntoFirstAndLastName();

console.log(name); // ['Monkey', 'Luffy'];

// GOOD CODE
// let name = "Monkey Luffy";

// function splitIntoFirstAndLastName(name) {
//   return name.split(" ");
// }

// const newName = splitIntoFirstAndLastName(name);

// console.log(name); // 'Monkey Luffy';
// console.log(newName); // ['Monkey', 'Luffy'];
