let difficultSpelling = "Mississippi";
// Match the "ss" substrings, substring must start with s and follow by more s.  
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);