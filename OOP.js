

//Encapsulation
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

//Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying   
   in grade ${this.grade}`);
  }
}

// Polymorephism
function greet(person) {
  person.greet();
}

const person1 = new Person("Alice", 30);
const student1 = new Student("Bob", 25, 12);

greet(person1); // Output: Hello, my name is Alice
greet(student1); // Output: Hello, my name is Bob



//Abstraction

class Car {
  start() {
    // Complex implementation details
    console.log("Car started");
  }
}

const car = new Car();
console.log(car);
car.start(); 
