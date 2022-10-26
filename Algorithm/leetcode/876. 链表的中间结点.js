
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var middleNode = function (head) {
  let s = head, f = head
  while (f && f.next) {
    f = f.next.next
    s = s.next
  }
  return f
}