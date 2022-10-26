var twoSum = function (numbers, target) {
  let tar = 0
  for (let i = 0; i < numbers.length; i++) {
    tar = target - numbers[i]
    let j = bSeach(tar, numbers, i)
    if (j === -1) continue
    return [i + 1, j + 1]
  }
}

function bSeach(target, arr, i) {
  let l = i + 1
  let r = arr.length - 1
  let m
  while (r >= l) {
    m = Math.floor((l + r) / 2)
    if (arr[m] < target) {
      l = m + 1
    } else if (arr[m] > target) {
      r = m - 1
    } else {
      return m
    }
  }
  return -1
}
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8))
