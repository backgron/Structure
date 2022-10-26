function Tree(val = null, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

function allOfTree(tree) {
  if (!tree) return null
  let arr = []
  let fn = (tree) => {
    if (tree) {
      if (arr.length === 0) arr.push(tree.val)
      if (tree.left) {
        arr.push(tree.left.val)
      } else if (tree.right) {
        arr.push(tree.right.val)
      }
      fn(tree.left)
      fn(tree.right)
    }
  }
  fn(tree)
  return arr
}