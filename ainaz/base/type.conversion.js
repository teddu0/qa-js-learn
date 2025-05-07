const age = '18';
console.log(age + 5); //в этом случаем в строку пытается прибавить число и на выходе получаем 185.
console.log(Number(age) + 5); //явно преобразовываем string age в number, получаем 23.

console.log(age - 3);// при вычитании js пытается преобразовать переменную строку в число.
console.log(age * 3);// при умножении тоже
console.log(age / 3);// и при делении

const userName = 'Александр';
console.log(Number(userName) + 3);// при попытке преброзовать Александр в number выведет NaN (Not a number).
console.log(typeof NaN); // NaN это тип number

console.log(String(4) + 7); // в этом случае цифру 4 преобразовываем в строку и получаем 47

console.log(Boolean(1));// любое положительное или отрицательное число с типом boolean выведет true, только 0 выведет false
console.log(Boolean('Ainaz') + 10); //если строка с значением выведет true = 1, если строка пустая выведет false = 0,--> 
//--> при сложении вывод будет 11 (1+10)
console.log(true + 1); //результат будет 1 + 1 = 2

const a = 2 + '10'; // 2 + строка будет результат 210
console.log(a - 10); // от итога 210 вычитаем 10 результат 200

//False из других типов
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(Number('Rom'))); // сначала попытка конвертировать строку в number получается NaN,-->
//--> затем NaN пытается конвертировать в Boolean, вывод будет false
console.log(Boolean(NaN)); // вывод false