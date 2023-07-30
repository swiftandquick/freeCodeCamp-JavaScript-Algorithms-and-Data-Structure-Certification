function frankenSplice(arr1, arr2, n) {
  // Copy arr2 using spread operator so arr2 doesn't change.  
  const arr2New = [...arr2]; 
  // Insert arr1 elements into arr2, starting at index n.  
  arr2New.splice(n, arr1.length, ...arr1, ...arr2New.slice(n));
  return arr2New;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);