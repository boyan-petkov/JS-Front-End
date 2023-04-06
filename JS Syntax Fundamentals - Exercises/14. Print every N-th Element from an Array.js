function everyNthElement(numbers, step) {
  let finalArray = [];
  for (let i = 0; i < numbers.length; i += step) {
    finalArray.push(numbers[i]);
  }
  console.log(`${finalArray.join('\n')}`);
}

everyNthElement(["5", "20", "31", "4", "20"], 2);
everyNthElement(["dsa", "asd", "test", "tset"], 2);
everyNthElement(["1", "2", "3", "4", "5"], 6);
