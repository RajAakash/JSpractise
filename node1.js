// Code Segment 1
var obj1 = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id)
    }, 10)
  },
}

// Code Segment 2
var obj2 = {
  id: 42,
  counter: function counter() {
    console.log(this)
    var that = this
    setTimeout(function () {
      console.log(that)
    }, 10)
  },
}

obj1.counter() // output - ? -->
obj2.counter() // output - ? -->
