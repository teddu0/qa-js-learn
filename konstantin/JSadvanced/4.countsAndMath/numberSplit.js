"use strict";

/**
 * большие цифры можно разделять андерскором и этоникак не повлияет на результат,
 * будет то же самое, как если бы мы записали чилос 350_300_000 слитно 350300000;
 *
 * Однако пробемы могут возникнуть приконвертации, если 350_300_000 придет строкой и мы попытаемся ее привести к числу
 */
const bigInt = 350_300_000;
console.log(bigInt);

console.log(Number("350_300_000")); // выдется NaN так как в строке присутствую символы _ не являющиеся числом
