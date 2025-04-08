/**
 * Обычная функция, которая возвращает сумму переданных чисел
 *
 * @param {*} num
 * @returns
 */
function usualSumFuncion(num) {
  return num + num;
}

console.log(usualSumFuncion(10));

/**
 * Стрелочная функция, которая возвращает сумму переданных чисел
 * Главное преимущесто стреловчных фунцкий в их локаничности, можно использовать конда фунции короткие
 * Как и в случае с анонимынми стрелочные функции нельзя вызвать выше их объявления
 *
 * @param {*} num
 * @returns
 */
const sumOfNumbers = (num) => num + num;

console.log(sumOfNumbers(4));
