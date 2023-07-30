let sample = "Whitespace is important in separating words";
// \S stands for non-whitespace, opposite of \s.  
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);