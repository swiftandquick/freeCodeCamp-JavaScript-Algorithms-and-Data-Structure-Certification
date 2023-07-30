let sample = "Whitespace is important in separating words";
// \s stands for whitespace or " ", match all whitespaces.  
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);