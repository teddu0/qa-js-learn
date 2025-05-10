let user = {
  userName: "Vasily Pupkin",
  age: 34,
  city: "Moskow",
};

const { userName, ...restOfUser } = user; // деструктуризация объекта

console.log(userName); // выведет имя элемент объекта userName
console.log(restOfUser); // выведет остаток объекта, то есть age и city

const otherInfo = {
  skills: ["QA", "programmer", "driver"],
  email: "v.pupkin@yandex.ru",
  cardNumber: "4242-4242-4242-4242",
  maskedCard: function () {
    return this.cardNumber.slice(-4).padStart(16, "*");
  },
};

user = {
  ...user,
  ...otherInfo,
};

console.log(user.maskedCard());
