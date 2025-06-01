"use strict";

console.log(10 === 10.0); // целочисленные числа равны числам с плавающей точкой

console.log(0.1 + 0.2 === 0.3); // выведется false так как 0.1 + 0.2 = 0.30000000000000004 (так работает считает движок JS)

console.log(Number("10")); // простая конвертация цисла (использовать лучше ее если надо конвертнуть простые числа)
console.log(+"10"); // еще один способ конвертации, который лучше не использовать

/*
    Более продвинутые способы конверации чисел Number.parseInt() и Number.parseFloat()
*/
console.log(Number.parseInt("20", 10)); // помимо ковертируемой строки необходимо передать вторым аргументом число 10.
console.log(Number.parseInt("30 Seconds to Mars")); // фишка этого способа еще в том, что можно конвертировать такие строки, которые начинаются с чисел
console.log(Number.parseInt("Minutes 40")); // Но вот так не сработает, выведется NaN

console.log(Number.parseFloat("50.1", 10)); // parseFloat() предназначен если явно необходимо преобразование к числу с плавающей точной. Выведется 50.1
console.log(Number.parseInt("50.8", 10)); // parseInt() отбросит все, что после точки и выведет 50
console.log(Number.parseFloat("60 Seconds to Mars")); // тут parseFloat() работает аналогично parseInt()
console.log(Number.parseFloat("Minutes 60")); // тут parseFloat() работает аналогично parseInt()

console.log("#".repeat(10));
/*
    Проверки на число
*/

console.log(Number.isNaN(10)); // выведется false так как 10 по факту число
console.log(Number.isNaN(Number("5sec"))); // выведется true так как Number("") не умеет конвертировать как parseInt()
console.log(Number.isNaN(Number.parseInt("5sec"))); // выведется false так как parseInt() обрезал остатки после 5
console.log(Number.isNaN(10 / 0)); // результат false но по факту 10 / 0 это Infinity - бесконечность

console.log("#".repeat(10));

// Рекомендуемые проверки на чилсла идут ниже
console.log(Number.isFinite(10)); // выведется true так как это конечно число
console.log(Number.isFinite("10")); // выведется false так как это строка
console.log(Number.isFinite(10 / 0)); // выведется false так как это Infinity
console.log(Number.isFinite(Number("5sec"))); // выведется false так как Number("") не умеет конвертировать как parseInt()
console.log(Number.isFinite(Number.parseInt("5sec"))); // выведется true так как parseInt() обрезал остатки после 5

console.log(Number.isInteger(10)); // выведется true так как 10 это целочисленное, то есть integer число
console.log(Number.isInteger(10.3)); // выведется false так как 10.3 это число с плавающей точной, то есть float
