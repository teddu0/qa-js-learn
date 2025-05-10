/*
    Реализовать методы увеличения и уменьшения баланса,
    при котором каждая операция сохраняется в массив operations
    в виде {reason: "Оплата налогов", sum: -100}, возвращается true, 
    если успешно, и false, если не хватает денег на балансе.
    Также реализовать метод вывода операций по кошельку.
*/

const wallet = {
  balance: 0,
  operations: [],
  inputPayment: function (operationName, sum) {
    if (typeof sum !== "number") {
      return "Введено не число!";
    } else {
      this.balance += sum;
      this.operations.push({ reason: operationName, sum: sum });
      return true;
    }
  },
  outputPayment: function (operationName, sum) {
    if (typeof sum !== "number") {
      return "Введено не число!";
    }
    if (this.balance < sum) {
      console.log("Недостаточно средств на балансе!");
      return false;
    } else {
      this.balance -= sum;
      this.operations.push({ reason: operationName, sum: sum });
      return true;
    }
  },
  operationsCount: function () {
    return this.operations.length;
  },
};

console.log(wallet.inputPayment("ЗП", 500));
console.log(wallet.inputPayment("Премия", 500));
console.log(wallet.inputPayment("Перевод от Александра.В.", 500));
console.log(wallet.outputPayment("Налог", 100));
console.log(wallet.operationsCount());
console.log(wallet.balance);
console.log(wallet.operations);
