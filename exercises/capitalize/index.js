// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // split array at spaces
  const arrayOfWords = str.split(' ');

  //iterate through all words
  //get the first character of every word and make it uppercase
  //slice off the rest of the word and concatenate the uppercase character and the rest of the word
  //return a new array with all first characters of every word in array uppercase
  //join array into one string with a space between each word
  return arrayOfWords
    .map(word => (word = word[0].toUpperCase() + word.slice(1)))
    .join(' ');
}

module.exports = capitalize;
