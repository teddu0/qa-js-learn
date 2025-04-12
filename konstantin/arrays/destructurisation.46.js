const user = ["Konstantin", 32, "Kazan"];

/*
    Ниже приведен пример как доставть элемент из массива по индексу 
*/
const userName = user[0];
const age = user[1];
const city = user[2];

/*
    Деструктуризация - то есть разбор массива на переменные
    Деструктурировать можно не все элементы, например [newUserName, userAge]
*/
const [newUserName, userAge, userCity] = user;

console.log(newUserName, userAge, userCity);
