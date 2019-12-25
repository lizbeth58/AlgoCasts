// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = 0;
  let map = {};

  for (char of str) {
    if (map[char].notExist) {
      map[char] = 1;
    } else {
      map[char] += map[char]++;
    }
  }

  for (key of map) {
    maxChar = map[key];
    if (map[key] > maxChar) {
      maxChar = map[key];
    }
  }

  return maxChar;
}

module.exports = maxChar;
