const prices = [
  [2, 4],
  [3, 4],
  [20, [30, 50, 39]],
];

const flatResult = prices.flat(2);
console.log(flatResult);

const flatMapResult = prices.flatMap((price) => price.concat([1]));
console.log(flatMapResult);
