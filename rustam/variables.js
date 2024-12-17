// Базовые арифметические операторы
let width = 10;
let height = 5;
let space = width * height;
let newWidth = width + height;
let newWidth2 = width - height;
let division = newWidth / newWidth2;
let volume = 2 ** 3; // Возведение в степень - 2 * 2 * 2

console.log(volume);


// Строки 
const town = 'Доброград';
const street = 'Парковая';

console.log(town + ', ' + street + ' ' + 29);


// Оператоы присваивания
let age = 18;
age += 2; // age = age + 2
age -= 3; // age = age - 2
age *= 3; // age = age * 2
age /= 2; // age = age / 2

age++; // age = age + 1
age--; // age = age - 1

console.log(age);


// Операторы сравнения
const vasya = 20;
console.log(age > vasya);
console.log(age >= vasya);
console.log(age < vasya);
console.log(age <= vasya);
console.log(age == vasya);


// Порядок операторов
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

// 100 - 10 > 90 - 5
//     12   10   12    - приоритет
// Таблица приоритетов: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence


// Упражнение
/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const salary = 80;
const hoursPerDay = 5;
const dayAWeek = 5;
const weekend = 2;
const workHours = 40;
const poSyobamCherez = 11;

let willMakeIt = ((poSyobamCherez - weekend) * hoursPerDay) > workHours;
console.log(willMakeIt);
let inTotal = salary * workHours;
console.log('$' + inTotal);