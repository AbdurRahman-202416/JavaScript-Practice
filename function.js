// let  date = new Date()
// let year = date.getFullYear()
// console.log(date,year);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let arr3 = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

let sum = 0;

function sumOfArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfArr(arr);
sumOfArr(arr2);
sumOfArr(arr3);

function test() {
  console.log(arguments); //arguments
}
test(10, 20, 30);

function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
addAll(10, 20, 30, 40, 50, 60,  70, 80, 90, 100);
addAll( 70, 80, 90, 100);




// 1) if a function not return  anything then it will return undefined by default.
// 2) if a function not return anything then you don't store  the return value in any variable then it will not throw any error. 
// 3) if a function not return anything then you store the return value in any variable then it  will throw an error. 


