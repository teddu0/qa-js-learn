/*
    Создать объект пользователя с паролем.
    С помощью функции removePassword() удалять пароль пользователя
 */

const user = {
  fullName: "Konstantin Volkov",
  email: "konstantin.volkov@rambler.com",
  age: 32,
  password: "12308",
};

function removePassword(reset) {
  if (reset) {
    console.log("сбросили");
    this.password = undefined;
  } else {
    console.log("Воткнули 1");
    this.password = "1";
  }
}

const userPassRemove = removePassword.bind(user);

userPassRemove(false);
console.log(user.password);
