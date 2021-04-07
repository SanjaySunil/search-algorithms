/**
 * Binary Search Algorithm
 * @param {Array} arr - The array to search
 * @param {Number} key - The key to search for
 * @returns {Number} - Returns index of where key is located in the array.
 * Returns -1 if key was not found.
 */

function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === key) {
      // Key is found.
      return middle;
    } if (arr[middle] < key) {
      // Continue searching to the right.
      start = middle + 1;
    } else {
      // Continue searching to the left.
      end = middle - 1;
    }
  }
  // Key was not found.
  return -1;
}

module.exports = binarySearch;
