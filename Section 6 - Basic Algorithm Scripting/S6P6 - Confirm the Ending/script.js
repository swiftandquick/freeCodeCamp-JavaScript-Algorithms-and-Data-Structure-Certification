function confirmEnding(str, target) {
  // Checks if the string str ends with the same string target.  
  return str.substring(str.length - target.length, str.length) === target;
}

confirmEnding("Bastian", "n");