function myMap(array, callback) {
    var resultArr = [];
    for (var i = 0; i < array.length; i++) {
      result = callback(array[i], i, array)
      resultArr.push(result);
    }
  return resultArr;
}


module.exports = myMap;
