"use strict";

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  buy() {
    console.log("Buy!");
  }
}

// AudioBook наследует атрибуты и методы класса Book через ключевое слово extends
class AudioBook extends Book {
  constructor(title, author, duration) {
    super(title, author); // super вызывает атрибуты родительского класса, чтомы в экземпляре класса AutioBook можно было ими пользоваться
    this.duration = duration;
  }

  log() {
    console.log(`${this.author} - ${this.title}`);
  }
}

const book1 = new AudioBook("Harry Potter", "Somebody", 20 * 60);
console.log(book1.title);
console.log(book1.author);
console.log(book1.duration);
console.log(book1.buy());
console.log(book1.log());
