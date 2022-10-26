var reverseWords = function (s) {
  let arr = s.split('')
  let i = 0, j = 0
  let b = 0
  let t
  while (j <= arr.length) {
    if (arr[j] === ' ' || j === arr.length) {
      b = j + 1
      j = j - 1
      while (j - i >= 0) {
        t = arr[j]
        arr[j] = arr[i]
        arr[i] = t
        j--
        i++
      }
      i = j = b
    } else {
      j++
    }
  }
  return arr.join('')
}
console.log(reverseWords("abc qwe"))