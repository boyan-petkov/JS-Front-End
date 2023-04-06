function arrayRotation(numbers, rotations) {
  let array = [];
  for (let i = 0; i < rotations; i++) {
    let currentFirst = numbers.shift();
    numbers.push(currentFirst);
  }
  console.log(`${numbers.join(" ")}`)
}


arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
