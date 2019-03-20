function numberOrString(x) {
  if (!isNaN(x)){
    if (typeof(x) === 'number' || typeof(x) === 'string') {
      return typeof(x);
    }
  }
    return undefined;
}

module.exports = numberOrString;
