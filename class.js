class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name + ", I am " + this.age +' Year Old.');
  }
}
const person1 = new Person("Shanto ", 26);
const person2 = new Person("Abdur Rahman", 25);

person1.greet();
person2.greet();
