"use strict";

/*
    Реализовать на функциях и прототипах корзину товаров с методами
    - добавить товар
    - увеличить число товаров
    - уменьшить число товаро (удалить их если их 0)
*/

const bread = { id: 1, name: "Bread", count: 1 };
const onion = { id: 2, name: "Onion", count: 1 };
const milk = { id: 3, name: "Milk", count: 1 };
const iphone = { id: 4, name: "Iphone", count: 1 };

const Cart = function () {
  this.products = [];
};

/**
 * Добавление продукта в корзину
 * Если продукт повторно добавляется в корзину, тогда у него только увеличивается count
 * @param {*} product
 * @returns
 */
Cart.prototype.addProduct = function (product) {
  const productIds = this.products.map((product) => product.id);
  if (!productIds.includes(product.id)) {
    this.products.push(product);
    return;
  }
  this.products.find((el) => el.id === product.id).count++;
};

/**
 * Увеличение количества продукта (count) по идентификатору продукта
 * Если продукта для увеличения в корзине нет, получаем ошику
 * @param {*} productId
 * @returns
 */
Cart.prototype.increaceProductCount = function (productId) {
  const productIds = this.products.map((product) => product.id);
  if (!productIds.includes(productId)) {
    console.log(`Продукта ID: ${productId} нет в корзине!!!`);
    return;
  }
  this.products.find((el) => el.id === productId).count++;
};

/**
 * Уменьшение количества продукта или удаление, если он остался последним
 * Если в корзине товар не найден, получаем ошибку
 * @param {*} productId
 * @returns
 */
Cart.prototype.decreaceProductById = function (productId) {
  const productIds = this.products.map((product) => product.id);
  if (!productIds.includes(productId)) {
    console.log(`Продукт ID: ${productId} не найден!!!`);
    return;
  }
  const productCount = this.products.find((el) => el.id === productId);
  if (productCount.count <= 1) {
    const product = productIds.indexOf(productIds);
    this.products.splice(product, 1);
  } else {
    this.products.find((el) => el.id === productId).count--;
  }
};

const cart = new Cart();
console.log(cart);

cart.addProduct(bread);
cart.addProduct(bread);
cart.addProduct(milk);
cart.addProduct(milk);
cart.addProduct(onion);
cart.addProduct(iphone);

cart.increaceProductCount(1);
cart.increaceProductCount(2);
cart.increaceProductCount(2);
cart.increaceProductCount(2);
cart.increaceProductCount(3);
// cart.increaceProductCount(4);

cart.decreaceProductById(3);
cart.decreaceProductById(4);
console.log(cart);
