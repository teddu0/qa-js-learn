/*
    Условия if else
*/

const balance = 100000;
const macBookCost = 100000;
const lenovoBook = 50000;

if (balance >= macBookCost) {
    console.log("Покупаем Мак!!!");
} else if (balance >= lenovoBook){
    console.log("Покупаем Lenovo!!!");
} else {
    console.log("Мы бомжи!!!");
};