
function vacationPrice(peopleNumber, peopleType, day) {
  let price;
  switch (peopleType) {
    case "Students":
      if (day === "Friday") {
        price = 8.45 * peopleNumber;
      } else if (day === "Saturday") {
        price = 9.8 * peopleNumber;
      } else {
        price = 10.46 * peopleNumber;
      }
      if (peopleNumber >= 30) {
        price -= price * 0.15;
      }
      break;
    case "Business":
      if (peopleNumber >= 100) {
        peopleNumber -= 10;
      }
      if (day === "Friday") {
        price = 10.9 * peopleNumber;
      } else if (day === "Saturday") {
        price = 15.6 * peopleNumber;
      } else {
        price = 16 * peopleNumber;
      }
      break;
    case "Regular":
      if (day === "Friday") {
        price = 15 * peopleNumber;
      } else if (day === "Saturday") {
        price = 20 * peopleNumber;
      } else {
        price = 22.5 * peopleNumber;
      }
      if (peopleNumber >= 10 && peopleNumber <= 20) {
        price -= price * 0.05;
      }
      break;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacationPrice(30, "Students", "Sunday");
vacationPrice(40, "Regular", "Saturday");
vacationPrice(30, "Students", "Sunday");




