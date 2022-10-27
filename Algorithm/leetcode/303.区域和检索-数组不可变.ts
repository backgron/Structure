/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
  nums: number[]
  sums: number[]

  constructor(nums: number[]) {
    this.nums = nums
    this.sums = [0]
    this.init()
  }

  init() {
    let sum = 0
    this.nums.forEach((item) => {
      this.sums.push((sum += item))
    })
  }

  sumRange(left: number, right: number): number {
    return this.sums[right + 1] - this.sums[left]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
