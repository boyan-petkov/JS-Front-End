
function oddOccurrences(input) {
  let wordsAll = input.split(" ");
  let wordsLowercase = wordsAll.map((w) => w.toLowerCase());
  let condition = [];
  for (const word of wordsLowercase) {
    let copiedWords = [...wordsLowercase];
    let count = 0;
    for (const currentWord of copiedWords) {
      if (word === currentWord) {
        count++;
      }
    }
    if ((count % 2 === 1) & !condition.includes(word)) {
      condition.push(word);
    }
  }
  console.log(condition.join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
