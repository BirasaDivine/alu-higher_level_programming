#!/usr/bin/node
const args = process.argv;
const a = parseInt(args[2], 10);
const myvar = 'C is fun';
if (isNaN(a)) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < a; i++) {
    console.log(myvar);
  }
}
