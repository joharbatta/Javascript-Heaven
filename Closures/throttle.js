function getData() {
  console.log("fetching");
}

function throttle(cb, delay = 250) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

function myThrottle(fx, delay) {
  let flag = true;
  return function (...args) {
    if (flag) {
      fx(...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

var throttle = myThrottle(getData, 300);
