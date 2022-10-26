var moveZeroes = function (nums) {
  let i = j = temp = 0
  for (i; i < nums.length; i++) {
    if (nums[i] != 0) {
      temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      j++
    }
  }
  console.log(nums)
}
moveZeroes([0, 1, 0, 3, 12])