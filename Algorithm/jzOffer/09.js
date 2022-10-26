var CQueue = function () {
  this.stackAdd = []
  this.stackDel = []
}

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackAdd.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stackDel.length === 0) {
    if (this.stackAdd.length === 0) return -1
    this.stackDel = this.stackAdd.reverse()
    this.stackAdd = []
  }
  return this.stackDel.pop()
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue()
obj.appendTail(1)
obj.appendTail(2)
obj.appendTail(3)
obj.appendTail(4)
obj.appendTail(5)
obj.appendTail(6)

obj.deleteHead()
obj.deleteHead()
obj.deleteHead()
obj.deleteHead()
obj.deleteHead()

obj.appendTail(9)
console.log(obj)
obj.deleteHead()
var param_1 = obj.deleteHead()

console.log(param_1)