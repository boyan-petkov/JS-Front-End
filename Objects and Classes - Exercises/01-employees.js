    
function employeesParser(input) {
  for (const name of input) {
    console.log(`Name: ${name} -- Personal Number: ${name.length}`);
  }
}

employeesParser([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
