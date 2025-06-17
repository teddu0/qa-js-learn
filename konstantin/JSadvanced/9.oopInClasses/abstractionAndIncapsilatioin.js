"use strict";

class Film {
  #name;
  #author;
  raiting;
  #length;
  constructor(name, author, length) {
    this.#name = name;
    this.#author = author;
    this.#length = length;
  }

  get name() {
    return this.#name;
  }
  get author() {
    return this.#author;
  }
  get length() {
    return this.#length;
  }
}

const film = new Film("Blade", "Somone", 120);

console.log(film.name);
console.log(film.author);
console.log(film.length);
