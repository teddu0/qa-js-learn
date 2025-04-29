const user = {
  firstName: "Konstantin",
  lastName: "Volkov",
  age: 32,
  skills: ["QA", "JS"],
  highSchool: "КГУ",
  educationType: "School",
  midleSchool: "СОШ №5",
};

const school = "high";

console.log(user);
console.log(user.lastName); // dot notation (нотация через точку) - использовать в приоритее
console.log(user["skills"][0]); // bracket notation (нотация через квадратные скобки) - использовать только когда надо комбинировать несколько атрибутов
console.log(user[school + user.educationType]);

user.city = "Moscow"; // добавление нового атрибута в объект

console.log(user.city);
user.age = 18; // обновление атрибута объекта
console.log(user.age);
