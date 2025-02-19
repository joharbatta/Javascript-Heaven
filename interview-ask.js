

Round 1: Js Coding (Duration: 60mins)

3-4 Js Output based questions
What is a closure and example
Popular currying problem ( similar to - sum(10,20, 30)(40, 50)() )
Something along the lines of - Write function that takes array of promises and returns [result] after running those promises in series.
Round 2: System Design (Duration: 60mins, extended by 15mins)

Design and implement Event Emitter
System design - Zomato (food delivery consumer website) (20mins)
Round 3: System Design 2 (Duration: 60mins)

3-4 Js Output based questions
Write polyfill for Promise.all()
Youtube Video Player System Design
Custom Redux implementation
Round 4: Hiring Manager + System Design (60mins)

Introductions
System design - Trello (Project Management tool)
Resume / projects discussion
Prev Work done in project




background ?
experience
projects ?
your day to day role? responsibilties you own
what features lead
what you worked on
what tech stack use
rate youself js react
how do you approach perf google page speed score (cls, lcp, fid)
how do you approach debugging / optimixzation
what happens when you type url

  forms/html 

this keyword
what is prototype in js
closure 
what is call stack 
how js engine works
async programming

csr
SSR
csr vs ssr tradeoffs 
Hydration
Nextjs
Biggest challenge faced
caching
optimize frontend
defer vs async
TREE SHAKING
page speed score
webpack
memoization
react usememo vs callback when to user
how do you manage state in application?
useRef
forward ref
what is polyfill
promise.all polyfill
debouncing throtlling - usecase
debouncing vs throtlling
Input:
const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = 2;
throttle(task, count, 2000);

[1,2] // immediately
[3, 4] // after 2 sec
.....
[9, 10] // after 

intersection observer
set timeout
what is call stack
service worker
tailwind

open wakefit is its client side or server side
how you structure your component

fetch? custom hook?

// What is the event loop in JavaScript and how does it work?

// sum(1)(2)(3)(4)..( n)() 

let x = {a:1, b: {c:{v:3}}}
let y = {a:1, b: {c:{v:3}}}

console.log(x==y)
console.log(x===y)
console.log(JSON.stringify(x)==JSON.stringify(y))



// Array.prototype.myReduce = function (callback, initialValue){
//   let accumulator = initialValue;
//   for(let index = 0; index< this.length; index++) {
//     console.log(index,accumulator);
//     accumulator = callback(accumulator, this[index]);
//   }
//   return accumulator;
// }


// -- optimize this

function heavyDuty(index){
    const bigArray=new Array(7000).fill('👋');
    console.log('created');
    return bigArray[index];
}
heavyDuty(888);
heavyDuty(888);
heavyDuty(888);

// -- answer (closure)
// function heavyDuty2(){
//   const bigArray=new Array(7000).fill('👋');
//   console.log('created again');
//     return function(index){
//         return bigArray[index];
//     }
// }
// const heavyOptimized=heavyDuty2();
// heavyOptimized(44);
// heavyOptimized(4400);

// -- what is deboune
// -- debounce vs throttle

const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index" + i);
  }, 3000);
}

// for (var i = 0; i < array.length; i++) {
//   (function (closurei) { //immediate invoke fxn
//     setTimeout(function () {
//       console.log("I am at index" + closurei);
//     }, 3000);
//   })(i); //here we passed i to the fxn 
// }


// sum(1)(2)(3)(4)..( n)() 

Input:
{
  A: "12",
  B: 23,
  C: {
      P: 23,
      O: { L: 56 },
      Q: [1, 2]
  }
}

Output:
{
  "A": "12",
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0": 1,
  "C.Q.1": 2
}

const folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];

// console.log(folders.flat(Infinity));

function flatten(acc, item) {
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
}

result = folders.reduce(flatten, []);

console.log(result);



// --- question 
console.log('start')

const promise = new Promise((resolve,reject)=>{
  console.log(1)
})

promise.then((x)=>console.log('23'))

console.log('end')


// another
// input
var obj = {
  1: ["a", "b", "c", "a"],
  2: ["a", "c"],
  3: ["b", "d"],
};
// output 

// {
// 'a' : [1,2],
// 'b': [1,3],
// 'c': [1,2],
// 'd': [3],
// }


