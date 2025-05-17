const role = 'backoffice';

if(role === 'employee'){
    console.log('access');
} else if(role === 'manager'){
    console.log('you manager');
} else if(role === 'admin'){
    console.log('you admin');
} else if(role === 'backoffice'){
    console.log('you backoffice');
} else {
    console.log('Fuck off')
}

//Использование switch вместо if else
switch(role) {
    case 'employee': // означает аналогичное сравнение role === 'employee'
        console.log('access');
        break; // указываем если условие верное то заканчиваем условие
    case 'manager': // означает аналогичное сравнение role === 'manager'
        console.log('you manager');
        break; // указываем если условие верное то заканчиваем условие
    case 'admin': // означает аналогичное сравнение role === 'admin'
        console.log('you admin');
        break; // указываем если условие верное то заканчиваем условие
    case 'backoffice': // означает аналогичное сравнение role === 'backoffice'
        console.log('you backoffice');
        break; // указываем если условие верное то заканчиваем условие
    default:
        console.log('Fuck off');
}

// можно исползовать одно проваливание для нескольких значений
switch(role) {
    case 'employee':
    case 'manager':
        console.log('access');// если role === employee или manager то выведет access
        break;
    case 'admin':
    case 'backoffice':
        console.log('no access');
        break;
    default:
        console.log('Fuck off');
}

const num = 1;

switch(true) {
    case num > 0: //true === num > 0
        console.log('Положительное');
        break;
    case num < 0: // true === num < 0
        console.log('Отрицательное');
        break;
    default:
        console.log('Равен нулю!');
}