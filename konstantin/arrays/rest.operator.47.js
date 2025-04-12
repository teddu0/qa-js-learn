const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// rest оператор или три точки получает остаток массива
const [one, two, three, ...others] = numbers;

console.log(one, two, three);

console.log(others);
