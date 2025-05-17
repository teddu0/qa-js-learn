"use strict";

// Поменять местами ключи и значения

let weatherMap = new Map([
  ["London", 10],
  ["Moskow", 7],
  ["Paris", 14],
]);

// мое решение
let newMap = new Map();
for (const [key, value] of weatherMap) {
  newMap.set(value, key);
}
console.log(newMap);

// решение преподавателя
weatherMap = new Map([...weatherMap].map((el) => el.reverse()));
console.log(weatherMap);
