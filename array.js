
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

let {firstName,lastName,year = '2023'}=person;
console.log(typeof lastName)
console.log(`my name is ${firstName} and my last name is ${lastName}`)
