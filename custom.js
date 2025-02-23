// JavaScript Arrow Functions

let add = (a,b)=> a- b;
console.log(add(12,4));

let names = ['John', 'Shahadul', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths);


const greet = (name,roll) => `Hello, ${name}!.Roll is ${roll}`;
console.log(greet('Alice',12));