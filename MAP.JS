
// ১. অ্যারের প্রতিটি উপাদান গুণ করা

// let array = [1,2,3,4,5];
// let doubledNumbers = array.map((num)=>{
//  return num * 2;
// });

// console.log(doubledNumbers);

// ২. অবজেক্টের অ্যারে থেকে নির্দিষ্ট প্রপার্টি বের করা

// let persones =[
//     {name:"Monir",age:12},
//     {name:"Rana",age:15},
//     {name:"Emon",age:20}
// ]


// let info = persones.map((user)=>{
//     return user.name;
// })

// console.log(info);

// ৩. map() এবং Arrow Function

// let numbers =[1,2,3,4,5,6];

// let squerNumber = numbers.map(num => num * num *num);
// console.log(squerNumber)

// ৪. map() এবং ইনডেক্স ব্যবহার

// let numbers =[1,2,3,4,5,6];

// let addindex = numbers.map((num,index)=> num * index);

// console.log(addindex)

// 5 map() এবং forEach() এর মধ্যে পার্থক্য

const numbers = [1, 2, 3, 4, 5];

// `map()` দিয়ে একটি নতুন অ্যারে তৈরি
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// `forEach()` দিয়ে কোনো নতুন অ্যারে তৈরি হবে না
numbers.forEach(num => num * 2);
console.log(numbers); // [1, 2, 3, 4, 5]
