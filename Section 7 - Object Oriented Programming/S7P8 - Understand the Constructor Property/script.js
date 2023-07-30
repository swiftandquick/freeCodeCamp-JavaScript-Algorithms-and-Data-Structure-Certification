function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  }
  else {
    return false;
  }
}

// beagle is created using the Dog constructor, so dog.constructor does equal to Dog.  
let beagle = new Dog();
console.log(joinDogFraternity(beagle));