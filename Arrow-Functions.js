
 

// 1. ফাংশন ডিফাইন করা

function Name(){
    console.log("My name is Monir");
}

Name()

// 2ফাংশন প্যারামিটার ব্যবহার:

function greet(name,age) {
    console.log("Hello, " + name + " Age is " + age);
}

greet("John",20);  // আউটপুট: Hello, John!
greet("Alice",30); // আউটপুট: Hello, Alice!

// 3. রিটার্ন স্টেটমেন্ট

function add(a, b) {
    return a * b;
}

let sum = add(5, 10);
console.log(sum);  

4. ফাংশন এক্সপ্রেশন (Function Expressions)

const greet = function(name) {
    return "Hello, " + name + "!";
};

console.log(greet("Monir"));  // আউটপুট: Hello, John!

// 5. অ্যারো ফাংশন (Arrow Functions)
const number = (a,b)=>{
    return (`big number is ${a} $ small number is ${b}`);
    }
   
    console.log(number(12,4));

    const greet = (name) => "Hello, " + name + "!";
    console.log(greet("Monir"))
    


    // 6. ডিফল্ট প্যারামিটার (Default Parameters)

    function greet(name = "Guest") {
        console.log("Hello, " + name + "!");
    }
    
    greet();         // আউটপুট: Hello, Guest!
    greet("John");   // আউটপুট: Hello, John!


    // 7. ভ্যারিয়াডিক ফাংশন (Rest Parameters)

    function sum(...numbers){
        let total = 0
        for(let num of numbers ){
            total += num
        }
        return total
    }

    console.log(sum(12,34,556,77));

    // 8. কলব্যাক ফাংশন (Callback Functions)

    function fetchData(callback) {
        let data = "Some data fetched!";
        callback(data);
    }
    
    fetchData(function(data) {
        console.log(data);  // আউটপুট: Some data fetched!
    });

    // 9. রিকার্সিভ ফাংশন (Recursive Functions)

function factorial(n){
    if (n===0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(6))
    
    