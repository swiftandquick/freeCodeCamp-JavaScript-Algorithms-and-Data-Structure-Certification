// Use rest operator to get multiple arrays as argument.  
function uniteUnique(...outerArr) {
  const arr = [];
  // Combine all arrays into one array using spread operator.  
  for (let innerArr of outerArr) {
    arr.push(...innerArr);
  }
  // Transform arr into set to remove the duplicates, then change it back to array.  
  const nums = new Set(arr);
  return Array.from(nums);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));