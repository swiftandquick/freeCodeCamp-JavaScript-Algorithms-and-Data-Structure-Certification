const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const arr2 = [...arr]; 
  // Sort the numbers from least to greatest. 
  // If a - b is negative, sort a before b.  40 - 60 = -20, 40 is before 60.  
  // If a - b is positive, sort a after b.  40 - 20 = 20, 40 is after 20.  
  return arr2.sort((a, b) => a - b);
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));