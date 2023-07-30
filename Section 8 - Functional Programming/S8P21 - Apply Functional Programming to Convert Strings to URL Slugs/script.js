// Only change code below this line
function urlSlug(title) {
  // Use split() and regex to transform a string into array of words.  
  // Use map() to transform each capitalized word into all lower case.  
  // Join the strings after map() into one string with "-" to connect the strings.  
  return title.trim().split(/\W+/g).map(title => title.toLowerCase()).join("-");
}

// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));