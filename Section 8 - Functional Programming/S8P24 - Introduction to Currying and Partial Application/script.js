// Use rest operator to spread the arguments.  
function addTogether(...arr) {
  // If arr has one element and it's a number... 
  if (arr.length === 1 && typeof arr[0] === 'number') {
    // Invoke the anonymous function, the argument is num2.  
    return function(num2) {
      // If num2 is a number, add arr[0] and num2 together.  
      if (typeof num2 === 'number') {
        return arr[0] + num2;
      }
      // Otherwise return undefined.  
      else {
        return undefined;
      }
    }
  }
  // If arr has 2 elements and both elements are numbers, add both elements together.  
  else if (arr.length === 2 && typeof arr[0] === 'number' && typeof arr[1] === 'number') {
    return arr[0] + arr[1];
  }
  // Otherwise return undefined.  
  else {
    return undefined;
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(2)([3]));
console.log(addTogether(2)(3));