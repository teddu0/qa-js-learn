const money = 12000;
const persent = 0.07;
const sumForflat = 13500;
const srok = 24;
const sum = (money * (1+0.07/12) ** 24);
console.log(sum);

const ostatok = sum - sumForflat
 if (sum > sumForflat) {
    console.log("Zaebis Ostatok " + ostatok);
    

 } else {
    console.log("Bomjara");
 }


