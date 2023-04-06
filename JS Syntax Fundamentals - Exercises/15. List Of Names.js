function listOfNames(namesArray) {
  let sorted = [...namesArray].sort();
  for (let i = 0; i < sorted.length; i++) {
    console.log(`${i + 1}.${sorted[i]}`);
  }
}



function solve(input) {
    input.sort((a,b) => a.localeCompare(b));
    for(let i = 0; i < input.length;i++){
        console.log(`${i+1}.${input[i]}`);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
