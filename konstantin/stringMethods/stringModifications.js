/*
    Преобразование строк
*/

const userName = "Konstantin Volkov";

console.log(userName.toLowerCase()); // приводит всю строку к нижнему регистру
console.log(userName.toUpperCase()); // приводит всю строку к верхнему регистру

console.log(userName.replace("o", "i")); // заменяем X элемент на Y элемент  (заменяет только первый найденный)
console.log(userName.replaceAll("o", "i")); // заменяем X элемент на Y элемент  (заменяет все найденные X элементы)
console.log(userName.replaceAll(/o/g, "i")); // заменяем X элемент на Y элемент  (заменяет все найденные X элементы) можо передать REGEXP

const userName2 = "  Константин Волков    ";
console.log(userName2.trim()); // обрезает пробелы вначале строки и в конце
console.log(userName2.trimStart()); // обрезает пробелы только в начале строки
console.log(userName2.trimEnd()); // обрезает пробелы только в конце строки

console.log(userName); // методы, преобразующие строку не изменяют исходный объект
console.log(userName2); // методы, преобразующие строку не изменяют исходный объект
