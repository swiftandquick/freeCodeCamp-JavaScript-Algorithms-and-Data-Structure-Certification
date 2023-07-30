function fearNotLetter(str) {
  // Split the string into characters.  
  const strArr = str.toLowerCase().split("");
  // Set newStr to empty string.  
  let newStr = "";
  // Iterate through the strArr from index 0 to second to last index.  
  for (let i = 0; i < strArr.length - 1; i++) {
    // All characters have a character code, charCodeAt() gets that code in numerical value.  If the next character's code isn't equal to current character's code plus 1, add the missing character using fromCharCode().  
    if (strArr[i].charCodeAt() + 1 !== strArr[i + 1].charCodeAt()) {
      newStr = newStr + String.fromCharCode(strArr[i].charCodeAt() + 1);
    }
  }
  // Return newStr if it isn't empty, otherwise return undefined.  
  if (newStr) {
    return newStr;
  }
  else {
    return undefined;
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));