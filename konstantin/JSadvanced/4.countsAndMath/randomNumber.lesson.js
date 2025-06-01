"use strict";

/*
    Написать функцию, которая принимает min и max,
    и возвращает случайное число между ними включая их
 */

// решение преподавателя
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber(2, 3));
