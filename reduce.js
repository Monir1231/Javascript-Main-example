

// ১. সব উপাদান যোগ করা
// let numbers = [1,2,3,4,5,6,7]

// let sum = numbers.reduce(function(accumulator,currentValue){
//     return accumulator + currentValue;
// });

// console.log(sum);

// let people = [
//     { name: "Monir", age: 12 },
//     { name: "Rana", age: 15 },
//     { name: "Ali", age: 20 }
// ];

// let totalAge = people.reduce((accumulator, person)=>{
//     return accumulator + person.age ;
// },3);

// console.log(totalAge);

// ৩. একটি অ্যারে থেকে অবজেক্ট তৈরি করা

let names = ['monir','redoy','shahadul','redoy']

let nameCunt= names.reduce((accumulator, name)=>{
    if(accumulator[name]){
        accumulator[name] += 1;
    }else{
        accumulator[name] = 1
    }
    return accumulator;
},{});

console.log(nameCunt);

// ৪. initialValue না দেওয়া

let numbers = [1, 2, 3, 4, 5];

let product = numbers.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
});

console.log(product); // 120 (1*2*3*4*5)
