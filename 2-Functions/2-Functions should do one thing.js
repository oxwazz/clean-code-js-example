// BAD CODE
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

// GOOD CODE
// function createFile(name) {
//   fs.create(name);
// }

// function createTempFile(name) {
//   createFile(`./temp/${name}`);
// }
