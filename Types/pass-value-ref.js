
// Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values. 
// (You can make a variable name point to a new value, but the previous value is still held in memory.

// pass by value (all primitive(immutable))
var a = 5;
var b = a;
b++;
console.log(a,b); // 5,6


// pass by ref (array and objects(non-primitive)(mutable)) in memory it only gonna points if we assign to variablle

var c = [1,2,3];
var d = c;
d.push( 4 );

console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]



let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};
let clone = Object.assign({}, obj); // shallow cloning (if we do like obj.c.deep="new val" the clone.c.deep will also change because shallow)
let clone2 = {...obj} // shallow cloning
let superClone = JSON.parse(JSON.stringify(obj)) // deep cloning (inside all objects)

obj.c.deep = 'hahaha';
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)


var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = user1 == user2;
console.log(eq); // gives false

// tricky case ---------------------------------------------------------------------

const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    console.log(arguments)
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
     console.log(arguments)
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); 
console.log(string);
console.log(obj1.value);

// In Pass by value, function is called by directly passing the value of the variable as an argument.
//  So any changes made inside the function does not affect the original value. whenIn Pass by value, 
// parameters passed as an arguments create its own copy. 
// So any changes made inside the function is made to the copied value not to the original value .

// In Pass by Reference, we are mutating the original value. when we pass an object as an arguments and update that object’s reference 
// in the function’s context, that won’t affect the object value. But if we mutate the object internally, It will affect the object .

// https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/
