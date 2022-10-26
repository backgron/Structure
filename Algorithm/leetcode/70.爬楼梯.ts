/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n < 3) return n

  let n0 = 1
  let n1 = 2
  let res = 3

  for (let i = 3; i < n; i++) {
    n0 = n1
    n1 = res
    res = n0 + n1
  }

  return res
}
// @lc code=end

console.log(climbStairs(1)) // 1
console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(4)) // 5
console.log(climbStairs(5)) // 8
