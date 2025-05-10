// const transactionsInUSD = [100, -80, -500, 3000, -400];

// const transactionsInRUB = [];
// for (const transactioin of transactionsInUSD) {
//   transactionsInRUB.push(transactioin * 60);
// }
// // console.log(transactionsInUSD);
// // console.log(transactionsInRUB);

// const newTransactionInRUB = transactionsInUSD.map(
//   (transactioin) => transactioin * 60
// );
// console.log(newTransactionInRUB);

const users = [
  { firstName: "Andre", age: 23 },
  { firstName: "Makare", age: 43 },
  { firstName: "Monika", age: 19 },
  { firstName: "John", age: 99 },
  { firstName: "Max", age: 43 },
  { firstName: "Tax", age: 3 },
  { firstName: "Alex", age: 6 },
  { firstName: "Roman", age: 5 },
];

const userNames = users.map((name) => console.log(name.firstName));
