"use strict";

// один из способов быстро создать мапу
const weatherCities = new Map([
  ["Moskow", 25],
  ["Kazan", 13],
]);

console.log(weatherCities);

// это простой объект
const moreCities = {
  Buinsk: 14,
  Belgrade: 32,
};

// это конвертация объекта в мапу
const weatherCities2 = new Map(Object.entries(moreCities));
console.log(weatherCities2);
