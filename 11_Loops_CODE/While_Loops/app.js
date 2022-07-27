let maximum = parseInt(prompt("Input some numbers : "));
while (!maximum) {
  maximum = parseInt(prompt("Error!! Please input some numbers"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Decided a number. Please guess the number:)");
let count = 1;
while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  count++;
  if (guess > targetNum) {
    guess = prompt("Smaller number. Please guess again!!");
  } else {
    guess = prompt("Bigger number. Please guess again!!");
  }
}
if (guess === "q") {
  console.log("Finish");
} else {
  console.log(`Congratulation!! ${count}`);
  
}
