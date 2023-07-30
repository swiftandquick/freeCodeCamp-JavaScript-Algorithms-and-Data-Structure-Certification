function convertToRoman(num) {
  // Create an object lookup that converts between roman numerals and arabic numbers.  
  const lookup = {
    M: 1000, 
    CM: 900, 
    D: 500, 
    CD: 400, 
    C: 100, 
    XC: 90, 
    L: 50, 
    XL: 40, 
    X: 10, 
    IX: 9, 
    V: 5, 
    IV: 4, 
    I: 1, 
  }
  let roman = "";
  // Look up every property in lookup object until the object less than num is found. For example, if my number is 36, iterate until property is X, which has value of 10, because 36 >= 10. 
  for (let i in lookup) {
    // While num is greater than or equal to the property's value, continue to add the property's key to roman string, while subtract the property's value from num.  
    // For example, if the number is 36, first iteration will add an "X" (key) to roman string, while subtract 10 (value) to the num, then while loop iterates until num is less than 10.  
    while (num >= lookup[i]) {
      roman = roman + i;
      num = num - lookup[i];
    }
  }
  return roman;
}

console.log(convertToRoman(36));