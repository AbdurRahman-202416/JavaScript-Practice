// Primitive: string, number, boolean, null, undefined, symbol
// Non-Primitive: object, array, function

let isValid = true;              // boolean
let score = 95;                  // number
let student = { name: "Abdur Rahman",
               age: 20,
               roll:19011 } ;     // object
let subjects = ["Math", "English"];  // array

console.log('He Is A Student '+ isValid+' ,Her Score '+ score +', Her name: '+ student.name  +', Age :'+student.age+' ,Roll :'+ student.roll+' ,Subject: '+ subjects[0],subjects[1]);
