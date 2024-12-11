export const randomNumber = Math.floor(Math.random() * 15);
//  for(let i= 0; i<15; i++){
//     const randomNumber = Math.floor(Math.random() * 15);
//     console.log(`Random number is ${randomNumber} and i=${ (i+1)}`);
//  }

console.log(randomNumber);

export const sum = (a, b) => a + b;
console.log(sum(10, 20));
export default sum;
