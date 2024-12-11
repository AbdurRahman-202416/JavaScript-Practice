let obj={
    a:1,
    b:2,
    c:3,
    d:4,
    e:2,
    f:3,
    g:3,
    h:4,
};
 let del=delete obj.b;
 console.log(del);
console.log(obj);

//way to check equality of tow object 
let obj1={
    a:1,
    b:2,
}
let  obj2={ 
    a:1,
    b:2,
}
if (obj1.a== obj2.a && obj1.b== obj2.b){

    console.log("obj1 and obj2 are equal");
}
else{
    console.log("obj1 and obj2 are not equal");
}

//another Way to check equality of two objects...

console.log(JSON.stringify(obj1)== JSON.stringify(obj2));
 
for (  let i in obj){
 console.log(i);
console.log(obj[i]);

}
// show object key using Object .keys() method

console.log(Object.keys(obj)); 
// show value  of object using Object.values() method

console.log(Object.values(obj));
//show  key and value of object using Object.entries() method

console.log(Object.entries(obj));

// Create a new object  using Object.assign() method

let objnew=Object.assign({}, obj)
objnew.a=200;
console.log(objnew);


