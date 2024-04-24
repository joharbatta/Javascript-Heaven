// ziz zag print
var str = "kaamvjjfl";
var len = 4;

// k      j
// a    j.  f
// a  v.     l
// m

var array = str.split("");
// console.log(a);
var obj = {};
var row = 0;
let down = true;
for (i in array) {
  if (!obj[row]) {
    obj[row] = [array[i]];
  } else {
    obj[row].push(array[i]);
  }

  if (row == len - 1) {
    down = false;
  } else if (row == 0) {
    down = true;
  }

  // if()
  if (down) {
    row++;
  } else {
    row--;
  }

  console.log(array[i], down);
}
console.log(obj);
