
var cuttingRope = function (n) {
  const pow = (m, n) => {
    if (n === 0n) return 1n
    if (n % 2n === 0n) {
      return pow(m, n / 2n) * pow(m, n / 2n)
    } else {
      return pow(m, (n - 1n) / 2n) * pow(m, (n - 1n) / 2n) * BigInt(m)
    }
  }
  let res = BigInt(0)
  if (n <= 3) return n - 1
  let main = BigInt(Math.floor(n / 3))
  let other = BigInt(n % 3)
  switch (other) {
    case 0n: res = BigInt(pow(3n, main)); break
    case 1n: res = BigInt(pow(3n, main - 1n) * 4n); break
    case 2n: res = BigInt(pow(3n, main) * 2n); break
  }
  return res % 1000000007n
}



console.log(cuttingRope(10))