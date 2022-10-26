// //暴力循环
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
// }



// //减法
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let n2 = target - nums[i];
//     if (nums.indexOf(n2) !== -1 && nums.indexOf(n2) !== i) {
//       return [i, nums.indexOf(n2)]
//     }
//   }
// }


//哈希表
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
}

let arr = []
for (let i = 8; i < 9999; i++) {
  arr.push(i);
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 7));