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
  //FROM 1 TO N lOOP
  for (let i = 1; i <= n; i++) {
    //Multiiple of 3 AND 5
    if (i % 3 === 0 && i % 5 === 0 /* i % 15 === 0 */) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      //Multiple of 5
      console.log('buzz');
    } else if (i % 3 === 0) {
      //Multiple of 3
      console.log('fizz');
    } else {
      console.log(i); //other
    }
  }
}

module.exports = fizzBuzz;
