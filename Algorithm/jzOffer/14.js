var cuttingRope = function (n) {
  if (n <= 3) return n - 1
  let main = Math.floor(n / 3)
  let other = n % 3
  switch (other) {
    case 0: return Math.pow(3, main)
    case 1: return Math.pow(3, main - 1) * 4
    case 2: return Math.pow(3, main) * 2
  }
}

console.log(cuttingRope(8))