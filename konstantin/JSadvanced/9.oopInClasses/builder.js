"use strict";

class HouseBuilder {
  house = {};
  addRoof(roof) {
    this.house.roof = roof;
    return this;
  }

  addFlat(flat) {
    this.house.flat = flat;
    return this;
  }

  addFloor(floor) {
    this.house.floor = floor;
    return this;
  }

  build() {
    return this.house;
  }
}

const house1 = new HouseBuilder();
house1.addRoof("Шифер").addFlat("Комната 1").addFloor("Паркет").build();
console.log(house1);
