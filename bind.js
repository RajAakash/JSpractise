var obj = {
  property: 'This is value',
}
// func = () => {
//   console.log(this.property)
// }
function func() {
  console.log(this.property)
}
func()

var bindfunc = func.bind(obj)
// var bindfunc = func.bind(obj)

bindfunc()
