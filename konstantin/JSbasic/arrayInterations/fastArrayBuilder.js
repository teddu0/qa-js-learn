const array = [1, 2, 3, 4, 5];

const emtyArray = new Array(5);
console.log(emtyArray.fill(1, 0, 5));

const array2 = Array.from({ length: 5 }, (curr, i) => i + 1);
console.log(array2);
