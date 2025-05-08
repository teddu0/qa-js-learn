"use strict";

function addNumber(num1, num2) {
  console.log(this); // у функции свой this и он по умолчанию undefined (иными словами нет каких-либо свойств в контексте)
}

// addNumber(1, 2);

const addNumber2 = () => console.log(this); // у стрелочных функций нет своего this, они смотрят на глобальный this

// addNumber2();

const user1 = {
  name: "Konstantin",
  surname: "Volkov",
  getFullName: function () {
    console.log(this);
    return this.name + " " + this.surname;
  },
};

user1.getFullName(); // выведется контекст объекта user1

const user2 = {
  name: "Roman",
  suname: "Pupkin",
};

user2.getFullName = user1.getFullName; // добавили юзеру функцию getFullName из объекта другого юзера

user2.getFullName(); // выведется контекст объекта user2

const getFullName = user2.getFullName;

// getFullName(); // выведется undefined так как у getFullName нет контекста как случае с объектами user, у которых был name, surname
