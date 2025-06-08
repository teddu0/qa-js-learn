"use strict";

class User {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.age = age;
  }

  /**
   * геттеры ползволяют безопасно, контролируемо получить атрибут класса
   * например здесь в один атрибут name будет заложено firstName и lastName
   * на выходе при обращении к атрибуту объекта user.name будет выводить имя и фамилия
   */
  get name() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * геттеры ползволяют контролируемо задавать значения атрибутам
   * например здесь задаются имя и фамилия атрибуту name
   */
  set name(fullName) {
    const part = fullName.split(" ");
    if (part.length !== 2) {
      console.error(
        "Для имени необходимое передать только 2 атрибута имя и фамилия!"
      );
      return;
    }
    [this._firstName, this._lastName] = part;
  }

  get age() {
    return this._age;
  }
  /**
   * В этом сеттере задается валидация возраста пользователя
   * На выходе, если возраст будет не валидный будет выводиться ошибка
   */
  set age(nubmer) {
    if (nubmer < 18 || nubmer >= 40) {
      console.error("Невалидный возраст!!!");
      return;
    }
    return (this._age = nubmer);
  }
}

const validUser = new User("Max", "Pu pkin", 22);
const youngUser = new User("Roman", "Volkov", 25);
const oldUser = new User("Sergey", "Voitov", 33);
console.log(validUser.name);
console.log(youngUser);
console.log(oldUser);
