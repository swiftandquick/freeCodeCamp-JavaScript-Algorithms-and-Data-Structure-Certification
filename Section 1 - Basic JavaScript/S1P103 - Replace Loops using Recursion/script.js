function sum(arr, n) {
  // Only change code below this line
  if (n === 0) {
    return 0;
  }
  else if (n === 1) {
    return arr[0];
  }
  else {
    const a = arr.shift();
    const b = arr.shift();
    arr.unshift(a + b);
    return sum(arr, n - 1);
  }
  // Only change code above this line
}

sum([2, 3, 4], 1);