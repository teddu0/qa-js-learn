function box(width, height, text) {
  const array = [];
  const symbol = "*";
  for (let i = 1; i <= height; i++) {
    array.push(symbol);
    if (i === height && height % 2 === 0) {
      array.push(symbol);
    }
  }

  if (width % 2 === 0 && text.length % 2 === 1) {
    width++;
  } else if (width % 2 === 1 && text.length % 2 === 0) {
    width++;
  }

  let edge = symbol.repeat(width);
  if (width <= text.length + 2) {
    console.log("Недостаточно ширины");
    return;
  }

  if (height < 2) {
    console.log("Недостаточно высоты");
    return;
  }

  const side = " ".repeat((edge.length - 2 - text.length) / 2);
  console.log(edge);

  array.forEach((el, i) => {
    if (i + 1 !== Math.round(array.length / 2)) {
      console.log(el + " ".repeat(edge.length - 2) + el);
    } else {
      console.log(el + side + text + side + el);
    }
  });
  console.log(edge);
}

box(14, 2, "TEXT");
