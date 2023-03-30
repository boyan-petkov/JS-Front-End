
function leapYear(currentYear) {
  let four = 4;
  let hundred = 100;
  let fourhunder = 400;

  if (
    (currentYear % four === 0 && currentYear % hundred !== 0) ||
    currentYear % fourhunder === 0
  ) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

leapYear(1984)
leapYear(2003)
leapYear(4)
