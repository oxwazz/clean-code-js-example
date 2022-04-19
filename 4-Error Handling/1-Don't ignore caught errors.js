// BAD CODE
try {
  functionThatMightThrow();
} catch (error) {
  console.log(error);
}

// GOOD CODE
// try {
//   functionThatMightThrow();
// } catch (error) {
//   console.error(error);
//   notifyUserOfError(error);
//   reportErrorToService(error);
// }
