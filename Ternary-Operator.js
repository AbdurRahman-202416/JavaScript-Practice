function evenOdd(n){
    return  n % 2 === 0 ? "even" : "odd";
}

console.log(evenOdd(11));
console.log(evenOdd(12));


let age = 25;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: "Adult"

let isOK=true;
isOK && console.log("e.OK");

let name='Shanto';
let fullname=name || "Abdur Rahman";
console.log(fullname);

