let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
]
var spiralOrder = function (matrix, x, y, i, j) {
  // let x = matrix[0].length
  // let y = matrix.length
  // let i = 0
  // let j = 0
  let newX = x - 1
  let newY = y - 1
  let newI = i + 1
  let newJ = j + 1
  if (newX === i && newY === j) {
    return console.log(matrix[j][i])
  }
  while (i < x) {
    console.log(matrix[j][i]);
    matrix[j][i]
    i++
  }
  i--
  j++
  while (j < y) {
    console.log(matrix[j][i])
    j++
  }
  j--
  i--
  while (i >= 0) {
    console.log(matrix[j][i])
    i--
  }
  i++
  j--
  while (j >= 0) {
    if (i === 0 && j === 0) {
      spiralOrder(matrix, newX, newY, newI, newJ)
      j--
    } else {
      console.log(matrix[j][i])
      j--
    }

  }
};

spiralOrder(matrix, matrix[0].length, matrix.length, 0, 0)