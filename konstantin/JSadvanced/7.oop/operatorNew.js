"use strict";

/**
 * Старая реализация классов, которая была до прихода ES6 классов
 * В настоящее таким образом их уже не используют
 *
 * Данная функция по сути является конструктором
 * @param {*} email
 * @param {*} password
 */
const User = function (email, password) {
  this.email = email;
  this.password = password;
};

// все, что ниже посути является объектами созданного выше класса User
const user1 = new User("konstantin@test.ru", "23432");
const user2 = new User("alex@test.ru", "354343");
const user3 = new User("roman@test.ru", "8756867");
console.log(user1);
console.log(user2);
console.log(user3 instanceof User); //instanceof помогает проверить принадлежность объекта конкретному классу (возвращает boolean)
