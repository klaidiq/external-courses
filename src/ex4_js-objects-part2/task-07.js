function cutTheString(myString, myNumber){

  var diff = (myNumber - myString.length) - 1;
  var newString = myString.slice(0, diff) + "…";
  return newString;
  
}

module.exports = cutTheString;
