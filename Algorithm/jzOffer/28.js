
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var isSymmetric = function (root) {
  return root == null ? true : recur(root.left, root.right)
}

var recur = function (left, right) {
  if (left == null && right == null) return true
  if (left == null || right == null || left.val != right.val) return false
  return recur(left.left, right.right) && recur(left.right, right.left)
}