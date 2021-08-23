const Bee = require('./Bee');

let bee = new Bee();

class HoneyMakerBee {
  // TODO..
  constructor(age, job, color, food, honeyPot){
    this.age = 10;
    this.job = 'make honey';
    this.color = bee.color;
    this.food = bee.food;
    this.honeyPot = 0;
  }

  eat (){
    return bee.eat();
  }

  makeHoney(){
    this.honeyPot++;
  }

  giveHoney(){
    this.honeyPot--;
  }
}

module.exports = HoneyMakerBee;
