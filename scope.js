let x = 100;
function print() {
  let x = 20;
  console.log(x);
}
print () ;

// Global scope
let globalVar = "I am a global variable";

function outerFunction() {
    // Function scope
    let outerVar = "I am an outer variable";

    function innerFunction() {
        // Inner function scope
        //**nasted Scope **
        let innerVar = "I am an inner variable";

        console.log(globalVar); // Accessible
        console.log(outerVar);   // Accessible
        console.log(innerVar);    // Accessible
    }

    innerFunction();

    console.log(globalVar); // Accessible
    console.log(outerVar);   // Accessible
    // console.log(innerVar); // Un-commenting this line will cause an error because innerVar is not accessible here
}

outerFunction();

// console.log(outerVar); // Un-commenting this line will cause an error because outerVar is not accessible here



//lexical  Scope nasted scope same 

