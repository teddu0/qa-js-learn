const cities = {
  msk: { tmp: 10, let: 100 },
  spb: { tmp: 10, let: 40 },
  kzn: { let: 80 },
  srb: { tmp: 10, let: 80 },
};

let avgTemp = 0;
// let citiesCount = 0;
// for (const key in cities) {
//   citiesCount++;
//   avgTemp += cities[key].tmp;
// }
// console.log(avgTemp / citiesCount);
// console.log(citiesCount);

let citiesCount = Object.keys(cities).length;

for (const key of Object.keys(cities)) {
  if (!cities[key].tmp) {
    citiesCount--;
    continue;
  }
  avgTemp += cities[key].tmp;
}
console.log(avgTemp / citiesCount);
