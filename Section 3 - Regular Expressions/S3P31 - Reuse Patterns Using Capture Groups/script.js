let repeatNum = "42 42 42 42";
// Start with the number, the next two numbers must also match the first number.  
let reRegex = /^(\d+) \1 \1(?!.)/; // Change this line
let result = reRegex.test(repeatNum);