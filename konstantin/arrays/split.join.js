const roles = ["user", "admin", "superuser"];

const joinedRoles = roles.join("-"); // метод join(symbol) объединяет массив и приводит к строке, объединение происходит через переданный символ

console.log(joinedRoles); // выведется в консоль user-admin-superuser

const url = "v1/user/create";
const splitedUrl = url.split("/"); // метод split(symbol) разделяет строку на массив, разделение происходит по переданному симолу

console.log(splitedUrl); // выведется в консоль [ 'v1', 'user', 'create' ]
