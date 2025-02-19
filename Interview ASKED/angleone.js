


// arr = [0,1,0,1,0,0,1,1,1,0]
// n = 2


// 0 1 0 1 0

// -> left = 0 

// 0 1 0 1

arr = [0,0,0,1,0,1,1,1,1,0]
n = 1
// arr = "0010110", k = 1

0_1

0111111110011111011111

  
  
function longest(arr){
  let maxLength = 0
  let length = 1
  for(let i=1;i<arr.length;i++){
    if(arr[i]===arr[i-1]){
      length++
    }else{
      maxLength = Math.max(maxLength,length)
      length = 1
    }
  }
  console.log(length,maxLength)
  return maxLength
  
}

console.log(longest(arr))

// function longest(arr){
  
//   let left=0;
//   let countZero = 0
//   let maxLength = 0
  
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//       countZero++;
//     }
//     while(countZero){
//       if(arr[left]===0){
//         countZero--;
//       }
//       left++;
//     }
//     length = Math.max(maxLength,i - left+1)
//   }
//   return length
  
  
// }

// function longest(arr,n){
  
//   let left=0;
//   let countZero = 0
//   let maxLength = 0
  
//   for(let i=0;i<arr.length;i++){
    
//    for()
//     if(arr[i]==0){
//       countZero++;
//     }
//     while(countZero>n){
//       if(arr[left]===0){
//         countZero--;
//       }
//       left++;
//     }
//     length = Math.max(maxLength,i - left+1)
//     console.log(i,left,length)
//   }
//   return length
  
  
// }
// console.log(longest(arr))


// 0,0,1,0

// i = 4 
