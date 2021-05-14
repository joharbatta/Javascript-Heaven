// factory function
function createElf(name, weapon) {
  //we can also have closures here to hide properties from being changed.
  return {
    name: name,
    weapon: weapon,
    attack() {
      return 'atack with ' + weapon
    }
  }
}
const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');

sam.attack()

//this is not best because when if we have mutiple createElf we have to store same method mutiple times in memory


// -------------------------------------optimized method

const elfFunctions = {
  attack: function() {
    return 'attack with ' + this.weapon
  }
}

function createElf(name, weapon) {
  //Object.create creates __proto__ link
  let newElf = Object.create(elfFunctions) //so newElf __proto__ points to createElf methods and propeties
  newElf.name = name;
  newElf.weapon = weapon
  return newElf
}


const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');
sam.attack()

// before Object.create() we use CONSTRUCTOR fxns 