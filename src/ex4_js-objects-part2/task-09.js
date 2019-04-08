function addSubStringIntoTheString(myString, subString, myNumber){

  var myArray = myString.split(" ");
  var addSubString = myArray.splice(myNumber + 1, 0, subString);
  var resultStr = myArray.join(" ");
  return resultStr;

}

module.exports = addSubStringIntoTheString;
