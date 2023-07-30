function Dog(name) {
  this.name = name;
}

// Add numLegs property using prototype so all objects created with Dog constructor function has the numLegs value of 4.  
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
// Iterate through both instance properties and prototype properties of the object beagle.  However, hasOwnProperty() only checks the instance property, so only name is an instance property, whereas numLegs is a prototype property.  
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  }
  else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);