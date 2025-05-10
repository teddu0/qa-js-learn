/*
    Пользователь:
    - Возраст
    - Наличие работы
    - Деньги
    Нужно проверить может ли он купить новый MakBook за 2000$?

    Он может брать не только свои деньги, но и взять кредит.
    Ему дадут 500$, только если ему больше 24 лет и он имеет работу, 
    100$ если ему просто больше 24 лет и 0 в ином случае.
    Написать функцию, которая принимает данные пользователя и товара
    и возвращает true или false;
*/

const canGetCredit = (age, hasJob = false) => {
  if (age >= 24 && hasJob === true) {
    return 500;
  } else if (age >= 24 && hasJob === false) {
    return 100;
  } else {
    return 0;
  }
};

function canBuyMacBook(
  macBookPriseInUsd,
  customerAge,
  customerBalsnceInUsd,
  hasJob = false
) {
  const creditBalanseInUsd = canGetCredit(customerAge, hasJob);
  const totalBalanceInUsd = creditBalanseInUsd + customerBalsnceInUsd;
  return totalBalanceInUsd >= macBookPriseInUsd;
}

console.log(canBuyMacBook(2000, 25, 1500, true));
