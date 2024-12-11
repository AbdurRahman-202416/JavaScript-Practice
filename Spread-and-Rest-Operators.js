let number = [1, 2, 3, 4, 5];
let number2 = [...number, 6, 7, 8, 9];

console.log(number2);
console.log(number);

let student = {
  name: "shanto",
  roll: 2221,
  age: 20,
};
let newStudent = { ...student, Dpt: "CSE" };
console.log(newStudent);

function sum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3));

//   Rest Operator

function myFn(a, b, ...arr) {
  // console.log(arguments);
  console.log(arr);
  console.log(a, b);
}
myFn(1, 2, 3, 4, 5, 6, 7, 8, 9);

function sum(...num) {
  return num.reduce((acc, cur) => acc + cur, 0);
}
console.log("rest oparation");
console.log(sum(1, 2, 3, 4, 5, 6, 7));

let student1 = {
  name: "shanto",
  roll: 2221,
  age: 20,
  id: 1001,
};
let obj = { ...student1 };

console.log(obj);

let a = [];
function sum(...number) {
  a = number;
  console.log(a);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
a.forEach((e, index, arr) => {
  console.log(e + index);
});

let x = a.find((e) => {
  return e > 8;
});
console.log(x);
let filter = a.filter((e) => {
  return e % 2 == 0;
});
console.log(filter);

// let num2 =[1, 2,3,4,5,6,7,8,9];
console.log(...a);
