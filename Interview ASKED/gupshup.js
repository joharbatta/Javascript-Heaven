// deep clome
// var obj = {
//   a:1,
//   b:{
//     c:1,
//     d: {
//       j:1
//     }
//   }
// }

// var newObj = obj

// console.log(obj)
// different phases of react lifescyle


// console.log(newObj)


const a1 = [1,2,3,4]
const a2 = [3,4,5,6]

// [3,4]

// result = []

const res = a1.filter(x=>a2.includes(x))
console.log(res)

// for(i=0;i<a1.length;i++){
//   if(a2.includes(a1[i])){
//     result.push(a1[i])
//   }
// }
// a1.map((x)=>a2.inclues(x))
// console.log(result)




var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


var x = function sum(a: number,b: number) : number{
   return a+b
}

function name(a:string){
  return a
}



var tuple = [[1], [2], [3]]
callback vs promises
tuple in typescipt
any vs unknowm typecscipt
grid vs flexbox
nth child vs nth typeo css
.parent+.child (css mixers combinators)

interface person {
  name: string,
  age: number
  phone_number: number
}

var obj : person = {
  name : "johar",
  age: 

}

new Set([1,2,3,1]) 
Shweta Sharma
4:23 PM
console.log(1 +  "2" + "2"); 
console.log(1 +  +"2" + "2"); 
console.log(1 +  -"1" + "2"); 
console.log(+"1" +  "1" + "2"); 
console.log( "A" - "B" + "2"); 
console.log( "A" - "B" + 2);
You
4:25 PM
122
122
2
You
4:26 PM
112
12
3

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

function App() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
   const listItems = names.map((name) => <li>{name}</li>);
   return <ul>{listItems}</ul>;
}


import React, { useState, useRef } from 'react';

export function App(props) {
  const [count, setCount] = useState(0);
  let timerRef = useRef(null);

  const handler = action => {
    // let ref = null;
    if (action === 'start') {
      console.log('hereee');
      timerRef.current = setInterval(() => setCount(x => x + 1), 1000);
    }
    if (action === 'pause') {
      console.log('reste', timerRef);
      clearInterval(timerRef.current);
    }
    if (action === 'reset') {
      clearInterval(timerRef.current);
      setCount(0);
    }
  };

  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <button onClick={() => handler('start')}>Start</button>
      <button onClick={() => handler('pause')}>Pause</button>
      <button onClick={() => handler('reset')}>Reset</button>
    </div>
  );
}

// Log to console
