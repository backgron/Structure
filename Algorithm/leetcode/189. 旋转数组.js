var nums = [-1, 1, 2, 3, 4, 5, 6, 7]
// var nums = [-1]
var rotate = function (nums, k) {
  k = k % nums.length
  console.log(k)
  let arr2 = []
  for (let i = k; i > 0; i--) {
    arr2.push(nums.pop())
  }
  nums.reverse()
  for (let i = 0; i < arr2.length; i++) {
    nums.push(arr2[i])
  }
  nums.reverse()
}
rotate(nums, 2)
console.log(nums)