
function sumDigits(number) {
  let numberAsString = number.toString();
  let resultSum = 0;
  for (let i = 0; i < numberAsString.length; i++) {
    resultSum += parseInt(numberAsString[i]);
  }
  console.log(resultSum);
}



sumDigits(245678);
sumDigits(97561);
sumDigits(543);
