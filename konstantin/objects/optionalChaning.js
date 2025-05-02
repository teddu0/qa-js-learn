const cities = {
  msk: {
    tmp: {
      celsius: 10,
      forengate: 20,
    },
  },
  kzn: {
    tmp: {
      celsius: 10,
      forengate: 20,
    },
  },
  spb: {},
  srb: {
    tmp: {
      celsius: 10,
      forengate: 20,
    },
  },
};

if (cities.spb && cities.spb.tmp) {
  console.log(cities.spb.tmp);
}

console.log(cities.kzn?.tmp?.celsius);

for (const key in cities) {
  console.log(cities[key]?.tmp?.celsius);
}
