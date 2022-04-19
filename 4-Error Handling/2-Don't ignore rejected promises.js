// BAD CODE
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    console.log(error);
  });

// GOOD CODE
// getdata()
//   .then((data) => {
//     functionThatMightThrow(data);
//   })
//   .catch((error) => {
//     console.error(error);
//     notifyUserOfError(error);
//     reportErrorToService(error);
//   });
