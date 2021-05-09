let user1 = {
 a: '4',
  b: '5',
  c: {
    deep: 'try and copy me',
    test:{
        "apple":"iphone",
    }
  }
};

let user2 = {
  a: '4',
  b: '5',
  c: {
    deep: 'try and copy me',
    test:{
        "apple":"iphone",
    }
  }
};

function deepEqual(x, y) {
    console.log(typeof x,typeof y)
  return (x && y && typeof x === 'object' && typeof y === 'object') ?
    (Object.keys(x).length === Object.keys(y).length) &&
      Object.keys(x).myReduce(function(isEqual, key) {
          console.log(isEqual,key,x[key],y[key])
        return isEqual && deepEqual(x[key], y[key]);
      }, true) : (x === y) ;
}

// function deepEqual(x, y) {
//       console.log(typeof x,typeof y);
//   const ok = Object.keys, tx = typeof x, ty = typeof y;
//   return x && y && tx === 'object' && tx === ty ? (
//     ok(x).length === ok(y).length &&
//       ok(x).every(key => deepEqual(x[key], y[key]))
//   ) : (x === y);
// }

Array.prototype.myReduce = function (callback, initialValue){
  let accumulator = initialValue;
  for(let index = 0; index< this.length; index++) {
    console.log(index,accumulator);
    accumulator = callback(accumulator, this[index]);
  }
  return accumulator;
}

console.log(deepEqual(user1,user2));


function deepCompare () {
  var i, l, leftChain, rightChain;

  function compare2Objects (x, y) {
    var p;

    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
         return true;
    }

    // Compare primitives and functions.     
    // Check if both arguments link to the same object.
    // Especially useful on the step where we compare prototypes
    if (x === y) {
        return true;
    }

    // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes
    if ((typeof x === 'function' && typeof y === 'function') ||
       (x instanceof Date && y instanceof Date) ||
       (x instanceof RegExp && y instanceof RegExp) ||
       (x instanceof String && y instanceof String) ||
       (x instanceof Number && y instanceof Number)) {
        return x.toString() === y.toString();
    }

    // At last checking prototypes as good as we can
    if (!(x instanceof Object && y instanceof Object)) {
        return false;
    }

    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
        return false;
    }

    if (x.constructor !== y.constructor) {
        return false;
    }

    if (x.prototype !== y.prototype) {
        return false;
    }

    // Check for infinitive linking loops
    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
         return false;
    }

    // Quick checking of one object being a subset of another.
    // todo: cache the structure of arguments[0] for performance
    for (p in y) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
            return false;
        }
        else if (typeof y[p] !== typeof x[p]) {
            return false;
        }
    }

    for (p in x) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
            return false;
        }
        else if (typeof y[p] !== typeof x[p]) {
            return false;
        }

        switch (typeof (x[p])) {
            case 'object':
            case 'function':

                leftChain.push(x);
                rightChain.push(y);

                if (!compare2Objects (x[p], y[p])) {
                    return false;
                }

                leftChain.pop();
                rightChain.pop();
                break;

            default:
                if (x[p] !== y[p]) {
                    return false;
                }
                break;
        }
    }

    return true;
  }

  if (arguments.length < 1) {
    return true; //Die silently? Don't know how to handle such case, please help...
    // throw "Need two or more arguments to compare";
  }

  for (i = 1, l = arguments.length; i < l; i++) {

      leftChain = []; //Todo: this can be cached
      rightChain = [];

      if (!compare2Objects(arguments[0], arguments[i])) {
          return false;
      }
  }

  return true;
}