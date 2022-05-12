const obj1 = {
  name: 'Aakash',
  prop: function func() {
    console.log(this)
  },
}
console.log(obj1)
const obj2 = obj1 //reassign garda pointer assign hunxa
obj1.prop()
obj2.name = 'Raj'
obj2.prop()

const obj3 = {
  ...obj1,
}
obj2.name = 'Dha' //Change garna khojyo vane change hudaina
console.log(obj3)
