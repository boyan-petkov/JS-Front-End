
// function simpleCalc(number1, number2, operator){
//     if (operator === '+'){
//         console.log(number1 + number2)
//     }
//     else if (operator === '-'){
//         console.log(number1 - number2)
//     }
//     else if (operator === '*'){
//         console.log(number1 * number2)
//     }
//     else if (operator === '/'){
//         console.log(number1 / number2)
//     }
//     else if (operator === '%'){
//         console.log(number1 % number2)
//     }
//     else if (operator === '**'){
//         console.log(number1 ** number2)
//     }
// }

function simpleCalc(firstNum, secondNum, operator) {
  let result;
  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "%":
      result = firstNum % secondNum;
      break;
    case "**":
      result = firstNum ** secondNum;
      break;
  }
  console.log(result);
}

simpleCalc(5, 6, "+");
