function sumAll(arr) {
  let min, max;
  let total = 0;
  if (arr[0] === arr[1]) {
    return arr[0];
  }
  else if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  }
  else {
    min = arr[0];
    max = arr[1];
  }
  for (let i = min; i <= max; i++) {
    total = total + i;
  }
  return total;
}

console.log(sumAll([1, 4]));