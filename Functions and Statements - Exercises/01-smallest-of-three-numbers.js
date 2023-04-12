
function smallestOfThree(first, second, third) {
  let smallest = first;
  if (second < smallest) {
    smallest = second;
  }
  if (third < smallest) {
    smallest = third;
  }
  return smallest;
}

console.log(smallestOfThree(2, 5, 3));
console.log(smallestOfThree(600, 342, 123));
console.log(smallestOfThree(25, 21, 4));
console.log(smallestOfThree(2, 2, 2));
