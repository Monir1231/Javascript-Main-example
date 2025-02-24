// ১. একমাত্র শর্তে ফিল্টার করা

// let people = [
//     { name: "Monir", age: 12 },
//     { name: "Rana", age: 15 },
//     { name: "Ali", age: 20 },
//     { name: "Sara", age: 22 }
// ];

// let user = people.filter((person)=>{
//     return person.age >= 18
// })

// console.log(user)


// ২. Arrow function ব্যবহার করা
// let adults = people.filter(person => person.age >= 18);
// console.log(adults);

// ৩. অ্যারে থেকে স্ট্রিং ফিল্টার করা

let names = ["Monir", "Rana", "Ali", "Rana", "Sara",2,2];
let FilterName = names.filter(name => name === 2);

console.log(FilterName);
