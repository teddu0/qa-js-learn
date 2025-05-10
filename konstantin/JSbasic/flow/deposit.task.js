/*
    Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
    Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада.
    И остаток после покупки.

    Итог: Сумма * (1 + ставка в месяц не в %) ? срок в месяцах.
*/

const depositSum = 12000 * (1 + 0.07 / 12) ** 24;
const housePrice = 13500;
const remainingMoney = depositSum - housePrice;

if (depositSum >= housePrice) {
  console.log("I can buy this house!");
  console.log("Rest of money after deal: " + remainingMoney);
} else {
  console.log("We can't buy this house, our deposit sum is: " + depositSum);
}
