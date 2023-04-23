
function wordsTracker(input) {
  let searchedWords = input.shift().split(" ");
  let words = [];
  for (const word of searchedWords) {
    let filterInput = input.filter((w) => w === word);
    let count = filterInput.length;
    words.push({ word, count });
    let sortedWords = words.sort((word1, word2) => word2.count - word1.count);
  }
  for (const { word, count } of words) {
    console.log(`${word} - ${count}`);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
