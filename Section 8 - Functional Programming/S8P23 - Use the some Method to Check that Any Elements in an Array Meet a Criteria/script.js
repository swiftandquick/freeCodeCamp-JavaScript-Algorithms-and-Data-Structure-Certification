function checkPositive(arr) {
  // Only change code below this line
  // Check if any num (element) in arr (array) is positive, return true if at least one item fits the criteria.   
  return arr.some(num => num > 0);
  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));