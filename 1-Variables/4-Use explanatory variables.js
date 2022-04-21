const address = "Pineview Drive, Mankato 56001";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
doSomeStuff(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);

const usersCSV = [
  "Oxwazz,oxwazz@hash.com,111-111-1111",
  "Halim,halim@hash.com,222-222-2222",
  "Halim,halim@hash.com,333-333-3333",
];
usersCSV.forEach((user) => {
  doSomeStuff(user.split(",")[0], user.split(",")[1], user.split(",")[2]);
});
