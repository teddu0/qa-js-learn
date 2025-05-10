const array = [2, 34, 5, 6, 7, 78, 8];

for (let i = 0; i < array.length; i++) {
  console.log(i);
}

/*
    for of выводит элементы перебираемого массива
*/
for (let element of array) {
  console.log(element);
}

/*
    for in выводит индексы перебираемого массива также как и обычный цикл for
*/
for (let index in array) {
  console.log(index);
}
