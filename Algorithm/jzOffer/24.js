
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (p === null) return null
  let p = head.next
  let n
  head.next = null
  while (p) {
    n = p.next
    p.next = head
    head = p
    p = n
  }
  return head
}

console.log(reverseList(list))