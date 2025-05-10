const names = ["John", "Rembo", "Arnold", "Bonnie"];
const numbers = [2432, -234, 0, 23, 199];
console.log(names); // выведется массив в исходном сосотоянии (без сортировки)

names.sort(); // строчная сортировка массива. ВАЖНО, что метод sort() мутирует исходный массив
console.log(names); // выведется массив в отсортированном виде

const sortedNames = names.sort();
console.log(sortedNames);

numbers.sort(); // сорировка массива чисел строчной сортировкой (данный способо сортировки не подходи для чисел)
console.log(numbers);
const rightSortedNumbers = numbers.sort((a, b) => a - b); // сортировка произойдет от меньшего числа к большему
console.log(rightSortedNumbers);
const rightSortedNumbersRevert = numbers.sort((a, b) => b - a); // сортировка произойдет от большего числа к меньшему
console.log(rightSortedNumbersRevert);
