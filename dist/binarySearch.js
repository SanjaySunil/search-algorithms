"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
const binarySearch = (arr, key) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        if (arr[middle] === key) {
            return middle;
        }
        if (arr[middle] < key) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    return -1;
};
exports.binarySearch = binarySearch;
//# sourceMappingURL=binarySearch.js.map