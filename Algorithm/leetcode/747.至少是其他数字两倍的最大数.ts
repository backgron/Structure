/*
 * @lc app=leetcode.cn id=747 lang=typescript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
  if (nums.length < 2) return -1
  let max1 = nums[0]
  let max2 = -Infinity
  let i = 0

  nums.forEach((item, index) => {
    if (index === 0) return
    if (item > max1) {
      i = index
      max2 = max1
      max1 = item
    } else if (item > max2) {
      max2 = item
    }
  })

  return max1 >= max2 * 2 ? i : -1
}
// @lc code=end

dominantIndex([1, 0])
