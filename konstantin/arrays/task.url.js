const url = "https://purbleschool.ru/course/javascript";

function parser(data) {
  const [protocol, _, domain, ...path] = data.split("/");
  if (protocol === "http:" || protocol === "https:") {
    if (!domain.includes(".")) {
      return;
    }
    console.log(`- Протокол (${protocol.split(":")[0]})`);
    console.log(`- Доменное имя (${domain})`);
    console.log(`- Путь внутри сайта (/${path.join("/")})`);
  }
}

parser(url);
