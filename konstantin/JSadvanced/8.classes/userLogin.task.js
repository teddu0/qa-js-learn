"use strict";

/*
    Реализовать класс пользователя, со свойствами 
    - логин
    - пароль
    Пароль при установке должен переворачиваться и в таком виде храниться.
    Пароль и логин после создания менять нельзя.
    Также у класса добавить метод
    - смена пароля (передаем старый и новый пароль)
    - сверка пароля
*/

class User {
  #login;
  #password;

  constructor(login, password) {
    this.#login = login;
    this.#password = [...password].reverse().join("");
  }

  get login() {
    return this.#login;
  }

  set login(text) {
    if (this.#login) {
      console.error("Логин изменить нельзя!");
      return;
    }
    this.#login = text;
  }

  set password(text) {
    if (this.#password) {
      console.error("Пароль изменить нельзя!");
      return;
    }
    this.#password = [...text].reverse().join("");
  }

  #checkPassword(text) {
    return text === [...this.#password].reverse().join("");
  }

  changePassword(oldPassword, newPassword) {
    if (!this.#checkPassword(oldPassword)) {
      console.error("Введен не верный пароль!");
      return;
    }
    this.#password = newPassword;
    console.log("Пароль успешно обновлен!");
  }
}

const user = new User("Konstantin", "strong_password");
user.login = "Konstantin";
user.password = "strong_password";
user.changePassword("strong_password", "new_pass");
