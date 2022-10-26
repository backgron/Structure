class DoubleTree {
  constructor(val = null, left = null, right = null) {
    this.left = left
    this.right = right
    this.val = val
  }
}

// //遍历树
// function getAllItem(tree) {
//   if (tree) {
//     getAllItem(tree.left)
//     getAllItem(tree.right)
//     console.log(tree.val)
//   }
// }
//遍历树  广度优先

function getAllItem(tree) {
  let res = []
  let fn = (tree) => {
    if (tree) {
      if (res.length === 0) res.push(tree.val)
      if (tree.left) {
        res.push(tree.left.val)
      }
      if (tree.right) {
        res.push(tree.right.val)
      }
      fn(tree.left)
      fn(tree.right)
    }
  }
  fn(tree)
  return res
}

//添加一个节点
function addItem(tree, item) {
  const newTree = tree
  while (tree) {
    if (item < tree.val) {
      if (tree.left) {
        tree = tree.left
      } else {
        tree.left = new DoubleTree(item)
        return newTree
      }
    } else {
      if (tree.right) {
        tree = tree.right
      } else {
        tree.right = new DoubleTree(item)
        return newTree
      }
    }
  }
  return newTree
}




let dt = new DoubleTree(5)
dt = addItem(dt, 2)
dt = addItem(dt, 1)
dt = addItem(dt, 6)
dt = addItem(dt, null)
dt = addItem(dt, null)
dt = addItem(dt, 1)

// dt = addItem(dt, 3)
// dt = addItem(dt, 4)

// dt = addItem(dt, 7)
// dt = addItem(dt, 8)
// dt = addItem(dt, 9)
// console.log(getAllItem(dt))
// console.log(dt)
// console.log(dt)


function allOfTree(tree) {
  let arr = []
  let fn = (tree) => {
    if (tree) {
      if (arr.length === 0) arr.push(tree.val)
      if (tree.left) {
        arr.push(tree.left.val)
      } if (tree.right) {
        arr.push(tree.right.val)
      }
      fn(tree.left)
      fn(tree.right)
    }
  }
  fn(tree)
  return arr
}
console.log(dt)
console.log(allOfTree(dt))
console.log(getAllItem(dt))
