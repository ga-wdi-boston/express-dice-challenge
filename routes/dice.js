var express = require('express');
var router = express.Router();
var DiceRoll = require('../lib/dice-roll');
var ParseDice = require('../lib/parse-dice');

router.get('/', function(req, res, next) {
  var dex = req.query.q || '1d6';
  var parsed = new ParseDice(dex);
  var roll = new DiceRoll(parsed.number, parsed.sides);

  res.status(200).json({"roll": roll.result});
});


module.exports = router;
