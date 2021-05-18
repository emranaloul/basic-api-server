'use strict';
const uuid = require('uuid').v4;
/**
 * Food
 * @param none
 */
class Food {
  constructor() {
    this.db = [];
  }

  read(id) {
    if (id) {
      return this.db.find((p) => p.id === id);
    } else {
      return this.db;
    }
  }

  create(obj) {
    const food = {
      id: uuid(),
      data: obj,
    };
    this.db.push(food);
    return food;
  }

  delete(id) {
    console.log(id);

    this.db = this.db.filter((food) => food.id !== id);
    return this.db;
  }

  update(id, obj) {
    for (let i = 0; i < this.db.length; i++) {
      let p = this.db[i];
      if(p.id === id) {
        this.db[i].data = obj;
        return this.db[i];
      } 
    }
  }
}

module.exports = Food;