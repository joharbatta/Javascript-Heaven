//www.youtube.com/watch?v=NiLUGy1Mh4U

// https: import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Reduce js examples</h1>
`;

// console.log("Johar");

const people = [
  { id: "1", name: "Leigh", age: 35 },
  { id: "2", name: "Jenny", age: 30 },
  { id: "3", name: "Heather", age: 28 },
];

let result;

// count

result = people.reduce((acc, person) => acc + 1, 0);

console.log(result);

//sum ages

result = people.reduce((acc, person) => acc + person.age, 0);

console.log(result);

//array of names(map)

result = people.reduce((acc, person) => [...acc, person.name], []);

console.log(result);

// convert to id => person lookup (dict)

result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});

console.log(result["2"]);

//max age

result = people.reduce((acc, person) => {
  if (acc === 0 || person.age > acc) return person.age;
  return acc;
}, 0);

console.log(result);

// find by name or find we can use
result = people.reduce((acc, person) => {
  if (acc !== null) return acc;
  if (person.name === "Leigh") return person;
  return null;
}, null);

console.log(result);

// all over 18

result = people.reduce((acc, person) => {
  if (!acc) return false;
  return person.age > 18;
}, true);

console.log(result);

// any over 18

result = people.reduce((acc, person) => {
  if (acc) return true;
  return person.age > 18;
}, false);

console.log(result);

// count occurrences

const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];

result = orders.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});

console.log(result);

// flatten

const folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];

console.log(folders.flat(Infinity));

function flatten(acc, item) {
  console.log(acc, item);
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
}

result = folders.reduce(flatten, []);

console.log(result);
