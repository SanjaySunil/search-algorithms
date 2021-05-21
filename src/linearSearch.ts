export type linearSearch = (arr: number[], key: number) => number;
/**
 * @param {Array} arr - The array to search
 * @param {Number} key - The key to search for
 * @return {Number} - Returns index of where the key is located in the array.
 */
export const linearSearch : linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};
