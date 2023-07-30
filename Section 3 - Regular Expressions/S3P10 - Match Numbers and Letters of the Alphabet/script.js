let quoteSample = "Blueberry 3.141592653s are delicious.";
// Match all letters from h to s, all numbers from 2 to 6.  
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line