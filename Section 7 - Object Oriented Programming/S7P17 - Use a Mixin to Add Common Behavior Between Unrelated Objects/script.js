let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  // Use function to invoke 
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log(`${obj.name} is gliding!`);
    }
  }
  
  // Use bird object to invoke glideMixin function, which then assigns the glide function to the bird object, then bird can invoke the glide function.   
  glideMixin(bird);
  bird.glide();
  
  // Same for boat.  
  glideMixin(boat);
  boat.glide();