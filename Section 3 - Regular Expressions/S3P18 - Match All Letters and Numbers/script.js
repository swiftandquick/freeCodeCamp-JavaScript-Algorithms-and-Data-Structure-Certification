let quoteSample = "The five boxing wizards jump quickly.";
// \w stands for [A-Za-z0-9_], basically it matches anything is letter, number, or underscore.  
let nonAlphabetRegex = /\w/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;