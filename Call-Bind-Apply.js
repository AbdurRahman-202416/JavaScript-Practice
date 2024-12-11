//Call Method

function myFunction(c,d){
    console.log(this.a+this.b + c + d);
}
myFunction();
// call
myFunction.call({a:20,b:25},20,10);
// apply
myFunction.apply({a:30,b:20},[10,5]);
//bind
 let result = myFunction.bind({a:20,b:10})
 result(10,5);


 let person1={
    name:'Bob',
    sayHi:function(){
        console.log('Hi '+  this.name);
    }
 };
 let  person2={
    name:'Shanto',
};
person1.sayHi.call(person2);


function add(x, y) {
    return x + y;
  }
  
  const add5 = add.bind(null, 5); 
  const result2 = add5(3); 
  console.log(result2);
