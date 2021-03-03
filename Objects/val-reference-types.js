// Value types (Primitives) 
//are copied by value
Number
String
Boolean
Symbol
undefined
null

// Reference types
//are copied by reference
Object
Function
Array

let x = 10;
let y = x;
x = 20;
console.log(x, y);

// so in case of object d will store reference of c because its object

let c = {value: 10};
let d = c;
c.value = 20;
console.log(c, d); // 20,20


// so it got copied in fxn 
let num = 10;
function increase(num) {
  num++;
}
increase(num);
console.log(num); //10


// here local obj will point to what we are passing due to reference 

let obj = {value: 10};

function increase(obj) {
  obj.value++
}
increase(obj);
console.log(obj) //11
