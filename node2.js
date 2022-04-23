// Write a function createBase
function createBase(a) {
  return function addSix(b) {
    return a + b
  }
}

var addSix = createBase(6)

console.log(addSix(10)) // Should return 16
console.log(addSix(21)) // Should return 27
