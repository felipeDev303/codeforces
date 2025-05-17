const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let numberOfWordsToProcess = 0;
let wordsProcessedCount = 0;
let isFirstLine = true;

function abbreviateWord(word) {
  if (word.length > 10) {
    const firstChar = word[0];
    const lastChar = word[word.length - 1];
    const middleCount = word.length - 2;

    return `${firstChar}${middleCount}${lastChar}`;
  } else {
    return word;
  }
}

rl.on("line", (line) => {
  if (isFirstLine) {
    numberOfWordsToProcess = parseInt(line);
    isFirstLine = false;
  } else {
    const originalWord = line.trim();
    const resultWord = abbreviateWord(originalWord);
    console.log(resultWord);

    wordsProcessedCount++;
    if (wordsProcessedCount === numberOfWordsToProcess) {
      rl.close();
    }
  }
});
