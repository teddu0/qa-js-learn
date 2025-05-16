"use strict";

const countryCapitals = new Map();

const obj = { a: 2, b: 3 };

// Метод set(key, value) добавляет новый атрибут в мапу. Ключем атрибута может быть примитив, объект, массив
countryCapitals
  .set("Russia", "Moskow")
  .set("Kazakhstan", "Astana")
  .set("Serbia", "Belgrade")
  .set(true, "boolean")
  .set(3, 7)
  .set([1, 2, 3], "array")
  .set({ a: 3 }, "object")
  .set(obj, "obj");

// получить элемент мапы можно через метод get(key)
console.log(countryCapitals.get(true)); //
console.log(countryCapitals.get("non-existing-key")); // выведется undefined так как такого ключа нет в мапе
console.log(countryCapitals.get([1, 2, 3])); // выведется undefined так как нет ссылки в памяти, необходимо сначала объект или массив записать в константу
console.log(countryCapitals.get(obj)); // пример когда ключем является объект

countryCapitals.delete(3); // метод delete(key) удаляет элемент мапы по переданному ключу
countryCapitals.clear(); // метод clear() полностью очищает мапу

countryCapitals
  .set("Russia", "Moskow")
  .set("Kazakhstan", "Astana")
  .set("Serbia", "Belgrade");

console.log(countryCapitals.has("Serbia")); // метод has(key) проверяет наличие элемента по ключу, возвращает boolean
console.log(countryCapitals.has("USA"));
console.log(countryCapitals.size); // size возвращает длину мапы

console.log(countryCapitals);

// мапу можно перебрать как массив
for (const el of countryCapitals) {
  console.log(el);
}
