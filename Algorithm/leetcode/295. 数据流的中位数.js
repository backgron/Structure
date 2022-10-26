/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.max = []
  this.min = []
  this.med
}

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.med === undefined) {
    this.med = num
  } else {
    if (num > this.med) {
      this.max.push(num)
    } else {
      this.min.push(num)
    }
  }

}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  this.arr.sort((a, b) => a - b)
  let l = this.arr.length
  if (l % 2 == 0) {
    return (this.arr[(l / 2) - 1] + this.arr[(l / 2)]) / 2
  } else {
    return this.arr[((l + 1) / 2) - 1]
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder()
obj.addNum(1)
obj.addNum(2)
obj.addNum(8)
obj.addNum(3)

var param_2 = obj.findMedian()
console.log(param_2)