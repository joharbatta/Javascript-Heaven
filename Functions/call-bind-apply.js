//call - used to invoke fxn directly by passing ref which points to this of that method where we use call
//apply - same as call take 2nd arg as array
//bind- same as call but dont excute it gives a fxn copy to invoke later
//helps all three in function borrowing , multiple inhearitance
const wizard = {
  name: 'Merlin',
  health: 100,
  heal: function(num1, num2) {
    this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 50
}

wizard.heal.call(archer, 50, 60)
//wizard.heal.apply(archer, [20, 30])
console.log(archer)
// function borrowing

// const healArcher = wizard.heal.bind(archer, 50, 60);
// console.log(archer)
// healArcher()
// console.log(archer)

// ================================================================

function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo);

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

// --------------------

const array = [1,2,3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr){
  return Math.max.apply(this, arr);  
}

console.log(getMaxNumber(array));

let argsToArray=function(){
  console.log(arguments);
  console.log([].slice.call(arguments));
};
argsToArray(1,2,3,4);

// ---------------------------------

let myObj={
  asyncGet(cb){
    cb();
  },
  parse(){
    console.log('parse called');
  },
  render(){
    this.asyncGet(function(){
      console.log(this); //-------------
      this.parse();
    });
  }
};
myObj.render(); 

// solution -1 -------------- use arrow fxn (it works lexically not how fxn got called)
 //render(){
  // this.asyncGet(()=>{
  //     console.log(this); //-------------
  //     this.parse();
  //   });
   //}

// sol 2 ----------------- save this
  // render(){
  //   that=this;
  //   this.asyncGet(function(){
  //     console.log(this); //-------------
  //     that.parse();
  //   });
  // }

// -- sol 3--------- bind this

// render(){
//     this.asyncGet(function(){
//       console.log(this); //-------------
//       this.parse();
//     }.bind(this));
//   }


// -------------------------------------------------

Function.prototype.defer = function(ms) {
  let f = this; // so this is function(a,b)
  return function(...args) {
    console.log(this) //window object
    setTimeout(() => f.apply(this, args), ms);
  }
};

// check it
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // shows 3 after 1 sec


//------------------------------------

// call polyfill
Function.prototype.myCall = function(context={},...args){
  context.fn = this;
  context.fn(...args);
}

// call polyfill
Function.prototype.myBind = function(context={},...args){
  context.fn = this;
  return function () {
    return  context.fn(...args);
  }
}


//bind using call and apply (closure and prototype)

Function.prototype.bind = function(obj){
    var fxn=this;
     console.log(fxn);
    // return function(){
    //     return fxn.apply(obj,arguments);
    // }
     return function(...args){
         console.log(args,...args);
        return fxn.call(obj,...args);
    }
}

const obj={
    name:"johar",
    getname(a,b){
       return this.name+a+b;
    }
}

const obj1={
    name:"charu",
}

console.log(obj.getname.bind(obj1)(1,2));