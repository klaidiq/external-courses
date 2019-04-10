function myFilter(array, callback) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i])
        }
    }
  return result;
}

module.exports = myFilter;
