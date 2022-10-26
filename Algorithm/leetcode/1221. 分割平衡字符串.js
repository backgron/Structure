var balancedStringSplit = function (s) {
  let res = 0, eq = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      eq++
    } else {
      eq--
    }
    if (eq === 0) {
      res++
    }
  }
  return res
}
console.log(balancedStringSplit("LLLLRRRR"))