// run promises in sequence

const asyncTask = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time);
  });
};

// create an array of task
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

function executor(promises) {
  promises.reduce((acc, x) => {
    return acc.then(() => {
      return x.then((g) => console.log(g));
    });
  }, Promise.resolve());
}

// const executePromise = async (promises) => {
//   let promiseOutput=[];
  
//     for (let i = 0; i < promises.length; i++) {
//       let res = await promises[i]
//       console.log(res)
//       promiseOutput.push(res)
//     }
    
//     return promiseOutput
//   }
  

// async function executor(promises) {
//   for (const promise of promises) {
//     console.log(promise)
//     const result = await promise;
//     console.log("sds");
//   }
// }

executor(promises);

function myPromiseAll(tasks) {
  output = [];
  var completed = 0;
  return new Promise((resolve, reject) => {
    tasks.map((x, index) => {
      x.then((res) => {
        output[index] = res;
        completed++;
        if (completed === tasks.length) {
          resolve(output);
        }
      }).catch((err) => reject(err));
    });
  });
}
