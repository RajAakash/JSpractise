function sum(a, b) {
  return a + b
}
var result = sum.call(this, 19, 1)
console.log(result)
