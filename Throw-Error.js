try {
  console.log(`I am Line 1`);
  console.log(`I am Line 2`);
  throw new Error(" i am Error");

  console.log(`I am Line 3`);

} catch (err) {
  console.log(err.message);
}

try {
  for (let i = 0; i < 5; i++) {
    if (i == 4) {
      throw new Error("I=4");
    } else {
      console.log(`The Loop Increment by ${i + 1}`);
    }
  }
} catch (err) {
  console.log(`The error message: ${err.message}`);
}

