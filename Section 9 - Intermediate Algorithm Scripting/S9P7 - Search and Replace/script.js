function myReplace(str, before, after) {
  // Use regex to check if the first character of before is  upper case, if it is, change the first character of after to upper case.  
  if (before.match(/^[A-Z]/)) {
    after = after[0].toUpperCase() + after.substring(1, after.length);
  }
  else {
    after = after[0].toLowerCase() + after.substring(1, after.length);
  }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));