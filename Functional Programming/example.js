//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

const user = {
  name: "Johar",
  active: true,
  cart: [],
  purchases: [],
};

const history = [];

//implemeted custom for debugging 
Array.prototype.myReduce = function (callback, initialValue = this[0]) {
  //  console.log(callback())
  let accumulator = initialValue;
  if (accumulator == this[0]) {
    for (let index = 1; index < this.length; index++) {
      console.log(accumulator, this[index], index);
      accumulator = callback(accumulator, this[index]);
      console.log(accumulator);
    }
  } else {
    for (let index = 0; index < this.length; index++) {
      accumulator = callback(accumulator, this[index]);
    }
  }
  return accumulator;
};



const compose = (f, g) => (...args) =>  f(g(...args));
// const compose1 = (...functions) => (args) =>  functions.reduceRight((arg, fn) => fn(arg), args);

console.log(
  purchaseItem(
    emptyCart,
    buyItem,
    applyTax,
    addItemToCart
  )(user, { name: "laptop", price: 300 })
);

// function purchaseItem(user,item){
//     return Object.assign({},user,{purchases:item})
// }

// function purchaseItem(...fxns){
//     return fxns.reduce((f,g)=> (...args) => f(g(...args)))
// }

function purchaseItem(...fxns) {
  // return fxns.reduce((f,g)=> (...args) => f(g(...args)))
   //return fxns.reduce(compose);
  return fxns.myReduce(function (f, g) {
    console.log("run");
    return function (...args) {
      console.log(args, f, g);
      return f(g(...args));
    };
  });
}

function addItemToCart(user, item) {
  history.push(user)
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTax(user) {
    history.push(user)
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
    history.push(user)
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
    history.push(user)
  return Object.assign({}, user, { cart: [] });
}
