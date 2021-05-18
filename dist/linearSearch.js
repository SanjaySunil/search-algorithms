"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
};
exports.linearSearch = linearSearch;
//# sourceMappingURL=linearSearch.js.map