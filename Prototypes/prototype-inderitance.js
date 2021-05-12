// we can borrow method via bind also but if we want to have multiple methods then we can do prototype inheriatnce

let dragon = {
  name: 'Drake',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}

// we can borrow sing() from other object via bind but in case of mutiple like fire we dont have
// const lizardFire =dragon.sing.bind(lizard)
// console.log(lizardFire())

//then will use prototype inheriatnce

lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard);
console.log(lizard.fire)
console.log(lizard.sing())


for(let prop in lizard){
    console.log(prop);
}
// name
// fight
// fire
// sing
for(let prop in lizard){
    if(lizard.hasOwnProperty(prop)){
        console.log(prop);
    }
}
// name
// fight



//Every Prototype chain links to a prototype object{}
function multiplyBy5(num) {
  return num*5
}

//       Object
//  Array     Function

// when we create mutiplyby5 func we have __proto__ that links upto the function protype and fxn __proto__ get links to base Object prototype
// mutiplyby5 prototype,__proto__---------->Function prototype-->__proto__--->Object prototype--->__proto__--->null

// __proto__------->Prototype
multiplyBy5.__proto__
Function.prototype
multiplyBy5.__proto__.__proto__
Object.prototype
multiplyBy5.__proto__.__proto__.__proto__
typeof Object
typeof {}