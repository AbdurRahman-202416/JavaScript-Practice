// return one to other function 
function greet(msg) {
    function greeting (name) {
        return msg + ','+ name +'!';
        
    }
    return greeting ;

    
}
// call the function with a message and a name 
let gm=greet('Good Morning ')
let gn=greet('Good Night')
let  gs=greet('Good Evening')
let hello=greet('Hello ')
console.log(gm('Shanto'));
console.log( gn('Shanto'));
console.log(gs('Abdur Rahman'))
console.log(hello('abdur rahman'))


// Example for return funcion Another function  inside a function 


function base(b){
    function power(n){
        let result=1;
        for(let i=0; i<b;i++){
            result*=n;
        } 
        return result ;
    }

   
return  power ;

}
// call the function with a base and a power
let b1=base(2);
let b2=base(3);
let b3=base(4);
console.log(b1(5),b2(10),  b3(15));

