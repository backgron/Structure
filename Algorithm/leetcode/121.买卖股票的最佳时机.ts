/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0

  let res = 0
  let min = prices[0]

  for (let i = 1; i < prices.length; i++) {
    let item = prices[i]
    if (item > min) {
      if (item - min > res) {
        res = item - min
      }
    } else {
      min = item
    }
  }

  return res
}
// @lc code=end

console.log(maxProfit([])) // 0
console.log(maxProfit([1])) // 0
console.log(maxProfit([1, 2])) // 1
console.log(maxProfit([2, 1])) //0

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
