function titleCase(str) {
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase();
  }
  return strArr.join(" ");
}

titleCase("I'm a little tea pot");