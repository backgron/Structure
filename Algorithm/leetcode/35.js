var searchInsert = function (nums, target) {
  let i = 0, j = nums.length - 1, m = 0, a = nums.length
  while (i <= j) {
    m = Math.floor((i + j) / 2)
    if (nums[m] === target) {
      return m
    }
    if (nums[m] < target) {
      i = m + 1
    }
    if (nums[m] > target) {
      a = m
      j = m - 1
    }
  }
  return a
}

console.log(searchInsert([1, 3, 5, 6], 4))   //2
console.log(searchInsert([1, 3, 5, 6], 7))   //1