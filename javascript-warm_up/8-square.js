#!/usr/bin/node
const args = process.argv;
const a = parseInt(args[2], 10);
const myvar = "X";
if (isNaN(a)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < a; i++) {
    console.log(myvar);
  }
}
