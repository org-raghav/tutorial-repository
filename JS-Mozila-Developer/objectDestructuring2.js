console.log("Assignment without declaration");

console.log("A variable can be assigned its value with destructuring separate from its declaration.");

let a, b;

({a, b} = {a: 1, b: 2});

console.log(a);
console.log(b);
