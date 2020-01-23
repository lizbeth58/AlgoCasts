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
  for (let i = 0; i < n; i++) {
    //this loops will move the printer vertically
    for (let j = 0; j < n; j++) {
      //this loop will move the printer horizontally
      if (j <= i) {
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
