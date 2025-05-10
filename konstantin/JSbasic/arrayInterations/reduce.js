const operations = [100, -20, 7, -30, 50];

let balance = 0;
for (const operation of operations) {
  balance += operation;
}

console.log(balance);

const newBalance = operations.reduce((acc, operation, i) => {
  console.log(`Итерация: ${i}, acc: ${acc}, операция: ${operation}`);
  return (acc += operation);
}, 0);

console.log(newBalance);

const minResult = operations.reduce((acc, operation, i) => {
  console.log(`Итерация: ${i}, acc: ${acc}, операция: ${operation}`);
  if (acc < operation) {
    return acc;
  } else {
    return operation;
  }
}, 0);

console.log(minResult);
