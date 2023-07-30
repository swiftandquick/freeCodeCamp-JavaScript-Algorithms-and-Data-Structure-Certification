function smallestCommons(arr) {
  let cur, low, high;
  if (arr[0] < arr[1]) {
    cur = arr[0];
    low = arr[0];
    high = arr[1];
  }
  else {
    cur = arr[1];
    low = arr[1];
    high = arr[0];
  }
  // Greatest common factor of two numbers.  
  function gcfOf2(a, b) {
    while(a !== b){
      if(a > b) {
        a -= b;
      }
      else {
        b -= a;
      }
  	}
    return a;
  }
  // Least common multiple of two numbers.  
  function lcmOf2(a, b) {
    return a * b / gcfOf2(a, b);
  }
  for (let i = low; i < high; i++) {
    // Invoke lcmOf2 to constantly find the lcm between current lcm and the next number, then set cur equal to the returned number.  
    cur = lcmOf2(cur, i + 1);
  }
  return cur;
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([23, 18]));