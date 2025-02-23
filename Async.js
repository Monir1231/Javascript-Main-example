
// async function name() {
//     return 'hello world';
// };

// name().than (Response => console.log(Response));



// async function myName() {
//     return 'Monir islam';
//   }
  
//   myName().then(response => console.log(response));  // আউটপুট: Hello, World!


//   function delay(as){
//     return new Promise(resolve => setTimeout(resolve,as));
//   }

//   async function doSomething() {
//     console.log('start');
//     await delay(2000);
//     console.log("end")
//   }

async function fetchData() {
    try{
        let data = await new Promise((resole,reject)=>{
            setTimeout(()=> reject("something went wrong!"),200);
        });
        console.log(data);
       
    }catch(error){
        console.log(error);
    }
   
}

fetchData()
