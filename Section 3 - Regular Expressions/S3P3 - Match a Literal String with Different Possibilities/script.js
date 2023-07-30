let petString = "James has a pet cat.";
// Return true if petString contains "dog", "cat", "bird", or "fish" substring.  
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);