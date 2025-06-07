"use strict";

const Book = function (title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
};

Book.prototype.read = function () {
  this.isRead = true;
};

Book.prototype.cover = "paper";

const harryPotter = new Book("Harry Potter", "Rouling");

harryPotter.read();
console.log(harryPotter);
console.log(harryPotter.cover);
console.log(harryPotter.hasOwnProperty("cover")); // проверяет наличие свойства объекта (вернет false, такак cover принадлежит прототипу)
console.log(harryPotter.hasOwnProperty("title")); // проверяет наличие свойства объекта (вернет true, такак title является свойством Book)

console.log(harryPotter.__proto__); // выведется прототип книги
console.log(Book.prototype); // выведется прототип книги
console.log(harryPotter.__proto__ === Book.prototype); // вернется true так как оба выражения возвращают одинаковые прототипы

console.log(Book.prototype.isPrototypeOf(harryPotter));
console.log(Book.prototype.isPrototypeOf(Book));
