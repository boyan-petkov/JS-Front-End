
function solve(text, word) {
  let count = 0;
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++){
    if (words[i]=== word){
        count ++
    }
  }
  console.log(count)
}

solve('This is a word and it also is a sentence',
'is'
)
solve('softuni is great place for learning new programming languages',
'softuni'
)
