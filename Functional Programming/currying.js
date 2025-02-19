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

let sumnew = (a) => (b) => b ? sum(a + b) : a;



----------------------------------------------------------------

y=0
function sum(...args){
   if(!args.length>0) return 0
  return function(...x){
    if(x.length)
      return sum(...x,...args)
    else
      return args.reduce((acc,x)=>x+acc,0)
  }
}

console.log(sum(10,20,30)(30,30)())


const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();

console.log(res, res2, res3, res4, res5, res6);



----------------------------------------------------------------

function sum(a, b, c, d) {
    return a + b + c + d;
  }
  
  const curry = function(func){
    return function(...args){
      storage = [...args]
      if(storage.length===func.length)
       return func(...storage)
      func2 = function(...args2){
        if(args2.length){
          storage.push(...args2)
          return curry(sum)(...storage)
        }
      }
      return func2
  
    }
    
  }
  
  
  
  let curriedSum = curry(sum);
  console.log(curriedSum(1,2,3,4));
  console.log(curriedSum(1)(2,3)(4));
  console.log(curriedSum(1)(2)(3)(4));
  
  // 10
  // 10
// 10
  


---------------------------------------------


const add = function(...args){
    // ... your code goes here
    sum = [...args]
    y = function(...args2){
      sum = [...sum,...args2]
      return y
    }
    y.value = function(){
      return sum.reduce((x,a)=>x+a,0)
    }
    y.valueOf = y.value
    return y
  }
  
  // console.log(add(1)(2).value()); 
  
  console.log(add(1)(2).value() == 3); 
  console.log(add(1, 2)(3).value() == 6); 
  console.log(add(1)(2)(3).value() == 6); 
  console.log(add(1)(2) + 3);
  
  // Output:
  // true
  // true
  // true
  // 6