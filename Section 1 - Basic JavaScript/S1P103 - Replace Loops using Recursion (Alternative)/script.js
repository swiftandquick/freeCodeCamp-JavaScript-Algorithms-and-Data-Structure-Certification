function sum(arr, n, total = 0) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  }
  else if (n === 1) {
    return total = total + arr[0];
  }
  else {
    total = total + arr[n - 1];
    return sum(arr, n - 1, total);
  }
  // Only change code above this line
}