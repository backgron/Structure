var printNumbers = function (n) {
  let arr = []
  for (let i = 1n; i < Math.pow(10, n); i++) {
    arr[i - 1n] = i
  }
  return arr
}



console.log(printNumbers(8).length)