var detail = {
  name: 'Aakash',
  mname: 'raj',
}

function greet() {
  console.log(`My name is ${this.name} and ${this.mname}`)
}
greet()
greet.apply(detail) //func.bind(obj)
