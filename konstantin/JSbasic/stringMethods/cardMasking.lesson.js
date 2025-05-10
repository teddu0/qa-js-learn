/*
    Замаскировать все, кроме последних 4 цифр.
    Пример: ************8787
*/

const cardNumber = "4242545465658787";

const maskedCard = cardNumber.slice(-4).padStart(16, "*");
console.log(maskedCard);

const splitedCardNumber = "4242 5454 6565 8787";

const card = splitedCardNumber.replaceAll(" ", "").slice(-4).padStart(16, "*");
console.log(card);
