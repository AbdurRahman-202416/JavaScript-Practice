// var a=10;

// setTimeout(function(){
   
//     console.log("hello")
// },8000)


let Sum=function(a,b){
 return a+b;
}
console.log(Sum(10,20));

//it's called function  expression  
let addFn=Sum;
console.log(addFn(10,20));


//scop  of a function 

console.log('Scop Start');

let a = 10;

function outer() {
    // var a=100;
    function  inner(){
        // var a =200;
        console.log(a);

    }

    console.log(a);
    inner()
}
outer()


function test(n){
    function a(){
        return  n%3==0;
    }
    function b(){
        return n%5==0;
    }
    if (a(n) && b()){
        console.log("FizzBuzz");
    }
}
test(15);





