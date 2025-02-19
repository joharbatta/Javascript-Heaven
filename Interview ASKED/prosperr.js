// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].
// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


// function searchTarget(arr,target){
//   startIdx=0
//   endIdx=arr.length-1
//   result=[]
//   if(arr.length<=0){
//     return [-1,-1]
//   }
//   while(startIdx<=endIdx){
//   if(arr[startIdx]===target){
//     result[0] = startIdx
//   }else{
//     startIdx++;
//   }
//   if(arr[endIdx]===target){
//     result[1] = endIdx
//   }else{
//     endIdx--;
//   }
//   if(startIdx==endIdx-1 && result.length==0){
//     return [-1,-1]
//   }
// }
//   return result
// }

// arr = [5,7,7,8,8,10]
// target = 8
// console.log(searchTarget(arr,target))
  

// arr1 = [5,7,7,8,8,10]
// target1 = 6
// console.log(searchTarget(arr1,target1))

// arr1 = []
// target1 = 6
// console.log(searchTarget(arr1,target1))


// arr1 = [3,0]
// target1 = 3
// console.log(searchTarget(arr1,target1))




// Given two strings s1 and s2. Return the minimum number of operations required to convert s1 to s2.
// The possible operations are permitted:

// Insert a character at any position of the string.
// Remove any character from the string.
// Replace any character from the string with any other character.
// Input: s1 = "geek", s2 = "gesek"
// Output: 1
// Explanation: One operation is required, inserting 's' between two 'e'.
// Input: s1 = "gfg", s2 = "gfg"
// Output: 0
// Explanation: Both strings are same.
// Input: s1 = "abc", s2 = "def"
// Output: 3
// Explanation: All characters need to be replaced to convert str1 to str2, 
//   requiring 3 replacement operations.
  
  
  
s1 = "geek".split('')
s2 = "gesek".split('')

// g e e k 
// g e s e k

s insert

// console.log(s1,s2)
// operation = 0
i=0;
j=0;
// insert case
operation = 0

2darr=[3][4]

// keep missing elements track in s1 - insert
// if extra element - remove 
// if same length index value varies then replace


function convertOperstions(s1,s2){
  
  function recursive(i,j){
    // base case
    if(s1.length==0){
      return s2.length
    }
    if(s2.length==0){
      return s1.length
    }
    
    if(s1[i]!=s2[i]){
       operation++
    }
    
    
  }
  
  insertion = recursive(i,j)
  remove = recursive(i,j)
  replace = recursive(i,j)
  
  
  
}

// for(i=0;i<s2.length;i++){
  
   
  
  
// }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  