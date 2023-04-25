
function piccolo(input) {
  let carsInParking = [];
  for (const carNumber of input) {
    let [cmd, regNumber] = carNumber.split(", ");
    if (cmd === "IN" && !carsInParking.includes(regNumber)) {
      carsInParking.push(regNumber);
    } else if (cmd === "OUT" && carsInParking.includes(regNumber)) {
      let index = carsInParking.indexOf(regNumber);
      carsInParking.splice(index, 1);
    }
  }
  let sortedCars = carsInParking.sort((numA, numB) => numA.localeCompare(numB));
  if (carsInParking.length > 0) {
    sortedCars.forEach((element) => {
      console.log(element);
    });
  } else {
    console.log("Parking Lot is Empty");
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
