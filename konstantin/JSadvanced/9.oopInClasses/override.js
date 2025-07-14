"use strict";

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  log() {
    console.log(`${this.author} - ${this.title}`);
  }
}

class EBook extends Book {
  constructor(title, author, pages) {
    super(title, author);
    this.pages = pages;
  }

  /**
   * для того, чтобы перезаписать (override) метод,
   * достаточно создать метод с тем же названием в классе-наследнике и модифицировать его
   **/
  log() {
    console.log(`${this.author} - ${this.title} - ${this.pages}`);
  }
}

const book1 = new Book("Harry Potter", "Somebody", 20 * 60);
const book2 = new EBook("Harry Potter", "Somebody", 20 * 60);
console.log(book1.log());
console.log(book2.log());
