const students = ["Lena", "Marina", "Ekaterina"];
// console.log(students);
students[2] = "Ann";
// console.log(students);

students.push("Roman"); // добавление нового элемента в конец массива
students.unshift("Rustam"); // добавление нового элемента в начало массива

const arrayLength = students.unshift("Alex"); // если записать push или unshift в переменную, то запишется новая длина массива
console.log(students);

students.pop(); // удаление последнего элемента массива
console.log(students);
const removedLastElement = students.pop(); // если записать pop в переменную, то запишется удаленный из массива элемент
console.log(removedLastElement);
console.log(students);

students.shift(); // удаление первого элемента массива
console.log(students);
const removedFirstElement = students.shift(); // если записать shift в переменную, то запишется удаленный из массива элемент
console.log(removedFirstElement);
console.log(students);
