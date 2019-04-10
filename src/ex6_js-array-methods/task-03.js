function myEvery(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (!(result = callback(array[i], i, array))) {
      return false;
    }
  }
  return true;
}


module.exports = myEvery;
