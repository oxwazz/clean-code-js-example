const programmerOutput = [
  {
    name: "Uncle Bobby",
    linesOfCode: 500,
  },
  {
    name: "Suzie Q",
    linesOfCode: 1500,
  },
  {
    name: "Jimmy Gosling",
    linesOfCode: 150,
  },
  {
    name: "Gracie Hopper",
    linesOfCode: 1000,
  },
];

let totalOutput = 0;
for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}

let listName = [];
for (let i = 0; i < programmerOutput.length; i++) {
  listName.push(programmerOutput[i]);
}
