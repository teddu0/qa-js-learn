"use strict";

/*
    Сделать таймер пиццы (функцию, которая принимает время (милисекунды))
    Функция будет выводить в консоль секнуды, оставшиеся до
    готовности пиццы и сообщение о готовности.
    Пример:

    00:04
    00:03
    00:02
    00:01
    Пицца готова!!!
*/

// console.log(
//   new Intl.DateTimeFormat("ru-RU", {
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   }).format(time)
// );

function pizza(time) {
  const end = new Date().getTime() + time;
  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat("ru-RU", {
        minute: "numeric",
        second: "numeric",
      }).format(end + 100 - new Date())
    );
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    console.log("Пицца готова!");
  }, time);
}

pizza(5000);
