function pairElement(str) {
  const outerArr = [];
  for (let letter of str) {
    const innerArr = [];
    switch (letter) {
      case 'A':
        innerArr.push('A');
        innerArr.push('T');
        break;
      case 'T':
        innerArr.push('T');
        innerArr.push('A');
        break;
      case 'C':
        innerArr.push('C');
        innerArr.push('G');
        break;
      case 'G':
        innerArr.push('G');
        innerArr.push('C');
    }
    outerArr.push(innerArr);
  }
  return outerArr;
}

console.log(pairElement("GCG"));