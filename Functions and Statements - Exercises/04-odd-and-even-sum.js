
function oddEvenSum(number) {
  let numToString = number.toString();
  let oddSum = 0;
  let evenSum = 0;

//   for (let index = 0; index < numToString.length; index++) {
//     current = numToString[index];
//     if (Number(current) % 2 === 0) {
//       evenSum += Number(current);
//     } else {
//       oddSum += Number(current);
//     }
//   }
  for( char of numToString){
    if (Number(char) % 2 === 0) {
        evenSum += Number(char);
      } else {
        oddSum += Number(char);
      }
  }
  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}



console.log(oddEvenSum(1000435));
console.log(oddEvenSum(3495892137259234));
