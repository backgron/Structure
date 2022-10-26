//递归
function fb(n) {
  if (n <= 2) return 1
  return (fb(n - 2) + fb(n - 1))
}

// //动态规划
// function fb(n) {
//   if (n <= 2) return 1
//   let n0 = 1
//   let n1 = 1
//   let res = 0
//   for (let i = 3; i <= n; i++) {
//     res = n0 + n1
//     n0 = n1
//     n1 = res
//   }
//   return res
// }

// //压栈
// function fb(n) {
//   if (n <= 2) return 1
//   let stack = [1, 1]
//   for (let i = 3; i <= n; i++) {
//     let n1 = stack.pop()
//     let n0 = stack.pop()
//     stack.push(n0)
//     stack.push(n1)
//     stack.push(n0 + n1)
//   }
//   return stack[stack.length - 1]
// }

console.time('t1')
for (let i = 1; i < 500; i++) {
  console.log(fb(i))
}
console.timeEnd('t1')