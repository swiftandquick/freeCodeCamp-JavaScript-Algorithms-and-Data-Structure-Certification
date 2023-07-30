// Only change code below this line
class Thermostat {
  // Constructor:  Sets f equal to parameter.  
  constructor(f) {
    this.f = f;
  }
  // Getter:  Return temperature in c by convert f to c.  
  get temperature() {
    return 5 / 9 * (this.f - 32);
  }
  // Setter:  Takes c as argument, convert c to f.  
  set temperature(c) {
    this.f = c * 9 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale, invoke constructor.  
let temp = thermos.temperature; // 24.44 in Celsius, invoke getter.  
thermos.temperature = 26; // Invoke setter.  
temp = thermos.temperature; // 26 in Celsius, invoke getter.  