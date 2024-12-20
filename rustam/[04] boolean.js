// Логические операции
let isAdmin = true;
let isWrite = true;

console.log(`Системный файл: ${isAdmin && isWrite}`); // И
console.log(`Обычный файл: ${isAdmin || isWrite}`);   // ИЛИ
console.log(`Инвертация прав админа: ${!isAdmin}`);   // НЕ

let isEdited = true;
let isSuperAdmin = true;

console.log(`Системный файл c редактированием: ${
    isAdmin && isWrite && (!isEdited || isSuperAdmin)
}`); 


// Операторы с другими типами
console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);

let a;
let userName = a || 'Petya';
console.log(userName);

let fileName = isAdmin && 'file.mp4';
console.log(fileName);

// Оператор нулевого слияния
let age = 0;
console.log(age || 'Default user age'); // Выведется "Default user age"
console.log(age ?? 'Default user age'); // Выведется "0"