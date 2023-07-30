let exampleStr = "Let's have fun with regular expressions!";
// Find the match substring that starts with any character and ends with "un".  
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);