function promiseAll(promiseArray) {
  var count = promiseArray.length;
  var output = [];
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, index) => {
      promise
        .then((res) => {
          // console.log(output.length, index, res)
          output[index] = res;
          // if (output.length == promiseArray.length) {
          //   resolve(output);
          // }
          count--;
          if (count === 0) resolve(output);
          // console.log(--promiseArray.length)
        })
        .catch((err) => reject(err));
    });
  });
}

// let obj = {
//   a: 'a',
//   b: 'b',
//   c: {
//     deep: 'try and copy me'
//   }
// };
// let clone = Object.assign({}, obj); // shallow cloning (if we do like obj.c.deep="new val" the clone.c.deep will also change because shallow)
// let clone2 = {...obj} // shallow cloning
// let superClone = JSON.parse(JSON.stringify(obj)) // deep cloning (inside all objects)

// console.log(obj)
// console.log(clone)
// console.log(clone2)
// console.log(superClone)


  

/*
A job has multiple smaller tasks. Each task is run in multiple machines in parallel.
The start and end time of each machine is captured for that job. 
When all the tasks running in different machines are done, the job is marked as finished.
When one or more tasks fail, they are rerun again after a while in a new set of machines.
Given a job id, calculate the total runtime of all the machines ignoring any idle time in between.


[
{jobId: abc123, machineId: xyz1, startTime: 2024-06-01 12:30, endTime: 2024-06-01 13:30},
{jobId: abc123, machineId: xyz2, startTime: 2024-06-01 12:31, endTime: 2024-06-01 12:45},
{jobId: abc123, machineId: xyz3, startTime: 2024-06-01 11:45, endTime: 2024-06-01 12:15},
{jobId: abc123, machineId: xyz6, startTime: 2024-06-01 15:15, endTime: 2024-06-01 15:45}
{jobId: abc123, machineId: xyz4, startTime: 2024-06-01 13:05, endTime: 2024-06-01 14:00},
{jobId: abc123, machineId: xyz5, startTime: 2024-06-01 15:05, endTime: 2024-06-01 15:30}
]
 */
console.log('Hello world');

let input = [
{jobId: "abc123", machineId: "xyz1", startTime: "2024-06-01 12:30", endTime: "2024-06-01 13:30"}, 
{jobId: "abc123", machineId: "xyz2", startTime: "2024-06-01 12:31", endTime: "2024-06-01 12:45"}, 
{jobId: "abc123", machineId: "xyz3", startTime: "2024-06-01 11:45", endTime: "2024-06-01 12:15"},
{jobId: "abc123", machineId: "xyz6", startTime: "2024-06-01 15:15", endTime: "2024-06-01 15:45"},
{jobId: "abc123", machineId: "xyz4", startTime: "2024-06-01 13:05", endTime: "2024-06-01 14:00"},
{jobId: "abc123", machineId: "xyz5", startTime: "2024-06-01 15:05", endTime: "2024-06-01 15:30"}
];

// "2024-06-01 11:45", endTime: "2024-06-01 12:15"},

// "2024-06-01 12:30", endTime: "2024-06-01 13:30"}
// "2024-06-01 13:05", endTime: "2024-06-01 14:00"},

// {
//     12 : [2]
// }


// input.reduce((acc,curr)=>{
//     endTime =  new Date(curr.endTime)
//     startTime = new Date(curr.endTime)
    
    
    
// },0)

// sorting tasks based on time
// start   end 
// 11:45 -> 12:15
// 12:30 -> 13:30 
// 12:32 -> 12:45
// 15:15 -> 15:45

let tranformInput = input.reduce((acc,x)=>{
    startTime = new Date(x.startTime)
    endTime = new Date(x.endTime)
    acc.push({"startTime":startTime,"endTime":endTime})
    return acc
},[])

let sortedTasks = tranformInput.sort((a,b)=> new Date(a.startTime) - new Date(b.startTime))
// console.log(sorted)

let combine = []
let currentTime = sortedTasks[0]
for(i=1;i<sortedTasks.length;i++){
    
    if(sortedTasks[i].startTime<=currentTime.endTime){
        // console.log(Math.max(currentTime.endTime,sortedTasks[i].endTime))
        currentTime.endTime = new Date(Math.max(currentTime.endTime,sortedTasks[i].endTime))
        // console.log(currentTime.endTime)
    }else{
        combine.push(currentTime)
        currentTime = sortedTasks[i]
    }
      
}
combine.push(currentTime)
console.log(combine)
const runtime=combine.reduce((acc,x)=>{
    
    acc += (x.endTime - x.startTime)
    return acc;
},0)

console.log(runtime)

// 2 40