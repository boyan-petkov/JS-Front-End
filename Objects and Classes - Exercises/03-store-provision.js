
function storeStock(array1, array2) {
  let combined = [...array1, ...array2];
  let final = {};
  for (let i = 0; i < combined.length; i += 2) {
    let [product, quantity] = [combined[i], combined[i + 1]];
    if (!final.hasOwnProperty(product)) {
      final[product] = Number(quantity);
    } else {
      final[product] += Number(quantity);
    }
  }
  for (const currentProduct in final) {
    console.log(`${currentProduct} -> ${final[currentProduct]}`);
  }
}

storeStock(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
