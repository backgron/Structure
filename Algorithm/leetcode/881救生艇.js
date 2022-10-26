var numRescueBoats = function (people, limit) {
  if (people.length === 0) return 0
  people.sort((a, b) => a - b)
  let res = 0
  let i = 0
  let j = people.length - 1
  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      res++
      i++
      j--
    } else {
      res++
      j--
    }
  }
  return res
}

console.log(numRescueBoats([1, 2, 3, 4], 3))