/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  let str: string = x.toString()
  let start = 0
  let end = str.length - 1

  while (start !== end) {
    if (str[start] === str[end]) {
      if (start === end || start + 1 === end) {
        return true
      }
      start++
      end--
    } else {
      return false
    }
  }

  return true
}
// @lc code=end

console.log(isPalindrome(1)) // true

console.log(isPalindrome(11)) // true
console.log(isPalindrome(10)) // false

console.log(isPalindrome(101)) // true
console.log(isPalindrome(100)) // false

console.log(isPalindrome(1001)) // true
console.log(isPalindrome(1011)) // false
