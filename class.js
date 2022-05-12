class Human {
  constructor(name) {
    this.name = name
  }
  display() {
    console.log(this.name)
  }
}

class Person extends Human {
  constructor(name, age) {
    super(name, age)
    this.age = age
  }
  displayage() {
    console.log(this.name, this.age)
  }
}
const human = new Human('Ram')
human.display()

const person = new Person('Hari', '20')
person.displayage()
