function binaryAgent(str) {
  const biArr = str.split(" ");
  let sentence = "";
  for (let i = 0; i < biArr.length; i++) {
    // Convert each binary into decimal number, then get the corresponding character via fromCharCode().  
    sentence = sentence + String.fromCharCode(parseInt(biArr[i], 2));
  }
  return sentence;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));