let view;

function initialize() {
  view = "dfdf";
  let count;
  return function () {
    if (count == 1) {
      return;
    } else {
      count = 1;
      console.log("view has been created");
    }
  };
}
let runOnce = initialize();
runOnce();
runOnce();
//now it will run only once because due to clousre we know about count and we sucessfully set to 1 first time
// now when next time we run fxn it knows that count is 1

// ------------------------------------------------------

const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index" + i);
  }, 3000);
}
// Output
// I am at index4
// I am at index4
// I am at index4
// I am at index4

// but this is not we expected

// 1 sol
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index" + i);
  }, 3000);
}
// we changed from var to let in loop and it worked because let is block scoped earlier it is in global scope
//because when settimeout going to run at that time loop executed and value set to 4 thats why issue
//now with let it will bound seperately
// Output
// I am at index0
// I am at index1
// I am at index2
// I am at index3

//2nd solution (save in var)
for (var i = 0; i < array.length; i++) {
  (function (closurei) { //immediate invoke fxn
    setTimeout(function () {
      console.log("I am at index" + closurei);
    }, 3000);
  })(i); //here we passed i to the fxn 
}
//so what we did wrapped the settimeout in fxn and make it immediate invoke and passed i and in fxn recieved closurei
