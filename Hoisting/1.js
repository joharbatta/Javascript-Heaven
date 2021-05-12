// The JavaScript engine before parses the code before executing and during the parsing phase it shifts all the variable declaration 
// to the top of the scope. This behavior of the JS engine is called hoisting.

//  The important distinction between variable hoisting and function hoisting is that a var variable is hoisted and then auto-initialized
//  to undefined whereas a function declaration is hoisted and initialized to its function value.

var fav="creta";
var car=function(){
    console.log("fav car "+fav);
    var fav="audi";
    console.log("new fav car "+fav);
};
car();
// hoisting happens every execution context any time we run a function a new execution context gets created 
// we have to go through creation and execution phase again
console.log(car());

// ==============================================

// Function hoisting only applies to formal function declarations and not to function expression assignments. 
// Consider:

greeting(); // TypeError: greeting is not a function

console.log(greeting); // undefined

var greeting = function greeting() {
  console.log("Hello!");
};
// The function expression assignments behave very much like variable hoisting

// let and cost are hoisted js engine knoews aabout them but throw error 
// The JS engine doesn't allow us to access the variables declared with let and const before they are declared. 
// This is called Temporal Dead Zone.

// The var declarations are hoisted and initialized with undefined.
// The formal function declarations are hoisted and initialized with their function reference.
// let and const variables are hoisted too but they cannot be accessed before their declarations. This is called Temporal Dead Zone.

//https://dev.to/anku/are-let-and-const-hoisted-4kbi