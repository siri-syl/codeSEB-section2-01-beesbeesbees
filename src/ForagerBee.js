const Bee = require('./Bee');

let bee = new Bee();

class ForagerBee {
  // TODO..
  constructor(age, job, color, food, canFly, treasureChest){
    this.age = 10;
    this.job = 'find pollen';
    this.color = bee.color;
    this.food = bee.food;
    this.canFly = true;
    this.treasureChest = [];
  }

  eat (){
    return bee.eat();
  }

  forage(str) {
    return this.treasureChest.push(str);
  }
}

module.exports = ForagerBee;
