const role = 'ceo';

if (role === 'manager') {
    console.log('Менеджер');
} else if (role === 'admin') {
    console.log('Админ');
} else if (role === 'ceo') {
    console.log('CEO');
} else {
    console.log('Вы кто такие? Мы вас не звали!')
}

switch (role) {
    case 'manager': console.log('Менеджер');
    break;
    case 'admin': console.log('Админ');
    break;
    case 'ceo': console.log('CEO');
    break;
    default: console.log('Вы кто такие? Мы вас не звали!')
}

switch (role) {
    case 'manager':
    case 'admin': console.log('Не руководитель');
    break;
    case 'ceo': console.log('Руководитель');
    break;
    default: console.log('Вы кто такие? Мы вас не звали!')
}