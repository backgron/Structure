//  暴力遍历
// function fn(arr) {
//   let maxSum = 0,
//     thisSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     thisSum = 0;
//     for (let j = 0; j < arr.length; j++) {
//       thisSum += arr[j];
//       if (thisSum > maxSum) {
//         maxSum = thisSum;
//       }
//     }
//   }
//   return maxSum
// }
//  let ar = [1, 2, 3, 4, -10, 5, 6, 7, 8, 9, 10];
// console.log(fn(ar));

// //动态规划
// var maxSubArray = function (nums) {
//   let maxSum = nums[0],
//     thisSum = 0
//   for (let i = 0; i < nums.length; i++) {
//     thisSum += nums[i]
//     if (thisSum > maxSum) {
//       maxSum = thisSum
//     }
//     if (thisSum < 0) {
//       thisSum = 0
//     }
//   }
//   return maxSum
// }

// let ar = [-1, 1];
// console.log(maxSubArray(ar));

//动态规划 API
var maxSubArray = function (nums) {
  let maxSize = nums[0],
    thisSize = 0
  nums.forEach(item => {
    thisSize = Math.max(thisSize + item, item)
    maxSize = Math.max(maxSize, thisSize)
  })
  return maxSize
}