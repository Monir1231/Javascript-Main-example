// ১. অ্যারের সকল উপাদান প্রিন্ট করা

// let names = ["Monir", "Rana", "Ali", "Sara"];
//  let allName = names.forEach(function(name){
//        console.log(name);
//  });


//  ২. অ্যারে উপাদানগুলোর সাথে কোনো লজিক প্রয়োগ করা

let people = [
    { name: "Monir", age: 12 },
    { name: "Rana", age: 15 },
    { name: "Ali", age: 20 }
];

// people.forEach((person)=>{
//   if(person.age >= 18){
//     console.log(person)
//   }
// })

people.forEach((person,index)=>{
    console.log(index +": " + person.name)
})


// ৪. Arrow Function ব্যবহার করা


let names = ["Monir", "Rana", "Ali", "Sara"];

names.forEach(name => console.log(name));

