// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
};

// const debounce = function (fn, d) {
//   let timer;
//   return function () {
//     let context = this,
//       args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, arguments);
//     }, d);
//   };
// };

const debounce = (func, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

let input = document.querySelector(".inputj");

input.addEventListener("keyup", betterFunction);
