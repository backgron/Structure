var integerReplacement = function (n) {
  let time = 0
  while (n !== 1) {
    let m = n % 2
    if (m === 0) {
      n = n / 2
    } else {
      n = n + 1
    }
    time++
  }
  console.log(time);
};
integerReplacement(234563456)