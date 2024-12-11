let person = {
  name: "shanto",

  email: "exampole@gmail.com",
  id: 202020,
};
let { name, email, id } = person;
console.log(name);
console.log(email);
console.log(id);

let person2 = {
  name2: "shanto",
  email2: "example@gmail.com",
  id2: 202020,

  address: {
    city: "Dhaka",
    street: "shantinagar",
    zip: 1200,
  },
};

let {
  name2,
  email2,
  id2,
  address,
  address: { city, street, zip },
} = person2;
console.log(city, address);
console.log(street);

//    array destructing

let arr = [1, 2, 3, 4, 5, 6, 7];
// let [a,b,c,d,e,f,g]=arr;
// console.log(a,b,c,d,e,f,g)

let [a, b, , , , , g] = arr;
console.log(a, b, g);

let student = {
  // Stname:'shanto',
  age: 20,
  marks: {
    math: 80,
    science: 90,
    english: 70,
  },
};
let { Stname, age, marks: { math, science, english } = {} } = student;
console.log(Stname, age, math, science, english);

let number = [1, 2, 3, [4, 5], 6, 7];
let [x, y,, [, z]] = number;
console.log(x, y, z);

