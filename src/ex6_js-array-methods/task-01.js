function mySlice(array, begin = 0, end = array.length){
  var resultArray = [],
      firstValue = begin,
      secondValue = end;
    if (firstValue < 0) {
      firstValue = array.length + begin;
    }
    if (secondValue < 0) {
      secondValue = array.length + end;
    }
    for (var i = firstValue; i < secondValue; i++){
      resultArray.push(array[i]);
    }
  return resultArray;
}

module.exports = mySlice;
