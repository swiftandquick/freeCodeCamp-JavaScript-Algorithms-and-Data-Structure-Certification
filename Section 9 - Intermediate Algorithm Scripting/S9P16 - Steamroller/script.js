function steamrollArray(arr) {
  // Use spread operator to flatten the nested array by 1 every time the funnction is called.   
  let answer = [].concat(...arr);
  // Use recursion, if answer array has some arrays as its element, invoke steamrollArray again to flatten the nested array by 1 more level, otherwise return answer.  
  return answer.some(Array.isArray) ? steamrollArray(answer) : answer;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));