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
