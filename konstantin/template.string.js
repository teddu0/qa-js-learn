/**
    Шаблонные строки vs конкатенация
 */

const projectName = "Сайт магазина";
const price = 2000;
const author = "Роман Афлятунов";

const concatenatedTemplate = author + " заказал " + projectName + " за " + price + " рублей!"; // реализация через конкатенацию
console.log(concatenatedTemplate);

const temaplateString = `${author} заказал ${projectName} за ${price} рублей!`; // реализация через шаблонные строки
console.log(temaplateString);

const example = "Покупатель: " + author + "\n" + "Стоимость: " + price + "$"; // пример переноса строк через \n на примере конактенации
console.log(example);

const example2 = `Покупатель: ${author}
Цена: ${price}$`; // пример переноса через шаблонные строки
console.log(example2);