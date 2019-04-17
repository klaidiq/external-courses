function stringToCamelCase(myString){
  var newString = myString.toLowerCase();
  var myArray = newString.split(" ");

  for (var i = 1; i < myArray.length; i++){
    myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
  }

  var resultStr = myArray.join("");
  return resultStr;
}

module.exports = stringToCamelCase;
