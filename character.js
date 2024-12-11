let name = "santosheikhsesasasasasasasasas";
let name2 = "";

for (let i = 0; i < name.length; i++) {
  console.log(name.at(i));
  console.log("^");

  if (name[i] == "s") {
    name2 += name[i];
  }
}

// let counter = 0;
// let temp = true;
// while (temp) {
//   console.log("Looping forever...");
//   counter++;
//   console.log(counter);
//   if (counter === 20) {
//     temp=false; // Break the loop after 10 iterations
//   }
// }

console.log(name2);
console.log(name2.length);
