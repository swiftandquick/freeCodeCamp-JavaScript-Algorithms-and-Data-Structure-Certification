function bouncer(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    // Only keep truthy values from arr.  
    if (arr[i]) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

bouncer([7, "ate", "", false, 9]);