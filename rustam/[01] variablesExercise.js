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