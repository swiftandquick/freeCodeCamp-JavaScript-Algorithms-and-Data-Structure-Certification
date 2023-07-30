let twinkleStar = "Twinkle, twinkle, little star";
// Ignore case, find all "twinkle" substrings in the twinkleStar string.  Multiple flags:  g and i.  
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line