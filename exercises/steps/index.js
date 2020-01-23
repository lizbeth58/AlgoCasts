// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // create a new string variable to build;
  let str = '';

  //iterate from 0 to N for both loops
  for (let row = 0; row < n; row++) {
    //this loops will move the printer vertically
    for (let col = 0; col < n; col++) {
      //this loop will move the printer horizontally
      if (col <= row) {
        //print # horizontally for the number of the steps we are in vertically
        str += '#';
      } else {
        // print ' ' for the number of steps left;
        str += ' ';
      }
    }
    console.log(str); // print the current string
    str = ''; // reset the string
  }
}

module.exports = steps;
