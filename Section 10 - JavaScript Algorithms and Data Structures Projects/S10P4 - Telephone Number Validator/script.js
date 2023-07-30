function telephoneCheck(str) {
  // The string could or could not start with 1, follow by a space.  
  // Follow by a 3 numbers or 3 numbers within parentheses.  
  // Follow by or not follow by -, follow by or not follow by space.  
  // Follow by 3 numbers, follolw by or not follow by -, follow by or not follow by space.  
  // End with 4 numbers.  g stands for global, m stands for multiple flag.  
  // If the str passes the regex test, return true, otherwise return false.  
  return /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm.test(str);
}

console.log(telephoneCheck("555-555-5555"));