// var findNumberIn2DArray = function (matrix, target) {
//   let i = 0,
//     j = matrix.length - 1
//   while (matrix[j] && matrix[j][i]) {
//     if (matrix[j][i] === target) {
//       return true
//     } else if (matrix[j][i] < target) {
//       i++
//     } else if (matrix[j][i] > target) {
//       j--
//     }
//   }
//   return false
// }

var findNumberIn2DArray = function (matrix, target) {
  let arr = []
  matrix.forEach((item) => {
    arr = arr.concat(item)
  })
  return arr.indexOf(target) === -1 ? false : true
}

let arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(findNumberIn2DArray(arr, 20))