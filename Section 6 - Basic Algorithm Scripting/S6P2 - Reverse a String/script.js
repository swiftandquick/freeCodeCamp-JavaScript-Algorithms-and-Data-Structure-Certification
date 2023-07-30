function reverseString(str) {
  // Reverse a string.  
  // Split the array into individual strings of characters, reverse the array, then join the elements together.  
  str = str.split('').reverse().join('');
  return str;
}

reverseString("hello");