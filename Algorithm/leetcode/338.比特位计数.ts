/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(n: number): number[] {
  const res: number[] = []

  const getBits: (num: number) => number = (num: number) => {
    if (num < 2) return num

    if (num % 2 == 0) {
      if (res[num / 2]) return res[num / 2]
      return getBits(num / 2)
    } else {
      if (res[(num - 1) / 2]) return res[(num - 1) / 2] + 1
      return getBits((num - 1) / 2) + 1
    }
  }

  for (let i = 0; i <= n; i++) {
    res.push(getBits(i))
  }

  return res
}
// @lc code=end

console.log(countBits(0))
console.log(countBits(1))
console.log(countBits(2))
console.log(countBits(3))
console.log(countBits(4))
console.log(countBits(5))
console.log(countBits(6))
console.log(countBits(8))
console.log(countBits(11))
console.log(countBits(12))
