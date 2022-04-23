//A callback function is simply a function that is passed into another function as an argument
//evenNumbers is callback since it is passed as arguments to filterEvenNumbers

let numbers = [1, 2, 3, 7, 8, 10]
function evenNumbers(number) {
  return number % 2 === 0
}
const filterEvenNumbers = numbers.filter(evenNumbers) //filter() returns array of that consists of numbers matching condition
console.log(filterEvenNumbers) // [2, 8, 10]
