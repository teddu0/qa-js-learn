"use strict";

const firstDate = new Date(2025, 4, 23);
const secondDate = new Date(2025, 5, 23);

// console.log(firstDate);
// console.log(Number(firstDate)); // таким образом можно спокойно конвертировать дату из DateTime к timestamp
// console.log(secondDate - firstDate);

/**
 * Функция, вычисляющая количество прошедших дней между двумя датами
 * @param {*} date1
 * @param {*} date2
 * @returns
 */
function countDaysBetweenDays(date1, date2) {
  return (date1 - date2) / (1000 * 60 * 60 * 24);
}

console.log(countDaysBetweenDays(secondDate, firstDate));
