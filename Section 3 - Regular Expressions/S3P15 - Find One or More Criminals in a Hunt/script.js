let str = "P1P5P4CCCcP2P6P3";
// The substring "CCC" will be matched.  
let reCriminals = /C+/; // Change this line
let result = str.match(reCriminals);