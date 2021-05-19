

fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(50) //Right to lext
pipe(fn3, fn2, fn1)(50)//left to right

const compose = (f, g) => (a) => f(g(a))
const pipe = (f, g) => (a) => g(f(a))
const multiplyBy3AndAbsolute = compose((num) => num*3, Math.abs)
console.log(multiplyBy3AndAbsolute(-50))


const users = [
  { name: "Jeff", age: 14 },
    { name: "Jack", age: 18 }, 
    { name: "Milady", age: 22 },
]
const filter = (cb, arr) => arr.filter(cb);
const map = (cb, arr) => arr.map(cb);

map(u => u.name, filter(u => u.age >= 18, users)); //["Jack", "Milady"]

// lets do this with compose ----------------------------

const filter = cb => arr => arr.filter(cb);
const map = cb => arr => arr.map(cb);

const compose1=function(...fxns){
    return function(args){
        return fxns.reduceRight((arg,fn)=> fn(arg),args)
    }
}

const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);
const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);
compose(map(u => u.name),filter(u => u.age >= 18))(users)

// MapReduce with function composition


// https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj