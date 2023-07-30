function sumFibs(num) {
  let n1 = 0;
  let n2 = 1;
  let next = n1 + n2;
  let arr = [n1, n2];
  // Create an array of fibonacci numbers, the array ends if next is greater than num.  
  while (next <= num) {
    next = n1 + n2;
    arr.push(next);
    n1 = n2;
    n2 = next;
  }
  // Delete the last element.  
  arr.splice(arr.length - 1, 1);
  // Use filter to keep the fibonacci number that are odd, then use reduce to sum them up.  
  return arr.filter(num => num % 2 !== 0).reduce((sum, cur) => sum + cur, 0);
}

console.log(sumFibs(1));
console.log(sumFibs(4));
console.log(sumFibs(1000));
