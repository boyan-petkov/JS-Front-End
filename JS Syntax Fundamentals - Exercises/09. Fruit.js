


function fruits(fruitType, weight, pricePerKg){
    weight /= 1000;
    let moneyNeeded = (weight * pricePerKg).toFixed(2);
    console.log(`I need $${moneyNeeded} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`);
}
fruits('orange', 2500, 1.80)
fruits('apple', 1563, 2.35)
