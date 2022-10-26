var search = function (nums, target) {
  let h = nums.length - 1
  let l = 0
  let m = 0
  while (l <= h) {
    m = Math.floor((h + l) / 2)
    if (nums[m] < target) {
      l = m + 1
    } else if (nums[m] > target) {
      h = m - 1
    } else if (nums[m] === target) {
      return m
    }
  }
  return -1
}
console.log(search([-1, 0, 3, 5, 9, 12], 9))