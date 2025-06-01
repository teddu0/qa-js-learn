/**
 * Интернационализация чисел
 * Болле подробно с интернационализацией чисел можно ознакомиться здесь:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Internationalization
 */

const option1 = {
  style: "currency",
  currency: "RUB",
  //   useGrouping: false,
};

const option2 = {
  style: "unit",
  unit: "fahrenheit",
  //   useGrouping: false,
};

console.log(new Intl.NumberFormat("ru-RU", option1).format(10000));
console.log(new Intl.NumberFormat("ru-RU", option2).format(22));
