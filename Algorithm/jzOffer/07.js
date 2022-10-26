function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}


var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  let root = preorder[0]
  let node = new TreeNode(root)
  let i = inorder.indexOf(root)

  node.left = buildTree(preorder.slice(i, i + 1), inorder.slice(0, i))
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))
  return node
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))