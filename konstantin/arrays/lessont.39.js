const roles = ["admin", "mentor", "user"]; // первый способ объявления массива
const numbers = new Array(1, 2, 3, 4, 5); // второй сопобо объявления массива

const firstElementFromArray = roles[0]; // первый способ получения элемента массива по индексу
const secondElementFromArray = roles[1]; // второй способ получения элемента массива по индексу

const arraySize = numbers.length; // получение длины массива (сколько элементов в массиве)

const lastElementFromArray = numbers[numbers.length - 1]; // один из вариантов получения последнего элемента массива по индексу
const lastElementFromArrayNew = roles.at(-2); // более современный способ получения последнего элемента массива по индексу

const ages = [20 - 4, 23 + "7", 2 !== 2 ? true : false]; // пожно спользовать выражения в массиве через запятую

console.log(ages);
