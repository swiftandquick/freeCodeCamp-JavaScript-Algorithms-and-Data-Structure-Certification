let haStr = "Hazzzzah";
// String must start with "Ha", follow by 4 or more z, and end with "ah".
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);