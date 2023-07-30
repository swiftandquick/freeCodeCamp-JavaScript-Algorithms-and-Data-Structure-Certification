// Only change code below this line
function countdown(n, arr = []){
  if (n <= 0) {
    return arr;
  }
  else {
    arr.push(n);
    n--;
    return countdown(n, arr);
  }
}
// Only change code above this line