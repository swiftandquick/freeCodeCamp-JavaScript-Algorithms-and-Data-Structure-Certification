function sentensify(str) {
  // Only change code below this line
  return str.trim().split(/\W+/g).join(" ");
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));