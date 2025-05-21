"use strict";

const numbers = [2, 3, -34, 0, 32, 4];
/*
    Math.max() - выводит максимального число из переданного набора чисел
    Math.min() - выводит минимальное число из переданного набора чисел
 */
console.log(Math.max(2, 3, -34, 0, 32, 4));
console.log(Math.max(2, 3, -34, 0, "32", 4)); // может строку привести к числу самостоятельно
console.log(Math.max(2, 3, -34, 0, 32, "4a")); // в данном случае "4а" не приведется к числу, и результатом вывода будет NaN
console.log(Math.min(2, 3, -34, 0, 32, "4"));
console.log(Math.max(...numbers));

/*
    Math.random() - просто возвращает рандомное число от 0 до 1
 */
console.log(Math.random());
console.log("#".repeat(20));
/*
    Округления  
 */
console.log(Math.ceil(1.1)); // Math.ceil() округляет всегда в большему целому числу (тут выведется 2)
console.log(Math.ceil(1.9)); // здесь тоже вывдется 2
console.log(Math.ceil(2)); // здесь тоже вывдется 2

console.log("#".repeat(20));

console.log(Math.floor(1.1)); // Math.floor() округляет всегда к меньшему целому числу (тут выведется 1)
console.log(Math.floor(1.9)); // здесь тоже вывдется 1
console.log(Math.floor(1)); // здесь тоже вывдется 1

console.log("#".repeat(20));

console.log(Math.round(3.4)); // Math.round() округляет к ближайшему целому числу (тут выведется 3)
console.log(Math.round(3.6)); // здесь тоже вывдется 4
console.log(Math.round(3)); // здесь тоже вывдется 3

console.log("#".repeat(20));

console.log(Math.trunc(5.324)); // Math.trunc() тупо обрезает все, что после точки (тут выведется 5)
console.log(Math.trunc(5)); // здесь тоже вывдется 5

console.log("#".repeat(20));

/*
    .toFixed() окруклят более точно к заданному числу
 */

console.log((1.234).toFixed()); // выведется 1 (по умолчанию если не передавать аргумент)
console.log((1.234).toFixed(0)); // выведется 1
console.log((1.234).toFixed(1)); // выведется 1.2
console.log((1.234).toFixed(2)); // выведется 1.23
console.log((1.234).toFixed(3)); // выведется 1.234
console.log((1.234).toFixed(4)); // выведется 1.2340
console.log((1.234).toFixed(5)); // выведется 1.23400
console.log((1.234).toFixed(6)); // выведется 1.234000 и т д
