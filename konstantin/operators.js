/*
    Арифметические операции
*/

// Базовые арифметические операции

const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 3; // возведение в степень (2 * 2 * 2)

console.log(volume);

// Строки (конкатенация)

const city = "Белград";
const street = "Кисловодская";
console.log(city + ", " + street + " " + 5);

/*
    Операторы присваивания
*/

let age = 18 + 5;

age = age += 2; // age = age = 2
age = age -= 5; // age = age - 2
age = age *= 2; // age = age * 2
age = age /= 2; // age = age / 2

age++; // age = age + 1
age--; // age = age - 1
console.log(age);

/*
    Операторы сравнения
*/

const customerAge = 20;

console.log(customerAge > age);
console.log(customerAge >= age);
console.log(customerAge < age);
console.log(customerAge <= age);
console.log(customerAge == age);
console.log(customerAge != age);
