// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //Using JS object
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  /* USING MAP OBJECT
  //use a hash table to keep count find the highest value and return the key
  let maxChar = '';
  let maxValue = 0;

  //create map object [key,value]
  const map = new Map();

  //split string into character array
  charArr = str.split('');

  //loop through character array
  charArr.forEach(element => {
    //if the map already contains the character
    if (map.has(element)) {
      //get the value for the character and add one then set it back
      let count = map.get(element);
      count++;
      map.set(element, count);
    } else {
      //add the character at value 1 to the map
      map.set(element, 1);
    }
  });

  //loop through the map in {[key,values]}
  for (let [key, value] of map.entries()) {
    //find the max and save the character key
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }*/

  return maxChar;
}

module.exports = maxChar;
