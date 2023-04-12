
function charsInRange(char1, char2) {
  let chars = [];
  let char1Num = char1.charCodeAt();
  let char2Num = char2.charCodeAt();
  let start;
  let end;
  if (char1Num < char2Num) {
    start = char1Num;
    end = char2Num;
  } else {
    start = char2Num;
    end = char1Num;
  }
  for (let i = start + 1; i < end; i++) {
    chars.push(String.fromCharCode(i));
  }
  return chars.join(" ");
}


console.log(charsInRange("a", "d"));
console.log(charsInRange("#", ":"));
console.log(charsInRange("C", "#"));
