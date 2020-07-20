function binaryGap(number) {
  let largest = 0;
  let count = 0;

  function numberToBinary(number) {
    return Number(number).toString(2);
  }

  const binaryArr = String(numberToBinary(number)).split('');

  for (n of binaryArr) {
    if (n === '1') {
      if (count > largest) {
        largest = count;
      }
      count = 0;
    } else {
      count++;
    }
  }

  return largest;
}
