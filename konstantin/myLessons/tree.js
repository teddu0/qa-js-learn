function tree(nubmer, symbol) {
  const array = [];
  for (let i = 1; i <= nubmer * 2; i++) {
    if (i % 2 === 1) {
      array.push(symbol.repeat(i));
    }
  }
  array.forEach((element, j, arr) => {
    let space = " ";
    console.log(space.repeat(arr.length - j) + element);
  });
}

tree(4, "*");
