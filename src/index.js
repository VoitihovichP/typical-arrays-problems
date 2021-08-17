
exports.min = function min (array) {
  if (arguments[0] === undefined || array.length === 0) {
    return 0;
  }

  let result = array.sort(function(a, b) {return a - b});
  return result[0];
}

exports.max = function max (array) {
  if (arguments[0] === undefined || array.length === 0) {
    return 0;
  }

  let result = array.sort(function(a, b) {return b - a});
  return result[0];
}

exports.avg = function avg (array) {
  if (arguments[0] === undefined || array.length === 0) {
    return 0;
  }

  let result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}