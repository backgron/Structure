// var truncateSentence = function (s, k) {
//   return s.split(' ').splice(0, k).join(' ')
// };
var truncateSentence = function (s, k) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      k--
    }
    if (k === 0) {
      return res
    } else {
      res += s[i]
    }
  }
  return res
};

console.log(truncateSentence("chopper is not a tanuki", 5))