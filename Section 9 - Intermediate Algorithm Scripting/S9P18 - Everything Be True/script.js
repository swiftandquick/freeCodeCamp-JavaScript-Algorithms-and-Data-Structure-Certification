function truthCheck(collection, pre) {
  let arr = [];
  // Shorten the collection array into array that only contain the value of pre for each object.  
  for (let obj of collection) {
    arr.push(obj[pre]);
  }
  // Use every() to check whether every element in arr has truthy value.  The !! in !!el checks if el is truthy, if it is, then return true.  
  return arr.every(el => !!el) ? true : false;
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"));