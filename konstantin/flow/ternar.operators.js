/*
    Тернарные операторы
*/

const macBookPrice = 200000;
const lenovoPrice = 100000;
const budget = 50000;

let message;
if (budget > macBookPrice) {
  message = "Покупаем мак";
} else if (budget > lenovoPrice) {
  message = "Покупаем леново";
} else {
  message = "И калькулятора хватит...";
}
console.log(message);

/**
 * ? - является тернарным оператором, то, что находится перед ним - это условие,
 * поcле ? результат условия если оно true, после : выполняется else
 */
budget > lenovoPrice ? console.log("ленового") : console.log("калькулятор...");

console.log(
  `У меня в кармане ${budget} рублей, значит я куплю ${
    budget > lenovoPrice ? "ленового" : "калькулятор..."
  }`
);
