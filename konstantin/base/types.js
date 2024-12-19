/*
    Типы данных
*/

const age = 10; // number может быть дробным и целым
const userName = "Alex"; // string
const isAdmin = true; // boolean  true/false
const isDeleted = undefined; // явно заданный undefined
let data; //не задано значение по этому undefined
const isNull = null; // явно заданное пустое значение
const isObject = {}; // объект
const isArray = []; // массив (список)

const admin = Symbol("Admin"); // надо будет разобраться позже

const big = BigInt(9999999999999999); // большие числа

console.log(typeof isObject); // typeof показывает тип данных