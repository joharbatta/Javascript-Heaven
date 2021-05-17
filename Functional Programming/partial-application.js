//Partial Application

// Partial application starts with a function. We take this function and create a new one with one or more of its arguments 
// already “set” or partially applied. This sounds odd, but it will reduce the number of parameters needed for our functions.

const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(10, 20)