const Grub = require('./Grub');

let grub = new Grub();

class Bee {
  // TODO..
  constructor(age, color, food, job){
    this.age = 5;
    this.color = 'yellow';
    this.food = grub.food;
    this.job = 'Keep on growing';
  }
  
  eat(){
    return grub.eat();
  }

}

module.exports = Bee;
