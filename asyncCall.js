function greet() {
  console.log(`Hello world!`)
}

function sayName(name) {
  console.log(`Hello ${name}!`)
}

// Calling the function
setTimeout(greet, 2000)
sayName('Oliver')

// Output:
// Hello Oliver!
// Hello world!
