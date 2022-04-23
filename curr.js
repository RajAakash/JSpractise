function sum(a) {
  return function sumb(b) {
    return a + b
  }
}
console.log(sum(1)(2))
