/**
 * Binary Search Algorithm
 * @param {Array} arr - The array to search
 * @param {Number} key - The key to target
 * @return {Number} - Index where the key was found
 */

function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === key) {
      // Key is found.
      return middle;
    } else if (arr[middle] < key) {
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
