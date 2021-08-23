const Grub = require('./Grub');

class Bee extends Grub {
  // TODO..
  constructor(age, color, food, job){
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
  
  eat(){
    return Grub.eat();
  }

}

module.exports = Bee;
