"use strict";

/*
    Сделать класс врага со здоровьем и методом получения урона
    Сделать класс меча, который имеет силу и медон нанесения урона
    Сделать класс орка, который имеет 50% вероятность отразить урон
*/

class Enemy {
  health;
  constructor(health) {
    this.health = health;
  }

  takeDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      console.log("Enemy has die!");
    }
    console.log(this.health);
  }
}

class Ork extends Enemy {
  constructor(health) {
    super(health);
  }

  takeDamage(damage) {
    if (Math.random() > 0.5) {
      this.health = this.health - damage;
    }
    if (this.health <= 0) {
      console.log("Ork has die!");
    }
    console.log(this.health);
  }
}

class Sword {
  #power;
  constructor(power) {
    this.#power = power;
  }

  hit(enemy) {
    enemy.takeDamage(this.#power);
  }
}
const sword = new Sword(4);
const enemy = new Enemy(10);
sword.hit(enemy);
sword.hit(enemy);
sword.hit(enemy);
sword.hit(enemy);
