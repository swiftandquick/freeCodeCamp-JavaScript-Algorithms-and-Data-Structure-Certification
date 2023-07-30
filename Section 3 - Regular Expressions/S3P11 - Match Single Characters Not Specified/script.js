let quoteSample = "3 blind mice.";
// Match non-vowel and non-number characters.  
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line