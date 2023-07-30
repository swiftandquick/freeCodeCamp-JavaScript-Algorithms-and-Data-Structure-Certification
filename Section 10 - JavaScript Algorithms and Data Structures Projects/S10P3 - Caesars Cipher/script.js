function rot13(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    // If character is an uppercase letter, shift to the next character by 13 places, uppercase characters start with 'A', which has the value of 65.   
    if (/[A-Z]/g.test(str[i])) {
      newStr = newStr + String.fromCharCode(((str[i].charCodeAt(str) - 65 + 13) % 26) + 65);
    }
    // Same goes for lowercase characters, but 'a' has the value of 97.  
    else if (/[a-z]/g.test(str[i])) {
      newStr = newStr + String.fromCharCode(((str[i].charCodeAt(str) - 97 + 13) % 26) + 97);
    }
    // If character isn't a letter, just add it onto newStr.  
    else {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("T"));