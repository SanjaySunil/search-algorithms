/* eslint-disable no-undef */
import { assert } from 'chai';
import { binarySearch } from '../src/binarySearch';

describe('Binary Search', () => {
  it('Executes binary search and key is found in index 3.', () => {
    assert.equal(binarySearch([1, 2, 3, 4, 5], 4), 3);
  });
});

describe('Binary Search', () => {
  it('Executes binary search and key is not found. Returns -1.', () => {
    assert.equal(binarySearch([1, 2, 3, 4, 5], 6), -1);
  });
});