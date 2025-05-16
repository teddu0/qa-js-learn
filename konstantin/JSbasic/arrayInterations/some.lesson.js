/*
    Написать функцию, которая возвращает true,
    если элемент найден, и false если нет.
*/

const array = [2, 3, 5, 10, 20];

// мое решение
const findElement = (arr, el) => arr.find((item) => item === el) == el;
console.log(findElement(array, 345));

// решение преподавателя
function findSomeElement(arr, el) {
  const result = arr.find((item) => item === el);
  return result === undefined ? false : true;
}

console.log(findSomeElement(array, 2));

const betterWayForFindElement = array.some((element) => element === 5);
console.log(betterWayForFindElement);
