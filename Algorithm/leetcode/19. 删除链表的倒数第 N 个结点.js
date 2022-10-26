class ListNode {
  constructor(val = null, next = null) {
    this.val = val
    this.next = next
  }
}

//找到最后一个元素
function findLastItem(list) {
  while (list.next !== null) {
    list = list.next
  }
  return list
}

//添加一个元素
function addItem(list, val) {
  let lastItem = findLastItem(list)
  lastItem.next = new ListNode(val, null)
  return list
}


let l1 = new ListNode(1)
// addItem(l1, 3)
// addItem(l1, 4)
// addItem(l1, 5)


// //数组法
// var removeNthFromEnd = function (head, n) {
//   if (!head.next && n === 1) return null
//   let res = head
//   let nh = head
//   let arr = []
//   while (nh) {
//     arr.push(nh.val)
//     nh = nh.next
//   }
//   let i = arr.length - n - 1
//   if (n = arr.length) return res.next
//   for (i; i > 0; i--) {
//     head = head.next
//   }
//   if (head.next.next) {
//     head.next = head.next.next
//   } else {
//     head.next = null
//   }
//   return res
// }

//双指针
var removeNthFromEnd = function (head, n) {
  let head1 = head
  let head2 = head
  while (n > 0) {
    head1 = head1.next
    n--
  }
  if (head1 === null) {
    return head.next
  }
  while (head1.next) {
    head1 = head1.next
    head2 = head2.next
  }
  if (head2.next.next) {
    head2.next = head2.next.next
  } else {
    head2.next = null
  }
  return head
}



let res = removeNthFromEnd(l1, 1)
console.log(res)
while (res) {
  console.log(res.val)
  res = res.next
}