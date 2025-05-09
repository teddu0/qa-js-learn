function stairs(text) {
  let modText = "";
  for (const index in text) {
    if (index % 2 === 1) {
      modText += text[index].toUpperCase();
    } else if (text[index] === " ") {
      continue;
    } else {
      modText += text[index];
    }
  }
  console.log(modText);
}

stairs("оченьдлинное слово");
