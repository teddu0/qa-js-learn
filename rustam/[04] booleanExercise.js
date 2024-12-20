/*
  Пользователь хочет приобрести игру в магазине
  Он может это сделать только если:
- Его баланс больше 1000 (balance)
  или число бонусов больше 100 (bonusBalance)
- Он не забанен (isBanned)
- Игра не куплена (isExist)
- Игра в продаже (isSelling)

Напишите условие для покупки и выведите в консоль результат
*/

let balance = 1001;
let bonusBalance = 11;

let isBanned = false;   // Забанен ли игрок
let isExist = false;    // Была ли куплена игра ранее
let isSelling = true;   // Доступна ли к покупке

console.log(`Возможность покупки: ${
    (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling
}`);