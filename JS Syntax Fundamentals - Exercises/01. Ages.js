
function ages(currentAge) {
  let baby = "baby";
  let child = "child";
  let teenager = "teenager";
  let adult = "adult";
  let elder = "elder";
  let final;

  if (0 <= currentAge && currentAge<= 2) {
    final = baby;
  } else if (3 <= currentAge && currentAge<= 13) {
    final = child;
  } else if (14 <= currentAge && currentAge <= 19) {
    final = teenager;
  } else if (20 <= currentAge && currentAge<= 65) {
    final = adult;
  } else if (currentAge >= 66) {
    final = elder;
  } else {
    final = "out of bounds";
  }
console.log(final);
}
ages(20);
ages(1);
ages(100);
ages(-1);


