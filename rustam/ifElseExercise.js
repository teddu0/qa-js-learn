let sum = 12000; // Сумма
let stavka = 7; // Годовая ставка
let houseCost = 13500; // Стоимость дома
let srok = 24; // Срок в месяцах

let itog = sum * (1 + (sum / 100 * stavka / 12) / sum) ** srok;
//console.log(itog);
if (itog > houseCost) {
    console.log('Вася сможет купить дом за $' + houseCost + ' и даже останется $' + (itog - houseCost));
} else {
    console.log('Вася не сможет купить дом за $' + houseCost + ', потому что ему не хватит $' + (houseCost - itog));
}