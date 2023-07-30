function forecast(arr) {
  // Only change code below this line
  // Extract the array from index 2 and ends before index 4 (in index 3).  
  arr = arr.slice(2, 4);
  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));