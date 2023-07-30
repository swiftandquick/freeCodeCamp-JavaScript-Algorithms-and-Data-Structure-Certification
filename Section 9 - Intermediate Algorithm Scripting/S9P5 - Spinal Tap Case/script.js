function spinalCase(str) {
  // Split the string using regex.  First regex makes anything that are not letters and numbers are splitted.  Second regex splits strings by upper case characters.  
  // Join the array elements together with '-', then transform the new string to lower case.  
  return str.trim().split(/[^A-Za-z0-9]+|(?=[A-Z])/g).join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
