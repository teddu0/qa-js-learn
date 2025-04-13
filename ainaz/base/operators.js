// Базовые арифметические операторы

//Вычислить площадь прямоугольника с помощью оператора умножение "*"
const width = 10;
const height = 5;
// const space = 10 * 5; // можно использовать константы const space = width * height;
const space = width * height;
const newWidth = width - 4 //Назначаем newWidth = width - 4 (получаем новую ширину = 6)
const newWidth2 = width + 4 // Получаем новую ширину newWidth2 = 14
const division = newWidth2 / newWidth // Деление 14 на 6 получаем = 2.3333333333333335
const value = 2 ** 3 // Получаем 2 в 3 степени т.е. 2 * 2 * 2 = 8
console.log(value)

//Строки
const city = 'Буинск';
const street = 'Степная';
console.log(city + ', ' + street + ' ' + 41); //оператор + для строк становится конкетенацией

/*
Операторы присваивания
*/
let age = 18 + 5;

age += 2; // Прибавили к age 18 + 5 еще + 2 (age = age + 2)
age -= 2; // age = age - 2
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age++; // age = age + 1
age--; // age = age - 1

console.log(age)

// Операторы сравнения

const userAge = 20;

console.log(userAge > age);
console.log(userAge >= age);
console.log(userAge < age);
console.log(userAge <= age);
console.log(userAge == age);