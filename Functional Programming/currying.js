///currying 
// Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.
// In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function 
// that takes the second one and returns a new function which takes the third

const multiply = function(a){
    return function(b){
        return a*b;
    }
}
//short form
const curriedMultiply = (a) => (b) => a * b

curriedMultiply(5)(20)
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(20)

// sum(1)(2)(3)(4)..( n)() Amazon interview UI question

let sum=function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }else{
            return a;
        }
    }
}
console.log(sum(10)(20)(30)(40)(50)())

//short form

let sumnew=(a)=>(b)=> b ? sum(a+b) : a;