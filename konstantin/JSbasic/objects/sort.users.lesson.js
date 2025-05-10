/*
    Отсортировать пользователей по возрасту
*/

const users = [
  { name: "Vasily", age: 30 },
  { name: "Konstantin", age: 32 },
  { name: "Aleksandra", age: 27 },
  { name: "Olga", age: 26 },
];
console.log(users);

const sortedByAge = users.sort((a, b) => a.age - b.age);
console.log(sortedByAge);
