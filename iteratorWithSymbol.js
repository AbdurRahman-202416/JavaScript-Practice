let arr=[1,2,3,4,21,23,45,56,33];
let iterate=arr[Symbol.iterator]()

for(let  i=1; i<= arr.length ; i++){
    console.log(`the value of index Number - ${i}`)
    console.log(iterate.next().value); 
}
console.log(iterate.next().value); 
console.log(iterate.next().value); 
console.log(iterate.next().value); 
console.log(iterate.next().value); 
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());



// result

// 1
// 2
// 3
// { value: 4, done: false }
// { value: 21, done: false }
// { value: 23, done: false }
// { value: 45, done: false }



let srt= 'TEXT';
let itar=srt [Symbol.iterator]();
console.log( itar.next(srt))
console.log( itar.next(srt))
console.log( itar.next(srt))

let str = 'shanto Ahamed';
let a = 'a'; // Define the character to search for

for (let value of str) {
    let v = value;
    if (v == a) {
        console.log('found  '+v);
    } else {
        console.log(value);
    }
}

