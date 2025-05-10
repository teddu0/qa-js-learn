const plus = (a) => (b) => a + b;

const result = plus(3);
console.log(result(4));
console.log(plus(2)(3));
