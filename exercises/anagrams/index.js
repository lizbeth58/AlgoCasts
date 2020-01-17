// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // function to make a map from a string
  makeMap = string => {
    // create a new map
    const map = new Map();

    // turn strings into character arrays
    const characterArray = string.split('');

    // temp variable
    let value = 0;

    // loop through character array
    characterArray.forEach(element => {
      // if the map has the character already (seen before)
      if (map.has(element)) {
        // get the value of that key (times seen)
        value = map.get(element);

        // increment it (saw it once more)
        value++;

        // put it back in the map
        map.set(element, value);
      } else {
        // if the key doesn't exist (first encounter), add it to the map
        map.set(element, 1);
      }
    });

    // return the map
    return map;
  };

  // function to compare maps (shallow)
  compareMaps = (mapA, mapB) => {
    // if the maps are different size then they are not the same
    if (mapA.size !== mapB.size) {
      return false;
    }

    // if they maps are the same size then we check the key,value pairs.
    // Both maps must have same keys, and same values for keys
    for (let [key, value] of mapA.entries()) {
      // get the value of mapB and the value of mapA for the key of mapA
      let valueB = mapB.get(key);

      // if the value is undefined, MapB does not have the same keys as mapA, unequal maps
      if (valueB === undefined) {
        return false;
      } else if (value !== valueB) {
        // if the keys are the same, but the values are different, unequal maps
        return false;
      }
    }

    // otherwise both maps are the same
    return true;
  };

  // make Maps from strings
  const characterMapA = makeMap(stringA);
  const characterMapB = makeMap(stringB);
  // compare maps
  return compareMaps(characterMapA, characterMapB);
}

module.exports = anagrams;
