function cookingByNumbers(numberAsStr, ...operations) {
  number = Number(numberAsStr);

  operations.forEach((operator) => {
    switch (operator) {
      case "chop":
        number /= 2;
        break;
      case "dice":
        number = Math.sqrt(number);
        break;
      case "spice":
        number++;
        break;
      case "bake":
        number *= 3;
        break;
      case "fillet":
        number -= number * 0.2;
        break;
    }
    console.log(number);
  });
}
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
