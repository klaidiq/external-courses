function sumRound(num1, num2){
  var sumOfNumbers = num1 + num2;
  return +sumOfNumbers.toFixed(3);
}

module.exports = sumRound;
