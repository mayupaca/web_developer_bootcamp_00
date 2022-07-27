// let random = Math.random();
// if (random < 0.5) {
//   console.log("数字は0.5より小さい!");
//   console.log(random);
// }

// if (random >= 0.5) {
//   console.log("数字は0.5以上");
//   console.log(random);
// }

// const dayOfWeek = 'Monday';
// if (dayOfWeek === 'Monday') {
//     console.log('Start working!!');
// }

const password = prompt("put your password");

if (password.length >= 6) {
  console.log("its long enough");
} else {
  console.log("its not long enough. more then 6 characters");
}
