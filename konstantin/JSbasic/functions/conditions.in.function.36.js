/**
 * Условие без блока else, так как он здесь не обязателен. Эта особенность возникает наличию return
 * На return выполнение функции всегда заканчивается (это важно)
 * @param {*} age
 * @returns
 */
function accessAbilityToWebPage(age) {
  if (age >= 18) {
    return "Access successfully";
  }
  return "Access denied";
}

console.log(accessAbilityToWebPage(17));
console.log(accessAbilityToWebPage(18));

/**
 * Стрелочная фукнция с условием через тернарный опертор "?"
 * @param {*} age
 * @returns
 */
const ageAccess = (age) => (age < 18 ? false : true);

console.log(ageAccess(4));
console.log(ageAccess(84));
