// console.log(sum(2)(3,4)(4,5,6)())

// function sum(...args){

//   return function(...args2){

//       if(args2.length>0){
//         return sum(...args,...args2)
//       }else{
//         return args.reduce((acc,x)=>acc+x,0)
//       }
//   }
// }


//  0 1 2 3

//  2 10 - 12 
//  2 7
//  3 7
//  7

// arr = [3,2,7,10]
// sum = 0
// for(i=0;i<arr.length;i++){
//   for(j=i;j<arr.length;j++){
//     if(i!==j){
//       if(i+1!==j){
//         sum = Math.max(sum,arr[i] + arr[j])
//       } 
//     }  
//   }
// }

// console.log(sum)


[1,2,3,3,4,5,5,5]


// [[1,2,3,4,5],[3,5],[5]]

// iterate over elements 
// push into array
// check if existing there put into another array
// move on


arr = [1,2,3,3,4,5,5,5]

output=[]
function array1Dto2D(arr){
  result = []
  temp = []
   for(i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
      result.push(arr[i])
    }else{
      temp.push(arr[i])
    }
   }
   output.push(result)
   if(temp.length>0){
    x = array1Dto2D(temp)
   }
   return result
}

array1Dto2D(arr)
console.log(output)


how image cls (webp)
web workers
tree shaking
js dom
ways of rendering
dynamic import 


Tree shaking
Js engine 
Macro 
Mucro queuque
Call stack 
How flow goes

Websocket
If websocked failed

Temporal dead zone
Code split lazyload
Different rendering strategies 

How microfrontend






class A{

  // companion obejct{
  //   const val x = 33
  // }
   obejct{
    const val x = 33
  }
  fun test()
}

valr ref = A()
ref.test()
// A.x

valr ref1 = A()
ref1.test()