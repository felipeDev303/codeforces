const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  const w = parseInt(line);

  if (w % 2 === 0 && w > 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }

  rl.close();
});
