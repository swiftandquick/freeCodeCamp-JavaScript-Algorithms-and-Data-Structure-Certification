function whatIsInAName(collection, source) {
  // Use filter() to only keep elements that fit the criteria.  Loop through obj, which are individual objects in collection array.    
  return collection.filter(obj => {
    // exist is initially true.  
    let exist = true;
    // Compare each prop (property) in source to its respective counterpart in obj, if they are not the same, set exist to false.  
    for (let prop in source) {
      if (source[prop] !== obj[prop]) {
        exist = false;
      }
    }
    // Only return true if exist is true.  
    if (exist) {
      return obj;
    }
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));