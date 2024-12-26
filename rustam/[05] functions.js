// Обычные функции

function logName() {
    console.log(`My name is ..`);
}

let a = logName();
console.log(typeof a);

//---------------------

function logName1(name, surname) {
    console.log(`My name is ${name} ${surname}`);
}

logName1('one', 'two');

//---------------------

function countDepositSum(depositInUSD, month, rate) {
    const sum = depositInUSD * (1 + rate / 12) ** month;
    return sum;
}

/* Равносильно
function countDepositSum(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
}
*/

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

const example2 = countDepositSum(1000, 48, 0.10);
console.log(example2);



// Анонимные функции

function powerOfTwo(num) {
    return num * num;
}
console.log(powerOfTwo(5));

const poft = function (num) {      // Функция присвоена переменной - Анонимная функция
    return num * num;
}
console.log(poft(6));



// Стрелочные функции

const powoft = (num) => num * num;
console.log(powoft(7));
// Или
const poweroft = (numb) => {
    console.log(numb);
    return numb * numb;
}
    console.log(poweroft(4));



/*

Функции  | Обычные | Анонимные | Стрелочные |
Всплытие |    Да   |     Нет   |     Нет    |
Контекст |    Да   |     Да    |     Нет    |

*/