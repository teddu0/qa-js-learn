const secretNumber = 7; // number значение
const secretNumberString = '7'; //string значение

if (secretNumber == 7){
    // == является не строгим равенством - это означает, что сравнивается только значение
    console.log('Success');
};
if (secretNumber === 7){
    // === является строгим равенством - это означает, что сравнивается значение и тип данных
    console.log('Success');
};

if (secretNumberString == 7){
    console.log('Success');
} else {
    console.log('Fail');//Выведет success так как сравнивается строка 7 с числом 7
};

if (secretNumberString === 7){
    console.log('Success');
} else{
    console.log('Fail')//выведет fail так как сравниваются типы и значения - строка 7 с числом 7
};

//Можно использовать строгое равенство === с выражением number пример:
if (Number(secretNumberString) === 7){
    console.log('Success');
} else {
    console.log('Fail');// в этом случае выведет success потому что, строку проверяем как number с number из - за выражения
}