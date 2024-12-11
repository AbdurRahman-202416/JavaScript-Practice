// WeakSet is a data structure in JavaScript that stores unique objects.

let a = { a: 20 };
let b = { b: 10 };
let weakset = new WeakSet([a, b]);
a = null;
console.log(weakset.has(a));
console.log(weakset.has(b));

// window.confirm("hello")
//Remember that the primary purpose of WeakSet is to manage object references and prevent memory leaks. It's a powerful tool for efficient memory management in JavaScript.
//WeakSet is a collection of objects, where each object is stored as a key. The key  is the object itself, not a reference to it. This means that if the object is garbage collected , it will be automatically removed from the WeakSet.


//WeakMap is another data structure in JavaScript that stores key-value pairs.
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

let weakMap = new WeakMap();
weakMap.set(obj1, "Hello, Alice!");
weakMap.set(obj2, "Hello, Bob!");

console.log(weakMap.get(obj1)); // Output: Hello, Alice!
// Remove a key-value pair
weakMap.delete(obj2);

// Try to access the size or iterate over entries (not possible)
console.log(weakMap.size); // Output: undefined
