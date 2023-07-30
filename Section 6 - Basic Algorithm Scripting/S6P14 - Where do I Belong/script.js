function getIndexToIns(arr, num) {
  // Sort the array from lowest to highest.  
  arr.sort(function(a, b){return a - b});
  for (let i = 0; i < num; i++) {
    if (arr[i] === num) {
      return i;
    }
    else if (arr[i] <= num && arr[i + 1] >= num) {
      return i + 1;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);