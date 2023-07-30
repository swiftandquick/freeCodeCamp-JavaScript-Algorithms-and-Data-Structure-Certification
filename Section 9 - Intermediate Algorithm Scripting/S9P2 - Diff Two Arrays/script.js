function diffArray(arr1, arr2) {
  const newArr = [];
  // Combine two arrays using spread operator.  
  const combinedArr = [...arr1, ...arr2];
  // If element of combined array doesn't appear in either arr1 or arr2, which means the index is less than 0, push that element into newArr.  
  for (let i = 0; i < combinedArr.length; i++) {
    if (arr1.indexOf(combinedArr[i]) < 0 || arr2.indexOf(combinedArr[i]) < 0) {
      newArr.push(combinedArr[i]);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));