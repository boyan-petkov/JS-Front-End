
function ticketPrice(day, age) {
  let weekday18 = 12;
  let weekday64 = 18;
  let weekday122 = 12;
  let weekend18 = 15;
  let weekend64 = 20;
  let weekend122 = 15;
  let holiday18 = 5;
  let holiday64 = 12;
  let holiday122 = 10;
  let price;
  if (0 <= age && age <= 18) {
    if (day === "Weekday") {
      price = weekday18;
    } else if (day === "Weekend") {
      price = weekend18;
    } else if (day === "Holiday") {
      price = holiday18;
    }
  } else if (18 <= age && age <= 64) {
    if (day === "Weekday") {
      price = weekday64;
    } else if (day === "Weekend") {
      price = weekend64;
    } else if (day === "Holiday") {
      price = holiday64;
    }
  } else if (64 <= age && age <= 122) {
    if (day === "Weekday") {
      price = weekday122;
    } else if (day === "Weekend") {
      price = weekend122;
    } else if (day === "Holiday") {
      price = holiday122;
    }
  }
  else{
    price = 'Error!'
  }
  if (price !== 'Error!'){
    console.log(`${price}$`)
  }
  else{
    console.log(price)
  }
}

ticketPrice("Weekday", 42);
ticketPrice("Holiday", -12);
ticketPrice("Holiday", 15);

