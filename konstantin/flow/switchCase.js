/*
    Switch case conditions
*/

const rolesList = ["admin", "manager", "vaiter", "security", "cook"];
const randomIndex = Math.floor(Math.random() * rolesList.length);
const randomRole = rolesList[randomIndex];
console.log(randomRole);

switch (randomRole) {
  case "cook":
  case "vaiter":
    console.log("Доступ к кухне");
    break;
  case "manager":
    console.log("Доступ к кухне и ресепшену");
    break;
  case "security":
    console.log("Доступ к информации о сотрудниках");
    break;
  case "admin":
    console.log("Полный доступ");
}

switch (true) {
  case randomIndex === 1: // true = 1 === 1
  case randomIndex === 2: // true = 2 === 2
  case randomIndex === 3: // true = 3 === 3
  case randomIndex === 4: // true = 4 === 4
    console.log("Рандомное число больше != 0");
    break;
  default:
    console.log(randomIndex);
    break;
}
