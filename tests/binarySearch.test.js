const assert = require('assert');
const binarySearch = require('../binarySearch');

describe('Binary Search', function() {
  it('Executes binary search and key is found in index 3.', function() {
    assert.equal(binarySearch([1,2,3,4,5], 4), 3)
  })
})

describe('Binary Search', function() {
  it('Executes binary search and key is not found. Returns -1.', function() {
    assert.equal(binarySearch([1,2,3,4,5], 6), -1)
  })
})