console.log("Unpacking fields from objects passed as a function parameter");

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  
  function userId({id}) {
    return id;
  }
  
  function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`;
  }
  
  console.log(userId(user)); // 42
  console.log(whois(user));  // "jdoe is John"
  

