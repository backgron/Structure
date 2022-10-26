var sortedSquares = function (nums) {
  if (nums.length === 0) return nums
  let len = nums.length
  let l = -1, r = 0
  let res = []
  for (let i = 0; i < len; i++) {
    if (nums[0] >= 0) break
    if (nums[len - 1] <= 0) {
      l = len - 1
      r = len
    }
    if (nums[i] <= 0 && nums[i + 1] > 0) {
      l = i
      r = i + 1
    }
  }
  while (l >= 0 || r < len) {
    if (l < 0) {
      res.push(Math.pow(nums[r], 2))
      r++
    } else if (r >= len) {
      res.push(Math.pow(nums[l], 2))
      l--
    } else {
      let l1 = Math.pow(nums[l], 2)
      let r1 = Math.pow(nums[r], 2)
      if (l1 >= r1) {
        res.push(Math.pow(nums[r], 2))
        r++
      } else {
        res.push(Math.pow(nums[l], 2))
        l--
      }
    }
  }
  return res
}
console.log(sortedSquares([-2, -1]))
