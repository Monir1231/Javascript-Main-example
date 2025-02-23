// The Spread Operator (...)

// let number1 = [1,2,3,4,];
// let number2 = [6,7,8,9];

// let total = [...number1,...number2];
// console.log(total)

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
  }
  updateMyVehicle 
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle)

  function sum(x, y, z) {
    return x * y * z;
  }
  
  const numbers = [1, 8, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  // Expected output: 6