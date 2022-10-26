// var findRepeatNumber = function (nums) {
//   nums.sort()
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] = nums[i + 1]) {
//       return nums[i]
//     }
//   }
// }

var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      const n = nums[i]
      if (nums[n] === n) return n
      nums[i] = nums[n]
      nums[n] = n
    }
  }
  return -1
}

var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (num[i] !== i) {
      const n = num[i]
      if (num[n] === n) return n
      num[i] = num[n]
      num[n] = n
    }
  }
  return -1
}


findRepeatNumber([4, 2, 4, 3, 5, 6])