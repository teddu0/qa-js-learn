/*
    Вытищить имя и фамилию в отдельные переменные
*/

const userName = "Василий aka Terminator Пупкин";

/**
 * Первый способ (тупой способ)
 */
const firstName = userName.slice(0, 7);
const lastName = userName.slice(23);
console.log(firstName + " " + lastName);

/**
 * Второй способ (чуть по лучше)
 */
const splitedUserName = userName.split(" ");
const firstBetterName = splitedUserName[0];
const secondBetterName = splitedUserName[splitedUserName.length - 1];
console.log(firstBetterName + " " + secondBetterName);

/**
 * Третий способ (решение преподавателя)
 */

const firstTheBestName = userName.slice(0, userName.indexOf(" "));
const lastTheBestName = userName.slice(
  userName.lastIndexOf(" ") + 1,
  userName.length
);
console.log(firstTheBestName + " " + lastTheBestName);
