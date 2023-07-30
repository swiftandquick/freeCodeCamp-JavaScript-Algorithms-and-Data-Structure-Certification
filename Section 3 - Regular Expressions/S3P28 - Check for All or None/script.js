let favWord = "favorite";
// The u letter between o and r is allowed to exist and it's also allowed to not exist.  
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);