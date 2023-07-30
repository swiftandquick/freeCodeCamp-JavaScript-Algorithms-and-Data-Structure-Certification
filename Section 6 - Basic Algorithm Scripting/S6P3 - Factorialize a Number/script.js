function factorialize(num) {
  let fac = 1;
  for (let i = 2; i <= num; i++) {
    fac = fac * i;
  }
  return fac;
}

factorialize(5);