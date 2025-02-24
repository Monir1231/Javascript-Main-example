// let person = {
//     name: "Monir",
//     age: 25,
//     profession: "Developer",
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// console.log(person.name);     // Monir
// console.log(person.age);      // 25
// person.greet();               // Hello, my name is Monir

// অবজেক্টের মেথড (Methods in Objects):

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    displayDetails: function() {
        console.log(this.brand + " " + this.model + " " + this.year);
    }
   
};


car.displayDetails();  // Toyota Corolla 2020
