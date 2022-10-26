
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
// 递归
var mirrorTree = function (root) {
  let stack = []
  if (!root) return root
  if (root.left || root.right) {
    let temp
    temp = root.left
    root.left = root.right
    root.right = temp
    temp = null
    mirrorTree(root.left)
    mirrorTree(root.right)
  } else {
    return root
  }
  return root
}

//辅助栈
var mirrorTree = function (root) {
  let rl = root
  let rr = root
  let stack = [root]
  if (!root) return root

  while (rl.left) {
    if (rl.left) stack.push(rl.left)
    rl = rl.left
  }
  while (rr.right) {
    if (rr.right) stack.push(rr.right)
    rr = rr.right
  }
  for (let i = 0; i < stack.length; i++) {
    let temp
    temp = stack[i].left
    stack[i].left = stack[i].right
    stack[i].right = temp
    temp = null
  }
  return root
}

