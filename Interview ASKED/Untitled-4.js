// // Scenario
// // Imagine you are working on a web application for a news website. This website allows users to browse through various articles. To improve the performance of the application and reduce server load, you decide to implement a client-side cache for storing recently viewed articles. However, since the cache has limited space, you need to use an LRU (Least Recently Used) cache eviction policy to ensure that the least recently accessed articles are removed when the cache reaches its capacity.

// // Problem Statement
// // You need to implement an LRU cache with the following operations:

// // get(articleId):
// // put(articleId, articleContent):

// // var lru_cache = {

// // }

// class LRUcache {
//   constructor(capacity){
//     this.cache = new Map();
//     this.capacity = capacity
//   }
//   get(key){
//     const data = this.cache.get(key)
//     if(!data){
//       return "Data not found"
//     }
//     this.cache.delete(key)
//     this.cache.set(key,data)
//     return data;
//   }
//   put(key,content){
//     this.cache.set(key,content)
//     if(this.cache.size>this.capacity){
//       // console.log(this.cache.keys().next().value)
//       this.cache.delete(this.cache.keys().next().value)
//     }
//   }
// }

// const lru = new LRUcache(3);
// lru.put(1,"johar")
// lru.put(2,"johar1")
// lru.put(3,"johar3")
// lru.put(4,"johar3")
// lru.put(5,"johar5")
// lru.put(3,"johar6")
// // 4 5 3
// console.log(lru)
// console.log(lru.get(3))
// console.log(lru.get(32))

// async function foo1() {
//   return new Promise ((resolve, reject) => {
//     console.log('promise 1');
//     setTimeout(function() {
//       console.log('setTimeout 1')
//       resolve()
//     }, 10);
//   })
// }
// async function foo2() {
//   return new Promise ((resolve, reject) => {
//     console.log('promise 2');
//     setTimeout(function() {
//       console.log('setTimeout 2')
//       resolve()
//     }, 10);
//   })
// }
// async function main() {
//   await foo1()
//   await foo2()
// }
// main()

// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');

function newPromise(fxn) {
  this.value = null;
  this.state = "pending";

  const resolve = (value) => {
    this.state = "fulfill";
    this.value = value;
  };

  const reject = (value) => {
    this.state = "reject";
    this.value = value;
  };

  fxn(resolve, reject);
}

const promise = new newPromise((resolve, reject) => {
  resolve("3");
});

console.log(promise);
