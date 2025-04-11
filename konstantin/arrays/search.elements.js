const roles = new Array("user", "manager", "admin");

/*
    indexOf ищет индекс элемента по его названию
    ищет перебирая каждый элемент массива
    если элемент в массиве не найден, вернтся -1
*/
const indexOfExistingElement = roles.indexOf("admin"); // результатом будет 2
console.log(indexOfExistingElement);
const indexOfNonExistingElement = roles.indexOf("superuser"); // результатом будет  -1
console.log(indexOfNonExistingElement);

/*
    Пример применения indexOf
    Функция проверят наличие роли "admin" в массиве и что его индекс больше или равен 0
*/
function accessCheck() {
  if (roles.indexOf("admin") >= 0) {
    console.log("Welcome!");
  }
}

accessCheck();

/*
    Более популярный способ поиска элемента в массиве includes
    includes возвращает true либо false в зависимости от того найдется элемент или нет
*/

const mustBeTrue = roles.includes("user"); // вернет true
console.log(mustBeTrue);

const mustBeFalse = roles.includes("user-fake"); // вернут false
console.log(mustBeFalse);

/*
    Пример использования
*/
function accessCheckByIncludes() {
  if (roles.includes("true-manager")) {
    console.log("Welcome!");
  } else {
    console.log("Access denied");
  }
}

accessCheckByIncludes();
