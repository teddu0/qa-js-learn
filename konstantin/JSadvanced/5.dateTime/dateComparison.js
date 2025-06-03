"use strict";
const date = new Date(2025, 3, 6);
const firstDate = new Date(2025, 3, 6);
const secondDate = new Date(2025, 3, 5);

/*
    Cравнение дат производится простыми операторами сравнения
    Однако при сравнеии через == или строгое равно === мы получим false даже если даты одинаквые,
    так как сравниваются ссылки на объекты

    Чтобы сравнить даты через == или === необходимо привести дату к timestamp формату любым известным способом
*/
console.log(firstDate > secondDate);
console.log(date === firstDate); // вернется false

console.log(date.getTime() == firstDate.getTime()); // вернется true так как через метод getTime() получили дату в формате timestamp
console.log(Number(date) === Number(firstDate)); // вернется также true так как конвертировали дату к числу
