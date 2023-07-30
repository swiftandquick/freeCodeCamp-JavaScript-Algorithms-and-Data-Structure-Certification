function diffArray(arr1, arr2) {
  const newArr = [];
  // Compare the two arrays, if element in prevArray doesn't exist in nextArr, push the element into newArr.  
  function checkDiff(prevArr, nextArr) {
    prevArr.forEach(ele => {
      if (nextArr.indexOf(ele) < 0) {
        newArr.push(ele);
      }
    });
  }
  // Compare arr1 elements to arr2 elements then switch them around.  
  checkDiff(arr1, arr2);
  checkDiff(arr2, arr1);
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));