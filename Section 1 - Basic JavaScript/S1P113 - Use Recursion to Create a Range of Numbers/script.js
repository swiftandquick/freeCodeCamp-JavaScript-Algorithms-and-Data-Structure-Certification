function rangeOfNumbers(startNum, endNum, arr = []) {
  if(startNum === endNum) {
    arr.push(startNum);
    return arr;
  }
  else {
    arr.push(startNum);
    return rangeOfNumbers(startNum + 1, endNum, arr);
  }
};