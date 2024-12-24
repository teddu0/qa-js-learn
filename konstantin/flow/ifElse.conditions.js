/*
    Условия if else
*/

const balance = 100000;
const macBookCost = 100000;
const lenovoBook = 50000;

if (balance >= macBookCost) {
  console.log("Покупаем Мак!!!");
} else if (balance >= lenovoBook) {
  console.log("Покупаем Lenovo!!!");
} else {
  console.log("Мы бомжи!!!");
}

// Операторы равенства

const secretNumber = 7; // number
const secretNumberAsString = "7"; // string

if (secretNumber == 7) {
  // == является не строгим равенством - это означает, что сравнивается только значение
  console.log("Success");
}

if (secretNumber === 7) {
  // === явялеется строгим равенством - это означает, что сравнивается значение и тип данных
  console.log("Success");
}

if (secretNumberAsString === 7) {
  // выведется "fail" так как сравнивается строка "7" с числом 7
  console.log("Success");
} else {
  console.log("Fail");
}

if (secretNumber === 7) {
  // выведется "success" так как сравнивается строка "7" с числом 7
  console.log("Success");
} else {
  console.log("Fail");
}
