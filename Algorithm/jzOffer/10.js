var fib = function (n) {
  if (n < 2) return 1
  let res1 = BigInt(1)
  let res2 = BigInt(1)
  let res = BigInt(0)
  for (let i = 2; i <= n; i++) {
    res = res1 + res2
    res1 = res2
    res2 = res
  }
  return res % BigInt(1000000007)
}

console.log(fib(7))