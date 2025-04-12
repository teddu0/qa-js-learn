const roles = ["user", "manager", "security", "superuser"];

/*
    Метод slice() - обрезает часть массива по переданным индексам
    slice() не модифицирует исходный массив
    Если передан один аргумент, то массив обрежется до переданного индекса не включая элемент переданного индекса
*/
const slice1 = roles.slice(2); // передан индекс 2 - значит будут из массива вырезаны элементы 0, 1
// console.log(slice1);

const slice2 = roles.slice(-1); // в данном случае передается отрицательное число. Будут образны все элементы стоящие перед индексом -1 (-1 это последний элемент массива)
// console.log(slice2);

/*
    Метод slice(start, end) возвращает новый массив, содержащий копию части исходного массива, начиная с индекса start и заканчивая индексом end (не включая его).
    Примеры: 
    *   start = 1 → начнём с элемента под индексом 1, это "manager".
	*   end = 3 → до индекса 3 (не включая его), т.е. последний включённый элемент будет под индексом 2, это "security". 
    *   ["user"(0), =>| "manager"(1), "security"(2), |<= "superuser"(3)]
*/

const slice3 = roles.slice(2, 3);
// console.log(slice3);

const slice4 = roles.slice(1, -1);
// console.log(slice4);

/*
    Метод splice() - обрезает часть массива по переданным индексам
    splice() модифицирует исходный массив в отличии от slice()
    Если передан один аргумент, то массив обрежется до переданного индекса не включая элемент переданного индекса
*/

// const splice1 = roles.splice(2); // передан индекс 2 - значит будут из массива вырезаны элементы 0, 1 и эти 2 элемента (0, 1) останутся в исходном массиве а 2, 3 попадут в новый массив
// console.log(splice1);

// const splice2 = roles.splice(1, 2); // в splice() второй агумент означает какое количество элементов вырезать от начиная от первого индекса
// console.log(splice2);

/*
    Метод reverse() просто разворачивает массив (выстаивает его в обратном порядке)
    Он также как и splice() модифицирует исходный массив!
*/
const reverse = roles.reverse();
console.log(reverse);

/*
    Метод concat() объединяет 2 массива в единый
*/

const newRoles = ["dev", "tester"];

const joinedArrays = roles.concat(newRoles);
console.log(joinedArrays);
