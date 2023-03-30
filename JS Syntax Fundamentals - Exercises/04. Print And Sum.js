
function printAndSum(start, end) {
  let allNumbers = [];
  let resultSum = 0;
  for (let num = start; num <= end; num++) {
    allNumbers.push(num);
    resultSum += num;
  }
  console.log(`${allNumbers.join(" ")}`);
  console.log(`Sum: ${resultSum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
