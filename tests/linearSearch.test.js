/* eslint-disable no-undef */
const assert = require('assert');
const linearSearch = require('../src/linearSearch');

describe('Linear Search', () => {
  it('Executes linear search and key is found in index 3.', () => {
    assert.equal(linearSearch([1, 2, 3, 4, 5], 4), 3);
  });
});

describe('Linear Search', () => {
  it('Executes linear search and key is not found. Returns -1.', () => {
    assert.equal(linearSearch([1, 2, 3, 4, 5], 6), -1);
  });
});
