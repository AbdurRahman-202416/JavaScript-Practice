// Error Hnadling Using if -else

function Change(vlaue) {
  let result = parseInt(vlaue);

  if (!result) {
    console.log("Enter a valied number");

    return "please provide a value which is able to convert in integer";
  }
  return result;
}
console.log(Change(20.3));
console.log(Change("shahhad"));

console.log("Try Catch  Here");

// Error Hnadling  Using try-catch
function Change2(vlaue) {
  try {
    let result = parseInt(vlaue);

    return result;
  } catch (error) {
    console.log("Enter a valied number" + error.message);

    return "Please provide a value which is able to convert in integer";
  }
}
console.log(Change2(20.3));
console.log(Change2("shahhad"));

// using try -catch

function makeWords(text) {
  try {
    let srt = text.trim();
    let word = srt.split(" ");
    return word;
  } catch (err) {
    console.log("Error: " + err.message);
    console.log(
      `You are  trying to split a string that is not a string: ${text} This Input Value Type of  = ${typeof text}.`
    );

    return "Error: unable to split the text";
  }
}

console.log(makeWords("Hello i am shanto Ahamed "));
let newWord = makeWords(83429);

console.log(newWord);

// Custom Error message
function createCustomError(message, name = "CustomError") {
  const error = new Error(message);
  // const  customError = new Error(name)

  error.name = name;
  return error;
}

try {
  let a = 30;
  // ... some code ...
  if (a > 10) {
    throw createCustomError(
      "Something went wrong, This is Custom Error",
      "This is Error Name "
    );
  }
} catch (Error) {
  console.error(`Error   ${Error.name} ${Error.message}`);
}

