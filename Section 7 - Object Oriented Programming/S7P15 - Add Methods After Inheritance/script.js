function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

// Inherit from Animal then create a new prototype property, the method bark().  
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() { console.log("Woof!") };

// Only change code above this line

let beagle = new Dog();
beagle.bark();