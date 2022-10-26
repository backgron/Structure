function shell_sort(arr) {
  let i
  for (let n = arr.length / 2; n >= 1; n /= 2) {
    for (let p = n; p < arr.length; p++) {
      let tmp = arr[p]
      for (i = p; i >= n && arr[i - n] > tmp; i -= n) {
        arr[i] = arr[i - n]
      }
      arr[i] = tmp
    }
  }
  return arr
}

console.log(shell_sort([4, 3, 2, 1]))

