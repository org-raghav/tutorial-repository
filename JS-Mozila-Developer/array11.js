console.log("Ignoring some returned values");

function f() {
    return [1, 2, 3];
  }
  
  //we ignore b
  const [a, , c] = f();
  console.log(a); // 1
  console.log(c); // 3
  
  // we catch only first value and rest values are ignored
  const [b] = f();
  console.log(b); // 1
  

  //ignoring all values
  [,,] = f();
