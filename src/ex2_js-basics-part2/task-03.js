function evenOddZero(myArr){
  var a = 0;
  var b = 0;
  var c = 0;
  for (i = 0; i < myArr.length; i++){
    if (typeof(myArr[i]) === 'number' && !isNaN(myArr[i])) {
      if ((myArr[i] % 2) === 0 && myArr[i] !== 0) {
        a++
      } else if (myArr[i] === 0) {
        c++
      } else {
        b++
      }
    }
  }
    return [a, b, c];
}

module.exports = evenOddZero;
