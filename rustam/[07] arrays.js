const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Anya', 25];
console.log(roles);
console.log(roles[0]);
console.log(roles[1]);
console.log(roles[2]);
console.log(roles[3]);

console.log(roles.length);
console.log(roles[roles.length -1]);

console.log(roles.at(-1));          // at вместо length

const usersAge = [2040 - 2025, 20 - '6', 10 > 0 ? 5: 0];
console.log(usersAge);

const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames);

function square(el) {
    return el * el;
}
console.log(square([1, 2, 3]));

function square2(el) {
    return el + el;
}
console.log(square2([1, 2, 3]));