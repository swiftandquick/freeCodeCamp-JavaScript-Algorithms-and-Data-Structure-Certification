let sampleWord = "12345";
// I can use ?= to specify multiple AND conditions, here, the string must have at least 6 consecutive characters and 2 consecutive numbers.  
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);