function depositSumInUSD(depositInUsd, month, rate) {
  return depositInUsd * (1 + rate / 12) ** month;
}

const result1 = depositSumInUSD(1000, 12, 10);
console.log(result1);
