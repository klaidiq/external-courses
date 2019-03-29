function equalNumbersInArray(trueOrFalse){
  var truth;
  for (i=1; i<trueOrFalse.length; i++){
    if (trueOrFalse[0] === trueOrFalse[i]){
      truth = true;
    } else {
      truth = false;
    }
  }
  return truth;
}

module.exports = equalNumbersInArray;
