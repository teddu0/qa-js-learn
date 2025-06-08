"use strict";

Number.MAX_SAFE_INTEGER; // таким образом вызываются статические свойства или методы, то есть Number...
new Number(); // так образом создается объект класса после чего работаем с ним

class TestNonStatic {
  constructor(someAttribute) {
    this.someAttribute = someAttribute;
  }
  /**
   * Это не статический метод класса
   * Вызвать его можно только предварительно создав объект класса TestNonStatic
   * Пример ниже в объект nonStatic
   */
  message() {
    console.log("Hello world!");
  }
}

const nonStatic = new TestNonStatic("I'am nonstatic attribute!");
nonStatic.message(); // так можно вызвать не статический метод класса
console.log(nonStatic.someAttribute); // так мы обращаемся к не статическим атрибутам класса

class TestStatic {
  static atribute = "I'm static attribute!"; // Так объявляются статические атрибут - добавляется модификатор static

  /**
   * Так объявляются статические метод - добавляется модификатор static
   * Пример вызова данного метода будет ниже
   */
  static message() {
    console.log("Hey, im static method!");
  }

  /**
   * Также можно создать статический блок, в котором выполнить каку-то логику
   */
  static {
    this.atribute = "I'm updated static attribute!";
  }
}

console.log(TestStatic.atribute); // пример обращения к статическому атрибуту
TestStatic.message(); // пример обращения к статическому методу
