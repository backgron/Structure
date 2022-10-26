class ListNode {
  constructor(val = null, next = null) {
    this.val = val
    this.next = next
  }
}

//遍历  返回数组
function allItem(list) {
  let arr = []
  let i = 0
  while (list.next !== null) {
    arr[i] = list.val
    i++
    list = list.next ? list.next : null
  }
  arr[i] = list.val
  return arr
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

//删除最后一个元素并返回值
function delLastItem(list) {
  let lastItem = findLastItem(list)
  let val = lastItem.val
  lastItem = null
  return val
}

//找到某一个元素的位置
function findItem(list, item) {
  let i = 0
  while (list.next !== null || list.val === item) {
    if (list.val === item) {
      return i
    }
    i++
    list = list.next
  }
  return -1
}

//找到某个位置的元素
function findItemByIndex(list, index) {
  for (let i = 0; i < index; i++) {
    list = list.next
  }
  return list.val
}

//插入一个元素
function insertItem(list, index, item) {
  if (index === 0) {
    const newList = new ListNode(item, list)
    return newList
  } else {
    let newList = list
    for (let i = 0; i < index - 1; i++) {
      list = list.next
    }
    list.next = new ListNode(item, list.next)
    return newList
  }
}

//删除一个元素
function delItem(list, index) {
  if (index === 0) {
    return list = list.next
  } else {
    let newList = list
    for (let i = 0; i < index - 1; i++) {
      list = list.next
    }
    list.next = list.next.next
    return newList
  }
}

let l1 = new ListNode(1)
addItem(l1, 1)
addItem(l1, 2)


var removeNthFromEnd = function (head, n) {
  if (head.next === null) return null
  let res = head, temp = head
  while (n) {
    temp = temp.next
    n--
  }
  if (temp.next === null && n != 1) {
    return head.next
  }
  while (temp.next) {
    res = res.next
    temp = temp.next
  }
  res.next = res.next.next
  return res
}
console.log(removeNthFromEnd(l1, 1))