/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  let res = 0

  const map = new Map()
  map.set("I", 1)
  map.set("V", 5)
  map.set("X", 10)
  map.set("L", 50)
  map.set("C", 100)
  map.set("D", 500)
  map.set("M", 1000)

  if (s.length === 1) return map.get(s)

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1]) {
      const current = map.get(s[i])
      const next = map.get(s[i + 1])
      if (current < next) {
        res -= current
        res += next
        i++
      } else {
        res += current
      }
    } else {
      res += map.get(s[i])
    }
  }

  return res
}
// @lc code=end

console.log(romanToInt("III"))

console.log(romanToInt("IV"))

console.log(romanToInt("VI"))

console.log(romanToInt("IX"))

console.log(romanToInt("LVIII"))

console.log(romanToInt("MCMXCIV"))
