function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
// Create an object use the instance of the House constructor.  
const myHouse = new House(3);
// Return true because myHouse is created using the House constructor function.  
console.log(myHouse instanceof House);