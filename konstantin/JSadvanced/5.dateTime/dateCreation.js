"use strict";

const now = new Date(); // выводит текущую дату в формате: 2025-06-02T19:06:14.866Z
console.log(new Date("2025/06/23"));
console.log(new Date("06-23-2024"));
console.log(new Date("06.23.2024"));
console.log(new Date("2024-06-22T22:00:00.000Z"));
console.log(new Date(0)); // выведет 0 от unix, то есть: 1970-01-01T00:00:00.000Z

console.log(new Date(2025, 5, 11, 22, 34, 45, 345)); // выводит дату в формате: 2025-06-11T20:34:45.345Z

console.log(Date.now()); // выводит дату в формате timestamp: 1748891174870

/*
    Основные методы класса Date() для получения даты, времени раздельно
*/

console.log("*".repeat(20));

console.log(now.getFullYear()); // получение года
console.log(now.getMonth()); // получение месяца
console.log(now.getDate()); // получение даты
console.log(now.getDay()); // получение дня
console.log(now.getHours()); // получение часов
console.log(now.getMinutes()); // получение минут

/*
    Основные методы класса Date() для установления даты, времени раздельно
*/

console.log("*".repeat(20));

console.log(new Date(now.setFullYear(2025))); // получение года
console.log(new Date(now.setMonth(7))); // получение месяца
