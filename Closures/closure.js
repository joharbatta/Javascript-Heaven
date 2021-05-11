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

