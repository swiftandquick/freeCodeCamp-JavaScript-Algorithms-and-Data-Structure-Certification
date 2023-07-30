function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  // Define the constructor equal to Dog.  
  constructor: Dog, 
  // Add multiple properties via prototype.  
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};