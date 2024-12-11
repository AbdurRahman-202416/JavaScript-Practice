// // // for(let i = 1 ; i<=10; i++){
// // // if (i==5){
// // //     console.log(i);
// // //     i=1;
// // // }
// // // else{
// // //     console.log('last'+ i);
// // //     let number = '123';
// // //  console.log(Number(number));
// // //  let name =  'shanto ';
// // //  console.log(name);
// // // }

// // // }

// // // var hoistingIntro = "Hi there, I am a string one.";
// // // function hoistingFunc() {
// // // 	console.log(hoistingIntro);
// // // 	var hoistingIntro = "Hi there, I am a string two";
// // // 	console.log(hoistingIntro);
// // // }

// // // hoistingFunc();
// // // //  TypeError: hoistedFunEx is not a function

// // // function hoistedFunEx(sum) {
// // //     console.log(sum);
// // // }

// // // function s() {
// // //     let sum = 10 + 10;
// // //     hoistedFunEx(sum);
// // //     return sum;
// // // }
// // // s()

// // // function a() {
// // //   b()
// // //   console.log("a function is called");
// // // }
// // // function b() {

// // //     setTimeout(() => {
// // //         console.log('After b call 3 sec');
// // //     }, 3000);
// // //   c()
// // //   console.log("b function is called");
// // // }
// // // function c() {

// // //     d()
// // //     setTimeout(() => {
// // //         console.log('After c call 3 sec');
// // //     }, 3000);
// // //   console.log("c function is called");
// // // }
// // // function d() {
// // //     setTimeout(() => {
// // //       a()
// // //     }, 3000);
// // //   console.log("d function is called");
// // // }

// // // a()

// // function makeCounter() {
// //   let count = 0; // `count` is a private variable

// //   return function() {
// //       count += 1;
// //       return count; // Inner function has access to `count`
// //   };
// // }

// // const counter = makeCounter();
// // for(let i =0 ; i<5;i++){
// //   console.log(counter());
// // }
// // console.log(counter()); // Output: 1
// // console.log(counter()); // Output: 2
// // console.log(counter()); // Output: 3

// // function test() {
// //   let str = "i am learning javaScript";
// //   console.log('This is parent  function');

// //   return function () {
// //     console.log(str);
// //   };

// // }

// // console.log(test());
// // let innerFn=test();
// // innerFn();

// // const calculator = (function() {
// //   let total = 0; // Private variable

// //   return {
// //       add: function(value) {
// //           total += value;
// //           return total;
// //       },
// //       subtract: function(value) {
// //           total -= value;
// //           return total;
// //       },
// //       reset: function() {
// //           total = 0;
// //           return total;
// //       },
// //       getTotal: function() {
// //           return total;
// //       }
// //   };
// // })();

// // console.log(calculator.add(5));       // Output: 5
// // console.log(calculator.subtract(2));  // Output: 3
// // console.log(calculator.getTotal());   // Output: 3
// // console.log(calculator.reset());      // Output: 0

// // Recurcive fn

// // function febonacci(n) {
// //   if (n === 0) {
// //     return 1;
// //   } else {
// //     let result = n + febonacci(n - 1);
// //     console.log(result);
// //     return result;
// //   }
// // }
// // console.log(febonacci(8));

// function fb(number) {
//   let a = 0,
//     b = 1;
//   let result;

//   for (let i = 0; i <= number; i++) {
//     if (i === 0) {
//       result = a;
//     } else if (i === 1) {
//       result = b;
//     } else {
//       result = a + b;
//       a = b;
//       b = result;
//     }
//     console.log(result); // Print the current Fibonacci number
//   }
// }
// fb(5);
// // function fb(number) {
// //     let result = [];
// //     result[0] = 0; // F(0)
// //     result[1] = 1; // F(1)

// //     console.log(result[0]); // Print F(0)
// //     console.log(result[1]); // Print F(1)

// //     for (let i = 2; i <= number; i++) {
// //       result[i] = result[i - 1] + result[i - 2];
// //       console.log(result[i]);
// //     }
// //   }

function OuterFunction() {
  let x = 2;
  let y = 3;
  function sum() {
    let add = x + y;
    return add;
  }
}
let value = OuterFunction()
console.log(<li class=" breadcrumb-item active"><a href="Link">Library</a></li>);
