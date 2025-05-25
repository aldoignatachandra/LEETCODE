const assert = require("assert");

// Param & Return Constraint
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Solution
const strStr = (haystack, needle) => {
  return haystack.indexOf(needle);
};

// Testing Solution
const test1 = strStr("sadbutsad", "sad");
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 0);

const test2 = strStr("leetcode", "leeto");
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, -1);

const test3 = strStr("hello", "ll");
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, 2);

const test4 = strStr("aaaaa", "bba");
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, -1);

const test5 = strStr("mississippi", "issip");
console.log("result test5 => ", test5);
assert.deepStrictEqual(test5, 4);

console.log("All tests passed!");
