function findMaxInArray(maxArr){
  var max = maxArr[0];
  for (i=1; i<maxArr.length; i++){
        if (maxArr[i] > max){
          max = maxArr[i];
        }
  }
  return max;
}

module.exports = equalNumbersInArray;
