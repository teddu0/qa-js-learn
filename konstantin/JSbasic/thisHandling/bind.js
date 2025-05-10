// это отдельный (не зависымый) объект "X" автомобиля BMW
const bmw = {
  make: "BMW",
  model: "X5",
  year: 2019,
  damages: [],
};

// это отдельный (не зависимый) объект "Y" с методом по добавлению повреждений
const carManipulations = {
  addDamages(part, rate) {
    part = part.toLowerCase();
    rate = Number(rate);
    console.log(
      `Автомобилю ${this.make} ${this.model} добавлено повреждение: ${part} со степенью ущерба ${rate}`
    );
    this.damages.push({ part, rate });
  },
};

const bmwDamages = carManipulations.addDamages.bind(bmw); // здесь происходит связывание объекта "Y" с объектом "X"
const roofDamages = carManipulations.addDamages.bind(bmw, "Крыша");

bmwDamages("крыЛо", 2);
roofDamages(3);

console.log(bmw.damages);
