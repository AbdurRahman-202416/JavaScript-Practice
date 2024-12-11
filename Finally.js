let sum = 0;
try {
  let a = 20;
  let b = 12;
  sum = a + b;
  if (sum < 50) {
    throw new Error("Less Than 50");
  }
} catch (err) {
  console.log("Error: " + err.message);
} finally {
  console.log(`The result of sumation in A+B ${sum}`);
}
