/*
    Сделать объект "Склад" с методами добавления товара на склад, 
    поиск по складу и расчет общего веса
*/

const werehouse = {
  goods: [],
  addGoods: function (item) {
    const itemId = this.goods.find((good) => good.id === item.id);
    if (itemId) {
      return `Товар с идентификатором: ${item.id} уже есть на складе`;
    }
    this.goods.push(item);
    return true;
  },

  findGoodsById: function (itemId) {
    itemId = Number(itemId);
    if (!this.goods.find((item) => item.id === itemId)) {
      return `Товар по идентификатору: ${itemId} не найден!`;
    }
    return this.goods.find((item) => item.id === itemId);
  },

  getWeightKg: function () {
    return this.goods.reduce((sum, el) => {
      return (sum += el.weight?.kg ? el.weight?.kg : 0);
    }, 0);
  },
};

const car = {
  id: 1,
  weight: {
    kg: 100,
  },
  brand: "BMW",
};

const chair = {
  id: 2,
  weight: {
    kg: 5,
  },
};

const phone = {
  id: 3,
  brand: "Samsung",
};

console.log(werehouse.addGoods(phone));
console.log(werehouse.addGoods(phone));
console.log(werehouse.addGoods(chair));
console.log(werehouse.addGoods(car));
console.log(werehouse.goods);
console.log(werehouse.findGoodsById(2));
console.log(werehouse.getWeightKg());
