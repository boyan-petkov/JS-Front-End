
function orders(product, quantity) {
  let finalPrice = 0;
  switch (product) {
    case "coffee":
      finalPrice = 1.5 * quantity;
      break;
    case "water":
      finalPrice = 1.0 * quantity;
      break;
    case "coke":
      finalPrice = 1.4 * quantity;
      break;
    case "snacks":
      finalPrice = 2 * quantity;
      break;
  }
  return (finalPrice.toFixed(2))
}

console.log(
    orders('water', 5)
)
