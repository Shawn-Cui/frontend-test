const add = function(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    return 'Input should be numbers!'
  } else {
    return n1 + n2
  }
}
