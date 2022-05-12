function func(a) {
  return function funca(b) {
    return a + b
  }
}
console.log(func(1)(2))
