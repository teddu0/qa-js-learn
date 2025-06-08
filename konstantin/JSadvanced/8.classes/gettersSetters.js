"use strict";

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get age() {
    return this.age;
  }
  set age(nubmer) {
    if (nubmer < 18 || nubmer >= 40) {
      console.error("Невалидный возраст!!!");
      return;
    }
    return (this._age = nubmer);
  }
  get name() {
    return this.name;
  }

  set name(text) {
    if (text.length > 6) {
      console.error("Слишком длинное название!!!");
      return;
    }
    return (this._name = text);
  }
}

const validUser = new User("Max", 33);
const youngUser = new User("Roman", 15);
const oldUser = new User("Sergey", 41);
console.log(validUser);
console.log(youngUser);
console.log(oldUser);
