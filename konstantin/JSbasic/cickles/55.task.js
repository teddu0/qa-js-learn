/*
    Имеется выгрузка операций пользователя:
    const operations = [1000, -700, 300, -500, 10000]
    а также начальный балан пользователя = 100$

    Необходимо написать 3 функции расчета:
    - расчет итогового баланса
    - наличие отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
    - расчет среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const initialBalanceInUsd = 100;

function finalBalanceInUsd(userBalance, operationsList) {
  let balance = userBalance;
  for (const operation of operationsList) {
    balance += operation;
  }
  return balance;
}

function negativeBalance(userBalance, operationsList) {
  let balance = userBalance;
  let isOk = true;
  for (const operation of operationsList) {
    balance += operation;
    if (balance < 0) {
      isOk = false;
      break;
    }
  }
  return isOk;
}

function averageBalance(operationsList) {
  let positiveSum = 0;
  let positiveCount = 0;
  let negativeSum = 0;
  let negativeCount = 0;
  for (const operation of operationsList) {
    if (operation > 0) {
      positiveSum += operation;
      positiveCount++;
    }
    if (operation < 0) {
      negativeCount++;
      negativeSum += operation;
    }
  }
  return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(finalBalanceInUsd(initialBalanceInUsd, operations));
console.log(negativeBalance(initialBalanceInUsd, operations));
console.log(averageBalance(operations));
