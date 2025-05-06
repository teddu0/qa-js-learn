let a = 5 // number
let b = 5.1
console.log(typeof b); // "typeof" отображает какой тип данных было приписано (number, string, boolean)
a = 'строка'; // string
console.log(typeof a);
let isAdmin = true; // boolean
console.log(typeof isAdmin);

let c; // Переменная не назначена, выведет undefined
console.log(typeof c);

let d = null;
console.log(typeof d) // typeof - когда задано null (пустое поле) выведет object
console.log(null == d); // можно использовать операторы сравнения, в этом случае выведет true