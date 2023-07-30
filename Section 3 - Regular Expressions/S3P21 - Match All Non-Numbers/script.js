let movieName = "2001: A Space Odyssey";
// \D stands for [^0-9], opposite of \d.  
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;