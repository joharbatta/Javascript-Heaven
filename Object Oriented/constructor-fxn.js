// to use constrcutor fxns we need to use new keyword also use fxn name first letter captial so others can know

 //Constructor Functions\
//everytime we use new keyword the cosntrcutor fxn gonna run
//  Only Functions have prototype property but constructor fxns only use that properly like line no 12

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() { 
  return 'atack with ' + this.weapon
}
const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'bow');
sam.attack()

peter.prototype // undefined because its object only fxns have access to prototype