setTimeout(() => console.log('Hello'), 1000)

// Hello is alerted repeatedly after every 3 seconds
let timerId = setInterval(() => console.log('Hello'), 3000)

// Clear intervals after 6 sec with the timer id
setTimeout(() => {
  clearInterval(timerId)
  console.log('Bye')
}, 6000)
