const Bee = require('./Bee');

class ForagerBee extends Bee {
  // TODO..
  constructor(age, job, color, food, canFly, treasureChest){
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  eat (){
    return Bee.eat();
  }

  forage(str) {
    return this.treasureChest.push(str);
  }
}

module.exports = ForagerBee;
