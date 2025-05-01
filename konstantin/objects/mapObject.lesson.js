/*
    Преобразовать пользователей до вида:
    {fullName: Vasya Pupkin, skillCount: 2}
*/

const users = [
  {
    firstName: "Vasya",
    lastName: "Pupkin",
    age: 32,
    skills: ["QA", "driver", "dev"],
  },
  {
    firstName: "Valery",
    lastName: "Meladze",
    age: 28,
    skills: ["singer", "travaler"],
  },
  {
    firstName: "Ann",
    lastName: "Asti",
    age: 12,
    skills: ["singer"],
  },
];

const modifyedUsers = users.map((user) => {
  return {
    fullName: user.firstName + " " + user.lastName,
    skillCoutn: user.skills.length,
  };
});
console.log(modifyedUsers);
