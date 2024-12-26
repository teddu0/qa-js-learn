// Параметры по умолчанию

function toPower(num, power) {
    const power2 = power ?? 2;
    const res = num ** power2;
    return res;
}

console.log(toPower(2, 3));
console.log(toPower(2));



function toPower2(num, power = 2) {
    const res = num ** power;
    return res;
}

console.log(toPower2(2, 3));
console.log(toPower2(2));

//-----------------------------------
// Условия в функциях

function canAccessWebsite(age) {
    if (age < 18){
        return 'Нет';
    } 
    return 'Да';
}
console.log(canAccessWebsite(17));

// Или

const canAccessWebsite2 = age => age < 18 ? 'Нет' : 'Да';
console.log(canAccessWebsite2(17));


//-----------------------------------
// Функции в функциях

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateKm(distance) {
    return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
    const price1 = calculateW(present1);
    const price2 = calculateW(present2);
    const distancePrice = calculateKm(distance);
    return price1 + price2 + distancePrice;
}
console.log(`Стоимость доставки: $${getExchangePrice(2.3, 4.9, 147)}`);