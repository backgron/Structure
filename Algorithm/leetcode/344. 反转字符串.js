// var reverseString = function (s) {
//   return s.reverse()
// };

var reverseString = function (s) {
  let i = 0, j = s.length - 1, t
  while (i <= j) {
    t = s[i]
    s[i] = s[j]
    s[j] = t
    i++
    j--
  }
  return s
}
console.log(reverseString(["H", "a", "n", "n", "a", "h"]))
