function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// beagle is an object created using the Dog constructor, so it inherits the prototype of the constructor, which is Dog.  
console.log(Dog.prototype.isPrototypeOf(beagle));  // yields true

// Fix the code below so that it evaluates to true
// Object is the parent of Dog, so the line below returns true.  
console.log(Object.prototype.isPrototypeOf(Dog.prototype));