"use strict";

/*
    Написать функцию, котрая принимает пользователя
    и проверяет, есть ли у него день рождения
*/

const user = {
  name: "Konstantin",
  birthday: "1992-06-03",
};

// мое решение
function isBirthdayToday(user) {
  const now = new Date();
  const thisMonth = now.getMonth() + 1;
  const thisDate = now.getDate();
  const birthday = new Date(user.birthday);
  const date = birthday.getDate();
  const month = birthday.getMonth() + 1;
  return `${thisDate}${thisMonth}` === `${date}${month}`;
}

// решение преподавателя
function birthdayCheck(user) {
  const today = new Date();
  const userBirthday = new Date(user.birthday);
  if (userBirthday.getMonth() !== today.getMonth()) {
    return false;
  }
  if (userBirthday.getDate() !== today.getDate()) {
    return false;
  }
  return true;
}

console.log(isBirthdayToday(user));
console.log(birthdayCheck(user));
