/*
    Вывести в консоль строку "Я люблю JS!" из массива, проходя циклом в обратном порядке.
    Не исопользовать метор reverse!
    const array = ["!", "JS", "люблю", "Я"];
*/

const array = ["!", "JS", "люблю", "Я"];
const newArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}

console.log(newArray.join(" "));
