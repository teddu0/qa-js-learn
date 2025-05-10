const audi = {
  make: "Audi",
  model: "Q5",
  year: 2021,
  damages: [],
  addDamages(part, rate) {
    part = part.toLowerCase();
    rate = Number(rate);
    console.log(
      `Авто ${this.make} ${this.model} ${this.year} выпуска, получила повреждение на ${part} в ${rate} степени ущерба.`
    );
    this.damages.push({ part, rate });
  },
};

// audi.addDamages("Багажник".toLowerCase(), 3);

const vaz = {
  make: "VAZ",
  model: "Kalina",
  year: 2019,
  damages: [],
};

vaz.addDamages = audi.addDamages;

// console.log(vaz.addDamages("Капот", 1));

const addDamages = audi.addDamages; // присваиваем функцию константе addDamage из метода addDamage, который принадлежит объекту audi

addDamages.call(vaz, "Левая дверь", 5); // управление контекстом this через метод call
addDamages.apply(audi, ["Правая дверь", 3]); // управление контекстом this через метод apply
