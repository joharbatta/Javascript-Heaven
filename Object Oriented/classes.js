//es6 class 

//everytime we use new keyword the cosntrcutor fxn gonna run thats why we didnt add attack() method because waste of memmory
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

const fiona = new Elf('Fiona', 'ninja stars');
var jatt={...fiona} // the attack method wont come to jatt as fiona __proto__ wont come when we clone
console.log(fiona instanceof Elf) // 
const ben = new Elf('Ben', 'bow');
fiona.attack()

// typeof Elf
// "function"
//behind scenes its also a function and same prototype things work thi class is just syntactic sugar