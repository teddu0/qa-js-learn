let bmwPrice = 100000;
let fordFocusPrice = 10000;
let budget = 20000;

let message = budget > bmwPrice ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';
console.log(`Я хочу купить ${message}`);

let message2 = budget > bmwPrice ? 'BMW' : 'Велосипед';
console.log(`Я хочу купить ${message2}`);