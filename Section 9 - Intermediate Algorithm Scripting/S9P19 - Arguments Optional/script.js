// Use spread operator to create an array for any number of arguments.  
function addTogether(...args) {
  // If args has 1 element and that element is a number.  
  if (args.length === 1 && typeof args[0] === 'number') {
    // Invoke the currying function with next as the argument.  
    return function(next) {
      // If next is a number, sum args[0] and next;  
      if (typeof next === 'number') {
        return args[0] + next;
      }
      // Otherwise, return undefined.  
      else {
        return undefined;
      }
    }
  }
  // If there are two arguments and they are both numbers, return the sum.  
  else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
    return args[0] + args[1];
  }
  // Return undefined if none of the conditions match.  
  else {
    return undefined;
  }
}

console.log(addTogether(2,3));
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));