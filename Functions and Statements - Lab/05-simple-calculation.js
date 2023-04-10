
function simpleCalc(num1, num2, operator) {
  const add = (a, b) => a + b;
  const divide = (a, b) => a / b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  let finalResult;
  switch (operator) {
    case "add":
      finalResult = add(num1, num2);
      break;
    case "divide":
      finalResult = divide(num1, num2);
      break;
    case "subtract":
      finalResult = subtract(num1, num2);
      break;
    case "multiply":
      finalResult = multiply(num1, num2);
      break;

    default:
        finalResult = 'Not valid operations'
      break;
  }
  return finalResult
}

console.log(simpleCalc(50,
    13,
    'subtract'
    ))
