/*
 * @lc app=leetcode.cn id=806 lang=typescript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
function numberOfLines(widths: number[], s: string): number[] {
  const itemUnit = {}

  let currentRow = 0
  let currentRowNumber = 1

  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    // 如果没有  加进去
    if (!itemUnit[item]) itemUnit[item] = widths[s.charCodeAt(i) - 97]

    if (itemUnit[item]) {
      if (itemUnit[item] + currentRow < 101) {
        currentRow += itemUnit[item]
      } else {
        currentRow = itemUnit[item]
        currentRowNumber++
      }
    }
  }

  return [currentRowNumber, currentRow]
}
// @lc code=end

console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    "aaaaaaaaaaa"
  )
)

console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    "abcdefghijklmnopqrstuvwxyz"
  )
)

console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    "bbbcccdddaaa"
  )
)
