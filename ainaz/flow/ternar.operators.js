const iPhone16Pro = 100000;
const iPhone15 = 10000;
const money = 20000;

let massage;
if (money > iPhone16Pro){
    massage = 'iPhone16Pro';
}   else if (money > iPhone15){
    massage = 'iPhone15';
}   else {
    massage = 'Nokia3310';
}
console.log(`Куплю себе ${massage}`);

// //тернарный оператор
money > iPhone16Pro ? console.log(`Куплю жене iPhone16Pro`) : console.log(`Куплю жене iPhone15`);
//работает так же как и if else, выполняется блок который находится между ? и :

const str = money > iPhone15 ? 'Куплю iPhone15' : 'Куплю Nokia3310';
console.log(str);// выполненный результат присваеваем к переменной str.
//Укороченная альтернатива
console.log(`Я куплю себе ${money > iPhone15 ? 'iPhone15' : 'Nokia3310'}`);


//Выражения с двумя условиями, если 1 условие true то iPhone16Pro, если нет то после : еще одно условие.
let res = money > iPhone15 ? 'iPhone15' : money > iPhone16Pro ? 'iPhone16Pro' : 'Nokia3310';
console.log(`Я могу себе позволить ${res}`);
//Укороченная альтернатива
console.log(`Я все таки куплю ${money > iPhone16Pro ? 'iPhone16Pro' : money > iPhone15 ? 'iPhone15' : 'Nokia3310'}`)
