const array = [2, 4, 4, 10, 20];

let firstElGreaterFive;
for (const el of array) {
  if (el > 5) {
    firstElGreaterFive = el;
    break;
  }
}
console.log(firstElGreaterFive);

const findResult = array.find((element) => element > 5); // возвращает элемент (если элемент не найден вернется undefined)
const findIndexResult = array.findIndex((element) => element > 5); // возвращет индекс элемента (если элемент не найден вернется -1)
console.log(findResult);
console.log(findIndexResult);
