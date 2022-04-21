function factorial(n) {
  let j=1;

  for(let i = 2; i <= n; i++) {
     j *= i;
  }
  return j;
}