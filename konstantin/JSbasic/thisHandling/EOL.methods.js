const b = 1;

const a = {
  b: b,
  b, // <= эта запись равна той же, что и выше, мы добавляем в объект "a" новый атрибут "b" просто эта запись более коротая

  /**
   * Это старый формат объявления функции(метода) в объекте, который мы изучали ранее, но есть упрощенная форма, которая будет ниже
   * @returns
   */
  getB: function () {
    return this.b;
  },

  /**
   * Упрощенный способ объявления функции(метода) в объекте, о чем говорилось выше
   * @returns
   */
  getBAlt() {
    return this.b;
  },
};

console.log(a.getBAlt());
