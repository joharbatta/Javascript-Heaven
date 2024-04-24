const promise1 = Promise.resolve(3);
// const promise2 = Promise.resolve(4);

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 3000, 'rejected');
// });

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "foo");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1500, "promise4");
});

const promisesArray = [promise4, promise3, promise1];

// Promise.all(promisesArray).then((res) => console.log(res)).catch(err => console.log(err));

// 3
// promise4
// foo

// EnhancedComponent = HOC(component);

// <EnhancedComponent />
// function composition;

// const enhancedFunction = compose(f1,f2....fn)
// enhancedFunction(value);

// compose(f1,f2...,fn)(value);

const addTen = (x) => x + 10;
const square = (x) => x * x;

// compose(addTen, square, square, addTen)(20) = 810010;

function compose(...args) {
  return function (x) {
    return args.reduce((acc, arg) => arg(acc), x);
  };
}

console.log(compose(addTen, square, square, addTen)(20));

// function promiseAll (promiseArray) {
//  output={};
//   return new Promise((resolve, reject) => {

//     promiseArray.forEach((promise,index)=>{

//       // console.log(promise)
//       promise.then((res) => {
//         output[index]=res;
//         if(index==promiseArray.length-1){
//           resolve(output);
//         }
//       })
//       .catch(err => reject(err));
//       // if(index==promiseArray.length-1){
//       //   resolve(output);
//       // }

//     });

//   });
// }

// promiseAll(promisesArray).then((res) => console.log(res)).catch(err => console.log(err));

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


const myPromiseRace = function(promiseArray){
  
  var output=[]
  var count = promiseArray.length;
  return new Promise((resolve, reject) =>{
     promiseArray.forEach((promise, index) => {
       Promise.resolve(promise)
        .then(resolve, reject) // resolve, when any of the input promise resolves
        .catch(reject); // reject, when any of the input promise rejects
     })
  });
  
}




var obj = {
  1: ["a", "b", "c", "a"],
  2: ["a", "c"],
  3: ["b", "d"],
};

// console.log(Object.keys(obj).map((x,index)=>{

//   return obj[x].reduce((acc,arg)=>{

//     // console.log(acc,arg,index)

//     if(Array.isArray(acc[arg])){
//        acc[arg]=acc[arg].push(index)
//     }else{
//        acc[arg]=[].push(index)
//     }

//     return acc;

//   },{})

//   console.log(obj[x],index)
// }))

console.log(
  Object.keys(obj).reduce((acc1, x) => {
    obj[x].reduce((acc, arg) => {
      if (arg in acc) {
        if (!acc[arg].includes(x)) acc[arg].push(x);
      } else {
        acc[arg] = [x];
      }
      return acc;
    }, acc1);
    return acc1;
  }, {})
);

// console.log(obj)

// {
// 'a' : [1,2],
// 'b': [1,3],
// 'c': [1,2],
// 'd': [3],
// }

// sum(2)(4)(5)() = 11

function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}

console.log(sum(2)(4)(5)(6)(7)());

// var test=5;

function a() {
  console.log(test);
  const test = {};
  test.a = 5;
}

a();








-------------------------------------------------------------------------------


Component1 GET: lookup/customer/customerId response customer 
Component2 GET: lookup/user/userId reponse: user

POST: lookup/id
body: {

  user: [1,2,3],
  customer: [1,2,3],
}




0ms -- apiCall(lookup/customer/2);
100ms -- apiCall(lookup/user/1);
110ms --- apiCall(lookup/customer/3);
120ms --- apiCall(lookup/user/2);

1000ms

{

    api_1: {
        request,
        response
    },
    api_2: {
        request,
        response
    }
}

function throttle(fxn, delay) {
    let flag = true;
    let params = {};

    return function (arg,cb) {
        // params = [...params, ...args];
        params[args]=cb

        if (flag) {
            resp=fxn(reduceToParams(params))
            cb(resp)
            params=[]
            flag = false;
            setTimeout(() => flag = true, delay)
        }
    }
}

var ap=throttle(apicall(x),300)
ap('lookup/customer/2')
ap('lookup/user/3')
ap('lookup/customer/3')
ap('lookup/customer/3')


{
    lookup / customer / 2;
    lookup / user / 3
    lookup / customer / 3'
    lookup/customer/3'
}
{

    user: [1,2,3],
    customer: [2,3],
}

api_resp = fetch('api/s', params).then(() => {
    
});



user = 1, 2 & customer=2, 3

function reduceToParams(params) {
 return Object.keys(params).reduce((acc, x) =>
        acc = x + "=" + params[x] + "&";
            return acc;
    , '')
}

100ms
lookup

Component1: customer
Component2: user


lookup/generic-user?user=1,2&customer=2,3&retail=3

var=1000

function api(request) {
    

    query_params['user'] = request.params(user)
    query_params['customer'] = request.params(customer)


    user_db_query = 'select * from user where id in {' + query_params['user'] + "}"
    
    customer_db_query = 'select * from customer where id in {' + query_params['user'] + "}"

    result=db_query_raw(user_db_query,customer_db_query)
    

    return Response

    {

        user: [{

        }
            , {

            }]
        customer: [{

        }, {
            
        }]

    }



}