
function sum(first, second, third) {
  let final;
  let result = first + second;
  subtract(result, third);
  function subtract(result, third) {
    final = result - third;
  }
  return final;
}

console.log(sum(23, 6, 10));
console.log(sum(1, 17, 30));
console.log(sum(42, 58, 100));
