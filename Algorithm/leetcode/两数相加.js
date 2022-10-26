// //  api 编译失败，好像不支持reverse()  可是数组使用，不能链表使用
// var addTwoNumbers = function (l1, l2) {
//   return (parseInt(
//     l1.reverse().join('')
//   ) + parseInt(
//     l2.reverse().join('')
//   )).toString().split('').reverse()
// };

// //数组管用，链表不管用
// var addTwoNumbers = function (l1, l2) {
//   let flag = 0
//   let len = l1.length > l2.length ? l1.length : l2.length
//   let res = [0]
//   for (let i = 0; i < len; i++) {
//     l1.push(0)
//     l2.push(0)
//     let num = l1[i] + l2[i] + flag
//     if (num >= 10) {
//       flag = 1
//     } else {
//       flag = 0
//     }
//     res[i] = num % 10
//   }
//   if (flag === 1) {
//     res.push(1)
//   }
//   return res
// };

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// 成功
// var addTwoNumbers = function (l1, l2) {
//   let head = foot = null
//   let flag = 0
//   console.log(l1.val)
//   while (l1 || l2) {
//     let n1 = l1 ? l1.val : 0
//     let n2 = l2 ? l2.val : 0
//     let num = n1 + n2 + flag
//     if (num >= 10) {
//       flag = 1
//       num = num % 10
//     } else {
//       flag = 0
//     }
//     if (!head) {
//       head = foot = new ListNode(num)
//     } else {
//       foot.next = new ListNode(num)
//       foot = foot.next
//     }
//     next = new ListNode(0)
//     next
//     if (l1) {
//       l1 = l1.next
//     } else if (l2) {
//       l2 = l2.next
//     }
//   }

//   if (flag === 1) {
//     foot.next = new ListNode(1)
//   }

//   return head
// };

let l1 = [2, 4, 3]
let l2 = [5, 6, 4]
// console.time('sort')
// for (let i = 0; i < 1000000; i++) {
//   addTwoNumbers(l1, l2)
// }
// console.timeEnd("sort");
console.log(addTwoNumbers(l1, l2))