function sayHi(n) {
  if (n == 0) {
    return
  }
  else{
     console.log("Hii.. !");

  }
// This is Recursive function call 
// for --n dcrement 1; look like loop without any  loop .

  sayHi(n - 1);
}
let shanto ='hello';
// Function Call 
sayHi(10);


//another Example 
function sum(n){
    if (n == 1) {
        return 1;     
    }
    return n+sum(n-1);
}
console.log(sum(5));



function factorial(n) {
    if (n === 0) { 
      return 1;
    } else { 
      return n * factorial(n - 1);
    }
  }

//   5* (4*(3*(2*(1*(1)))))

  
console.log(factorial(10)); 
  





