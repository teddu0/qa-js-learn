const KG_IN_RUB = 100;
const KM_IN_RUB = 50;

const calculateW = (present) => present * KG_IN_RUB;
const calculateD = (distance) => distance * KM_IN_RUB;

function calculateExchangePrice(present1, present2, distance) {
  const price1 = calculateW(present1);
  const price2 = calculateW(present2);
  const distancePrice = calculateD(distance);
  return `${price1 + price2 + distancePrice} рублей`;
}

console.log(calculateExchangePrice(2, 4, 4.6));
