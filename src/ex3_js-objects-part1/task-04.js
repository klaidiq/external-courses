function addNameIfObjectHasntIt(string, object){
var modObject = object;
  if (typeof name !== "string" || typeof object !== "object") {
        return "Значения неверны";
  }

  if (object.hasOwnProperty(string)){
    return object;
  }
  modObject[string] = "new";
  return modObject;
}

module.exports = addNameIfObjectHasntIt;
