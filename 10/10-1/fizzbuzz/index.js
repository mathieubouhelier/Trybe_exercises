// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
for (let index = 1; index <=n; index++) {
  let toPrint = index;
  if (index % 3 === 0 && index % 5 === 0) toPrint = "fizzbuzz";
  if (index % 3 === 0 && index % 5 !== 0) toPrint = "fizz";
  if (index % 5 === 0 && index % 3 !== 0) toPrint = "buzz";
  console.log(toPrint);
}
}
// console.log(fizzBuzz(15));
module.exports = fizzBuzz
