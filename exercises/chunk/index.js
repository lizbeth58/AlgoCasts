// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // Create new array
  const newArr = [];

  //Solution 1, Using SPLICE built in functions

  //calcualte number of iterations by dividing by chunk size
  //take the cieling incase of odd number
  const length = Math.ceil(array.length / size);

  for (let i = 0; i < length; i++) {
    //splice from the beginning to chunk size and push to new array. splice was used because it modifies the original array.
    newArr.push(array.splice(0, size));
  }

  //Solution 2, using SLICE bult in function

  /*let index = 0;

  while (index < array.length) {
    newArr.push(array.slice(index, index + size));
    index += size;
  }*/

  /*
  //Solution 3
  
  for (let element of array) {
    const last = newArr[newArr.length - 1];

    if (!last || last.length === size) {
      newArr.push([element]);
    } else {
      last.push(element);
    }
  }*/

  return newArr;
}

module.exports = chunk;
