// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a 
//different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. 
// If you cannot achieve any profit, return 0. 
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5

prices = [7,1,5,3,6,4]

// 7-1
// 7-5
// 7-3

// 7 7

// min = 1 

// max = 4
min = Infinity
maxprofit = 0;

for(let i=0;i<prices.length;i++){
 
  min = Math.min(min,prices[i])
//   console.log(min)
  let profit = prices[i] - min
//   console.log(profit,"profit",prices[i])
  
  maxprofit = Math.max(maxprofit,profit)

  
}
console.log(maxprofit)



const test = {
  name: "johar"
}

function user(arg){
  console.log(this.name,arg)
}

user.bind(test,1)


// bind polyuf\\

function.prototype.myBind = (...args)=>{
  const fxn = this;
  return function(...args1){
    
    console.log(args,args1)
//     return fxn.call()
    
    
  }
  
}

user.myBind(test,1)


(function immediateA(a) {
 return (function immediateB(b) {
   console.log(a); 
 })(1);
})(0);



