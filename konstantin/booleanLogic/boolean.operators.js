/*
    Булевые операторы
 */

const isAdmin = true;
const canWrite = false;

console.log(isAdmin || canWrite);
console.log(isAdmin && canWrite);

let a = 0;
console.log(a || "Hello");
console.log(a ?? "Hello");

console.log("Паша" || "Маша"); // Паша
console.log(false || "Маша"); // Маша
console.log(true || "Маша"); // true
console.log("Паша" || false); // Паша
console.log("Паша" || true); // Паша

console.log("Паша" && "Маша"); // Маша
console.log(false && "Маша"); // false
console.log(true && "Маша"); // Маша
console.log("Паша" && false); // false
console.log("Паша" && true); // true
