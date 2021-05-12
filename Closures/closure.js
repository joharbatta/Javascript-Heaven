//closure is simply combination of function() + lexical scope where it is declared

function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

a()()();

// ------------------------------------------------------------
//closures and higher order function
function boo(string) {
  return function(name) {
    return function(name2) {
      console.log(`hi ${name2}`)
    }
  }
}
boo('hi')('xd')('johar');

// --------------------------------------------------

const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`)


booString = boo2('sing');
booStringName = booString('xd');
booStringNameName2 = booStringName('johar')

// ------------------------------------------------------------
function callMeMaybe() {
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
    const callMe = 'Hi!';
}

callMeMaybe();

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