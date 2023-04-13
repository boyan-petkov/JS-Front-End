
function palindromeIntegers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i].toString();
    let currentReversed = current.split("").reverse().join("");
    if (current === currentReversed) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);
