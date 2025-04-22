const transactionsInUSD = [100, -80, -500, 3000, -400];

const transactionsInRUB = [];
for (const transactioin of transactionsInUSD) {
  transactionsInRUB.push(transactioin * 60);
}
// console.log(transactionsInUSD);
// console.log(transactionsInRUB);

const newTransactionInRUB = transactionsInUSD.map(
  (transactioin) => transactioin * 60
);
console.log(newTransactionInRUB);
