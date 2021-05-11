// functions are basically special type of objects which is callable and has few propertied like(call,apply,bind,args)

//High order fxns 

//  A Higher-Order function is a function that receives a function as an argument or returns the function as output.


const giveAccessTo = (name) => 'Access Granted to ' + name;

function authenticate(person) {
  let array = [];
  // you can add checks here for person.level
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function letPerson(person, fn) { // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

function sing(person) {
  return 'la la la my name is ' + person.name
}

letPerson({level: 'user', name: 'Tim'}, sing) //passing fxn as parameter (high order)


// -----------------------------------------------------

const multiplyBy = (num1) => {
  return function (num2) {
    return num1 * num2;
  }
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)

// ------------------------------------------

const multiplyByNew=(num1)=>(num2)=> num1*num2 ;

console.log(multiplyByNew(2)(4));
multiplyByNew(2)(8);