var lengthOfLongestSubstring = function (s) {
  let obj = {}
  let m = 0, n = 0
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined || obj[s[i]] === 0) {
      obj[s[i]] = 1
    } else {
      obj[s[i]]++
      while (s[m] !== s[i] && m < i) {
        obj[s[m]]--
        m++
      }
      obj[s[m]]--
      m++
    }
    if (i - m + 1 > res) {
      res = i - m + 1
    }
  }
  return res
}
// b a b c b
console.log(lengthOfLongestSubstring("pwwkew"))

// let s = 'ww'
// console.log(s[0] == s[1]);