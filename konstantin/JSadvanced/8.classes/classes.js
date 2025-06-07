"use strict";

/**
 * Таким образом выглядит объявление класса
 */
class Book {
  isRead = false;
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }

  read() {
    this.isRead = true;
  }
}

const harryPotter = new Book("J.Rouling", "Harry Potter");
harryPotter.read();

console.log(harryPotter);
