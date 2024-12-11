let map = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 30],
]);

for(let [v,k] of map){
    console.log(`first ${v} ${k}`);
}
map.forEach((k,v)=>{
    console.log(v ,k);
})
// add
map.set("d", 20);
map.set("e", 20);
// delete by using key
map.delete("e");
console.log(map.size);

console.log(map);

// Creating a Map object
const myMap = new Map();

// Adding key-value pairs
myMap.set("name", "Alice");
myMap.set(10, "ten");
myMap.set({ a: 1 }, "object key");

// Retrieving values
console.log(myMap.get("name")); // Output: Alice
console.log(myMap.get(10)); // Output: ten
console.log(myMap.get({ a: 1 })); // Output: object key (Note: object comparison)

// Checking if a key exists
console.log(myMap.has("name")); // Output: true
// Getting the size of the Map
console.log(myMap.size); // Output: 2

// Iterating over key-value pairs
for (const [key, value] of myMap) {

  console.log(key, value);
}
