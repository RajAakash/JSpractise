function closure1() {
  var a = '1'
  return function closure2() {
    return a, '2'
  }
}
console.log(closure1()())
