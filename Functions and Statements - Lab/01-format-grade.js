
function formatGrade(grade) {
  let msg;

  if (grade < 3) {
    msg = "Fail";
  } else if (grade >= 3 && grade < 3.5) {
    msg = "Poor";
  } else if (grade >= 3.5 && grade < 4.5) {
    msg = "Good";
  } else if (grade >= 4.5 && grade < 5.5) {
    msg = "Very good";
  } else {
    msg = "Excellent";
  }
  if (grade < 3) {
    console.log(`${msg} (2)`);
  } else {
    console.log(`${msg} (${grade.toFixed(2)})`);
  }
}

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
