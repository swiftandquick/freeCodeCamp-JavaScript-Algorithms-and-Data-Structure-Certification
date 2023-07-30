function splitify(str) {
  // Only change code below this line
  // Use regex to split the string, if it's not a number or letter, separate the string into different substrings.  
  return str.split(/\W/g);
  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));