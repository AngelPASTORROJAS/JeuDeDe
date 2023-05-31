const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const rollDice = (numDice) => {
  var rolls = [];
  for (var i = 0; i < numDice; i++) {
    rolls.push(rollDie());
  }
  return rolls;
};

export default rollDice;
