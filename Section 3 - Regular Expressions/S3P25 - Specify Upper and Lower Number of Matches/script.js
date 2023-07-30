let ohStr = "Ohhh no";
// The string must start with O, follow by 3 to 6 h, then ends with " no".  
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);