console.log("object destructuring and ... dots concept");

console.log("Basic object assingment")

const user = {
    id: 42,
    isVerified: true
};

console.log(user);

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true

