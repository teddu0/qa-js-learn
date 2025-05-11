/*
    Sets (множества)
    Необходим для уникализации множества(набора) данных.
    По сути это почти тот же массив, который содержит в себе только уникальные данные,
    и обромляется множество фигурными скобками{}
 */

const tickets = ["Russia", "London", "Kazakhstan", "Russia"]; // это обычный массив, в котором есть дублирующий элемент Russia
console.log(tickets); // выведется в консоль массив в том виде как он есть

const setTickets = new Set(tickets); // создаем set(множество) на основе вышесозданного массива
console.log(setTickets); // выведется в консоль уже множество, в котором будут только уникальные данные, т.е. Russia выведется только 1 раз

const ids = new Set([324, 2234, 23, 42, 432]); // второй способ создания множества
console.log(ids);

console.log(setTickets.has("London")); // has() аналог includes() массивов, который проверяет наличие элемента в множестве. Возвращает boolean
console.log(setTickets.has(2)); // вернет false, так как в множестве нет элемента 2
console.log(setTickets.size); // size - это метод, который выводит длинну(размер) нашего множества (также как lenght у массива)
console.log(setTickets.clear()); // метод clear() молностью очищает множество
setTickets.add("Serbia"); // add() - аналог push() массива, добавляет элемент во множество в конец списка
setTickets.add("Uzbekistan");
setTickets.delete("Serbia"); // delete() удаляет элемент из множества
console.log(setTickets);

/*
    ВАЖНО!
    Из лекции следует, что обхекты не уникализируются, но по факту вижу, что уникализируются
    Надо будет погуглить!
*/
const setObj = new Set([{ a: 1, b: 3, b: 2 }]);
console.log(setObj); // вывелись только { { a: 1, b: 2 } }

const cars = new Set(["Lada", "BMW", "Audi", "Lada"]);

const carsAsArray = [...cars]; // через spread операторк (...) можно легко множество преобразовать к обычному массиву
console.log(carsAsArray); // выведется уже массив

// перебрать множество можно также как и обычный массив через for of
for (const car of cars) {
  console.log(car);
}

console.log(new Set("hello")); // строка будет итерироваться побуквенно
// при передаче в множестве не итерируемое значение получим ошибку TypeError: number 234 is not iterable
console.log(new Set(true));
