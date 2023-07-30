// Function can be passed as argument.  
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    // Check each index of arr, if func returns true, return the current index of arr.  
    if (func(arr[i])) {
      return arr[i];
    }
  }
  // If none of the indices in arr return true, return undefined.  
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);