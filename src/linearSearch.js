/**
 * Linear Search Algorithm
 * @param {Array} arr - The array to search
 * @param {Number} key - The key to search for
 * @returns {Number} - Returns index of where key is located in the array.
 * Returns -1 if key was not found.
 */

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

module.exports = linearSearch;
