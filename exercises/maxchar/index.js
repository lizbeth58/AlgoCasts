// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = '';
  const map = new Map();

  let max = 0;
  let index;

  charArr = str.split('');

  charArr.forEach(element => {
    if (map.has(element)) {
      let count = map.get(element);
      count++;
      map.set(element, count);
    } else {
      map.set(element, 1);
    }
  });

  for (let [key, value] of map.entries()) {
    if (value > max) {
      max = value;
      index = key;
    }
  }

  return index;
}

module.exports = maxChar;
