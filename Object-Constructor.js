function Person ( name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
    console.log(`Hello ${name} are You  ${age} years old and live in ${city}`);
}
let personDetails=new Person('shanto',20,'dhaka')
let value= Object.values(personDetails).map((value)=>{console.log('Person'+value)})

// let  p1=new person('John',25,'New York');
// console.log(p1.age)
// // let p2 = person('shanto',20,'Dhaka' )
// // console.log(p2)
// console.log(new person('s',2,'sa'))
