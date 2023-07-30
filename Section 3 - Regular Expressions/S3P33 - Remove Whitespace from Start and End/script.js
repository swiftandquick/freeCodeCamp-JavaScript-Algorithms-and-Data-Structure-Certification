let hello = "   Hello, World!  ";
// Replace whitespaces at the start and end of the string.  
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line