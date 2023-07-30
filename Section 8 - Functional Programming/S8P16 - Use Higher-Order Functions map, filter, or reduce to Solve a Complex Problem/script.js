const squareList = arr => {
  // Only change code below this line
  // Get the square of positive integers in arr array.  
  const positiveArr = arr.filter(num => num > 0 && Number.isInteger(num));
  const squareArr = positiveArr.map(num => num * num);
  return squareArr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);