function mutation(arr) {
  const i1Arr = arr[1].split("");
  for (let i = 0; i < i1Arr.length; i++) {
    if (!arr[0].toLowerCase().includes(i1Arr[i].toLowerCase())) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);