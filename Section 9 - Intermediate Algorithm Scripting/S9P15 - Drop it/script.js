function dropElements(arr, func) {
  const arr2 = [];
  const arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    // If func returns true, add element to arr3.  
    if (func(arr[i])) {
      arr3.push(arr[i]);
    }
    // If func retruns false and element is not in arr2, push arr2.  
    else if (!func(arr[i]) && arr2.indexOf(arr[i]) < 0) {
      arr2.push(arr[i]);
    }
    // If func returns false and element is in arr2, push arr3.  
    else {
      arr3.push(arr[i]);
    }
  }
  return arr3;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));