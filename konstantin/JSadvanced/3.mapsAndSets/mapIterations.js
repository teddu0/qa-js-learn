const weatherCities = new Map([
  ["Moskow", 25],
  ["Kazan", 13],
  ["Buinsk", 13],
  ["London", 13],
  ["Vladivostok", 13],
]);

// простой способ перебрать ключи и значения мапы
for (const [key, value] of weatherCities) {
  console.log(key);
  console.log(value);
}

console.log(weatherCities.keys()); // получение всех ключеий мапы
console.log(weatherCities.values()); // получение всех значений мапы

console.log([...weatherCities]); // преобразование мапы к массиву

console.log([...weatherCities.keys()]); // получение ключей в массиве через ...rest оператор
console.log([...weatherCities.values()]); // получение значений в массиве через ...rest оператор
