// String Conversion

let value = true;
let string = value.toString();
let number = 10;
// let  stringNumber = number.toString();
let  stringNumber = String(number);
console.log(stringNumber);
console.log(string);


// Numeric Conversion

let str='123';
let num = Number(str); 
console.log(num);
// let num = parseInt(str);
// let num = parseFloat(str);
console.log(typeof num);
console.log(typeof str);

// Boolean to number  conversion

console.log(Number(true), Number(false));
console.log(Number('123'), Number('abc'));



