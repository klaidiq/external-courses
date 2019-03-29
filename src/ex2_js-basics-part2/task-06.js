function simpleOrCompoundNumber(value){
  var divide = 0;
  if (typeof value !== "number" || value < 2 || value > 1000 || isNaN(value)) {
    return "Данные неверны";
  }
  for (i=2; i<=value; i++) {
    if (value%i === 0) {
      divide++;
    }
  }
  if (divide > 1) {
    return `Число ${value} - составное число`;
  }
    return `Число ${value} - простое число`;
}

module.exports = simpleOrCompoundNumber;
