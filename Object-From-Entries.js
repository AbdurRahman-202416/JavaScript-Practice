'use strict';
let obj={
    a:10,
    b:20,
    c:30

}

// Object.entries
// jeson/object to Array 

let arr= Object.entries(obj);
console.log(arr);
console.log(Object.entries(arr));

//Array to Obj
var objArr=[
    ['a',10],
    ['b',20]

];
console.log(Object.fromEntries(objArr));
let num=[1,2,3,4,5,6,6,7,8,1];
let entries= num.map((n)=>[n,n]);
console.log(entries)

console.log(Object.fromEntries(entries));



