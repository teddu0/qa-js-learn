/*
    Преобразование типов
*/

const ageAsSting = "18"; // строка
const convertedAge = Number(ageAsSting); // котвертация к числу

const someNumber = 23; // число
const convertedNumber = String(ageAsSting); // котвертация к строке

console.log(ageAsSting + someNumber); // результатом будет 1823 так как при сложении числа и строки происходит конкатенация
console.log(someNumber - ageAsSting); // результатом будет 5 так как при вычитании числа из строки или наоборот, происходит неявное преобразование к числу
console.log(someNumber * ageAsSting); // результатом будет 414 так как при умнжении числа на строку или наоборот, происходит неявное преобразование к числу
console.log(someNumber / ageAsSting); // результатом будет 1.2777777777777777 так как при делении числа на строку или наоборот, происходит неявное преобразование к числу
console.log(someNumber % ageAsSting); // результатом будет 5 так как при делении с остатком числа на строку или наоборот, происходит неявное преобразование к числу

const someString = "Alex";
console.log(someString * 30); // результатом будет NaN (not a number - не число), так как происходит попытка умножить строку на число


const zero = 0;
const negativeNumber = -234
const fromNumberToBoolean = Boolean(someNumber); // любое число кроме 0 при приведениею к boolean будет true
const fromNumberZeroToBoolean = Boolean(zero); // приведение 0 к boolean всегда будет false
const fromNegativeNumberToBoolean = Boolean(negativeNumber); // любое число кроме 0 при приведениею к boolean будет true (в том чиле отрицательное)


const emptyString = "";
const fromStringToBoolean = Boolean(someString); // любая не пустая строка при приведениею к boolean будет true
const fromEmptyStringToBoolean = Boolean(emptyString); // приведение пустой строки к boolean всегда будет false


const isUndefined = undefined;
const isNull = null;
const isNaN = NaN;
const fromUndefinedToBoolean = Boolean(undefined); // приведение undefined к boolean всегда будет false
const fromNullToBoolean = Boolean(isNull); // приведение null к boolean всегда будет false
const fromNaNToBoolean = Boolean(isNaN); // приведение NaN к boolean всегда будет false

console.log(fromNaNToBoolean);

