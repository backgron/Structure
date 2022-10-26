var mergeTwoLists = function (l1, l2) {

  let head = null
  if (l1.data <= l2.data) {
    head = l1
    l1 = l1.next
  } else {
    head = l2
    l2 = l2.next
  }
  let res = head
  while (l1 && l2) {
    if (l2.data <= l1.data) {
      head.next = l2
      l2 = l2.next
      head = head.next
    } else {
      head.next = l1
      l1 = l1.next
      head = head.next
    }
  }
  if (l1) {
    head.next = l1
  } if (l2) {
    head.next = l2
  }
  return res
};