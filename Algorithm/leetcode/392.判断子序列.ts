/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  let current = 0

  if (s.length === 0) return true

  for (let i = 0; i < t.length; i++) {
    if (s[current] === t[i]) {
      if (current === s.length - 1) {
        return true
      } else {
        current++
      }
    }
  }

  return false
}
// @lc code=end

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
