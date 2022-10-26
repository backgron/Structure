
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) return head.next
  let pHead = head
  while (head.next !== null) {
    if (head.next.val === val) {
      head.next = head.next.next
    }
  }
  return pHead
}