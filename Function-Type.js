// pure function

function add(a, b) {
  return a + b;
}
add(10, 20);
console.log(add(10, 20));

// First-class Function

function sum(a, b) {
  return a + b;
}
// 1 first class function can be stored in a variable
let sum2 = sum;

console.log(sum2(10, 30));
console.log(typeof sum2);
//2 function can be stored in a variable

let arr = [];
arr.push(sum2);
console.log(arr);
console.log(arr[0](3, 3));


// ***higher Order Function**
// higher order function is a function that takes another function as an argument or returns a function as a  result.
// map is a higher order function  it takes a function as an argument and returns a new array  with the results of applying this function on every element in the original array.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// filter is a higher order function it takes a function as an argument and returns a new array with  all the elements that pass the test implemented by this function.
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(number => number % 2 === 0);
console.log(evenNumbers); 
  


// reduce is a higher order function it takes a function as an argument and returns a single value by  applying this function on every element in the array. 

const numbers3 = [1, 2, 3, 4, 5];
const sum1 = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum1);
