function box(width, height, text) {
  const array = [];
  const symbol = "*";
  const top = symbol.repeat(width);
  const bottom = symbol.repeat(width);
  for (let i = 1; i <= height; i++) {
    array.push(symbol);
    if (i === height && height % 2 === 0) {
      array.push(symbol);
    }
  }
  if (width <= text.length + 2) {
    console.log("Недостаточно ширины");
    return;
  }

  if (height < 2) {
    console.log("Недостаточно высоты");
    return;
  }

  const side = " ".repeat((top.length - text.length) / 2);
  console.log(side);

  //   const leftSpace = " ".repeat(text.length / 2);
  //   const rightSpace = " ".repeat(text.length / 2);
  console.log(top);
  array.forEach((el, i) => {
    if (i + 1 !== Math.round(array.length / 2)) {
      console.log(el + " ".repeat(top.length - 2) + el);
    } else {
      console.log(el + side + text + side + el);
    }
  });

  //   console.log(text);
  console.log(bottom);
}

box(11, 2, "heollssf");
