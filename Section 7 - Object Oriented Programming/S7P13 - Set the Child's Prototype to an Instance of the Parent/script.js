function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
// Dog prototype properties inherit the Animal prototype properties.  
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();