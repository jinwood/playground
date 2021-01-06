const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Choose an option:");
console.log("-------------------");
console.log("1. Factory");
rl.question("", (input) => {
  console.log(`input is ${input}`);

  switch (input) {
    case 1:
      factory();
      break;
  }
});
