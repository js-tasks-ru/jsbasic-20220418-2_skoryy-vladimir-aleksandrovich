function getMinMax(str) {
  let arr = str.split(' ');
  let minn = +arr[0];
  let maxx = minn;
  for (let i = 0; i < arr.length; i++) {
    let a = +arr[i];
    if (a < minn) minn = a;
    if (a > maxx) maxx = a;
  }
  return {min: minn, max: maxx};
}
