

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let len = 1
  let h = head
  while (h.next) {
    h = h.next
    len++
  }
  let i = len - k
  while (i > 0) {
    head = head.next
    i--
  }
  return head
}