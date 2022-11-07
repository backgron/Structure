/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {
  let map = new Map()
  let max = { name: "", time: 0 }
  let strArr = paragraph.toLowerCase().split(/[!|?|'|,|;|.| ]/)

  strArr.forEach((item) => {
    if (banned.indexOf(item) !== -1 || item === " " || item === "") return
    if (!map.get(item)) {
      map.set(item, 1)
      if (1 >= max.time) {
        max.time = 0
        max.name = item
      }
    } else {
      map.set(item, map.get(item) + 1)
      if (map.get(item) >= max.time && banned.indexOf(item) === -1) {
        max.time = map.get(item)
        max.name = item
      }
    }
  })

  return max.name
}
// @lc code=end

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
)
