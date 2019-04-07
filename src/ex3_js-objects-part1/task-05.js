function returnObjectsCopy(object){
  var objectsCopy = {};

  for (var key in object){
    if (object.hasOwnProperty(key)){
      objectsCopy[key] = object[key];
    }
  }
  return objectsCopy;
}

module.exports = returnObjectsCopy;
