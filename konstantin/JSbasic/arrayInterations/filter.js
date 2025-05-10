const operations = [200, -300, 343, 43, -23];

const positiveOperations = [];

for (const operation of operations) {
  if (operation > 0) {
    positiveOperations.push(operation);
  }
}

console.log(positiveOperations);

const positiveOperationsInRUB = operations
  .filter((operation) => operation > 0)
  .map((operation) => operation * 60);

console.log(positiveOperationsInRUB);
