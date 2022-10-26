//  递归求数字倒叙，字符串输出

function reversalNum(n) {
  if (!Math.floor(n / 10)) {
    return n.toString()
  } else {
    return (n % 10) + reversalNum(n)
  }
}

console.log(reversalNum(1234));