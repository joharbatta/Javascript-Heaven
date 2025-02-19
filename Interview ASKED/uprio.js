import "./styles.css";
import React, { useState } from "react";

// cache upto 10 elements

// function incrementer () {
// 	setCount(count + 1);
// 	// some lines of code
// 	setCount(count + 1);
// }

class LRUCache<T1, T2> {
  private limit: number;
  private cache: Map<T1, T2>;
  constructor(limit: number) {
    this.cache = new Map<T1, T2>();
    this.limit = limit;
  }

  get(key: T1) {
    if (!this.cache.has(key)) return false;
    const data = this.cache.get(key);
    console.log("get", data, "key:", key);
    this.cache.delete(key);
    this.cache.set(key, data);
    return data;
  }

  set(key: T1, value: T2) {
    //handle based on limit
    if (this.cache.size >= this.limit) {
      const key = this.cache.keys().next().value;
      this.cache.delete(key);
    }
    this.cache.set(key, value);
  }
}
const cache = new LRUCache<number, number>(3);

export default function App() {
  const [val, setVal] = useState(0);
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const fetchData = () => {
    console.log("calling api for val", val);
    return new Promise((resolve, reject) => {
      if (val > 10) setTimeout(() => reject("not valid"), 2000);
      else
        setTimeout(() => {
          resolve(val * 2);
        }, 500);
    });
  };
  const handleClick = async () => {
    const cachedData = cache.get(val);
    if (cachedData) {
      console.log(cachedData, "cachedData", val);
      return;
    }
    // api call
    const data = await fetchData();
    cache.set(val, data);
    console.log(data, "not cached", val);
  };
  return (
    <div className="App">
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>CLick me</button>
    </div>
  );
}


// Round 2
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6		
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


 [2,7,11,15]
2 + 7 = 9
7 = 9-2
Target = 9  
Sum =  2

7 11 15

[3,2,4] 6 
[3,4

    // Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6		
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// arr = [2,7,11,15]
// target = 9 

// 9-2


function findNumbersEqualToTarget(arr,target){
  
    const map = new Map();
    for(let i=0;i<arr.length;i++){
   
      let diff = target - arr[i];
  //     console.log(diff,"heree",arr[i])
      if(map.has(diff)){
        return [map.get(diff),i];
      } 
      map.set(arr[i],i);
    }
}


The user uploads a long video (2 GB). You have a set of workers for processing (ex: preparing summary). You have to design a system where user can upload the video and once the summary is ready, the user is notified. How do you design a system which for this?
