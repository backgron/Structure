var chalkReplacer = function (chalk, k) {
  let sum = 0
  let flag = 0
  for (let i = 0; i < chalk.length; i++) {
    if (k - chalk[i] < 0) {
      return i
    } else {
      sum += chalk[i]
      k -= chalk[i]
      chalk[i] = sum
    }
    if (i === chalk.length - 1) {
      if (k >= 0) {
        flag = 1
        k = k % sum
        i = -1
      }
    }
  }
}
chalkReplacer([5, 1, 5], 50)

console.log(10 % 11)
