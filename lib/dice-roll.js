var DiceRoll = function DiceRoll (number, sides) {
  this.number = number;
  this.sides = sides;
  this.result = [];

  this.perform();
};

DiceRoll.prototype.perform = function perform () {
  var sum = function sum (a, b) {
    return a + b;
  };

  for (var i=0; i < this.number; i++) {
    this.result.push(Math.floor(Math.random() * this.sides + 1));
  }

  this.result = this.result.reduce(sum);
};

module.exports = DiceRoll;
