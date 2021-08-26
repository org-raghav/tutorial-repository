console.log("array example 3");

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
console.log(rest.c);
console.log(rest.d);


({myName, address, age} = {myName:"raghav", address:"Ballia", age:30})
console.log(myName);
console.log(address);
console.log(age);

({myName, address, age, ...rest } = {city:"Ballia", state:"UP", country:"India"})
console.log(rest);
console.log(rest.city);


