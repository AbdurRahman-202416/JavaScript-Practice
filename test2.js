// // // function greed(cback) {
// // //   let name = "shanto";
// // //   let msg = "hello ";
// // //   cback(name, msg);
// // // }

// // // function print(name, msg) {
// // //   console.log(` ${msg} ,  ${name}`);
// // // }

// // // greed(print);

// // function outerFn (){
// //   let a ="shanto";

// //   function print(){
// //     console.log(a);
// //   }
// //   a="hello"
// //   return print;
// // }

// // let value = outerFn();
// // value();

// // // function makeAdder(x) {
// // //   return function (y) {
// // //     return x + y;
// // //   };
// // // }

// // // const add5 = makeAdder(5);
// // // const add10 = makeAdder(10);

// // // console.log(add5(2)); // 7
// // // console.log(add10(2)); // 12

// // function add (){
// //   value=0;
// //   console.log(value)

// // }
// // add()

// // console.log(value)

// console.log(2**3);

let a = 20;
let b = 30;
function add() {
  return function print() {
    return a + b;
  };
}

const sum = add();
console.log(sum());















