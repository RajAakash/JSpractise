const numbers = [1, 2, 3]

console.log([...numbers, 4])
console.log([0, ...numbers])

//adding before specific index
const index = numbers.indexOf(2)

// console.log('After a index', numbers.slice(index))
// console.log('Before index', numbers.splice(0, index))
console.log('Final numbers', numbers)

const newNumbers = [...numbers.slice(0, index), 4, ...numbers.slice(index)]
console.log(newNumbers)
