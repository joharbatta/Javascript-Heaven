var arr = [1, 2, 4, 8,10, 12];


//arr.reduce((accumulator, currentValue, index, arr)=>{}, initialValue);


// console.log(arr.reduce((acc, currentValue, index, arr)=>{return (acc + currentValue)} , 1));


Array.prototype.myReduce = function (callback, initialValue){
  let accumulator = initialValue;
  for(let index = 0; index< this.length; index++) {
    accumulator = callback(accumulator, this[index]);
  }
  return accumulator;
}


console.log (arr.myReduce((acc, value)=> acc + value, 1));