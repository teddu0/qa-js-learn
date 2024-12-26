/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

// Одобренный кредит
function getCredit(age, work) {
	if (age > 24 && work == true) {
		return 500;
	} else if (age > 24) {
		return 100;
	} else {
		return 0;
	}
}

//console.log(getCredit(25, true));

// Общая сумма с кредитом
function sumOfCash (age, work, cash) {
	return (getCredit(age, work) + cash);
}

//console.log(sumOfCash(25, true, 1500));

// Покупательская способность
function canBuy(age, work, cash, price) {
	if ((sumOfCash(age, work, cash)) >= price) {
		return `пользователь может купить MacBook за $${price}`;  // true
	} else {
			return `пользователю не хватает $${
				price - (getCredit(age, work) + cash)
			}`;                                                   // false
	}
}

console.log(canBuy(25, true, 1500, 2000));