function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i = i + size) {
    let innerArr = arr.slice(i, i + size);
    newArr.push(innerArr);
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);