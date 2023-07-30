function checkPositive(arr) {
  // Only change code below this line
  // Check if every num (element) in arr (array) is positive, only return true if all items fit the criteria.   
  return arr.every(num => num > 0);
  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));