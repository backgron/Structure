function bubble_sort(arr) {
  let flag = 0
  let k = 0
  for (let i = 0; i < arr.length - 1; i++) {
    flag = 0
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1] + arr[j]
        arr[j + 1] = arr[j] - arr[j + 1]
        arr[j] = arr[j] - arr[j + 1]
        flag = 1
      }
    }
    console.log(k++)
    if (flag === 0) return arr
  }
  return arr
}

console.log(bubble_sort([1, 2, 3, 4, 5, 6, 8, 7]))