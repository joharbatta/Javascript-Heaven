const N_SIZE = 500000;

//Look at the times to "fill" the array. Why is there so much difference in the 2 approaches?
const array1 = [];
const t0 = performance.now();
for (let i = 0; i < N_SIZE; i++) {
 array1.push("🔥");
}
const t1 = performance.now();

console.log("first array took " + (t1 - t0) + " milliseconds.");

const array2 = new Array(N_SIZE);
const t2 = performance.now();
for (let i = 0; i < N_SIZE; i++) {
 array2[i] = ("🔥");
}
const t3 = performance.now();

console.log("second array took " + (t3 - t2) + " milliseconds.");

// Once you figured out why this is, when is a good time to use this approach to make this certain optimization?
