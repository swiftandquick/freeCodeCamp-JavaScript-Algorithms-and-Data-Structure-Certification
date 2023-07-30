function palindrome(str) {
  // Delete every character that's not letter or number.  
  str = str.replace(/\W|_/gi, "").toLowerCase();
  let pal = true;
  // Set pal to false if the corresponding characters don't match.  
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length / 2; i++) {
      console.log(str[i], str[str.length - i - 1]);
      if (str[i] !== str[str.length - i - 1]) {
        pal = false;
      }
    }
  }
  else {
    for (let i = 0; i < str.length / 2 - 1; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        pal = false;
      }
    }
  }
  return pal;
}

// console.log(palindrome("eye"));
// console.log(palindrome("My age is 0, 0 si ega ym."));
// console.log(palindrome("_eye"));
console.log(palindrome("almostomla"));