let verifyEquals = require('../../assets/verify-equals');

// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line. 
// This means you'll have to insert a newline \n character after every 40 characters in the input string. 
// If the next character after a cut is a space, then do not display it. 

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
//      Lorem ipsumos dolor sit amet consectetur
//      adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing

function f(str) {
  const charArray = str.split("");
  let newString = "";

  for (let index = 0; index < charArray.length; index++) {
    if (index % 40 === 0 && index !== 0) {
      newString += "\n";
      if (charArray[index] !== " ") newString += charArray[index];
    } else newString += charArray[index];
  }
  console.log(newString.length);
  return newString;
}

// Test cases
let inputs = [
  "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam",
  "Lorem ipsum dolor sit amet, consectetuer adipiscin"
];
let outputs = [
  "Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam",
  "Lorem ipsum dolor sit amet, consectetuer\nadipiscin"
];

console.log(outputs[0].length);

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
