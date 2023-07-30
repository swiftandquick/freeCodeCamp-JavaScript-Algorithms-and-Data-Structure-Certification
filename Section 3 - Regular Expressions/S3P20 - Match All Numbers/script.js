let movieName = "2001: A Space Odyssey";
// \d stands for [0-9].  
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;