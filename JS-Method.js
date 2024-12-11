//forEach
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.forEach(function (value, index, number) {
  console.log(value, index, number);
});

//map
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = number2.map(function (value, index, number) {
  return value * value;
});
console.log(result);

//filter
let number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result2 = number3.filter(function (value, index, number) {
  return value % 2 == 0;
});
console.log(result2);

// find method
let arr = [21, 22, 33, 4, 55, 66, 7, 8, 9];
let result3 = arr.find(function (value, index) {
  return value == 8;
});
console.log(result3);
 let indexOfArr= arr.findIndex(function(value){
    return value==8;
 })
 console.log(indexOfArr);


 //sort Method

 let  arr3 =[-20,-3,4,2,5,7,8,9,10,20,32,4,1,23,2,1,0];
 arr3.sort(function(a,b){
    if(a>b){
        return 1;
    }
    else if(a<b){
        return  -1;
        }
        else{
            return 0;
            }


 })
 console.log(arr3);

 let persons = [
    {
        name: 'a',
        age: 20
    },
    {
        name: 'b',
        age: 25
    },
    {
        name:'c',
        age: 10
    },
    {
  
        name:'d',
        age: 15

    }
];

console.log('Persons Details' , persons)
persons.sort(function(a,b){
    if(a.age>b.age){
        return 1;
        }
        else if (a.age<b.age){
            return -1;
        
        }
        else{
            return 0;
        }
})
console.log(' Sorted Persons Details' , persons);
persons.forEach((n)=>{
    console.log('Person Details:')
    console.log( 'Name:',  n.name, 'Age:', n.age);

})


// every Method 
let num = [1, 2, 3, 4, 5, -6 , -7, 8, 9, 10];

let every=num.every(function(value){
    return value%2==0;
})
console.log(every);


// some Method
console.log(num.some( function(value){
    return value<0;
}))



