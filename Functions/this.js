//this defination - this is the object that function is a property of
// give methods acess to their object
function a(){
  console.log(this);
}
a();
//window object will console because
window.a(); //is what we are doing actually so fxni property of window obj thats why this is window obj here

const obj = {
  name: 'Billy',
  sing: function() {
    return 'llala ' + this.name + '!' // this is object that sing is property of
  },
  singAgain: function() {
    return this.sing() //excute same code multiple time
  }
}

function importantPerson() {
  console.log(this.name)
}

const name = 'Sunny';
const obj1 = { name: 'Cassy', importantPerson: importantPerson}
const obj2 = { name: 'Jacob', importantPerson: importantPerson}

obj2.importantPerson()

// --------------------

const a = function() {
  console.log(this)
  const b = function() {
    console.log(this)
    const c = {
      hi: function() {
     console.log(this)
    }}
    c.hi()
  }
  b() // window.a(b())
}

a() // window.a()

//JS is weird:
const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) // in this case, it's a method on an object.
    var anotherFunc = function() {
      console.log(this)// this points to windows!
    }
    anotherFunc(); //obj.sing(anotherFunc())
  }
}
obj.sing();

// ---------------------------

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

// so this will result and error as this console.log(this) is pointing to window obj 

//this keyword account depends on how the the fxn is called not like where it is written
//to solve another func points to this we can use arrow fxn as it gonna lexically bound this where it is present 

const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) 
    var anotherFunc = ()=> {
      console.log(this)
    }
    anotherFunc(); 
  }
}
obj.sing();


// new binding
function Person(name, age) {
  this.name = name;
  this.age =age;
  console.log(this);
}

const person1 = new Person('Xavier', 55)

//implicit binding
const person = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi' + this.name)
  }
}

person.hi()

//explicit binding
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    console.log('hi' + this.setTimeout)
  }.bind(window)
}

person3.hi()

// arrow functions
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    var inner = () => {
      console.log('hi ' + this.name)
    }
    return inner()
  }
}

person4.hi()
