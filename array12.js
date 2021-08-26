console.log("Assigning the rest of an array to a variable");

const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

//syntax Error
// we can;t do following: because comma after b is not allowed
const [a, ...b,] = [1, 2, 3];