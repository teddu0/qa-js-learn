/**
 * Первый вариант использования дефолтных параметров в функции
 * @param {*} num
 * @param {*} power
 */
function toPower(num, power) {
  power = power ?? 2;
  return num ** power;
}
console.log(toPower(2, 3));
console.log(toPower(2));

/**
 * Второй вариант использования дефолтных параметров в функции (рекомендуемый)
 * @param {*} num
 * @param {*} power
 * @returns
 */
function toPowerRecommended(num, power = 2) {
  power = power ?? 2;
  return num ** power;
}
console.log(toPowerRecommended(2, 5));
console.log(toPowerRecommended(2));
