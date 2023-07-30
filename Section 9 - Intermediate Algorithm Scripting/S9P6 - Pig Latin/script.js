function translatePigLatin(str) {
  //If str starts with vowel, return str plus "way".  
  if (str.match(/^[aeiou]/i)) {
    return str + "way";
  }
  // If the string from the start to end has no vowel, add "ay" to the end.  
  else if (str.match(/^[^aeiou]+$/i)) {
    return str + "ay";
  }
  else {
    // Get the starting index of first vowel.  
    const i = str.match(/[aeiou]/i).index;
    return str.substring(i, str.length) + str.substring(0, i) + "ay";
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("rhythm"));
