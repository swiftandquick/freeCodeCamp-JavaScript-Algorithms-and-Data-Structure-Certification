let timStr = "Timmmmber";
// String must start with "Ti", follow by 4 m, and end by "ber".
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);