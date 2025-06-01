"use strict";

/**
 * Написать функцию конвертер валют.
 *
 * Функция должна принимает 3 параметра:
 * - сумма
 * - иходная валюта
 * - валюта для конверации
 * Функция возвращает строку сконвертированной суммы с постфиксом валюты.
 * Если не получилось конвертировать (например нет валюты), возвращать null
 * Для примера использовать 3 валюты.
 */

function walletConverter(summ, initialCurrency, targetCurrency) {
  const currencyes = [
    { name: "USD", mult: 1 },
    { name: "RUB", mult: 1 / 60 },
    { name: "EUR", mult: 1.1 },
  ];
  const initial = currencyes.find((c) => c.name === initialCurrency);
  if (!initial) {
    return null;
  }
  const target = currencyes.find((c) => c.name === targetCurrency);
  if (!target) {
    return null;
  }

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: target.name,
  }).format((summ * initial.mult) / target.mult);
}

console.log(walletConverter(100, "RUB", "EUR"));
