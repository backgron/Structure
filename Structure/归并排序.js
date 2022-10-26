function two_sort(arr1, arr2) {
  let arr = []
  let i = j = k = 0
  while (arr1[i] || arr2[j]) {
    if (arr1[i] === undefined || arr1[i] > arr2[j]) {
      arr[k] = arr2[j]
      j++
    } else if (arr2[j] === undefined || arr1[i] <= arr2[j]) {
      arr[k] = arr1[i]
      i++
    }
    k++
  }
  return arr
}

function mer_sort(arr) {
  if (arr.length !== 1) {
    let half = Math.ceil(arr.length / 2)
    let arr1 = arr.splice(0, half)
    let arr2 = arr.splice(-half)
    let n1 = mer_sort(arr1)
    let n2 = mer_sort(arr2)
    let res = []
    res = two_sort(n1, n2)
    for (let i = 0; i < res.length; i++) {
      arr[i] = res[i]
    }
  } else {
    return arr
  }
  return arr

}

console.log(mer_sort([1, 3, 4, 2, 12, 1, 234, 1234, 1, 234, 1, 234, 1, 23, 412, 3, 4, 423, 6, 6, 74, 9, 8765, 43, 24, 586543, 2, 56754, 32, 5867234, 4, 567234, 4555553, 2, 55553, 2, , 555, 64, 5765, 5854, 55, 6, 345, 63, 456, 34, 56, 3456, 34, 56, 345, 671, 2435, 2, 436, 2, 46, 2, 45, 324, 52, 346, 2, 345, 23, 46, 24, 6, 234, 5, 2346, 23, 45, 2345]))