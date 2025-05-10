"use strict";

/*
    Сделать фукнцию пользователя, которая берет за основу 
    userInfo и за счет замыкания создает новый объект, с которым
    можно работать как user1().increase(100)
*/

const userInfo = {
  balance: 0,
  operations: 0,
  increace(sum) {
    this.balance += sum;
    this.operations++;
  },
};

// мое решение (без замыкания)
function makeUser() {
  const user = {
    balance: 0,
    operations: 0,
    increace(sum) {
      this.balance += sum;
      this.operations++;
    },
  };
  return user;
}

const user1 = makeUser();
user1.increace(100);
user1.increace(100);
console.log(user1);

const user2 = makeUser();
user2.increace(30);
console.log(user2);

// решение преподавателя
function makeNewUser() {
  const user = {
    balance: 0,
    operations: 0,
    increace(sum) {
      this.balance += sum;
      this.operations++;
    },
  };
  return function () {
    return user;
  };
}

const user3 = makeNewUser();

user3().increace(50);
user3().increace(50);
user3().increace(50);
console.log(user3());
console.log(user3().balance, user3().operations);

const user4 = makeNewUser();
user4().increace(60);
console.log(user4());
