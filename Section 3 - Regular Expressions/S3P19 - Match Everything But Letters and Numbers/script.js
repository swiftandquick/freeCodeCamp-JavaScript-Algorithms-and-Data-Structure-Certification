let quoteSample = "The five boxing wizards jump quickly.";
// \W is the opposite of \w, it stands for [^A-Za-z0-9_], basically it matches anything that are not letter, number, or underscore.  
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;