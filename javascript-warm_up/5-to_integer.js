#!/usr/bin/node
const args = process.argv;
const a = parseInt(args[2], 10);
if (isNaN(a)) {
  console.log("Not a number");
} else if (a) {
  console.log("My number :" + a);
} else {
  console.log("Not an number");
}
