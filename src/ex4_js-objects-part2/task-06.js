function upperCaseForEachFirstSymbol(str){
  var myArray = str.split(" ");

  for (var i = 0; i < myArray.length; i++){
    myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
  }
  var resultStr = myArray.join(" ");
  return resultStr;
}

module.exports = upperCaseForEachFirstSymbol;
