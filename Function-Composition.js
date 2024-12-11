function print(inp) {
  console.log(inp);
}

function multiply(n) {
  return n * 5;
}
function add(a, b) {
  return a + b;
}
print(multiply(add(3, 5)));
// function Composition


//add(3, 5) returns 8.
// multiply(8) returns 8 * 5 = 40.
// print(40) logs 40 to the console.

// function add(n){

//   return function(p){
//     return n +p;
//   }

// }
// let sum = add(10);
// console.log(sum(20));