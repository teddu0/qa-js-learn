/*
  Передать ответ пользователя на вопрос "Сколько будет 7 - или + 15?"
  Если ответ верен - вывести в консоль "Успех", если нет - "Вы робот!!!"
  А если ввести "Я не робот", то тоже "Успех"
 */

const question = "Сколько будет 7 - или + 15?";
const successMessage = "Успех";
const isRobotMessage = "Вы робот!!!";
console.log(question);

function robotSwitchChecker(response) {
  switch (true) {
    case Number(response) === 22:
    case Number(response) === -8:
    case response === "Я не робот":
      console.log(response + ": " + successMessage);
      break;
    default:
      console.log(response + ": " + isRobotMessage);
      break;
  }
}

robotSwitchChecker("Я не робот");
robotSwitchChecker(22);
robotSwitchChecker(-8);
robotSwitchChecker(8);

function robotIfElseChecker(response) {
  if (
    response === "Я не робот" ||
    Number(response) === 22 ||
    Number(response) === -8
  ) {
    console.log(response + ": " + successMessage);
  } else {
    console.log(response + ": " + isRobotMessage);
  }
}

robotIfElseChecker("Я не робот");
robotIfElseChecker(22);
robotIfElseChecker(-8);
robotIfElseChecker(8);
