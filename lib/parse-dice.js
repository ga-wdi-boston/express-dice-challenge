var ParseDice = function ParseDice(diceExpression) {
  this._dex = diceExpression;
  this._parts = this._dex.split('d');

  this.number = this._parts[0];
  this.sides = this._parts[1];
};

module.exports = ParseDice;
