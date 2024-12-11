// Basic For loop
var sum = 0;
for (let i = 0; i < 10; i++) {
  sum = i + sum;
}

console.log(sum); // Output: 45
console.log("***************END******************");
// Example: Loop through an array
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("***************END******************");

// While Loop
// Example: Loop through an array using a while loop
let i = 0;
let fruits2 = ["apple", "banana", "cherry"];

while (i < fruits2.length) {
  console.log(fruits2[i]);
  i++;
}
console.log("***************END******************");

// Do-While Loop
// Resetting i to 0 because the previous loop used it.
i = 0;
let fruits3 = ["apple", "banana", "cherry"];

do {
  console.log(fruits3[i]);
  i++;
} while (i < fruits3.length);
console.log("***************END******************");

// For-Of loop in JS (Iterates over array values)
let fruits4 = ["apple", "banana", "cherry"];
for (let fruit of fruits4) {
  console.log(fruit);
}
console.log("***************END******************");

// For-In loop in JS (Iterates over object keys)
let student = {
  name: "Shanto",
  age: 25,
  roll: 19011,
  dpt: "CSE",
};
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
console.log("***************END******************");

// For-Of loop (Iterates over array values)
let fruits5 = ["apple", "banana", "cherry"]; // Fixed the typo in 'cherry'
for (let fruit of fruits5) {
  console.log(fruit);
}
console.log("***************END******************");

// For-In loop (Corrected syntax of student3 object)
let student3 = {
  name: "Shanto",
  age: 25,
  roll: 19011112,
  dpt: "CSE",
};
for (let key in student3) {
  console.log(`${key}: ${student3[key]}`);
}
console.log("***************END******************");

// For-Of loop (Iterates over array values)
let fruits6 = ["apple", "banana", "cherry"];
for (let fruit of fruits6) {
  console.log(fruit);
}
console.log("***************END******************");

// ForEach loop
let fruits7 = ["apple", "banana", "cherry"];
fruits7.forEach((fruit, index) => {
  console.log(fruit, index);
});
console.log("***************END******************");

// Map loop in an array (Store the result from the map method)
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10]

console.log("***************END******************");

// Filter method in an array (Added return statement in the filter function)
let numbers2 = [1, 2, 3, 4, 5];
let evenNumbers = numbers2.filter((number) => number % 2 === 0); // Corrected: Added return statement
console.log(evenNumbers); // Output: [2, 4]
console.log("***************END******************");

// Reduce method in array
let numbers3 = [1, 2, 3, 4, 5];

let total = numbers3.reduce((sum, num) => sum + num, 0);
console.log(total); // Output: 15
console.log("***************END******************");

// Some() and Every() Loops
let numbers4 = [1, 2, 3, 4];
// Check if there is any number greater than 3
let someCheck = numbers4.some((num) => num > 3);
console.log(someCheck); // Output: true

// Check if all numbers are greater than 0
let everyCheck = numbers4.every((num) => num > 0);
console.log(everyCheck); // Output: true
