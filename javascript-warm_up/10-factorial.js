#!/usr/bin/node
const args = process.argv;
const a = parseInt(args[2], 10);
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  return n * factorial(n - 1);
}

if (isNaN(a)) {
  console.log("1");
} else {
  console.log(factorial(a));
}
