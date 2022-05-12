//function to function this
function fucna(arg1, arg2) {
  this.arg1 = arg1
  this.arg2 - arg2
}
function funcb(arg1, arg2) {
  fucna.call(this, arg1, arg2)
  this.arg3 = 'kei'
}

const funcc = new funcb('Aakash', 'Raj')

console.log(funcc.arg1, funcc.arg2, funcc.arg3)
