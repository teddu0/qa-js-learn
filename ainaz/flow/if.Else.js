const money = 100;
// const canBuy = money > 50;// можно перенести в функцию if

if (money > 50) {
console.log('Можешь купить себе эч - почмак'); //выполнится первое условие потому что money(100) > 50
} else if (money > 5) {
console.log('Сможешь купить себе чак - чак');
} else {
    console.log('Сможешь позволить себе только чебурек');
}
console.log('Или пососать палец');