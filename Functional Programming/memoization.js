//learn to cache
function addTo80(n) {
  return n + 80;
}

addTo80(5);
addTo80(5); //evrytime it will calculate

// now memoize

let cache = {
  5: 85, //like this it gonna happen
};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time");
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}
addTo80(5);
addTo80(6);
addTo80(6);
addTo80(6);

// optimize remove cache from global scope

function memoizeAddTo80(n) {
  let cache = {}; //closure
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}

const memoized = memoizeAddTo80();
console.log(memoized(6))
console.log(memoized(6))