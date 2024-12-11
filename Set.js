let set= new Set([1, 2, 3, 4, 5, 6,7, 8, 9, 10]);
console.log(set);
set.add(100);
console.log(set)
console.log(set.size)

let a =  [1, 2, 3, 4, 5];
let set2 = new Set(a);
set2.add(200);
set2.has(20)
console.log(set2.has(200))
console.log(set2);

// let set = new Set();

// async function getdata() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/photos');
//         const value = await res.json(); 
      
//         value.forEach(item => set.add(item));
           
//     } catch (err) {
//         console.log(err);
//     }
// }
// getdata().then(()=>{
//     console.log(set.size);
// })

// setTimeout(() => {
//     console.log(set.size)
// }, 3000);


let keys = set.keys();
console.log(keys.next())
console.log(keys.next())
