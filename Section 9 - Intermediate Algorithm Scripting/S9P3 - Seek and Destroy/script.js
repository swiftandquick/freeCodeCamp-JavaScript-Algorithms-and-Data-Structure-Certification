// Turn elements after arr into an array called args.  
function destroyer(arr, ...args) {
  // Use filter() to only keep elements that doesn't exist in args array.  
  return arr.filter(ele => args.indexOf(ele) < 0);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));