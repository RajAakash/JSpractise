// const num = [1, 2, 3, 4]
// const num1 = [...num, 5]
// console.log(num1)

// const numb = [num, 5]
// console.log(numb)

// const person = {
//   name: 'Aakash',
// }
// const person1 = {
//   ...person,
//   mname: 'Raj',
// }
// console.log(person1)

const filter = (...args) => {
  return args.filter((el) => el === 1)
}
console.log(filter(1, 2, 3))
