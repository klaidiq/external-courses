function evenOddZero(myArr){
  var even = 0;
  var odd = 0;
  var zero = 0;
  for (i = 0; i < myArr.length; i++){
    if (typeof(myArr[i]) === 'number' && !isNaN(myArr[i])) {
      if ((myArr[i] % 2) === 0 && myArr[i] !== 0) {
        even++
      } else if (myArr[i] === 0) {
        zero++
      } else {
        odd++
      }
    }
  }
    return [even, odd, zero];
}

module.exports = evenOddZero;
