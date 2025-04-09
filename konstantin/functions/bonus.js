const alex = {
  balanceInUsd: 200,
  age: 24,
  hasJob: false,
};

function canBuy(user) {
  if (user.age >= 24 && user.hasJob === true) {
    console.log(500);
  } else if (user.age >= 24 && user.hasJob === false) {
    console.log(100);
  } else {
    console.log(0);
  }
}

canBuy(alex);
