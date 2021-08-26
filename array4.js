console.log("Example 4");
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2


//const [firstElement, secondElement] = list;
// is equivalent to:
// const firstElement = list[0];
// const secondElement = list[1];

const list = ["raghav", "Bob", "Mark", "Dev", "Arjun", "Anil", "Marry", "Sophia"];

const[firstName, secondName, thirdName] = list;
console.log(firstName);
console.log(secondName);
console.log(thirdName);

const otherName = list[7];
console.log(otherName);