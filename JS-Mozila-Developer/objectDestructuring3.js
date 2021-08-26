console.log("Assigning to new variable names");

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true


const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5


const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5
