function sumPrimes(num) {
  // The first prime number is 2.  
  const arr = [2];
  // Set cur (current) to the first prime number.  
  let cur = arr[0];
  // While loop runs as long as cur is not greater than num.  
  while (cur <= num) {
    let prime = true;
    // Iterate through the array of prime numbers, if cur is divisble by any elements in arr, set prime to false.  
    for (let i = 0; i < arr.length; i++) {
      if (cur % arr[i] === 0) {
        prime = false;
      }
    }
    // Only push cur into arr if prime is true.  
    if (prime) {
      arr.push(cur);
    }
    cur++;
  }
  // Return the sum of the array of prime numbers.  
  return arr.reduce((sum, cur) => sum + cur, 0);
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));