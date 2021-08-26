console.log("Example 9");

//Parsing an array returned from a function
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

const arraowFunctionExp = () => {
    return ["raghav", "bob", "marry", "dave", "mark", "sophia"];
}

const [firstName, secondName] = arraowFunctionExp();
console.log(firstName);
console.log(secondName);

const [...rest]  = arraowFunctionExp();
console.log(rest);