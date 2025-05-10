/**
 * Функция внутри функции - первый простой пример замыкания
 * @param {*} plus
 * @returns
 */
function plus(plus) {
  return function (number) {
    return plus + number;
  };
}

const powerResult = plus(2); // здесь записывается результат функции plus()
console.log(powerResult(2)); // здесь выводится вышеобъявленняа фукнция с переданным аргументом

console.log(plus(3)(5)); // второй вариант вызова функции без сохранения результата функции в отдельную переменную
