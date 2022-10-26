// //新数组
// var exchange = function (nums) {
//   let arr1 = []
//   let arr2 = []
//   nums.forEach(item => {
//     if (item % 2 == 0) {
//       arr1.push(item)
//     } else {
//       arr2.push(item)
//     }
//   })
//   return arr2.concat(arr1)
// }


//双指针
var exchange = function (nums) {
  let i = 0, j = nums.length - 1
  while (i <= j) {
    if (nums[i] % 2 == 0 && nums[j] % 2 != 0) {
      nums[i] = nums[i] + nums[j]
      nums[j] = nums[i] - nums[j]
      nums[i] = nums[i] - nums[j]
    }
    if (nums[i] % 2 != 0) {
      i++
    }
    if (nums[j] % 2 == 0) {
      j--
    }
  }
  return nums
}

console.log(exchange([1, 2, 3, 4]))