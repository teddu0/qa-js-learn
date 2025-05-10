/*
    Найти среднее значение с помощью reduce()
*/

const array = [2, 4, 4, 10];

/**
 * решениче через цикл for()
 */
let result = 0;
for (let el of array) {
  result += el / array.length;
}
console.log(result);

/**
 * Мое решение через reduce()
 */
const avg = array.reduce((acc, element, i, arr) => {
  console.log(`Iteration: ${i}, acc: ${acc}, element: ${element}`);
  return (acc += element / arr.length);
}, 0);

console.log(avg);

/**
 * Решение из урока через reduce()
 */
const average = array.reduce((acc, el, i) => {
  console.log(`Iteration: ${i}, acc: ${acc}, element: ${el}`);
  if (i !== array.length - 1) {
    return acc + el;
  } else {
    return (acc + el) / array.length;
  }
}, 0);

console.log(average);
