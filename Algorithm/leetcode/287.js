function isBadVersion(n) {
  if (n >= 2) {
    return true
  } else {
    return false
  }
}


var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // if (n === 1 && isBadVersion(1)) return 1
    let i = 0, j = n
    let m = 0
    while (i <= j) {
      m = Math.floor((i + j) / 2)
      if (!isBadVersion(m)) {
        i = m + 1
      } else {
        j = m - 1
      }
      if (isBadVersion(m) && !isBadVersion(m - 1)) {
        return m
      }
    }
    return -1
  }
}

console.log(solution(isBadVersion)(2))
