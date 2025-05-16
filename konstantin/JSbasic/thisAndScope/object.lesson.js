/*
    Дополнить объект 3 методами по получению имен:
    - компании
    - СЕО
    - сотрудника
*/

// мое решение
const company = {
  name: "ООО Агро",
  employees: [
    {
      name: "Алексей",
    },
    {
      name: "Рамазан",
    },
  ],
  ceo: {
    name: "Вахтанг",
  },
  getCompanyName: function () {
    return this.name;
  },
  getEmployeesNames: function () {
    return this.employees.map((emplyee) => emplyee.name);
  },
  getCeoName: function () {
    return this.ceo.name;
  },
};

console.log(company.getCompanyName());
console.log(company.getEmployeesNames());
console.log(company.getCeoName());
console.log("*".repeat(20));

// решение преподавателя

const company2 = {
  name: "ООО Агро",
  employees: [
    {
      name: "Алексей",
      getName: function () {
        return this.name;
      },
    },
    {
      name: "Матвей",
      getName: function () {
        return this.name;
      },
    },
  ],
  ceo: {
    name: "Вахтанг",
    getName: function () {
      return this.name;
    },
  },
  getName: function () {
    return this.name;
  },
};

console.log(company2.getName());
console.log(company2.employees.map((emplyee) => emplyee.getName()));
console.log(company2.ceo.getName());
