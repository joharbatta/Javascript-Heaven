

// // // // // // // // // function hi () {
// // // // // // // // //   var a = 'hello'
// // // // // // // // // }

// // // // // // // // // hi()

// // // // // // // // // console.log(a)

https://jsviz.klve.nl/#?code=GYewTgBAFANgpgFwgSwiYEDaAGANARlwCYBdASggG8AoCCAYxADsBnJAQwgF4IAiR1kmQsIAIxgh6AawC0LRgAc4AE14BuWhHhJR3PtpQj2MFiDETpcxSvWaAbu0j09vB5GERgAVyb0EyZgB6AHMJUWMrECVVDQBfIA

// // // // // // // // let x = 'fog'
// // // // // // // // function first() { //gc
// // // // // // // //  console.log(x)
// // // // // // // // }
// // // // // // // // x = 'pog'
// // // // // // // //  function second() {
// // // // // // // //    let x = 'rog' // lc
// // // // // // // //   first()
// // // // // // // // }
// // // // // // // // second()

// // // // // // // // // rog

// // // // // // // outerFunction()()
// // // // // // // var x
// // // // // // // function outerFunction () {
// // // // // // //     console.log(x)
// // // // // // //     var x = 10
// // // // // // //     return function () {
// // // // // // //         console.log(x)
// // // // // // //     }
// // // // // // // }
// // // // // // // console.log(x) 
// // // // // // // // not initalized 
// // // // // // // // undefined

// // // // // // const hello = 'hello'
// // // // // // hello[3] = 'r'
// // // // // // console.log(hello) 
// // // // // // // error : not an array tryyinf yo mod


// // // // // var a = 10;

// // // // // setTimeput(()=>,3000)

// // // // // console.log('dfwf')

// // // // const promise = new Promise((resolve, reject) => {
// // // //   console.log(1);
// // // //   setTimeout(() => {
// // // //     console.log("timerStart");
// // // //     resolve("success");
// // // //     console.log("timerEnd");
// // // //   }, 0);
// // // //   console.log(2);
// // // // });
// // // // promise.then((res) => {
// // // //   console.log(res);
// // // // });
// // // // console.log(4);;

// // // // // 1 2 4 
// // // // // timerStart
// // // // // success
// // // // // timerEnd



// // // console.log('start');

// // // const promise1 = Promise.resolve().then(() => {
// // //   console.log('promise1');
// // //   const timer2 = setTimeout(() => {
// // //     console.log('timer2')
// // //   }, 0)
// // // });

// // // const timer1 = setTimeout(() => {
// // //   console.log('timer1')
// // //   const promise2 = Promise.resolve().then(() => {
// // //     console.log('promise2')
// // //   })
// // // }, 0)

// // // console.log('end');;


// // // // start 
// // // //end 
// // // // promise1 
// // // // timer1
// // // // timer2 
// // // // promise2



// // setTimeout(() => {
// // console.log("setTimeout-called");
// // }, 0);

// // async function foo(name) {
// //   console.log(name, "start");
// //   await console.log(name, "middle");
// //   console.log(name, "end");
// // }

// // foo("First");
// // foo("Second");

// // console.log("ended");

// // // ended
// // // first start 
// // // first end
// // // first middle

// // // second start 
// // // second end
// // // second middle

// // // setTimeout-called



// // Write a function flatObject which takes an object as an input and  returns the flattened object as shown below:



// const target = {
//   field1: 1,
//   field2: undefined,
//   field3: "value",
//   field4: {
//     child: "child",
//     child4: "child4",
//     child2: {
//       child3: "child2"
//     }
//   }
// };

// // is object preffix field4. 

// function flat(output,target,prefix){
//   Object.entries(target).map(([key,value])=> {
//     if(typeof value==='object'){
//       flat(output,value,prefix ? key : )
//     }else{
//       output[prefix+'.'+key]=value
//     }
//   }                  
// )
//   return output
// }

// function flatObject(target) {
//   output = {}
//   prefix = ''
//   console.log(flat(output,target,prefix))
// }


// // {
// //   field1: 1,
// //   field2: undefined,
// //   field3: "value",
// //   "field4.child": "child",
// //   "field4.child4": "child4",
// //   "field4.child2.child3": "child2"
// // };

// console.log(flatObject(target));


// You are given an array containing only the integers 0, 1, and 2. Write a function to sort this array in ascending order.



// Input:
// arr = [0, 1, 2, 1, 0, 2]
// Output:
// [0, 0, 1, 1, 2, 2]

arr = [0, 1, 2, 1, 0, 2]

// 0: 2
// 1: 2
// 2 : 2

function sortColors(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}

function sort(arr){
  left = 0
  right = arr.length-1

  while(left<right){
    if(arr[left]<arr[right]){
      left++;
    }else{
      // swap
      x = arr[left]
      arr[left] = arr[right]
      arr[right] = x
      right--;
      // left++;
    }
  }
  console.log(arr)
}
sort(arr)
// left=0
// right=2

// left<right
// fine move left
// else 
// swap

// 0 1 2 1 0 2

// 0 0 2 1 1 2
// 0 0 1 1 2 2
