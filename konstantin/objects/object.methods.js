const user = {
  firstName: "Kostantin",
  lastName: "Volkov",
  age: 32,
  getUser: function () {
    // функция вернет весь объект
    return this;
  },
  fullName: function () {
    // функция вернет имя и вамилию объекта
    return this.firstName + " " + this.lastName;
  },
};

console.log(user);
