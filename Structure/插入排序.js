function insert_sort(arr) {
  let tmp, i
  for (let p = 1; p < arr.length; p++) {
    tmp = arr[p]
    for (i = p; i > 0 && arr[i - 1] > tmp; i--) {
      arr[i] = arr[i - 1]
    }
    arr[i] = tmp
  }
  return arr
}

console.log(insert_sort([1, 2, 3, 4, 5, 6, 8, 7]))