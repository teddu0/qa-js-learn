/*
    Пользователь хочет приобрести игру в магазине
    Он может сделать это только если:
    - его баланс больше 1000 рублей или число бонусов больше 100
    - он не забанен
    - игра не куплена
    - игра в наличии 
    Написать условие для покупки и вывести результат в консоль
*/

const balance = 1010;
const bonusCount = 120;
const isBanned = false;
const isBought = false;
const isExist = true;

const canBuy =
  !isBanned && !isBought && isExist && (balance > 1000 || bonusCount > 100);

console.log(`Купит ли Васек игру? ${canBuy ? "Да" : "Нет"}`);
