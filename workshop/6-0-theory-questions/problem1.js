// Given the following functions, answer the questions below.

function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}

function reverseString(str) {
    const splitString = str.split(""); // var splitString = "hello".split("");
    const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); 
}

// Expand each of the following and get the result of the expression
// Q1
square(decrement(square(decrement(3))));

// The answer is 9

// Q2
decrement(decrement(square(square(3))));

// The answer is 79

// Q3
duplicateString(reverseString("hello"));

// The answer is olleholleh

// Q4
reverseString(duplicateString(duplicateString("foo")));

// The answer is oofoofoofoof

