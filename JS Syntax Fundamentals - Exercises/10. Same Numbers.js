
function sameNumbers(number) {
  let condition = true;
  let sumNumber = 0;
  numberToString = number.toString().split("");
  let first = numberToString[0];
  numberToString.forEach((element) => {
    sumNumber += Number(element);
    if (first !== element) {
      condition = false;
    }
  });
  console.log(condition);
  console.log(sumNumber);
}

sameNumbers(2245);
sameNumbers(2222222);
sameNumbers(1234);
