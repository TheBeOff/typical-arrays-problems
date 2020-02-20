
exports.min = function min (array) {
  if (array == '' || array == undefined ) {
    return 0;
  }
  return Math.min(... array);
}

exports.max = function max (array) {
  if (array == '' || array == undefined ) {
    return 0;
  }
  return Math.max(... array);
}

exports.avg = function avg (array) {
  if (array == '' || array == undefined ) {
    return 0;
  }
  return array.sort((a, b) => a - b).reduce((a, b) => (a + b)) / array.length;
}
